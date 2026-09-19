import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const keys = await kv.keys("room_*");

  const rooms = [];
  for (const k of keys) {
    if (!k.endsWith("_messages")) {
      rooms.push({ id: k, ...(await kv.hgetall(k)) });
    }
  }

  res.json(rooms);
}
