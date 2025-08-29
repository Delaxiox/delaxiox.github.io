// pages/About.js

import React from 'react';
import ConventionEventForm from '../components/ConventionForm';
import EventTimeline from '../components/EventTimeline';
import eventData from './eventData.json';

function FursonaCon() {
  return <>
    <h2 className="center-p">FursonaCon 2025 Hidden Events</h2>
    <br/>
    <EventTimeline events={eventData}/>
    <br/>
    <ConventionEventForm />
  </>;
}

export default FursonaCon;