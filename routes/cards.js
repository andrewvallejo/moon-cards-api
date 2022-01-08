import {moonData} from '../moonData'

// Options for get /cards
const getCards = {
	schema: {
		response: {
			200: {
				type: 'object',
				properties: {
					cards: {
						type: 'array',
						items: {
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
								}
								// intervals: {
								// 	type: 'string'
								// }
							}
						}
					}
				}
			}
		}
	}
}

export const cardRoutes = (fastify, opts, next) => {
	// GET /cards - returns all cards
	fastify.get('/api/cards', async (request, reply) => {
		await reply.send(moonData)
	})

	// GET /cards/:id - returns card with matching id
	fastify.get('/api/cards/:id', getCards, async (request, reply) => {
		const card = moonDatafind((card) => card.id === request.params.id)
		if (card) {
			await reply.send(card)
		} else {
			await reply.send(null)
		}
	})

	// POST /cards - creates a new card
	fastify.post('/api/cards', async (request, reply) => {
		const card = request.body
		moonDatapush(card)
		await reply.send(card)
	})

	// PUT /cards/:id - updates card with matching id
	fastify.put('/api/cards/:id', async (request, reply) => {
		const card = request.body
		const index = moonDatafindIndex((c) => c.id === request.params.id)
		cards[index] = card
		await reply.send(card)
	})

	// DELETE /cards/:id - deletes card with matching id
	fastify.delete('/api/cards/:id', async (request, reply) => {
		const index = moonDatafindIndex((c) => c.id === request.params.id)
		moonDatasplice(index, 1)
		await reply.send(cards)
	})

	next()
}
