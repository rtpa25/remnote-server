import { Request, Response } from 'express';
import { GetUserBySuperTokensIdQuery } from '../schemas/user.schema';
import { getUserBySupertokensId } from '../services/user.service';

export async function getUserHandlerFromSuperTokensId(
  req: Request<{}, {}, {}, GetUserBySuperTokensIdQuery>,
  res: Response
) {
  const { supertokensId } = req.query;

  const user = await getUserBySupertokensId(supertokensId);

  if (!user) {
    return res.status(404).send('User not found');
  }
  return res.json(user).status(200);
}
