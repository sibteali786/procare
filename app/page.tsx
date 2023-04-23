import Hero from "@/components/Hero";
import { Inter } from "next/font/google";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="fontFamily">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
