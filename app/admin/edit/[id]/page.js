'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecord } from '../../../../context/RecordContext';

export default function EditRecordPage() {
  const { id } = useParams();
  const router = useRouter();
  const { records, updateRecord } = useRecord();

  const [record, setRecord] = useState(null);
  useEffect(() => {
    const found = records.find((r) => r.id === id);
    setRecord(found || null);
  }, [id, records]);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecord(record);
    router.push('/admin/dashboard');
  };

  if (!record) return <p>Record not found</p>;

  return (
    <div className="edit-form-container">
      <h2>Edit Record #{id}</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          value={record.name}
          onChange={(e) => setRecord({ ...record, name: e.target.value })}
          required
        />
        <input
          type="date"
          value={record.date}
          onChange={(e) => setRecord({ ...record, date: e.target.value })}
          required
        />
        <select
          value={record.status}
          onChange={(e) => setRecord({ ...record, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit" className="btn">Update</button>
      </form>
    </div>
  );
}
