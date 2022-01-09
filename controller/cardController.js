import {moonCards} from '../data/moonData'
import {nanoid} from 'nanoid'

export const getCard = (request, reply) => {
	const {id} = request.params
	const card = moonCards.find((card) => card.id === id)
	if (card) {
		reply.send(card)
	} else {
		reply.code(404).send()
	}
}

export const getCards = (request, reply) => {
	reply.send(moonCards)
}

export const addCard = (request, reply) => {
	const card = request.body
	card.id = nanoid()
	moonCards.push(card)
	reply.send(card)
}

export const updateCard = (request, reply) => {
	const card = request.body
	const index = moonCards.findIndex((c) => c.id === request.params.id)
	moonCards[index] = card
	reply.send(card)
}

export const deleteCard = (request, reply) => {
	const index = moonCards.findIndex((c) => c.id === request.params.id)
	moonCards.splice(index, 1)
	reply.send(`Card with id ${request.params.id} deleted`)
}
