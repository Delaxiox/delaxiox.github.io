// pages/About.js

import React from 'react';
import ConventionEventForm from '../components/ConventionForm';
import EventTimeline from '../components/EventTimeline';
import eventData from './eventData.json';
import stampRally from '../public/assets/fsc-stamp-rally.jpg';

function FursonaCon() {
  return <>
    <h2 className="center-p">FursonaCon 2025 Hidden Events</h2>
    <br/>
    <h3 className="center-p">Dealer's Den Stamp Rally</h3>
    <a target="_blank" href={stampRally}><img src={stampRally}/></a>
    <br/>
    <EventTimeline events={eventData}/>
    <br/>
    <ConventionEventForm />
  </>;
}

export default FursonaCon;