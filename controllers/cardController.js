import {mooncards} from '../data/mooncards'
import {nanoid} from 'nanoid'

export const getCard = (request, reply) => {
	const {id} = request.params
	const card = mooncards.find((card) => card.id === id)
	if (card) {
		reply.send(card)
	} else {
		reply.code(404).send()
	}
}

export const getCards = (request, reply) => {
	reply.send(mooncards)
}

export const addCard = (request, reply) => {
	const card = request.body
	card.id = nanoid()
	mooncards.push(card)
	reply.send(card)
}

export const updateCard = (request, reply) => {
	const card = request.body
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards[index] = card
	reply.send(card)
}

export const deleteCard = (request, reply) => {
	const index = mooncards.findIndex((c) => c.id === request.params.id)
	mooncards.splice(index, 1)
	reply.send(`Card with id ${request.params.id} deleted`)
}
