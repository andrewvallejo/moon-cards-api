import Fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
import {mooncards} from './data/mooncards'

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

const PORT = process.env.PORT || 3000

fastify.get('/', async (request, reply) => {
	return {
		message: 'Welcome to the Moon Cards API'
	}
})

fastify.get('/cards', async (request, reply) => {
	await reply.send(mooncards)
})

fastify.register(fastifyCors, {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE']
})

fastify.listen(PORT, function (err, address){
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
})
