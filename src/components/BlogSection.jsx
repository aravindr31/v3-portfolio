
import BlogCard from "./BlogCard";
import blogsData from "../data/blogs.json"

const posts = blogsData;

export default function  BlogSection() {
  return (
    <div class="space-y-6 sm:space-y-8 w-full">
      <div class="space-y-3 sm:space-y-4">
        <p class="font-mono text-xs tracking-[0.25em] uppercase text-primary">
          #03 ——
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight uppercase">
          Blogs
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base">
          Random Thoughts on observability, SRE, and open-source infrastructure
          from my Hashnode blog.
        </p>
      </div>
      <div class="flex flex-col divide-y divide-border">
        {posts.length > 0 ? (
          posts
            .slice(0, 4)
            .map((post) => (
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                url={post.url}
                pubDate={post.pubDate}
                categories={post.categories}
                coverImage={post.coverImage}
              />
            ))
        ) : (
          <p class="text-muted-foreground text-sm py-8 text-center">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
      <div class="pt-4">
        <a
          href="https://o11y-lab.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs tracking-[0.25em] uppercase text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
        >
          View all posts on Hashnode →
        </a>
      </div>
    </div>
  );
};
