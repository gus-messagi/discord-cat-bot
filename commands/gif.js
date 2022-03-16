const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'gif',
  description: 'Envia gif de gatinho',
  execute(message, args) {
    axios
      .get(`${process.env.THECAT_API_URL}?&size=full&mime_types=gif&limit=1`, {
        headers: {
          'x-api-key': process.env.THECAT_API_TOKEN
        }
      }).then(({ data }) => {
        const embed = new MessageEmbed().setImage(data[0].url)

        message.channel.send({ embeds: [embed] })
      }) 
  }
}