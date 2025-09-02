import Fastify from 'fastify';
import helmet from '@fastify/helmet';
import { questsRoutes } from './features/quests/routes';

export function buildServer() {
  const server = Fastify({ logger: true });
  server.register(helmet);
  server.register(questsRoutes, { prefix: '/api/quests' });
  return server;
}

if (require.main === module) {
  const server = buildServer();
  server.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    server.log.info('API running on http://0.0.0.0:3000');
  });
}
