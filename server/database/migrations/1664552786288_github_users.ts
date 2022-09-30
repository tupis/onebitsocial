import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'github_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').unique()
      table.string('username')
      table.string('email')
      table.string('avatar_url')
      table.string('token')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
