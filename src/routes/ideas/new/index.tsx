import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import type { Idea } from '@/types';

export const Route = createFileRoute('/ideas/new/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div className='space-y-6 '>
      <h1 className='text-3xl font-bold mb-6'>Create New Idea</h1>
      <form className='space-y-4'>
        <div>
          <label
            htmlFor='title'
            className='block text-gray-700 font-medium mb-1'
          >
            Title
          </label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full'
            placeholder='Enter New Idea'
          />
        </div>
      </form>
    </div>
  );
}
