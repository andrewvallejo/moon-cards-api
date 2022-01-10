const Fastify = require('fastify')
const fastifySwagger = require('fastify-swagger')
const fastifyCors = require('fastify-cors')

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

fastify.register(require('./routes/cards'))

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
