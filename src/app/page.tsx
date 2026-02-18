import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Stats } from "@/components/Stats";
import { Offerings } from "@/components/Offerings";
import { WhyHakx } from "@/components/WhyHakx";
import { Trainers } from "@/components/Trainers";
import { Testimonials } from "@/components/Testimonials";
import { Certification } from "@/components/Certification";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { WorkWithUs } from "@/components/WorkWithUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Offerings />
        <Stats />
        <WhyHakx />
        <Trainers />
        <Testimonials />
        <Certification />
        <WhoShouldJoin />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
