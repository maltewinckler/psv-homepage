export interface BlogPostSection {
  heading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  sections: BlogPostSection[];
}
