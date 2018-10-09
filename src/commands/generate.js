const {Command, flags} = require('@oclif/command')

class GenerateCommand extends Command {
  async run() {
    const {flags} = this.parse(GenerateCommand)
    const generate = flags.generate || 'world'
    this.log(`from ${name} from /Users/dalong/mylearning/oclif-project/rong/src/commands/generate.js`)
  }
}

GenerateCommand.description = `Describe the command here
...
Extra documentation goes here
`

GenerateCommand.flags = {
  generate: flags.string({char: 'g', description: 'name to print'}),
}

module.exports = GenerateCommand
