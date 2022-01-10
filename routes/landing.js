const {landingMessage} = require('../controllers/landingController')

const routeConfig = {
	method: 'GET',
	path: '/',
	handler: landingMessage,
	response: {
		schema: {
			type: 'string'
		},
		statusCode: 200
	},
	config: {
		validate: {
			query: {
				name: {
					type: 'string'
				}
			}
		}
	}
}

const landingRoute = (fastify, _options, done) => {
	fastify.route(routeConfig)

	done()
}

module.exports = landingRoute
