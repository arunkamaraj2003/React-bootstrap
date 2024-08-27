import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MaintenanceSchedule = ({ addMaintenanceLog }) => {
  const [assetName, setAssetName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = { assetName, date, type, notes };
    addMaintenanceLog(newLog);
    setAssetName('');
    setDate('');
    setType('');
    setNotes('');
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
      <Form.Group controlId="maintenanceDate">
        <Form.Label>Maintenance Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="maintenanceType">
        <Form.Label>Type of Maintenance</Form.Label>
        <Form.Control
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Log Maintenance
      </Button>
    </Form>
  );
};

export default MaintenanceSchedule;
