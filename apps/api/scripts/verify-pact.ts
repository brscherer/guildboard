import path from 'path';
import { Verifier } from '@pact-foundation/pact';
import { buildServer } from '../src/server';

async function run() {
  const server = buildServer();
  await server.listen({ port: 3001, host: '0.0.0.0' }); // run on different port to avoid conflict
  try {
    const opts = {
      providerBaseUrl: 'http://localhost:3001',
      pactUrls: [path.resolve(process.cwd(), '../web/pacts/guildboard-web-guildboard-api.json')],
    };
    await new Verifier(opts).verifyProvider();
    console.log('Pact verification complete');
  } catch (e) {
    console.error('Pact verification failed', e);
    process.exit(1);
  } finally {
    await server.close();
  }
}

run();
