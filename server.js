import Fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
import {cardRoutes} from './routes/cards'

const fastify = Fastify({
	logger: true
})

fastify.register(fastifySwagger, {
	exposeRoute: true,
	routePrefix: '/docs',
	swagger: {
		info: {
			title: 'Moon Cards API',
			description: 'The Moon Cards API for Thirteen Moons',
			version: '1.0.0'
		}
	}
})

fastify.register(cardRoutes)

fastify.register(fastifyCors, {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE']
})

const PORT = process.env.PORT || 3000

fastify.listen(PORT, (err, address) => {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.swagger()
	fastify.log.info(`server listening on ${address}`)
})
