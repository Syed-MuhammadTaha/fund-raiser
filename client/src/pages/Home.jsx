import React from 'react'
import Hero from './Hero'
import Navbar from '../components/Navbar'
import ActiveCampaign from './ActiveCampaign';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ActiveCampaign />
    </>
  );
}
