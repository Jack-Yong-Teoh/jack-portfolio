import OpenAI from "openai";
import { NextResponse } from "next/server";

const AI_CONFIGS = [
  {
    baseURL: process.env.NEXT_PUBLIC_AI_API_URL,
    apiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
    model: process.env.NEXT_PUBLIC_AI_MODEL || "",
  },
  {
    baseURL: process.env.AI_API_URL_2,
    apiKey: process.env.AI_API_KEY_2,
    model: process.env.AI_MODEL_2 || "",
  },
  {
    baseURL: process.env.AI_API_URL_3,
    apiKey: process.env.AI_API_KEY_3,
    model: process.env.AI_MODEL_3 || "",
  },
];

const systemPrompt = {
  role: "system",
  content:
    process.env.AI_SYSTEM_PROMPT || "Fallback generic prompt if env fails.",
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  for (const config of AI_CONFIGS) {
    if (!config.baseURL || !config.apiKey) continue;

    try {
      const openai = new OpenAI({
        baseURL: config.baseURL,
        apiKey: config.apiKey,
      });

      const response = await openai.chat.completions.create({
        model: config?.model,
        messages: [systemPrompt, ...messages],
        temperature: 0.2,
        max_tokens: 200,
      });

      const reply = response.choices[0].message.content;
      return NextResponse.json({ reply });
    } catch (error) {
      console.error(`AI config failed (${config.baseURL}):`, error);
    }
  }

  return NextResponse.json(
    { error: "Failed to connect to the AI." },
    { status: 500 },
  );
}
