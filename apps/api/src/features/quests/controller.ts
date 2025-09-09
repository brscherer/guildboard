import { FastifyReply, FastifyRequest } from 'fastify';
import { QuestService } from './service';
import type { QuestDTO } from '@guildboard/contracts';

export async function listQuestsHandler(_req: FastifyRequest, reply: FastifyReply) {
  const items = await QuestService.list();
  reply.status(200).send(items);
}

export async function saveQuestHandler(req: FastifyRequest, reply: FastifyReply) {
  const questData = req.body as Omit<QuestDTO, "id">;
  if (!questData.title || !questData.difficulty || !questData.reward || !questData.description) {
    return reply.status(400).send({ error: 'Missing fields' });
  }
  const newQuest = await QuestService.save(questData);
  reply.status(201).send(newQuest);
}
