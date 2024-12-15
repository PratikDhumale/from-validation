import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    destination: "",
    from: "",
    date: "",
    days: "",
    travelMode: "Train",
    people: "",
    whatsapp: "",
    purpose: "Vacation",
    details: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.destination.trim() || !/^[A-Za-z\s]+$/.test(formData.destination)) {
      newErrors.destination = "Destination must contain only letters.";
    }

    if (!formData.from.trim() || !/^[A-Za-z\s]+$/.test(formData.from)) {
      newErrors.from = "Departure city must contain only letters.";
    }

    if (!formData.date || formData.date < today) {
      newErrors.date = "Date cannot be in the past.";
    }

    if (!formData.days || formData.days <= 0) {
      newErrors.days = "Number of days must be a positive number.";
    }

    if (!formData.people || formData.people <= 0) {
      newErrors.people = "Number of people must be a positive number.";
    }

    if (!formData.whatsapp || !/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp number must be exactly 10 digits.";
    }

    if (!formData.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      alert("Itinerary details submitted successfully!");
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <form className="form-container p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Travel Form</h2>

        <label className="form-label">I Want to Go to *</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter Destination"
        />
        {errors.destination && <p className="text-danger">{errors.destination}</p>}


        <label className="form-label">From</label>
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter Departure City"
        />
        {errors.from && <p className="text-danger">{errors.from}</p>}

     
        <label className="form-label">On Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control mb-2"
        />
        {errors.date && <p className="text-danger">{errors.date}</p>}


        <label className="form-label">For Number of Days</label>
        <input
          type="number"
          name="days"
          value={formData.days}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Number of Days"
        />
        {errors.days && <p className="text-danger">{errors.days}</p>}

      
        <label className="form-label">My Preferred Mode of Travel</label>
        <select
          name="travelMode"
          value={formData.travelMode}
          onChange={handleChange}
          className="form-select mb-2"
        >
          <option value="Train">Train</option>
          <option value="Flight">Flight</option>
          <option value="Bus">Bus</option>
        </select>

      
        <label className="form-label">Number of People Who are Travelling</label>
        <input
          type="number"
          name="people"
          value={formData.people}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Number of People"
        />
        {errors.people && <p className="text-danger">{errors.people}</p>}

        
        <label className="form-label">WhatsApp Number</label>
        <input
          type="text"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter WhatsApp Number"
        />
        {errors.whatsapp && <p className="text-danger">{errors.whatsapp}</p>}


        <button type="button" className="btn btn-primary w-100 mb-3">
          Tell Us More
        </button>

        <label className="form-label">Purpose</label>
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="form-select mb-2"
        >
          <option value="Vacation">Vacation</option>
          <option value="Business">Business</option>
          <option value="Family">Family</option>
        </select>

  
        <label className="form-label">Other Details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Any additional details..."
        ></textarea>

        <label className="form-label">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Enter Email"
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <button type="submit" className="btn btn-success w-100">
          Get a Personal Itinerary on WhatsApp
        </button>
      </form>
    </div>
  );
};

export default App;
