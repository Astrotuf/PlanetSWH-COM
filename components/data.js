import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Small mini-games",
  desc: "We believe planetsomewhere can be a powerful medium for attracting developers to blockchain technology and as a potential launchpad for Indie developers",
  image: benefitOneImg,
  bullets: [
    {
      title: "Upcoming Features",
      desc: "Ability to mint certain planetary features as NFTs for whitelisted users.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "In this region around a star, a planet can have surface temperatures consistent with the presence of liquid water. The prime factor determining the planet temperature is its distance from the host star.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "Virtual Stimulations are a great tool to understand these planetary objects that we can’t explore directly – yet.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Economic Sustainability",
  desc: "Long-term the economy will be sustained by adding.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Additional valuable utility",
      desc: "Players will constantly have new goals to reach within the multiverse. Ultimately, the demand for Astrotufs will come from the intrinsic value they can provide to players in the form of competitive, social, and progression based fun and achievements.",
  
    },
    {
      title: "Purely horizontal progression.",
      desc: "Currently in order to progress the main path to progress in Battle is by expanding the size of one’s collection by completing tasks.",
   
    },
    {
      title: "Physical / digital merchandise.",
      desc: "This is already a frequent request from dedicated users who would like more physical and/or digital merchandise to be able to express and show-off their attachment to the platform.",
     
    },
  ],
};

export { benefitOne, benefitTwo };
