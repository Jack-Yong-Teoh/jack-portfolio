// app/api/chat/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  baseURL: process.env.NEXT_PUBLIC_AI_API_URL,
  apiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
});

const MODEL =
  process.env.NEXT_PUBLIC_AI_MODEL ||
  "hf.co/unsloth/Qwen3-Coder-30B-A3B-Instruct-GGUF:Q4_K_M";

// Pull the hidden instructions directly from the server environment variables
const systemPrompt = {
  role: "system",
  content:
    process.env.AI_SYSTEM_PROMPT || "Fallback generic prompt if env fails.",
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [systemPrompt, ...messages],
      temperature: 0.2,
      max_tokens: 200,
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to the AI." },
      { status: 500 },
    );
  }
}
