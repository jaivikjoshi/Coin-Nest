import Image from "next/image";

import { Inter } from "next/font/google";
import Landingpage from "./Components/Landingpage";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      {/* HomePage */}
      <Landingpage/>
    </main>
  );
}
