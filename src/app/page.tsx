import { Automate } from "@/components/Automate";
import { Banner } from "@/components/Banner";
import { Challenge } from "@/components/Challenge";
import { Csv } from "@/components/Csv";
import { Landing } from "@/components/Landing";
import { Scalable } from "@/components/Scalable";
import { VisuelWeb } from "@/components/VisuelWeb";

export default function Home() {
  return (
    <main>
      <Landing/>
      <Challenge/>
      <Banner/>
      <VisuelWeb/>
      <Csv/> 
      <Scalable/>
      <Automate/>
    </main>
  );
}
