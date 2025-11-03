import { HOST } from "@/app/(admin)/config/constant";
import { BlogDetails } from "@/types/blog";
import { console } from "inspector";

export async function fetchBlogDetail(
  slug: string
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

export async function fetchBlog(pageNumber: number) {
  try {
    const res = await fetch(
      `${HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*&sort=createdAt:desc`
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data.data[0].documentId) {
      return null;
    }

    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
