import fastify from 'fastify'
import {getCards, addCard, getCard, updateCard, deleteCard} from '../controller/cardController'

const card = {
	type: 'object',
	properties: {
		id: {
			type: 'string'
		},
		talent: {
			type: 'string'
		},
		terms: {
			type: 'string'
		},
		count: {
			type: 'number'
		},
		interval: {
			type: 'string'
		}
	}
}

const routesConfig = [
	{
		method: 'GET',
		path: '/cards',
		handler: getCards,
		response: {
			schema: {
				type: 'array',
				items: card
			}
		}
	},
	{
		method: 'POST',
		path: '/cards',
		handler: addCard,
		response: {
			schema: card
		},
		config: {
			validate: {
				payload: card
			}
		}
	},
	{
		method: 'GET',
		path: '/cards/{id}',
		handler: getCard,
		response: {
			schema: card
		},
		config: {
			validate: {
				params: {
					id: {
						type: 'string'
					}
				}
			}
		}
	},
	{
		method: 'PUT',
		path: '/cards/{id}',
		handler: updateCard,
		response: {
			schema: card
		},
		config: {
			validate: {
				payload: card
			}
		}
	},
	{
		method: 'DELETE',
		path: '/cards/{id}',
		handler: deleteCard,
		response: {
			schema: {
				type: 'array',
				items: card
			}
		},
		config: {
			validate: {
				params: {
					id: {
						type: 'string'
					}
				}
			}
		}
	}
]

export const cardRoutes = (fastify, _options, done) => {
	routesConfig.forEach((routeConfig) => {
		fastify.route(routeConfig)
	})

	done()
}
