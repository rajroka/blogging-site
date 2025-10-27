import { NextResponse } from "next/server";
import connect from "@/lib/db";
import { BlogPost } from "@/lib/modals/Blog";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request, { params }: any) {
  await connect();

  const post = await BlogPost.findById(params.id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(post);
}

export async function PUT(req: Request, { params }: any) {
  const { userId } = await auth();
  
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connect();
  const post = await BlogPost.findById(params.id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (post.author !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const { title, content, category, tags, featuredImage } = body;

  if (title) post.title = title;
  if (content) post.content = content;
  if (category) post.category = category;
  if (tags) post.tags = tags;
  if (featuredImage) post.featuredImage = featuredImage;

  await post.save();
  return NextResponse.json(post);
}

export async function DELETE(req: Request, { params }: any) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connect();
  const id = await params.id;
  const post = await BlogPost.findById(id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  if (post.author !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await post.deleteOne();
  return NextResponse.json({ message: "Deleted successfully" });
}
