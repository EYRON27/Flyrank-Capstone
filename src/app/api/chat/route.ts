import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { AI_CONFIG } from "@/lib/ai/config";

// Force App Router to treat this route as a dynamic route
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Call Anthropic API with streaming response
    const result = streamText({
      model: anthropic(AI_CONFIG.model),
      messages,
      system: AI_CONFIG.systemPrompt,
      temperature: AI_CONFIG.temperature,
    });

    // Return the formatted message stream to the client
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("API Chat route handler error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat conversation." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
