import { HOST } from "@/app/(admin)/config/constant";

export async function fetchFAQ() {
  try {
    const res = await fetch(`${HOST}/api/faq?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
