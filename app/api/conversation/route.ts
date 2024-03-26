import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {OpenAI} from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body =await req.json()
        console.log(body)
        const { messages } = body;

        if (!userId) {
            return new NextResponse("unauthorised", { status: 400 })
        }
        if (!messages) {
            return new NextResponse("no messaged available", { status: 400 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        })
        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log(`conversation error ${error}`)
        return new NextResponse("Internal Error", { status: 500 })
    }
}