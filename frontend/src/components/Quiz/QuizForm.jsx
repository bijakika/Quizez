import React, { useState } from 'react';

const QuizForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      startTime,
      endTime,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Start Time:
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>
      <label>
        End Time:
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;
