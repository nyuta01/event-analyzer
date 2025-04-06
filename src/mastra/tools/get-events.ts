import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import * as fs from "node:fs";
import { parse } from "csv-parse/sync";


export const inputSchema = z.object({});

export const getEvents = createTool({
  id: "get-events",
  description: "Get events from connpass",
  inputSchema,
  execute: async () => {
    const data = fs.readFileSync("src/data/events.csv");
    const records = parse(data);
    return records;
  },
});
