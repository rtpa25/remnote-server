import { PageModel } from '../models/page.model';

export async function createPage(name: string, userId: string, body: string) {
  const page = await PageModel.create({
    name,
    user: userId,
    body,
  });
  return page;
}

export async function updatePage(pageId: string, name: string, body: string) {
  const page = await PageModel.findByIdAndUpdate(pageId, { name, body });
  return page;
}

export async function deletePage(pageId: string) {
  const page = await PageModel.findByIdAndDelete(pageId);
  return page;
}

export async function getPagesByUserId(userId: string) {
  const pages = await PageModel.find({ user: userId }).populate('body');
  return pages;
}

export async function getPageById(pageId: string) {
  const page = await PageModel.findById(pageId).populate('body');
  return page;
}
