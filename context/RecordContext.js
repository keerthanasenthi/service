'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { initialRecords } from '../lib/data'; 

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('service-records');
    if (stored) {
      setRecords(JSON.parse(stored));
    } else {
      setRecords(initialRecords); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('service-records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord) => setRecords((prev) => [...prev, newRecord]);
  const deleteRecord = (id) =>
    setRecords((prev) => prev.filter((r) => r.id !== id));
  const updateRecord = (updated) =>
    setRecords((prev) =>
      prev.map((r) => (r.id === updated.id ? updated : r))
    );

  return (
    <RecordContext.Provider
      value={{ records, addRecord, deleteRecord, updateRecord, setRecords }}
    >
      {children}
    </RecordContext.Provider>
  );
};

export const useRecord = () => useContext(RecordContext);
