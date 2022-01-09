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

export const postCard = (request, reply) => {
	const card = request.body
	card.id = nanoid()
	moonCards.push(card)
	reply.send(card)
}
