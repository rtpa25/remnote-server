import { Request, Response } from 'express';
import {
  CreatePageInput,
  DeletePageQuery,
  GetPageQuery,
  GetPagesByUserIdQuery,
} from '../schemas/page.schema';
import {
  createPage,
  deletePage,
  getPageById,
  getPagesByUserId,
  updatePage,
} from '../services/page.service';

export async function createPageHandler(
  req: Request<{}, {}, CreatePageInput>,
  res: Response
) {
  const { name, userId } = req.body;
  const page = await createPage(name, userId);
  res.status(201).send(page);
}

export async function updatePageHandler(req: Request, res: Response) {
  const { body, name, pageId } = req.body;
  const page = await updatePage(pageId, name, body);
  res.status(200).send(page);
}

export async function deletePageHandler(
  req: Request<{}, {}, {}, DeletePageQuery>,
  res: Response
) {
  const { pageId } = req.query;
  await deletePage(pageId);
  res.sendStatus(200);
}

export async function getPagesByUserIdHandler(
  req: Request<{}, {}, {}, GetPagesByUserIdQuery>,
  res: Response
) {
  const { userId } = req.query;
  const pages = await getPagesByUserId(userId);
  res.status(200).send(pages);
}

export async function getPageByIdHandler(
  req: Request<{}, {}, {}, GetPageQuery>,
  res: Response
) {
  const { pageId } = req.query;
  const page = await getPageById(pageId);
  res.status(200).send(page);
}
