import HomeClient from "@/components/pages/HomeClient";
import { getFeaturedProperties, toCardItem } from "@/lib/data/properties";

export const revalidate = 60;

export default async function Home() {
  const featured = await getFeaturedProperties();
  return <HomeClient featured={featured.map(toCardItem)} />;
}
