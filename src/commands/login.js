const {Command, flags} = require('@oclif/command')

class LoginCommand extends Command {
  async run() {
    const {flags} = this.parse(LoginCommand)
    const login = flags.login || 'world'
    this.log(`hello ${login} from /Users/dalong/mylearning/oclif-project/rong/src/commands/login.js`)
  }
}

LoginCommand.description = `Describe the command here
...
Extra documentation goes here
`

LoginCommand.flags = {
  login: flags.string({char: 'l', description: 'name to print'}),
}

module.exports = LoginCommand
