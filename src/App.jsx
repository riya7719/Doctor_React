import { useState } from "react";

function App() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doctor && date && time) {
      setBooked(true);
    }
  };

  return (
    <div className="container">
      <h1>Doctor Appointment Booking</h1>

      {!booked ? (
        <form onSubmit={handleSubmit}>
          <label>Select Doctor</label>
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">-- Choose Doctor --</option>
            <option>Dr. Sharma (Cardiologist)</option>
            <option>Dr. Patel (Dentist)</option>
            <option>Dr. Mehta (Dermatologist)</option>
          </select>

          <label>Select Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label>Select Time</label>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">-- Choose Time --</option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>3:00 PM</option>
            <option>5:00 PM</option>
          </select>

          <button type="submit">Book Appointment</button>
        </form>
      ) : (
        <div className="success">
          <h2>✅ Appointment Booked!</h2>
          <p><strong>Doctor:</strong> {doctor}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>
      )}
    </div>
  );
}

export default App;
