import {getCard, getCards, postCard} from '../controller/cardController'

// Card Schema

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
		intervals: {
			type: 'string'
		}
	}
}

// Schema for the cards
const getAllCards = {
	schema: {
		response: {
			200: {
				type: 'array',
				cards: card
			}
		}
	},
	handler: getCards
}

const getSingleCard = {
	schema: {
		response: {
			200: card
		}
	},
	handler: getCard
}

const addCard = {
	schema: {
		body: {
			type: 'object',
			required: ['talent', 'terms', 'count', 'interval'],
			properties: {
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
		},
		response: {
			200: card
		}
	},
	handler: postCard
}

export const cardRoutes = (fastify, opts, done) => {
	// GET /cards - returns all cards
	fastify.get('/cards', getAllCards)

	// GET /cards/:id - returns card with matching id
	fastify.get('/cards/:id', getSingleCard)

	// POST /cards - creates a new card
	fastify.post('/cards', addCard)

	// PUT /cards/:id - updates card with matching id
	// fastify.put('/api/cards/:id', async (request, reply) => {
	// 	const card = request.body
	// 	const index = moonCardsfindIndex((c) => c.id === request.params.id)
	// 	cards[index] = card
	// 	await reply.send(card)
	// })

	// // DELETE /cards/:id - deletes card with matching id
	// fastify.delete('/api/cards/:id', async (request, reply) => {
	// 	const index = moonCardsfindIndex((c) => c.id === request.params.id)
	// 	moonCardssplice(index, 1)
	// 	await reply.send(cards)
	// })

	done()
}
