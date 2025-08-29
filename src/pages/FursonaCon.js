// pages/About.js

import React from 'react';
import ConventionEventForm from '../components/ConventionForm';
import EventTimeline from '../components/EventTimeline';
import eventData from './eventData.json';
import stampRally from '../public/assets/fsc-stamp-rally.jpg';

function FursonaCon() {
  return <>
    <h1 className="center-p">FursonaCon 2025 Hidden Events</h1>
    <br/>
    <h2 className="center-p">Dealer's Den Stamp Rally</h2>
    <a target="_blank" href={stampRally}><img src={stampRally} className="stampRally"/></a>
    <br/>
    <h2 className="center-p">Attendee Hosted Events</h2>
    <br/>
    <EventTimeline events={eventData}/>
    <br/>
    <ConventionEventForm />
  </>;
}

export default FursonaCon;