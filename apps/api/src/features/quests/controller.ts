import { FastifyReply, FastifyRequest } from 'fastify';
import { QuestService } from './service';

export async function listQuestsHandler(_req: FastifyRequest, reply: FastifyReply) {
  const items = await QuestService.list();
  reply.status(200).send(items);
}
