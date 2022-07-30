import { Document, Schema, model, Types } from 'mongoose';

export interface RemDocument extends Document {
  name: string;
  body: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  user: Types.ObjectId;
  page: Types.ObjectId;
}

const RemSchema = new Schema(
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
    page: {
      type: Schema.Types.ObjectId,
      ref: 'Page',
      required: true,
    },
  },
  { timestamps: true }
);

export const RemModel = model<RemDocument>('Rem', RemSchema);
