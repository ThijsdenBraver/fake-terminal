/* global Terminal */
/**
* Instance of Terminal
*/
var commands = {}
var state = {}

commands.help = function() {
  var output = "<div>" +
    "<p><strong>Fake Terminal</strong> is a thing that looks like a terminal but it does not do anything for real. Ideal for </p>" +
    "<p>easter eggs, boss screens, April Fool's jokes, and more. Currently this does not do a whole lot but</p>" +
    "<p>with your help we can make this the best fake terminal in the world. Join the project or remix this</p>" +
    "<p>on Glitch: <a href=\"https://glitch.com/edit/#!/fake-terminal\" target=\"_blank\">https://glitch.com/edit/#!/fake-terminal</a></p>" +
    "<p>&nbsp;</p>" +
    "<p>Here are the currently available commands:</p>" +
    "<ul>" +
    "<li><strong>help</strong> - display this help.</li>" +
    "<li><strong>echo &lt;string&gt</strong> - write arguments to the standard output</li>" +
    "<li><strong>exit</strong> - kill terminal process</li>" +
    "</ul></div>"
  return output
}

commands.echo = function (args) {
  args.shift()
  return args.join(' ')
}

/**
 * Doom emulator
 */
commands.iddqd = function () {
  if (!state.iddqd) {
    state.iddqd = true
    return 'Degreelessness mode on'
  } else {
    state.iddqd = false
    return 'Degreelessness mode off'
  }
}

/**
 * Zork emulator
 */
commands.look = function (args) {
  if (args.length <= 1) {
    return 'You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.<br><br>'
  } else {
    return 'I don\'t know the word "' + args[1] + '".<br><br>'
  }
}

commands.exit = function (args) {
  Terminal.exit()
  console.log('[Process completed]')
}

function initTerminal() {
  console.log('Terminal access granted.')

  Terminal.init('terminal', {
    commands: commands,
    prompt: 'root@' + window.location.hostname + ' &sim; ',
    intro: '<p>Welcome to Fake Terminal. Type \'help\' to get started.</p><p>&nbsp;</p>'
  })
}
