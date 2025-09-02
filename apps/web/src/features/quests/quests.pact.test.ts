import { describe, it, expect, afterAll, afterEach, beforeAll } from "vitest";
import * as path from "path";
import { Pact } from "@pact-foundation/pact";

const provider = new Pact({
  consumer: "guildboard-web",
  provider: "guildboard-api",
  port: 1234,
  dir: path.resolve(process.cwd(), "pacts"),
  log: path.resolve(process.cwd(), "logs/pact.log"),
});

describe("Quests API (consumer)", () => {
  beforeAll(async () => {
    await provider.setup();
  });
  afterAll(async () => {
    await provider.finalize();
  });
  afterEach( async () => {
    await provider.verify();
  });

  it("fetches quests", async () => {
    await provider.addInteraction({
      state: "there are quests",
      uponReceiving: "a request for quests",
      withRequest: {
        method: "GET",
        path: "/api/quests",
      },
      willRespondWith: {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: [{ id: 1, title: "Slay the Crawler", difficulty: "easy", reward: "50 gold" }],
      },
    });

    const quests = await fetch(`${provider.mockService.baseUrl}/api/quests`).then(res => res.json());
    expect(quests[0].title).toBe("Slay the Crawler");
  });
});
