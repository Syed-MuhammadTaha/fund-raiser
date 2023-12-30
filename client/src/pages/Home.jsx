import React from 'react'
import Hero from './Hero'
import Navbar from '../components/Navbar'
import ActiveCampaign from './ActiveCampaign';
import PastCampaign from './PastCampaign';
import Impact from './Impact'
import Volunteer from './Volunteer'
import StartFundraiser from './StartFundraiser';
import Footer from './Footer';
export default function Home() {
  return (
    <>
      <Navbar
        links={[
          { href: "/", name: "Home" },
          { href: "/", name: "Donate Now" },
          { href: "/", name: "Past Campaigns" },
          { href: "/", name: "Volunteer" },
          { href: "/", name: "Start a fundraiser" },
          {button: true, path: "/login", btn_name: "Login"}
        ]}
      />
      <Hero />
      <ActiveCampaign />
      <PastCampaign />
      <Impact />
      <Volunteer />
      <StartFundraiser />
      <Footer />
    </>
  );
}
