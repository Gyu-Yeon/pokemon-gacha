import { connectToDB } from "@/utils/database";
import Card from "@/models/card";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const cards = await Card.find({ })

        return new Response(JSON.stringify(cards), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch cards created by user", { status: 500 })
    }
} 