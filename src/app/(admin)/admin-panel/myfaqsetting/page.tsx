import { fetchFAQ } from "@/utils/data/FaqAPI";
import FAQScreen from "@/app/screens/admin-panel-tabs/faq-admin";
import NotFound from "@/components/Main/NotFound";

export default async function FAQsPage() {
  try {
    const result = await fetchFAQ();

    return <FAQScreen faqs={result} />;
  } catch (error) {
    return <NotFound />;
  }
}
