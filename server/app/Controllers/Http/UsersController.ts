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

  public async update({ request, params }: HttpContextContract) {
    const body = request.body()

    const updateUser = await User.findOrFail(params.id)

    updateUser.name = body.name
    updateUser.username = body.username
    updateUser.email = body.email
    updateUser.password = body.password

    await updateUser.save()

    return updateUser
  }

  public async delete({ params }: HttpContextContract) {
    const deleteUser = await User.findOrFail(params.id)

    deleteUser.delete()

    return deleteUser
  }
}
