// src/utils/groqText.ts
import { streamText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import { createOpenAI } from '@ai-sdk/openai';
import MistralClient from '@mistralai/mistralai';

const groq = createGroq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY!,
});

const openai = createOpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY!,
});

const apiKey = import.meta.env.VITE_MISTRAL_API_KEY!;
const clientMistral = new MistralClient(apiKey);


// ========================= GROQ =========================
export async function streamVercelAI(
  model: string,
  prompt: string,
  onDelta: (chunk: string) => void,
  history: { role: 'user' | 'assistant' | 'system'; content: string }[] = []
) {
  const messages = [
    ...history,
    { role: 'user', content: prompt },
  ];

  const result = await streamText({
    model: groq(model),
    // @ts-ignore
    messages,
  });

  let inThink = false;

  for await (const delta of result.textStream) {
    const trimmed = delta;

    if (trimmed.includes('<think>')) {
      inThink = true;
      continue;
    }

    if (trimmed.includes('</think>')) {
      inThink = false;
      continue;
    }

    if (inThink || trimmed === '') {
      continue;
    }

    onDelta(delta);
  }
}

// ========================= OpenAI =========================
export async function streamOpenAIAI(
  model: string,
  prompt: string,
  onDelta: (chunk: string) => void,
  history: { role: 'user' | 'assistant' | 'system'; content: string }[] = []
) {
  const messages = [
    ...history,
    { role: 'user', content: prompt },
  ];

  const result = await streamText({
    model: openai(model) as any,
    // @ts-ignore
    messages,
  });

  for await (const delta of result.textStream) {
    if (delta) onDelta(delta);
  }
}

// ========================= Mistral =========================
export async function streamMistralAI(
  model: string,
  prompt: string,
  onDelta: (chunk: string) => void,
  history: { role: "user" | "assistant" | "system"; content: string }[] = []
) {
  const messages = [
    ...history,
    { role: "user", content: prompt },
  ];
      
  // Streaming API Mistral
  const stream = await clientMistral.chatStream({
    model: model,
    // @ts-ignore
    messages,
  });

  for await (const chunk of stream) {
    const delta = (chunk as any).choices?.[0]?.delta?.content;
    if (delta) {
      onDelta(delta);
    }
  }
}

// ========================= OpenRouter =========================
export async function streamOpenRouterAI(
  model: string,
  prompt: string,
  onDelta: (chunk: string) => void
) {
  const apiKeyOpenRouter = import.meta.env.VITE_OPEN_ROUTER_API_KEY;
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKeyOpenRouter}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model,
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    }),
  });

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error('Response body is not readable');
  }

  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      while (true) {
        const lineEnd = buffer.indexOf('\n');
        if (lineEnd === -1) break;

        const line = buffer.slice(0, lineEnd).trim();
        buffer = buffer.slice(lineEnd + 1);

        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') break;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              onDelta(content);
            }
          } catch (_) {
            console.log(_);
          }
        }
      }
    }
  } finally {
    reader.cancel();
  }
}
