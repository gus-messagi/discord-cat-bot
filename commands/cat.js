const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'cat',
  description: 'Envia foto de gatinho',
  execute(message, args) {
    axios
      .get(`${process.env.THECAT_API_URL}?&size=full&mime_types=${args[1] || 'jpg'}&limit=1`, {
        headers: {
          'x-api-key': process.env.THECAT_API_TOKEN
        }
      }).then(({ data }) => {
        const embed = new MessageEmbed().setImage(data[0].url)

        message.channel.send({ embeds: [embed] })
      }) 
  }
}