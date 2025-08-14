import mongoose, { Schema, Document } from "mongoose";

interface Comment {
  text: string;
  author?: string;
  createdAt?: Date;
}

export interface IBlogPost extends Document {
  title: string;
  content: string;
  author: string; // Clerk user ID
  authorName?: string;
  authorEmail?: string;
  authorImage?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  slug?: string;
  comments?: Comment[];
  createdAt?: Date;
  updatedAt?: Date;
}

const commentSchema = new Schema<Comment>(
  {
    text: { type: String, required: true },
    author: { type: String, default: "Guest" },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const blogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true, trim: true, minlength: 5, maxlength: 200 },
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorName: { type: String },
    authorEmail: { type: String },
    authorImage: { type: String  },
    category: { type: String, trim: true, lowercase: true },
    tags: [String],
    featuredImage: { type: String },
    slug: { type: String, unique: true, lowercase: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

blogPostSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

export const BlogPost =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>("BlogPost", blogPostSchema);
