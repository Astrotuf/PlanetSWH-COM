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
        <title>PlanetSWH - VR Integrated Planetary Metaverse.</title>

       
        <link rel="icon" href="./img/favicon.ico" />
        <meta name="description" content="We're building a world where money is liquid and decentralized, where our future is more automated and scalable than anything we can imagine today, and where every person has access to their own Metaverse." class="metadata" />
        <link rel="apple-touch-icon" href="./img/icon192.png" />
        <meta property="og:type" content="website" class="metadata" />
        <meta property="og:site_name" content="PlanetSWH" class="metadata" />
        <meta property="og:title" content="planetsomewhere.com" class="metadata" />
        <meta property="og:description"
      content="We're building a world where money is liquid and decentralized, where our future is more automated and scalable than anything we can imagine today, and where every person has access to their own Metaverse."
      class="metadata" />

    <meta property="og:image" content="https://planetsomewhere.com/preview.png" class="metadata" />
    <meta property="og:image:url" content="https://planetsomewhere.com/img/preview.png " class="metadata" />
    <meta property="og:image:secure_url" content="https://planetsomewhere.com/img/preview.png " class="metadata" />
    <meta property="og:image:width" content="900" class="metadata" />
    <meta property="og:image:height" content="450" class="metadata" />

    <meta name="twitter:card" content="summary_large_image" class="metadata" />
    <meta name="twitter:site" content="@planet_swh" class="metadata" />
    <meta name="twitter:title" content="planetsomewhere.com" class="metadata" />
    <meta
      name="twitter:description"
      content="We're building a world where money is liquid and decentralized, where our future is more automated and scalable than anything we can imagine today, and where every person has access to their own Metaverse."
      class="metadata" />
    <meta name="twitter:image" content="https://planetsomewhere.com/img/preview.png " class="metadata" />

    
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
        We are currently working with modelers to implement the results of the calculations in the models. In doing so, we will be able to use determine the key parameters in characterizing these exoplanets and finding the right conditions for habitability. 
        and unlock in-depth storylines
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Founder"
        title="Mission">
        When we started this journey 4 years we weren't sure where we'd end up but we believed that if we asked the right questions we could build something with you that had never been seen before.
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
