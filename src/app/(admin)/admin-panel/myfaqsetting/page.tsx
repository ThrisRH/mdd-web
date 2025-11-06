import { fetchFAQ } from "@/utils/data/faq-api";
import FAQScreen from "@/app/screens/admin/admin-panel-tabs/faq-admin";
import NotFound from "@/section/client/main/not-found";

export default async function FAQsPage() {
  try {
    const result = await fetchFAQ();

    return <FAQScreen faqs={result} />;
  } catch (error) {
    return <NotFound />;
  }
}
