import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GithubUser from 'App/Models/GithubUser'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

export default class GithubsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('github').redirect((redirectRequest) => {
      redirectRequest.scopes(['user:email', 'user'])
    })
  }

  public async callback({ ally, response, auth }: HttpContextContract) {
    const github = ally.use('github')

    if (github.accessDenied()) {
      return 'Access was denied'
    }

    if (github.stateMisMatch()) {
      return 'Request expired. Retry again'
    }

    if (github.hasError()) {
      return github.getError()
    }

    const user = await github.user()

    const userData = {
      github_id: user.id,
      name: user.name,
      username: user.original.login,
      email: user.email,
      avatar_url: user.avatarUrl,
      password: user.token.token,
      github_auth: user.token.token,
    }
    try {
      await User.create(userData)
      const updateUser = await User.findByOrFail('github_id', userData.github_id)

      updateUser.username = user.original.name
      updateUser.password = user.token.token

      await updateUser.save()
      const uid = user.original.name
      const password = user.token.token

      try {
        const token = await auth.use('api').attempt(uid, password, {
          expiresIn: '7 days',
        })
        return response.redirect(
          `http://${Env.get('FRONTEND_URL')}/redirect?callback=${token.token}`
        )
      } catch (error) {
        console.log(error)
        return response.unauthorized('Invalid credentials')
      }
    } catch (error) {
      const updateUser = await User.findByOrFail('github_id', userData.github_id)

      updateUser.username = user.original.name
      updateUser.password = user.token.token

      await updateUser.save()
      const uid = user.original.name
      const password = user.token.token

      try {
        const token = await auth.use('api').attempt(uid, password, {
          expiresIn: '7 days',
        })
        return response.redirect(
          `http://${Env.get('FRONTEND_URL')}/redirect?callback=${token.token}`
        )
      } catch (error) {
        console.log(error)
        return response.unauthorized('Invalid credentials')
      }
    }
  }

  public async index({ response }: HttpContextContract) {
    const users = await GithubUser.all()

    return response.status(200).json(users)
  }

  public async show({ response, params }: HttpContextContract) {
    const user = await GithubUser.find(params.id)

    return response.status(200).json(user)
  }
}
