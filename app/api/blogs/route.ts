import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import { BlogPost } from '@/lib/modals/Blog';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { title, content, category, tags, featuredImage, authorName, authorEmail } = body;

  try {
    await connect();

    const newPost = await BlogPost.create({
      title,
      content,
      category,
      tags,
      featuredImage,
      author: userId,
      authorName: authorName || 'Unknown Author',
      authorEmail: authorEmail || '',
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error('Error creating blog:', err);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connect();
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    const count = await BlogPost.countDocuments();

    return NextResponse.json({ count, posts }, { status: 200 });
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

