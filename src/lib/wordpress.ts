export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  authorName: string;
}

const WP_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL ||
  "https://mediumslateblue-jay-156191.hostingersite.com";

// HTML 태그 및 엔티티 제거/디코딩 헬퍼
function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>?/gm, "")
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&hellip;/g, "...")
    .trim();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapWordPressPost(post: any): WordPressPost {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const terms = post._embedded?.["wp:term"]?.[0] || [];
  const categoryName =
    terms.length > 0 ? stripHtml(terms[0].name) : "Terrace Notes";
  const author = post._embedded?.["author"]?.[0]?.name || "Jovular Barista";

  const postDate = new Date(post.date);
  const formattedDate = `${postDate.getFullYear()}.${String(
    postDate.getMonth() + 1
  ).padStart(2, "0")}.${String(postDate.getDate()).padStart(2, "0")}`;

  return {
    id: post.id,
    date: formattedDate,
    slug: post.slug,
    link: post.link || "#",
    title: stripHtml(post.title?.rendered || "무제"),
    excerpt: stripHtml(post.excerpt?.rendered || ""),
    content: post.content?.rendered || "",
    featuredImage: featuredMedia || "/images/terrace_01.jpg",
    category: categoryName === "Uncategorized" ? "Terrace Notes" : categoryName,
    authorName: author,
  };
}

export async function getWordPressPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=10`, {
      next: { revalidate: 60 }, // 60초마다 최신 글 재검증 (ISR)
    });

    if (!res.ok) {
      console.error("Failed to fetch WordPress posts", res.status);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data.map(mapWordPressPost) : [];
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
}

export async function getWordPressPostById(
  id: string | number
): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts/${id}?_embed`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    const post = await res.json();
    return post?.id ? mapWordPressPost(post) : null;
  } catch (error) {
    console.error(`Error fetching WordPress post ${id}:`, error);
    return null;
  }
}
