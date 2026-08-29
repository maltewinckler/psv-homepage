import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import TrainingPlan from "@/components/sections/TrainingPlan";
import Membership from "@/components/sections/Membership";
import Contact from "@/components/sections/Contact";
import NewsBanner from "@/components/sections/NewsBanner";
import { notificationItems } from "@/content/notificationItems";

// <AboutUs /> is currently not used.

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div id="top" />
      <div className="pt-16 lg:pt-20">
        {/* Hide until needed again */}
        {/* <NewsBanner items={notificationItems} /> */}
      </div>
      <Hero />
      <TrainingPlan />
      <Membership />
      <Contact />
    </div>
  );
}
