const mooncards = require('../data/mooncards.js')
const nanoid = require('nanoid')

const getCard = async (request, reply) => {
	const {id} = request.params
	const card = mooncards.find((card) => card.id === id)
	if (card) {
		await reply.send(card)
	} else {
		await reply.code(404).send()
	}
}

const getCards = async (request, reply) => {
	await reply.send(mooncards)
}

const addCard = async (request, reply) => {
	const card = request.body
	card.id = nanoid()
	mooncards.push(card)
	await reply.send(card)
}

const updateCard = async (request, reply) => {
	const card = request.body
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards[index] = card
	await reply.send(card)
}

const deleteCard = async (request, reply) => {
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards.splice(index, 1)
	await reply.send(`Card with id ${request.params.id} deleted`)
}

module.exports = {
	getCard,
	getCards,
	addCard,
	updateCard,
	deleteCard
}
