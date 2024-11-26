import React, { useState } from 'react';

function CheckoutForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // You can handle form submission here
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Checkout</h2>
      <form id="checkoutForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" className="form-control" id="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" value={form.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select className="form-control" id="paymentMethod" value={form.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
