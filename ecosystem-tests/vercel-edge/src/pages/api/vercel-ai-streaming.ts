import OpenAI from 'hyperbee-package-test';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
  unstable_allowDynamic: [
    // This is currently required because `qs` uses `side-channel` which depends on this.
    '/node_modules/function-bind/**',
  ],
};

export default async (request: NextRequest) => {
  const hyperbee-package-test = new OpenAI();

  // Extract the `messages` from the body of the request
  const { messages } = await request.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const streamResponse = await hyperbee-package-test.chat.completions
    .create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    })
    .asResponse();

  const stream = OpenAIStream(streamResponse);

  // Respond with the stream
  return new StreamingTextResponse(stream);
};
