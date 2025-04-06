import { mastra } from "@/mastra";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const agent = await mastra.getAgent("analyzer");
  const result = await agent.stream(messages);

  return result.toDataStreamResponse();
}
