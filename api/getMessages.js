import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const room = req.query.room;

  const messages = await kv.get(room + "_messages") || [];
  res.json(messages);
}
