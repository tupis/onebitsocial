import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()

    if (users.length > 0) {
      return response.status(200).send(users)
    }

    return response.status(404).send('No users found')
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (user) {
      return user
    }
    return response.status(404).send('No user found')
  }

  public async update({ response, request, params }: HttpContextContract) {
    const body = request.body()

    const updateUser = await User.findOrFail(params.id)

    updateUser.name = body.name
    updateUser.username = body.username
    updateUser.email = body.email
    updateUser.password = body.password

    await updateUser.save()

    return response.status(200).send(updateUser)
  }

  public async delete({ response, params }: HttpContextContract) {
    const deleteUser = await User.findOrFail(params.id)

    deleteUser.delete()

    return response.status(200).send(deleteUser)
  }
}
