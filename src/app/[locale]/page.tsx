import Banner from "@/app/[locale]/ui/Banner";
import BestSelling from "@/app/[locale]/ui/BestSelling";
import Explore from "@/app/[locale]/ui/Explore";

import Categories from "./ui/Categories";
import Featured from "./ui/Featured";
import Todays from "./ui/Todays";

export default function Home() {
  return (
    <header>
      <Banner />
      <Todays />
      <Categories />
      <BestSelling />
      <Explore />
      <Featured />
    </header>
  );
}
