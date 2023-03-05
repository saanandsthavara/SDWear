// Handling the api

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([211222, 873333, 987690]);
}
