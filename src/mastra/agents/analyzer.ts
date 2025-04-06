import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { getEvents } from "../tools/get-events";

export const agent = new Agent({
  name: "Analyzer",
  instructions: `
    あなたはconnpassというエンジニア向けイベントプラットフォームについて分析するためのエージェントです。
    ユーザーからのリクエストに対して内部的に管理しているデータを用いて分析を行い、
    その結果をユーザーに返答してください。

    # 注意事項
    1. 返答には内部データのみを使用してください
    2. 質問に対して適切なデータがない場合は、"データがありません"と返答してください
  `,
  model: openai("gpt-4o-mini"),
  tools: {
    getEvents,
  },
});
