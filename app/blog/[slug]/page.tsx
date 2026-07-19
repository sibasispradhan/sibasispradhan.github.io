import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { blogs } from '@/content/blog'
import { profile } from '@/content/profile'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.id }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogs.find((blog) => blog.id === slug)

  if (!post) {
    return {
      title: 'Article not found',
      description: 'This blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${profile.siteUrl}/blog/${post.id}`,
      type: 'article',
      images: [
        {
          url: `${profile.siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogs.find((blog) => blog.id === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-4">
          <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Back to blog
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
            {post.readTime}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-lg">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="space-y-6 text-slate-700 dark:text-slate-300 leading-8">
          <p>{post.content}</p>
        </article>
      </div>
    </div>
  )
}
