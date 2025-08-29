import React, { useState } from 'react';

const EventTimeline = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  // Convert 24-hour time to 12-hour format for display
  const formatDisplayTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Group events by day and sort by start time
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.day]) {
      acc[event.day] = [];
    }
    acc[event.day].push(event);
    return acc;
  }, {});

  // Sort events within each day by start time
  Object.keys(groupedEvents).forEach(day => {
    groupedEvents[day].sort((a, b) => {
      const timeA = a.startTime.replace(':', '');
      const timeB = b.startTime.replace(':', '');
      return parseInt(timeA) - parseInt(timeB);
    });
  });

  // Define day order
  const dayOrder = ['Friday', 'Saturday', 'Sunday'];
  const orderedDays = dayOrder.filter(day => groupedEvents[day]);

  const toggleExpand = (eventIndex, day) => {
    const eventId = `${day}-${eventIndex}`;
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <div className="timeline-container">
      {orderedDays.map(day => (
        <div key={day} className="timeline-day">
          <h2 className="timeline-day-header">{day}</h2>
          
          {groupedEvents[day].map((event, index) => {
            const eventId = `${day}-${index}`;
            const isExpanded = expandedEvent === eventId;
            
            return (
              <div 
                key={index} 
                className={`timeline-event ${isExpanded ? 'timeline-event-expanded' : ''}`}
                onClick={() => toggleExpand(index, day)}
              >
                <div className="timeline-event-header">
                  <div className="timeline-event-time">
                    {formatDisplayTime(event.startTime)}
                  </div>
                  <div className="timeline-event-name">
                    {event.eventName}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="timeline-event-details">
                    <div className="timeline-detail-row">
                      <span className="timeline-detail-label">Host:</span>
                      <span>{event.telegramHandle}</span>
                    </div>
                    <div className="timeline-detail-row">
                      <span className="timeline-detail-label">Time:</span>
                      <span>{formatDisplayTime(event.startTime)} - {formatDisplayTime(event.endTime)}</span>
                    </div>
                    <div className="timeline-detail-row">
                      <span className="timeline-detail-label">Location:</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="timeline-detail-row">
                      <span className="timeline-detail-label">Details:</span>
                      <span>{event.eventDetails}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;