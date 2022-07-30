import { object, string, TypeOf } from 'zod';

export const creatRemSchema = object({
  body: object({
    name: string({
      required_error: 'name is required',
    }),
    userId: string({
      required_error: 'userId is required',
    }),
    pageId: string({
      required_error: 'pageId is required',
    }),
  }),
});

export type CreatRemInput = TypeOf<typeof creatRemSchema>['body'];

export const deletRemSchema = object({
  query: object({
    remId: string({
      required_error: 'remId is required',
    }),
  }),
});

export type DeleteRemQuery = TypeOf<typeof deletRemSchema>['query'];

export const getRemsByUserIdSchema = object({
  query: object({
    userId: string({
      required_error: 'userId is required',
    }),
  }),
});

export type GetRemsByUserIdQuery = TypeOf<
  typeof getRemsByUserIdSchema
>['query'];

export const getRemSchema = object({
  query: object({
    remId: string({
      required_error: 'remId is required',
    }),
  }),
});

export type GetRemQuery = TypeOf<typeof getRemSchema>['query'];
