import React, { useEffect, useState } from 'react';
import { STATES } from '../data';

export default function EmployeeForm({ editing, onSave, onClose, show }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [state, setState] = useState('');
  const [active, setActive] = useState(true);
  const [image, setImage] = useState('');
  useEffect(() => {
    if (editing) {
      setName(editing.name || '');
      setGender(editing.gender || 'Male');
      setDob(editing.dob || '');
      setState(editing.state || '');
      setActive(editing.active ?? true);
      setImage(editing.image || '');
    }
  }, [editing]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    onSave({
      id: editing ? editing.id : Date.now(),
      name,
      gender,
      dob,
      state,
      active,
      image,
    });
    onClose();
  };

  if (!show) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative'>
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-400 hover:text-gray-600'
        >
          ✕
        </button>
        <form onSubmit={submit} className='space-y-4'>
          <h3 className='text-xl font-semibold text-center'>
            {editing ? 'Edit' : 'Add'} Employee
          </h3>
          <input
            value={name}
            required
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
            className='w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500'
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500'
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            type='date'
            value={dob}
            required
            onChange={(e) => setDob(e.target.value)}
            className='w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500'
          />
          <select
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
            className='w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500'
          >
            <option value=''>Select State</option>
            {STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div>
            <input type='file' accept='image/*' onChange={handleImage} />
            {image && (
              <img
                src={image}
                alt='preview'
                className='mt-2 w-16 h-16 rounded-full object-cover'
              />
            )}
          </div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            Active
          </label>
          <div className='flex justify-end gap-3 pt-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 border rounded'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-5 py-2 bg-blue-500 text-white rounded'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
