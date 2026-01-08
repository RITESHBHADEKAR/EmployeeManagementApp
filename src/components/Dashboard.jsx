import React, { useEffect, useState } from 'react';
import EmployeeForm from './Form';

export default function Dashboard({ onLogout }) {
  const [employees, setEmployees] = useState(
    () => JSON.parse(localStorage.getItem('emps')) || []
  );
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem('emps', JSON.stringify(employees));
  }, [employees]);

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? e.gender === filter : true)
  );

  return (
    <div className='min-h-screen bg-slate-100 p-6'>
      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold text-slate-800'>
          Employee Dashboard
        </h2>
        <button
          onClick={onLogout}
          className='text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
        >
          Logout
        </button>
      </div>
      <div className='bg-white p-5 rounded-xl shadow-sm flex justify-between items-center mb-8'>
        <p className='text-lg font-medium'>
          Total Employees :{' '}
          <span className='text-blue-600 font-bold'>{employees.length}</span>
        </p>
        <button
          onClick={() => {
            setShow(true);
            setEditing(null);
          }}
          className='bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition'
        >
          + Add Employee
        </button>
      </div>

      {/* Add & Edit Popup */}
      {show && (
        <EmployeeForm
          show={show}
          setShow={setShow}
          editing={editing}
          onSave={(emp) => {
            setEmployees((prev) =>
              editing
                ? prev.map((e) => (e.id === emp.id ? emp : e))
                : [...prev, emp]
            );
            setEditing(null);
            setShow(false);
          }}
          onClose={() => setShow(false)}
        />
      )}

      <div className='bg-white p-4 rounded-xl shadow-sm mb-8'>
        <div className='flex flex-col justify-end md:flex-row gap-4 mb-8'>
          <input
            placeholder='Search by name'
            onChange={(e) => setSearch(e.target.value)}
            className='border px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none w-52'
          />

          <select
            onChange={(e) => setFilter(e.target.value)}
            className='border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400'
          >
            <option value=''>All</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200'>
          {/* Table */}
          <table className='w-full text-sm'>
            <thead className='bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700'>
              <tr>
                <th className='p-4 font-semibold text-left'>Employee ID</th>
                <th className='p-4 font-semibold text-left'>Profile Image</th>
                <th className='p-4 font-semibold text-left'>Full Name</th>
                <th className='p-4 font-semibold text-left'>
                  Date of Birth (DOB)
                </th>
                <th className='p-4 font-semibold text-left'>State</th>
                <th className='p-4 font-semibold text-left'>
                  Active / Inactive Toggle
                </th>
                <th className='p-4 font-semibold text-left'>Gender</th>
                <th className='p-4 font-semibold text-left'>Status</th>
                <th className='p-4 font-semibold text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e, index) => (
                <tr
                  key={e.id}
                  className={`border-t ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  } hover:bg-blue-50`}
                >
                  <td className='p-4'>{e.id}</td>
                  <td className='p-4'>
                    {e.image ? (
                      <img
                        src={e.image}
                        alt='profile'
                        className='w-10 h-10 rounded-full object-cover'
                      />
                    ) : (
                      <div className='w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                        {e.name.charAt(0)}
                      </div>
                    )}
                  </td>
                  <td className='p-4 font-medium'>{e.name}</td>
                  <td className='p-4 text-slate-600'>{e.dob}</td>
                  <td className='p-4 text-slate-600'>{e.state}</td>
                  <td className='p-4'>
                    <input
                      type='checkbox'
                      checked={e.active}
                      onChange={() =>
                        setEmployees((prev) =>
                          prev.map((x) =>
                            x.id === e.id ? { ...x, active: !x.active } : x
                          )
                        )
                      }
                    />
                  </td>
                  <td className='p-4'>{e.gender}</td>
                  <td className='p-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        e.active
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {e.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className='p-4'>
                    <div className='flex gap-2'>
                      <button
                        onClick={() => {
                          setEditing(e);
                          setShow(true);
                        }}
                        className='px-3 py-1 text-xs bg-blue-400 rounded'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          setEmployees((prev) =>
                            prev.filter((x) => x.id !== e.id)
                          )
                        }
                        className='px-3 py-1 text-xs bg-red-500 text-white rounded'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
