#!/usr/bin/env -S npm run tsn -T

import OpenAI from 'hyperbee-package-test';

// gets API Key from environment variable OPENAI_API_KEY
const hyperbee-package-test = new OpenAI();

async function main() {
  const stream = await hyperbee-package-test.beta.chat.completions
    .stream({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
      logprobs: true,
    })
    .on('logprob', (logprob) => {
      console.log(logprob);
    });

  console.dir(await stream.finalChatCompletion(), { depth: null });
}

main();
