import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AssetForm = ({ addAsset }) => {
  // State for the form fields
  const [assetName, setAssetName] = useState('');
  const [category, setCategory] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [value, setValue] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields (you can add more validations here)
    if (assetName.trim() === '' || category.trim() === '' || purchaseDate.trim() === '' || value.trim() === '') {
      alert('Please fill out all fields');
      return;
    }

    // Create a new asset object
    const newAsset = {
      name: assetName,
      category,
      date: purchaseDate,
      value,
    };

    // Add the new asset to the list (via a callback function)
    addAsset(newAsset);

    // Clear the form fields
    setAssetName('');
    setCategory('');
    setPurchaseDate('');
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAssetName">
        <Form.Label>Asset Name</Form.Label>
        <Form.Control
          type="text"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          required
          placeholder="Enter asset name"
        />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Software">Software</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPurchaseDate">
        <Form.Label>Purchase Date</Form.Label>
        <Form.Control
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formValue">
        <Form.Label>Asset Value ($)</Form.Label>
        <Form.Control
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder="Enter asset value"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Asset
      </Button>
    </Form>
  );
};

export default AssetForm;
