import OpenAI from 'hyperbee-package-test';

const client = new OpenAI();

async function typeTests() {
  const response = await client.audio.transcriptions
    .create({
      file: 'test' as any,
      model: 'whisper-1',
    })
    .asResponse();
  response.body;
}
