"use client";

import type { FC, ReactNode } from "react";
import { makeAssistantToolUI } from "@assistant-ui/react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, OctagonX, TriangleAlert } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import type { inputSchema as ScrapeUrlInputSchema } from "@/mastra/tools/scrape-url";
import type { z } from "zod";
import Image from 'next/image'

type ToolStatus = "running" | "complete" | "incomplete" | "requires-action";

const statusIconMap: Record<ToolStatus, ReactNode> = {
  running: <LoaderCircle className="animate-spin text-indigo-500 size-4" />,
  complete: <CheckCircle className="text-emerald-500 size-4" />,
  "requires-action": <TriangleAlert className="text-amber-500 size-4" />,
  incomplete: <OctagonX className="text-rose-500 size-4" />,
};

const GetEventsToolUI = makeAssistantToolUI({
  toolName: "GET_EVENTS",
  render: ({
    status,
  }) => {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center gap-2">
            <Image src="/connpass.png" alt="connpass" width={25} height={25} />
            <span>Get Events</span>
            <span>{statusIconMap[status.type]}</span>
          </div>
        </CardContent>
      </Card>
    );
  },
});

const ScrapeUrlToolUI = makeAssistantToolUI<z.infer<typeof ScrapeUrlInputSchema>, unknown>({
  toolName: "SCRAPE_URL",
  render: ({
    status,
    args,
  }) => {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center gap-2">
            <Image src="/firecrawl.png" alt="firecrawl" width={25} height={25} />
            <span>Scrape Url</span>
            <span>{statusIconMap[status.type]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>URL:</span>
            <span>{args.url}</span>
          </div>
        </CardContent>
      </Card>
    );
  },
});

const ToolUIWrapper: FC = () => {
  return (
    <>
      <GetEventsToolUI />
      <ScrapeUrlToolUI />
    </>
  );
};

export const ToolsByNameComponents = {
  GET_EVENTS: GetEventsToolUI,
  SCRAPE_URL: ScrapeUrlToolUI,
};

export default ToolUIWrapper;