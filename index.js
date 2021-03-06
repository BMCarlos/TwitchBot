const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

    const options = {
        options: { debug: true},
        connection: {
            reconnect: true,
            secure: true
        },
        identity : {
            username,
            password
        },
        channels: [channel]
    };

    const client = new tmi.Client(options);
    client.connect().catch(console.error);
    
    client.on('connected', () => {
        client.say(channel, 'MrDestructoid Online ');
    });


    client.on('message', (channel, user, message, self) => {
        if(self) return;

        if(message == '!hello') {
            client.say(channel, `@${user.username}, hello!`);
        }
        
        if(message ==  '!poggers') {
            client.say(channel, `nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS 
            nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS nmpPOGGERS `);
        }
        if(message ==  '!nuggies') {
            client.say(channel, `nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies 
            nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies nmpNuggies `);
        }
        if(message ==  '!trueing') {
            client.say(channel, `TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING 
            TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING TRUEING `);
        }
        if(message ==  '!jammies') {
            client.say(channel, `Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies 
            Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies `);
        }
        if(message == '!bye') {
            client.say(channel, 'Bye Chat');
            client.part(channel,);
        }
    });