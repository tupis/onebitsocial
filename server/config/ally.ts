import Env from '@ioc:Adonis/Core/Env'
import { AllyConfig } from '@ioc:Adonis/Addons/Ally'

const allyConfig: AllyConfig = {
  github: {
    driver: 'github',
    clientId: Env.get('GITHUB_CLIENT_ID'),
    clientSecret: Env.get('GITHUB_CLIENT_SECRET'),
    callbackUrl: 'http://localhost:3333/github/callback',
  },
}

export default allyConfig
