import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'AuthController.register').as('user.register')
  Route.post('/login', 'AuthController.login').as('user.login')
  Route.get('/validator', 'AuthController.validator').as('user.validator')
  Route.post('/logout', 'AuthController.logout').as('user.logout')
}).prefix('/user')
