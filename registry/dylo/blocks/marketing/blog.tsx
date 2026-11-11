import { cn } from '@/lib/utils'
import { Avatar } from '@/registry/dylo/ui/avatar'
import { buttonVariants } from '@/registry/dylo/ui/button'
import { CtaButton } from '@/registry/dylo/ui/cta-button'
import { SearchTrigger } from '@/registry/dylo/ui/search'
import { Mail } from 'lucide-react'
import * as React from 'react'
import { DisplayTitle, container } from './section'

export type Author = { name: string; href?: string; avatar?: string }
export type Post = {
  title: string
  href: string
  date: string
  category: string
  authors: Author[]
  excerpt?: string
  cover?: React.ReactNode
}

/** The placeholder cover: the canvas grid with the category set in mono. */
export function PostCover({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn('relative flex h-full w-full items-center justify-center overflow-hidden bg-subtle', className)}>
      <div
        aria-hidden
        className="absolute inset-0 grid-canvas [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <span className="relative rounded-xl glass px-4 py-2 font-mono text-xs tracking-widest uppercase">{label}</span>
    </div>
  )
}

/** Overlapping author avatars, or one avatar and a name. */
export function Authors({ authors, className }: { authors: Author[]; className?: string }) {
  if (authors.length === 1) {
    const [a] = authors
    return (
      <a
        href={a.href ?? '#'}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium text-inherit transition-colors hover:text-emphasis md:gap-2',
          className
        )}
      >
        <Avatar size="sm" src={a.avatar} fallback={a.name[0]} />
        {a.name}
      </a>
    )
  }
  return (
    <ul className={cn('flex pl-2', className)}>
      {authors.map((a, i) => (
        <li
          key={a.name}
          className="-ml-2 flex items-center justify-center rounded-full bg-background p-0.5"
          style={{ zIndex: authors.length - i }}
        >
          <a href={a.href ?? '#'} aria-label={a.name}>
            <Avatar size="sm" src={a.avatar} fallback={a.name[0]} />
          </a>
        </li>
      ))}
    </ul>
  )
}

/** A post in a grid: cover, display-face title, authors and date. */
export function PostCard({ post, size = 'md' }: { post: Post; size?: 'lg' | 'md' }) {
  return (
    <li className="relative flex flex-col gap-2">
      <a href={post.href} className="group rounded-xl outline-hidden focus-visible:ring-2 focus-visible:ring-gray-a4">
        <div className="relative aspect-[811/457] w-full overflow-hidden rounded-lg border border-gray-a3 transition-colors group-hover:border-gray-a4 md:rounded-xl">
          {post.cover ?? <PostCover label={post.category} />}
        </div>
        <h2
          className={cn(
            'mt-4 line-clamp-5 font-display effect-font-styling leading-tight tracking-tighter text-balance text-emphasis',
            size === 'lg' ? 'text-[2.25rem]' : 'text-xl'
          )}
        >
          {post.title}
        </h2>
      </a>
      <div className="mt-0.5 flex items-center gap-1 text-default md:gap-1.5 lg:mt-1">
        <Authors authors={post.authors} />
        <span aria-hidden>·</span>
        <time className="text-sm">{post.date}</time>
      </div>
    </li>
  )
}

/** Category filters as pills; the active one is filled with the accent. */
export function CategoryPills({
  categories,
  active,
  hrefFor,
}: {
  categories: string[]
  active: string
  hrefFor?: (c: string) => string
}) {
  return (
    <nav
      aria-label="Categories"
      className="mx-auto mb-6 grid w-fit max-w-full min-w-72 grid-cols-2 items-center gap-2 md:mr-auto md:ml-0 md:flex"
    >
      {categories.map((c) => (
        <a
          key={c}
          href={hrefFor?.(c) ?? '#'}
          aria-current={c === active ? 'page' : undefined}
          className={cn(
            buttonVariants({ variant: c === active ? 'primary' : 'secondary' }),
            'rounded-full capitalize',
            c !== active && 'border-gray-a2'
          )}
        >
          {c}
        </a>
      ))}
    </nav>
  )
}

/** The blog index: headline with search and subscribe, filters, featured and recent posts. */
export function BlogIndex({
  title = 'Blog',
  categories,
  featured,
  posts,
  className,
}: {
  title?: React.ReactNode
  categories: string[]
  featured: Post[]
  posts: Post[]
  className?: string
}) {
  return (
    <div className={cn(container, 'pt-24 pb-24 md:pt-32', className)}>
      <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
        <DisplayTitle className="md:text-[4.8rem]">{title}</DisplayTitle>
        <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center">
          <SearchTrigger className="h-10 w-full rounded-2xl sm:w-auto sm:min-w-[200px]" />
          <CtaButton size="md">
            <Mail className="size-4" />
            Subscribe
          </CtaButton>
        </div>
      </div>
      <CategoryPills categories={categories} active={categories[0]} />
      <h3 className="sr-only">Featured posts</h3>
      <ul className="relative grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <PostCard key={p.title} post={p} size="lg" />
        ))}
      </ul>
      <h2 className="mt-20 mb-4 font-display effect-font-styling text-xl leading-[130%] text-emphasis">Recent posts</h2>
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.title} post={p} />
        ))}
      </ul>
    </div>
  )
}

/** A single post: title, byline, cover and the article in prose. */
export function BlogPost({ post, children, className }: { post: Post; children: React.ReactNode; className?: string }) {
  return (
    <article className={cn('mx-auto w-full max-w-3xl px-6 pt-24 pb-24 md:pt-32', className)}>
      <a href="#" className="font-mono text-xs tracking-widest text-gray-10 uppercase hover:text-gray-12">
        {post.category}
      </a>
      <h1 className="mt-4 effect-font-gradient font-display effect-font-styling text-[2.75rem] leading-[115%] tracking-tighter text-balance md:text-[3.5rem]">
        {post.title}
      </h1>
      <div className="mt-6 flex items-center gap-2 text-default">
        <Authors authors={post.authors} />
        <span aria-hidden>·</span>
        <time className="text-sm">{post.date}</time>
      </div>
      <div className="relative mt-10 aspect-[811/457] w-full overflow-hidden rounded-xl border border-gray-a3">
        {post.cover ?? <PostCover label={post.category} />}
      </div>
      <Prose className="mt-12">{children}</Prose>
    </article>
  )
}

/** Long-form text: posts, legal pages, security notes. */
export function Prose({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 text-base leading-7 text-gray-11',
        '[&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-gray-12',
        '[&_h3]:mt-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-gray-12',
        '[&_a]:text-gray-12 [&_a]:underline [&_a]:decoration-gray-a6 [&_a]:underline-offset-4 hover:[&_a]:decoration-gray-12',
        '[&_strong]:font-semibold [&_strong]:text-gray-12 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5',
        '[&_code]:rounded-md [&_code]:bg-gray-a3 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:text-gray-12',
        '[&_blockquote]:border-l-2 [&_blockquote]:border-gray-a6 [&_blockquote]:pl-4 [&_blockquote]:text-gray-12',
        className
      )}
      {...props}
    />
  )
}

/** A legal or policy page: serif title, last-updated line, and the text. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: React.ReactNode
  updated: string
  children: React.ReactNode
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-24 pb-24 md:pt-32">
      <DisplayTitle className="md:text-[4.8rem]">{title}</DisplayTitle>
      <p className="mt-2 text-sm text-gray-10">Last updated {updated}</p>
      <Prose className="mt-12">{children}</Prose>
    </article>
  )
}
