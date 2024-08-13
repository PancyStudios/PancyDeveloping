require('dotenv').config()
const { Client, ActivityType, IntentsBitField } = require('discord.js')
const express = require('express')
const app = express()

app.all('/', (_req, res) => {
    res.send('En desarollo').status(200)
})

app.listen(3021, () => {
    console.log('Escuchando el puerto 3021')
})

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds
    ]
})

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
