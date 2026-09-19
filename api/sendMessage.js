import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { roomId, username, pfp, text } = JSON.parse(req.body);

  const messages = await kv.get(roomId + "_messages") || [];

  messages.push({
    username,
    pfp,
    text,
    time: Date.now()
  });

  await kv.set(roomId + "_messages", messages);

  res.json({ ok: true });
}
