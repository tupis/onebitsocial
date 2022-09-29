import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const userSchema = schema.create({
      name: schema.string({}, [rules.maxLength(50)]),
      username: schema.string({ trim: true }, [
        rules.unique({ table: 'users', column: 'username', caseInsensitive: true }),
        rules.maxLength(30),
      ]),
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
        rules.maxLength(255),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
    })

    const data = await request.validate({ schema: userSchema })

    const user = await User.create(data)

    response.status(201)

    return user
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(username, password, {
        expiresIn: '7 days',
      })
      return token
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async validator({ auth }: HttpContextContract) {
    await auth.use('api').authenticate()

    return {
      auth: true,
      id: auth.user!.id,
    }
  }

  public async logout() {}
}
