import Hero from "@/components/Hero";
import Memorable_page from "@/components/Memorable_page";
import Memories_page from "@/components/Memories_page";
import Religions from "@/components/Religions";
import Footer from "@/components/Footer";
import LowerBlack from "@/components/LowerBlack";
import Howitwork from "@/components/Howitwork";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Memorable_page/>
      <Memories_page/>
      <Howitwork/>
      <Religions/>
      <Footer/>
      <LowerBlack/>
    </main>
  );
}
