import {connectToDB} from '/utils/database'
import Card from '/models/card'

export const GET = async (request) => {
    try {
        await connectToDB()

        const randomCard = await Card.aggregate([ { $match: { rarity: 'Rare Holo' } },{ $sample: { size: 10 } } ]);
        return new Response(JSON.stringify(randomCard, {status: 200}))
    } catch (error) {
        return new Response("Failed to fetch random card created by user", { status: 500 })
    }
}