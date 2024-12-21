import React from 'react';

export default function ContactUs() {
  return (
    <section className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone 
          </label>
          <input type="phone" className="form-control" id="phone" placeholder="Your phone no" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Your email" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
