const {Command, flags} = require('@oclif/command')
const notifier =require("node-notifier")
class ListCommand extends Command {
  async run() {
    const {flags} = this.parse(ListCommand)
    this.log(`list all `)
    this.log(JSON.stringify(this.config))
    notifier.notify({
      title: 'My notification',
      message: JSON.stringify(this.config)
    })
  }
}

ListCommand.description = `Describe the command here
...
显示系统全部配置信息
config list
`

module.exports = ListCommand
