const {Command, flags} = require('@oclif/command')
const notifier =require("node-notifier")
class ListCommand extends Command {
  async run() {
    const {flags} = this.parse(ListCommand)
    this.log(`list all `)
    notifier.notify({
      title: 'My notification',
      message: JSON.stringify(this.config)
    })
  }
}

ListCommand.description = `Describe the command here
...
Extra documentation goes here

config list
`

module.exports = ListCommand
