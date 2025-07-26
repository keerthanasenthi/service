'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRecord } from '../../../../context/RecordContext';

export default function CreateUserPage() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const router = useRouter();
  const { addRecord } = useRecord();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      id,
      name,
      date,
      status,
    };

    addRecord(newRecord);
    router.push('/admin/dashboard');
  };

  return (
    <div className="form-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
