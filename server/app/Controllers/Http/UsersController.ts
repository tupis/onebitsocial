import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    const users = await User.all()

    return users
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.find(params.id)

    if (user) {
      return user
    }
    return 'Not found user'
  }

  public async update() {}

  public async delete() {}
}
