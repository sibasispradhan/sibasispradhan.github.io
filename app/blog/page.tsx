import { Metadata } from 'next'
import { blogs } from '@/content/blog'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles on system design, architecture, and enterprise software development.',
}

export default function Blog() {
  const featuredPosts = blogs.filter((blog) => blog.featured)

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Technical Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Insights on enterprise architecture, system design, AI workflows, ERP integration, and scalable software.
          </p>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-20 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
                >
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-80" />
                  <div className="p-6">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {post.readTime}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            All Articles
          </h2>

          <div className="space-y-6">
            {blogs.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 ml-auto">
                        {post.readTime} | {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold whitespace-nowrap"
                  >
                    Read
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
