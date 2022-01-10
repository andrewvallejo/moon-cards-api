const mooncards = require('../data/mooncards')

const getCard = (request, reply) => {
	const card = mooncards.find((c) => c.id === request.params.id)
	reply.send(card)
}

const getCards = (request, reply) => {
	reply.send(mooncards)
}

const addCard = (request, reply) => {
	const card = request.body
	card.id = mooncards.length + 1
	mooncards.push(card)
	reply.send(card)
}

const updateCard = (request, reply) => {
	const card = request.body
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards[index] = card
	reply.send(card)
}

const deleteCard = (request, reply) => {
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards.splice(index, 1)
	reply.send(`Card with id ${request.params.id} deleted`)
}

module.exports = {
	getCard,
	getCards,
	addCard,
	updateCard,
	deleteCard
}
