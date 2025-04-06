import { ComposioToolSet } from "composio-core";
import { tool } from "ai";
import { z } from "zod";

const toolset = new ComposioToolSet({
  apiKey: process.env.COMPOSIO_API_KEY,
});

export const scrapeUrl = tool({
  description: "Scrape content from a url and optionally extract structured data using firecrawl's api.",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return await toolset.executeAction({
      action: "FIRECRAWL_SCRAPE_EXTRACT_DATA_LLM",
      params: args,
    });
  },
});