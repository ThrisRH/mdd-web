import AboutScreen from "@/app/screens/admin/admin-panel-tabs/about-admin";
import NotFound from "@/section/client/main/not-found";
import { fetchAbout } from "@/utils/data/about-api";

export default async function AboutPage() {
  try {
    const result = await fetchAbout();

    return <AboutScreen about={result} />;
  } catch (error) {
    return <NotFound />;
  }
}
