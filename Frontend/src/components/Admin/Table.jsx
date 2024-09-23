import React from 'react';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Hotel Name</th>
          <th>Room No.</th>
          <th>Ticket No.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Unsa Mariyam</td>
          <td>unsa@gmail.com</td>
          <td>1234567890</td>
          <td>Hotel Name</td>
          <td>101</td>
          <td>12345</td>
          <td>
            <button>Accept</button>
            <button>Reject</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Laiba Khan</td>
          <td>laiba@gmail.com</td>
          <td>1234567890</td>
          <td>Hotel Name</td>
          <td>101</td>
          <td>12345</td>
          <td>
            <button>Accept</button>
            <button>Reject</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
