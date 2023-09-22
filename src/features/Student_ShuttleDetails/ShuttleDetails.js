import React, { useState } from 'react';
import Shuttle from '../../models/Shuttle';

function shuttledetails(){
    const [shuttle, setShuttle] = useState(new Shuttle(1, "Shuttle A", "D123", 10, "Active"));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShuttle({
          ...shuttle,
          [name]: value,
        });
    };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Shuttle ID:
            <input type="text" name="shuttleID" value={shuttle.shuttleID} onChange={handleChange} />
          </label>
          <br />
          <label>
            Shuttle Name:
            <input type="text" name="shuttleName" value={shuttle.shuttleName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Driver ID:
            <input type="text" name="driverID" value={shuttle.driverID} onChange={handleChange} />
          </label>
          <br />
          <label>
            Number of Seats:
            <input type="number" name="numberOfSeats" value={shuttle.numberOfSeats} onChange={handleChange} />
          </label>
          <br />
          <label>
            Status:
            <input type="text" name="status" value={shuttle.status} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
}
 export default shuttledetails();   
