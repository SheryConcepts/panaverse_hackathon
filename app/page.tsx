
import Branding from "@/components/home-page/branding";
import Header from "@/components/home-page/header";
import Newsletter from "@/components/home-page/newsletter";
import ProductsSection from "@/components/home-page/product-section";
import PromotionSection from "@/components/home-page/promotion-section";

export default function Page() {
  return (
    <>
      <Header />
      <PromotionSection />
      {
      // @ts-ignore
      <ProductsSection />
      }
      <Branding />
      <Newsletter />
    </>
  );
}
