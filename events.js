const events = require('events')

const eventEmitter = new events.EventEmitter()

const EventHandler = () => {
    console.log('I heard noise')
}

eventEmitter.on('make noise', EventHandler)

eventEmitter.emit('make noise')


