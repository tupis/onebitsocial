import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('', 'UsersController.index').as('show.all.users')
    Route.get('/:id', 'UsersController.show').as('show.user')
    Route.route('/:id', ['PUT', 'PATCH'], 'UsersController.update').as('update.user')
    Route.delete('/:id', 'UsersController.delete').as('delete.user')
  }).prefix('/users')

  Route.group(() => {
    Route.post('/register', 'AuthController.register').as('user.register')
    Route.post('/login', 'AuthController.login').as('user.login')
    Route.get('/login', 'AuthController.login').as('user.login.teste')
    Route.get('/validator', 'AuthController.validator').as('user.validator')
    Route.post('/logout', 'AuthController.logout').as('user.logout')
  }).prefix('/user')
})

Route.group(() => {
  Route.get('/redirect', 'GithubsController.redirect').as('github.redirect')
  Route.get('/callback', 'GithubsController.callback').as('github.callback')
  Route.get('/users', 'GithubsController.index').as('github.users')
  Route.get('/user/:id', 'GithubsController.index').as('github.user')
}).prefix('/github')
