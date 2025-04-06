import { Mastra } from "@mastra/core";
import { agent } from "@/mastra/agents/analyzer";

export const mastra = new Mastra({
  agents: {
    analyzer: agent,
  },
});
