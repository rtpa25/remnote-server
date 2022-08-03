import { object, string, TypeOf, array, ZodString } from 'zod';

export const createPageSchema = object({
  body: object({
    name: string({
      required_error: 'name is required',
    }),
    userId: string({
      required_error: 'userId is required',
    }),
    body: string({
      required_error: 'body is required',
    }),
  }),
});

export type CreatePageInput = TypeOf<typeof createPageSchema>['body'];

export const deletePageSchema = object({
  query: object({
    pageId: string({
      required_error: 'pageId is required',
    }),
  }),
});

export type DeletePageQuery = TypeOf<typeof deletePageSchema>['query'];

export const getPagesByUserIdSchema = object({
  query: object({
    userId: string({
      required_error: 'userId is required',
    }),
  }),
});

export type GetPagesByUserIdQuery = TypeOf<
  typeof getPagesByUserIdSchema
>['query'];

export const getPageSchema = object({
  query: object({
    pageId: string({
      required_error: 'pageId is required',
    }),
  }),
});

export type GetPageQuery = TypeOf<typeof getPageSchema>['query'];
