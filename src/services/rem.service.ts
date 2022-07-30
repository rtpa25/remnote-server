import { RemModel } from '../models/rem.model';

export async function createRem(name: string, userId: string, pageId: string) {
  const rem = await RemModel.create({
    name,
    user: userId,
    page: pageId,
  });
  return rem;
}

export async function updateRem(remId: string, name: string, body: string[]) {
  const rem = await RemModel.findByIdAndUpdate(remId, { name, body });
  return rem;
}

export async function deleteRem(remId: string) {
  const rem = await RemModel.findByIdAndDelete(remId);
  return rem;
}

export async function getRemsByUserId(userId: string) {
  const rems = await RemModel.find({ user: userId }).populate('body');
  return rems;
}

export async function getRemById(remId: string) {
  const rem = await RemModel.findById(remId).populate('body');
  return rem;
}
