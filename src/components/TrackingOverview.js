import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TrackingOverview = ({ addTrackingEntry }) => {
  const [assetName, setAssetName] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { assetName, status, location, checkInDate };
    addTrackingEntry(newEntry);
    setAssetName('');
    setStatus('');
    setLocation('');
    setCheckInDate('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="assetName">
        <Form.Label>Asset Name</Form.Label>
        <Form.Control
          type="text"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="checkInDate">
        <Form.Label>Last Check-In Date</Form.Label>
        <Form.Control
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add Entry
      </Button>
    </Form>
  );
};

export default TrackingOverview;
