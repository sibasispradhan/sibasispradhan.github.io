import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogs } from "@/content/blog";
import { profile } from "@/content/profile";
import { getBlogContent } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogs.find((blog) => blog.id === slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${profile.siteUrl}/blog/${slug}`,
      images: [
        {
          url: `${profile.siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogs.find((blog) => blog.id === slug);

  if (!post) {
    notFound();
  }

  const article = await getBlogContent(slug);

  return (
    <div className="min-h-screen py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">

        <Link
          href="/blog"
          className="text-blue-600 hover:underline"
        >
          ← Back to Blog
        </Link>

        <div className="mt-8 mb-10">
          <p className="text-sm text-blue-600">
            {post.readTime}
          </p>

          <h1 className="text-5xl font-bold mt-3">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {article.content}
            </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}