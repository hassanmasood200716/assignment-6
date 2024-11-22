import Image from "next/image";
import Navbar from "./components/Navbar";
import FirstMain from "./components/FirstMain";
import SecondNav from "./components/SecondNav";
import ThirdMain from "./components/ThirdMain";
import ForthMain from "./components/ForthMain";
import FifthMain from "./components/FifthMain";
import SixthMain from "./components/SixthMain";
import SeventhMain from "./components/SeventhMain";
import EighthMain from "./components/EighthMain";

export default function Home() {
  return (
    <>
    <div className="overflow-x">
    <Navbar />
    <FirstMain />
    <SecondNav />
    <ThirdMain />
    <ForthMain />
    <FifthMain />
    <SixthMain />
    <SeventhMain />
    <EighthMain />
    </div>
    </>
  );
}
