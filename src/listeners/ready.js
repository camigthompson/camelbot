// CamelBot - ready.js
// Camila Thompson

const { Listener } = require('@sapphire/framework');

class ReadyListener extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            once: true,
            event: 'ready'
        });
    }

    run(client) {
        const { username, id } = client.user;
        console.log(`Successfully logged in as ${username} (${id})`);
    }

}

module.exports = {
    ReadyListener
};
