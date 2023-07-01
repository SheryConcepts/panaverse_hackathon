import Card1 from "@/components/home-page/card1";
import Card2 from "@/components/home-page/card2";
import Card3 from "@/components/home-page/card3";
import Card4 from "@/components/home-page/card4";

export default function PromotionSection() {
  return (
    <section className="flex flex-col items-center justify-start gap-6 pt-10">
      <p className="text-small font-bold text-blue-600">PROMOTIONS</p>
      <h1 className="text-h3">Our Promotions and Events</h1>
      <div className="flex w-full flex-col  gap-3 lg:flex-row">
        <div className="flex w-full flex-col gap-3  lg:w-1/2">
          <Card1 />
          <Card2 />
        </div>
        <div className="flex w-full flex-row gap-3 lg:w-1/2">
          <Card3 />
          <Card4 />
        </div>
      </div>
    </section>
  );
}
