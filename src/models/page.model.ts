import { Document, Schema, model, Types } from 'mongoose';

export interface PageDocument extends Document {
  name: string;
  body: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  user: Types.ObjectId;
}

const pageSchema = new Schema(
  {
    name: { type: String, required: true },
    body: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Rem',
        default: [],
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const PageModel = model<PageDocument>('Page', pageSchema);
