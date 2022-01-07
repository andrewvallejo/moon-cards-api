import Fastify from 'fastify'
import { cards } from './cards.js'

const fastify = Fastify({
	logger: true
})

const PORT = process.env.PORT || 3000

fastify.get('/cards', async (request, reply) => {
	await reply.send(cards)
})

fastify.listen(PORT, function (err, address){
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
})
