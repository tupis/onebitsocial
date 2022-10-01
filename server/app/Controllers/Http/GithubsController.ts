import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GithubUser from 'App/Models/GithubUser'
import Env from '@ioc:Adonis/Core/Env'

export default class GithubsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('github').redirect((redirectRequest) => {
      redirectRequest.scopes(['user:email', 'user'])
    })
  }

  public async callback({ ally, response }: HttpContextContract) {
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
      id: user.id,
      username: user.original.login,
      email: user.email,
      avatar_url: user.avatarUrl,
      token: user.token.token,
    }

    try {
      const githubUser = await GithubUser.create(userData)

      console.log('Salvo')
      return response.redirect(`${Env.get('FRONTEND_URL')}/?Auth=${userData.id}`)
    } catch (error) {
      const githubUser = await GithubUser.findOrFail(user.id)

      githubUser.username = userData.username
      githubUser.email = userData.email
      githubUser.avatar_url = userData.avatar_url
      githubUser.token = userData.token

      await githubUser.save()

      console.log('Atualizado')
      return response.redirect(`${Env.get('FRONTEND_URL')}/redirect?Auth=${userData.id}`)
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
