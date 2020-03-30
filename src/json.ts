import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const json = (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  return handler(req, res);
}

export default json;
