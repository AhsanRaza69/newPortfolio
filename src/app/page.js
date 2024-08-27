import Image from "next/image";
import Header from "./_Conponents/Header";
import HeroSec from "./_Conponents/HeroSec";
import LatestSec from "./_Conponents/LatestDesign";
import LatestProject from "./_Conponents/LatestPhotograph";
import Achievementsec from "./_Conponents/Achievementsec";
import AchPhoto from "./_Conponents/AchPhoto";


export default function Home() {
  return (
    <main >
   <Header/>
   <HeroSec/>
   <LatestSec/>
   <LatestProject/>
   <Achievementsec/>
   <AchPhoto/>
   
   
    </main>
  );
}
