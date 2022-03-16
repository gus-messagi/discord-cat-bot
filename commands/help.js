module.exports = {
  name: 'help',
  description: 'comandos',
  execute(message) {
    message.channel.send(`
      !! Comandos !! 
      \n $cat -> Envia imagem de gatinho 
      \n !! Parametros !! 
      \n -T -> Tipo de imagem que deseja 
      \n Exemplo: $cat -T gif -> Enviará um gif de gatinho
    `)
  }
}