import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";
import { getEvents } from "../tools/get-events";
import { scrapeUrl } from "../tools/scrape-url";

export const agent = new Agent({
  name: "Analyzer",
  instructions: `
    あなたはconnpassというエンジニア向けイベントプラットフォームについて分析するためのエージェントです。
    ユーザーからのリクエストに対して内部的に管理しているデータを用いて分析を行い、
    その結果をユーザーに返答してください。

    # 注意事項
    1. 返答にはToolから取得したデータを用いてください
    2. 質問に対して適切なデータがない場合は、"データがありません"と返答してください

    # Tools
    - GET_EVENTS: connpassのイベントデータを取得する
    - SCRAPE_URL: firecrawlでURLのページを取得する
  `,
  model: openai("gpt-4o-mini"),
  tools: {
    GET_EVENTS: getEvents,
    SCRAPE_URL: scrapeUrl,
  },
});
