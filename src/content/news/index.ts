import type { BlogPost } from "../blogPosts";

// Import all news posts
import { blogPost as post20260422umzug } from "./20260422_umzug";
import { blogPost as post20260908kickboxenFrauen } from "./20260908_kickboxen_frauen";

// Export all posts as an array, sorted by publishedAt (newest first)
export const newsPosts: BlogPost[] = [
  post20260908kickboxenFrauen,
  post20260422umzug,
].sort((a, b) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
