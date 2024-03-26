import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
}
const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};
export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()
        console.log(body)
        const { messages } = body;

        if (!userId) {
            return new NextResponse("unauthorised", { status: 400 })
        }
        if (!messages) {
            return new NextResponse("no instruction available", { status: 400 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })
        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log(`code error ${error}`)
        return new NextResponse("Internal Error", { status: 500 })
    }
}