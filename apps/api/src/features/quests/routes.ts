import { FastifyPluginAsync } from 'fastify';
import { listQuestsHandler } from './controller';

export const questsRoutes: FastifyPluginAsync = async (server) => {
  server.get('/', listQuestsHandler);
  server.get('/:id', async (req, reply) => {
    const id = Number((req.params as any).id);
    const items = await server.inject({ method: 'GET', url: '/' }); // not used; we keep simple
    // for demo, reuse service
    const { QuestService } = await import('./service');
    const quest = (await QuestService.list()).find((q) => q.id === id);
    if (!quest) return reply.status(404).send({ error: 'not found' });
    return reply.send(quest);
  });
};
