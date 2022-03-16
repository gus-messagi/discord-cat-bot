module.exports = {
  name: 'help',
  description: 'comandos',
  execute(message) {
    message.channel.send(`
      !! Comandos !! 
      \n $cat -> Envia foto de gatinho
      \n $gif -> Envia gif de gatinho
    `)
  }
}