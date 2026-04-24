import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "@/content/news";
import type { BlogPost, BlogPostSection } from "@/content/blogPosts";

// Force static generation - content is from static files
export const dynamic = 'force-static';

const POSTS_PER_PAGE = 10;

type BlogPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

function formatDate(dateValue: string): string {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

function getPageHref(page: number): string {
  if (page <= 1) {
    return "/aktuelles";
  }

  return `/aktuelles?page=${page}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  // newsPosts is already sorted by publishedAt

  const totalPages = Math.max(1, Math.ceil(newsPosts.length / POSTS_PER_PAGE));
  const requestedPage = Number.parseInt(resolvedSearchParams.page ?? "1", 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsForPage = newsPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-[72ch] mx-auto">
          <p className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4">Was gibts Neues?</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Aktuelles aus der Abteilung</h1>
          <p className="text-sm md:text-base text-foreground/80 leading-7">
            Hier teilen wir Neuigkeiten rund um die Abteilung und das Vereinsleben.
          </p>
        </div>

        <div className="space-y-10">
          {postsForPage.map((post) => (
            <article
              key={post.slug}
              id={post.slug}
              className="max-w-4xl mx-auto border border-brand-primary/20 bg-background rounded-sm overflow-hidden shadow-sm"
            >
              <div className="relative h-56 md:h-64 overflow-hidden w-full rounded-sm border border-brand-primary/20">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-brand-primary/15 text-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl md:text-3xl font-black tracking-tight leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-foreground/80">
                    {formatDate(post.publishedAt)} • {post.author} • {post.readingTime}
                  </p>

                  <p className="text-sm md:text-base text-foreground/85 leading-7">
                    {post.excerpt}
                  </p>

                  <div className="space-y-8 pt-2">
                  {post.sections.map((section: BlogPostSection, sectionIndex: number) => (
                    <section key={`${post.slug}-section-${sectionIndex}`} className="space-y-4">
                      {section.heading && (
                        <h3 className="text-base md:text-lg font-black tracking-tight">
                          {section.heading}
                        </h3>
                      )}

                      {section.paragraphs.map((paragraph: string, paragraphIndex: number) => (
                        <p
                          key={`${post.slug}-paragraph-${sectionIndex}-${paragraphIndex}`}
                          className="text-sm md:text-base leading-7 text-foreground/85"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bulletPoints && (
                        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base leading-7 text-foreground/85">
                          {section.bulletPoints.map((bulletPoint: string) => (
                            <li key={bulletPoint}>{bulletPoint}</li>
                          ))}
                        </ul>
                      )}

                      {section.image && (
                        <figure className="space-y-3 pt-2">
                          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-sm border border-brand-primary/20">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {section.image.caption && (
                            <figcaption className="text-xs md:text-sm text-foreground/70">
                              {section.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </section>
                  ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-brand-primary/20 pt-6 flex items-center justify-between gap-4">
          {currentPage > 1 ? (
            <Link
              href={getPageHref(currentPage - 1)}
              className="inline-flex items-center gap-2 bg-brand-primary/10 text-foreground px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand-primary/20 transition"
            >
              <span aria-hidden>←</span>
              Vorherige
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 bg-brand-primary/5 text-foreground/50 px-4 py-2 text-xs font-black uppercase tracking-widest">
              <span aria-hidden>←</span>
              Vorherige
            </span>
          )}

          <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground/70">
            Seite {currentPage} von {totalPages}
          </p>

          {currentPage < totalPages ? (
            <Link
              href={getPageHref(currentPage + 1)}
              className="inline-flex items-center gap-2 bg-brand-primary text-black px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand-primary/90 transition"
            >
              Naechste
              <span aria-hidden>→</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 bg-brand-primary/20 text-foreground/60 px-4 py-2 text-xs font-black uppercase tracking-widest">
              Naechste
              <span aria-hidden>→</span>
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
