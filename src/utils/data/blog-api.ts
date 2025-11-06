import { HOST } from "@/config/host-env";
import { BlogDetails } from "@/types/blog";
import { console } from "inspector";

export async function fetchBlogDetail(
  slug: string,
): Promise<BlogDetails | null> {
  try {
    const res = await fetch(`${HOST}/api/blogs/by-slug/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data.data.documentId) {
      return null;
    }

    return data.data;
  } catch (error: any) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}

export async function fetchBlog(pageNumber: number, pageSize: number) {
  try {
    const res = await fetch(
      `${HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}&populate=*&sort=createdAt:desc`,
    );

    if (!res.ok) {
      throw new Error("Fetch data failed");
    }

    const data = await res.json();

    return {
      data: data.data || [],
      meta: data.meta,
    };
  } catch (error) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
