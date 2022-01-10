const covers = [
	'https://imgur.com/HVVfDWb',
	'https://imgur.com/1m047Q8',
	'https://imgur.com/84c1OKZ',
	'https://imgur.com/j3wD6tE',
	'https://imgur.com/NwfirSu',
	'https://imgur.com/UljJWKK',
	'https://imgur.com/698xTgt',
	'https://imgur.com/yb4R8Zu',
	'https://imgur.com/n9gDD15',
	'https://imgur.com/nbgDL0g',
	'https://imgur.com/nbgDL0g'
]

const getCover = () => covers[Math.floor(Math.random() * covers.length)]

const mooncards = [
	{
		id: 'w1',
		talent: 'wisdom',
		terms: 'Read a spiritual book for',
		count: 1,
		intervals: 'chapters',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w2',
		talent: 'wisdom',
		terms: 'Ask someone older than you and take down',
		count: 2,
		intervals: 'notes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w3',
		talent: 'wisdom',
		terms: 'Read health and wellness',
		count: 3,
		intervals: 'articles',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w4',
		talent: 'wisdom',
		terms: 'Call someone you love and talk to them for at least',
		count: 4,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w5',
		talent: 'wisdom',
		terms: 'Google',
		count: 5,
		intervals: 'interests',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w6',
		talent: 'wisdom',
		terms: 'Engage philosophy, google someone for',
		count: 6,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w7',
		talent: 'wisdom',
		terms: 'Enjoy scenary, stare through the window for',
		count: 7,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w8',
		talent: 'wisdom',
		terms: 'self-reflect, look at a mirror for',
		count: 8,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w9',
		talent: 'wisdom',
		terms: 'find a self-care book and read ',
		count: 9,
		Intervals: 'Pages',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w10',
		talent: 'wisdom',
		terms: 'write about',
		count: 10,
		intervals: 'things',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w11',
		talent: 'wisdom',
		terms: 'write about your day has affected you',
		count: 11,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w12',
		talent: 'wisdom',
		terms: 'Write different things you love for ',
		count: 12,
		intervals: 'counts',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 'w13',
		talent: 'wisdom',
		terms: 'Incite wisdom to a friend, talk to them for',
		count: 13,
		intervals: 'meditate',
		cover: 'https://i.imgur.com/a8sTl6U.png'
	},
	{
		id: 's1',
		talent: 'spirit',
		terms: 'Tell someone them how much you care about them and what they have done to improve your life for',
		count: 1,
		intervals: 'phonecall',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's2',
		talent: 'spirit',
		terms: 'pray',
		count: 2,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's3',
		talent: 'spirit',
		terms: 'Find some space and meditate for',
		count: 3,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's4',
		talent: 'spirit',
		terms: 'Read about a spiritual article',
		count: 4,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's5',
		talent: 'spirit',
		terms: 'pray for',
		count: 5,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's6',
		talent: 'spirit',
		terms: 'write down good things that have happened to you today',
		count: 6,
		intervals: 'items',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's7',
		talent: 'spirit',
		terms: 'Meditate for',
		count: 7,
		intervals: 'pages',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's8',
		talent: 'spirit',
		terms: 'Count your blessings and write them for',
		count: 8,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's9',
		talent: 'spirit',
		terms: 'Light a candle and stare at it for',
		count: 9,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's10',
		talent: 'spirit',
		terms: 'List what you are grateful for',
		count: 10,
		intervals: 'nouns',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's11',
		talent: 'spirit',
		terms: 'Write to the world for',
		count: 11,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's12',
		talent: 'spirit',
		terms: 'do guided meditation for',
		count: 12,
		intervals: 'chapters',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 's13',
		talent: 'spirit',
		terms: 'do 5 downward dogs for',
		count: 13,
		intervals: 'seconds each',
		cover: 'https://i.imgur.com/q5Ll9UR.png'
	},
	{
		id: 'v1',
		talent: 'Vitality',
		terms: 'Pace the Earth, Run for',
		count: 1,
		intervals: 'Miles',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v2',
		talent: 'Vitality',
		terms: 'Do pushups for a total of ',
		count: 2,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v3',
		talent: 'Vitality',
		terms: 'Hug the floor, do planks for',
		count: 3,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v4',
		talent: 'Vitality',
		terms: 'Do sit ups for',
		count: 4,
		intervals: 'Reps of 10',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v5',
		talent: 'Vitality',
		terms: 'Jump rope',
		count: 5,
		intervals: 'Reps of 20',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v6',
		talent: 'Vitality',
		terms: 'Do burpees',
		count: 6,
		intervals: 'Reps of 5',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v7',
		talent: 'Vitality',
		terms: 'Do cat and cow stretch',
		count: 7,
		intervals: 'times',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v8',
		talent: 'Vitality',
		terms: 'Drink glass of water',
		count: 8,
		intervals: 'ounces',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v9',
		talent: 'Vitality',
		terms: 'Do squats',
		count: 9,
		intervals: 'Reps of 5',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v10',
		talent: 'Vitality',
		terms: 'Stretch',
		count: 10,
		intervals: 'Minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v11',
		talent: 'Vitality',
		terms: 'Touch your toes',
		count: 11,
		intervals: 'Times',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v12',
		talent: 'Vitality',
		terms: 'Do jump squats for',
		count: 12,
		intervals: 'Reps of 2',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'v13',
		talent: 'Vitality',
		terms: 'Do slow calf raises for',
		count: 13,
		intervals: 'Sets of 2',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm1',
		talent: 'Mind',
		terms: 'Learn something new and read ',
		count: 1,
		intervals: 'article',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm2',
		talent: 'Mind',
		terms: 'Learn something new about your hobby and read',
		count: 2,
		intervals: 'articles',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm3',
		talent: 'Mind',
		terms: 'Learn something new and read ',
		count: 3,
		intervals: 'article',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm4',
		talent: 'Mind',
		terms: 'Google a riddle and try to solve it in ',
		count: 4,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm5',
		talent: 'Mind',
		terms: 'Read a non-fiction book for ',
		count: 5,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm6',
		talent: 'Mind',
		terms: 'Read a non-fiction book for',
		count: 6,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm7',
		talent: 'Mind',
		terms: 'Learn something new and read articles for ',
		count: 7,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm8',
		talent: 'Mind',
		terms: 'Teach something to someone for',
		count: 8,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm9',
		talent: 'Mind',
		terms: 'Have someone teach you something for',
		count: 9,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm10',
		talent: 'Mind',
		terms: 'Read a non-fiction book for',
		count: 10,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm11',
		talent: 'Mind',
		terms: 'Read a non-fiction book for',
		count: 11,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm12',
		talent: 'Mind',
		terms: 'Read either 1 or',
		count: 12,
		intervals: 'chapters',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	},
	{
		id: 'm13',
		talent: 'Mind',
		terms: 'Read 3 articles or read for',
		count: 13,
		intervals: 'minutes',
		cover: 'https://i.imgur.com/CFyZWIP.png'
	}
]

module.exports = mooncards
