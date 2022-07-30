import { object, string, TypeOf } from 'zod';

export const getUserBySuperTokensIdSchema = object({
  query: object({
    supertokensId: string({
      required_error: 'supertokensId is required',
    }),
  }),
});

export type GetUserBySuperTokensIdQuery = TypeOf<
  typeof getUserBySuperTokensIdSchema
>['query'];
