require('dotenv').config()
const { Client, ActivityType } = require('discord.js')

const client = new Client()

client.on('ready', (clientReady) => {
    clientReady.user.setPresence({
        afk: true,
        status: 'idle',
        activities: [
            {
                name: '⚒️ Developing ⚒️',
                type: ActivityType.Watching
            }
        ]
    })
})

client.login(process.env.token)