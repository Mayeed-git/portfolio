import Image from "next/image";
import Hero from "@/components/hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/grid";
import RecentProjects from "@/components/recent-projects";
import {navItems} from "@/data";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Footer />

      </div>
    </main>
  );
}
