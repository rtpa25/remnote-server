import { ThirdPartyInfo, UserDocument, UserModel } from '../models/user.model';

export async function createUser(
  email: string,
  name: string,
  supertokensId: string,
  thirdParty?: ThirdPartyInfo
): Promise<UserDocument> {
  const user = await UserModel.create({
    email,
    name,
    supertokensId,
    thirdParty,
  });
  return user;
}

export async function getUserBySupertokensId(supertokensId: string) {
  const user = await UserModel.findOne({ supertokensId });
  return user;
}
