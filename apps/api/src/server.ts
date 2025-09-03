import Fastify from 'fastify';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import { questsRoutes } from './features/quests/routes';

export function buildServer() {
  const server = Fastify({ logger: true });
  server.register(helmet);
  server.register(questsRoutes, { prefix: '/api/quests' });
  server.register(cors, {
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);

      const allowedOrigins = [
        'http://localhost:5173',
      ];

      if (allowedOrigins.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
  });

  return server;
}

if (require.main === module) {
  const server = buildServer();
  server.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
    server.log.info('API running on http://0.0.0.0:3000');
  });
}
