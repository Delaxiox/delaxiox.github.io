import React, { useState } from 'react';

const ConventionEventForm = () => {
  const [formData, setFormData] = useState({
    telegramHandle: '',
    eventName: '',
    day: '',
    startTime: '',
    endTime: '',
    location: '',
    eventDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.telegramHandle.trim()) errors.push('Telegram handle is required');
    if (!formData.eventName.trim()) errors.push('Event name is required');
    if (!formData.day) errors.push('Day is required');
    if (!formData.startTime) errors.push('Start time is required');
    if (!formData.endTime) errors.push('End time is required');
    if (!formData.location.trim()) errors.push('Location is required');
    if (!formData.eventDetails.trim()) errors.push('Event details are required');
    
    if (formData.telegramHandle && !formData.telegramHandle.startsWith('@')) {
      errors.push('Telegram handle must start with @');
    }
    
    return errors;
  };

  const formatMessage = () => {
    console.log(formData);
    const message = "Event: " + formData.eventName + " - Host: " + formData.telegramHandle + " - Day: " + formData.day + " - Time: " + formData.startTime + " - " + formData.endTime + " - Location: " + formData.location + " - Details: " + formData.eventDetails;
    
    console.log(message);
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setSubmitStatus({ type: 'error', message: errors.join(', ') });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const message = formatMessage();
      console.log(message);
      const apiUrl = `https://api.callmebot.com/text.php?user=@delaxiox&text=${message}`;
      
      console.log('CallMeBot URL:', apiUrl);

      setSubmitStatus({ 
        type: 'success', 
        message: 'Event submitted successfully.' 
      });
      
      setFormData({
        telegramHandle: '',
        eventName: '',
        day: '',
        startTime: '',
        endTime: '',
        location: '',
        eventDetails: ''
      });

    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit event. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-field">
          <label className="form-label">Telegram Handle</label>
          <input
            type="text"
            name="telegramHandle"
            value={formData.telegramHandle}
            onChange={handleInputChange}
            placeholder="@yourusername"
            className="form-input"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            placeholder="Name of your event"
            className="form-input"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Day</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="">Select day</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Time</label>
          <div className="time-inputs">
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Where is your event?"
            className="form-input"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Event Details</label>
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleInputChange}
            rows={4}
            placeholder="Describe your event, activities, requirements, etc."
            className="form-textarea"
            required
          />
        </div>

        {submitStatus && (
          <div className={`form-status ${submitStatus.type === 'success' ? 'form-status-success' : 'form-status-error'}`}>
            {submitStatus.message}
          </div>
        )}

        <div
          onClick={handleSubmit}
          className={`form-submit ${isSubmitting ? 'form-submit-disabled' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Event'}
        </div>
      </div>

      <p className="form-disclaimer">
        All fields are required. Your event will be reviewed and added to the bulletin.
      </p>
    </div>
  );
};

export default ConventionEventForm;