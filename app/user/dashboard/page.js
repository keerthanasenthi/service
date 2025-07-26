'use client';

import { useRouter } from 'next/navigation';
import { useRecord } from '../../../context/RecordContext';

export default function UserDashboard() {
  const { records } = useRecord();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="user-dashboard">
      {}
      <div className="logout-container">
        <button className="btn logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <h2>User Dashboard</h2>

      <table className="record-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.id}</td>
              <td>{rec.name}</td>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
