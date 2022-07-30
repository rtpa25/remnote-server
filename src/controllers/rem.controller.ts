import { Request, Response } from 'express';
import {
  CreatRemInput,
  DeleteRemQuery,
  GetRemQuery,
  GetRemsByUserIdQuery,
} from '../schemas/rem.schema';
import {
  createRem,
  deleteRem,
  getRemById,
  getRemsByUserId,
  updateRem,
} from '../services/rem.service';

export async function createRemHandler(
  req: Request<{}, {}, CreatRemInput>,
  res: Response
) {
  const { name, userId, pageId } = req.body;
  const page = await createRem(name, userId, pageId);
  res.status(201).send(page);
}

export async function updateRemHandler(req: Request, res: Response) {
  const { body, name, remId } = req.body;
  const page = await updateRem(remId, name, body);
  res.status(200).send(page);
}

export async function deleteRemHandler(
  req: Request<{}, {}, {}, DeleteRemQuery>,
  res: Response
) {
  const { remId } = req.query;
  await deleteRem(remId);
  res.sendStatus(200);
}

export async function getRemsByUserIdHandler(
  req: Request<{}, {}, {}, GetRemsByUserIdQuery>,
  res: Response
) {
  const { userId } = req.query;
  const pages = await getRemsByUserId(userId);
  res.status(200).send(pages);
}

export async function getRemByIdHandler(
  req: Request<{}, {}, {}, GetRemQuery>,
  res: Response
) {
  const { remId } = req.query;
  const page = await getRemById(remId);
  res.status(200).send(page);
}
