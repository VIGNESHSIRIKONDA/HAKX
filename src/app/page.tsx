import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Offerings } from "@/components/Offerings";
import { WhyHakx } from "@/components/WhyHakx";
import { Trainers } from "@/components/Trainers";
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
        <WhyHakx />
        <Trainers />
        <Certification />
        <WhoShouldJoin />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
