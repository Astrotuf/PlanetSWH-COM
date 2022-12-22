import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>PlanetSWH - Family friendly planet discovery game.</title>
        <meta
          name="description"
          content="Family friendly planet discovery P2E game."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Community & Economy"
        title="Water – a key ingredient for life beyond Earth">
     That means we expect to be able to identify and analyse dozens of exo-Earths, and by characterising their atmospheres, we will be able to identify those that are potentially habitable while unleashing your creativity and productivity.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Gameplay Demo"
        title="Infinity Planets">
        The Planetsomewhere universe is always expanding through new games and experiences. Many of these experiences will allow players to compete with each other using simple or complex strategies and tactics to attain top rankings or be rewarded with coveted resources. Others will have them complete quests, defeat bosses, 
        and unlock in-depth storylines
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Founder"
        title="Mission">
        When we started this journey 4 years we weren't sure where we'd end up but we believed that if we asked the right questions we could build something with you that had never been seen before
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
