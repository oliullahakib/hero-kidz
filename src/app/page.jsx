import Banner from "@/components/Home/Banner/Banner";
import TopProducts from "@/components/Home/TopProducts/TopProducts";

export const metadata = {
  title: "Home | Hero Kidz",
  description: "Welcome to Hero Kidz! Discover the best educational and fun toys for kids.",
  keywords: ["toys", "kids", "educational", "fun", "Hero Kidz"],
  openGraph: {
    title: "Home | Hero Kidz",
    description: "Welcome to Hero Kidz! Discover the best educational and fun toys for kids.",
    images: ["https://i.ibb.co.com/0yXwXP4s/all-products-Page.png"],
  },
  icons: {
    icon: "https://i.ibb.co.com/MxfwC02d/logo.png",
  },
};

export default function Home() {
  return (
    <>
    <Banner/>
    <TopProducts/>
    </>
  );
}
