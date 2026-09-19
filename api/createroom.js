import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { name, icon } = JSON.parse(req.body);

  const id = "room_" + Date.now();

  await kv.hset(id, { name, icon });
  await kv.set(id + "_messages", []);

  res.json({ id });
}
