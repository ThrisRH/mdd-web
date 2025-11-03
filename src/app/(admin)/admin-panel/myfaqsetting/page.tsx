import { fetchFAQ } from "@/utils/data/FaqAPI";
import FAQScreen from "@/app/screens/admin-panel-tabs/faq-admin";

export default async function FAQsPage() {
  const faqs = await fetchFAQ();

  return <FAQScreen faqs={faqs} />;
}
