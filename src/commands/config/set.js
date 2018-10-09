const {Command, flags} = require('@oclif/command')

class SetCommand extends Command {
  async run() {
    const {flags} = this.parse(SetCommand)
    const name = flags.name || 'dalong'
    this.log(`set  username ${name} `)
  }
}

SetCommand.description = `Describe the command here
...
Extra documentation goes here

set username list
`
SetCommand.flags = {
  name: flags.string({char: 'n', description: 'set username'}),
}

module.exports = SetCommand
