import OpenAI from "openai";
import { NextResponse } from "next/server";

const systemPrompt = {
  role: "system",
  content:
    process.env.AI_SYSTEM_PROMPT,
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  const baseURL = process.env.AI_API_URL;
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || "";

  if (!baseURL || !apiKey) {
    return NextResponse.json(
      { error: "AI configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const openai = new OpenAI({
      baseURL,
      apiKey,
    });

    const response = await openai.chat.completions.create({
      model,
      messages: [systemPrompt, ...messages],
      temperature: 0.2,
      max_tokens: 600,
    });
    console.log("MESSAGES", messages)
    let reply = response.choices[0].message.content || "";
    // Remove <think> tags content
    reply = reply.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI request failed:", error);
    return NextResponse.json(
      { error: "Failed to connect to the AI." },
      { status: 500 },
    );
  }
}
