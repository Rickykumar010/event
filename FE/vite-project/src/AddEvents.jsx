import React, { useState } from 'react';
import './AddEvents.css'; // Import CSS for styling

export default function AddEvents() {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to an API
    console.log('Event Submitted:', event);
    setSubmitted(true);
    // Reset form
    setEvent({
      title: '',
      date: '',
      description: '',
    });
  };

  return (
    <div className="add-events-container">
      <h1>Add Your Event Here</h1>
      {submitted && <p className="success-message">Event added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
            className='eventInput'
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
            className='eventInput'
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
