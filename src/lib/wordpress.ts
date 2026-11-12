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

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://mediumslateblue-jay-156191.hostingersite.com";

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

    return data.map((post: any) => {
      // 대표 이미지(Featured Image) 추출
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      
      // 카테고리 추출
      const terms = post._embedded?.["wp:term"]?.[0] || [];
      const categoryName = terms.length > 0 ? stripHtml(terms[0].name) : "Terrace Notes";

      // 작성자 추출
      const author = post._embedded?.["author"]?.[0]?.name || "Jovular Barista";

      // 날짜 포맷 (YYYY.MM.DD)
      const postDate = new Date(post.date);
      const formattedDate = `${postDate.getFullYear()}.${String(postDate.getMonth() + 1).padStart(2, "0")}.${String(postDate.getDate()).padStart(2, "0")}`;

      return {
        id: post.id,
        date: formattedDate,
        slug: post.slug,
        link: post.link || "#",
        title: stripHtml(post.title?.rendered || "무제"),
        excerpt: stripHtml(post.excerpt?.rendered || ""),
        content: post.content?.rendered || "",
        featuredImage: featuredMedia || "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
        category: categoryName === "Uncategorized" ? "Terrace Notes" : categoryName,
        authorName: author,
      };
    });
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return [];
  }
}
