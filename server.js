import Fastify from 'fastify'
import {cardRoutes} from './routes/cards.js'

const fastify = Fastify({
	logger: true
})

fastify.register(cardRoutes)

const PORT = process.env.PORT || 3000

fastify.listen(PORT, function (err, address){
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
})
