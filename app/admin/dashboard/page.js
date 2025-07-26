'use client';

import { useRouter } from 'next/navigation';
import { useRecord } from '../../../context/RecordContext';
import Link from 'next/link';

export default function AdminDashboard() {
  const { records, deleteRecord } = useRecord();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="top-actions">
        <Link href="/admin/dashboard/create-user">
          <button className="btn create">+ Create User</button>
        </Link>
        <button className="btn logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <table className="record-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.id}</td>
              <td>{rec.name}</td>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
              <td>
                <Link href={`/admin/edit/${rec.id}`}>
                  <button className="btn small">Edit</button>
                </Link>
                <button
                  className="btn small danger"
                  onClick={() => deleteRecord(rec.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
