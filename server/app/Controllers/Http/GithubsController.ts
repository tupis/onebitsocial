import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GithubsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('github').redirect((redirectRequest) => {
      redirectRequest.scopes(['user:email', 'user'])
    })
  }

  public async callback({ ally }: HttpContextContract) {
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

    return user
  }
}
