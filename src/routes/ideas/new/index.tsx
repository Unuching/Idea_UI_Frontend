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
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter New Idea'
          />
        </div>
        <div>
          <label
            htmlFor='summary'
            className='block text-gray-700 font-medium mb-1 '
          >
            Summary
          </label>
          <input
            id='summary'
            type='text'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter Idea Summary'
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='block text-gray-700 font-medium mb-1 '
          >
            Description
          </label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Write the descrition of your idea...'
          />
        </div>
        <div>
          <label
            htmlFor='tags'
            className='block text-gray-700 font-medium mb-1 '
          >
            Tags
          </label>
          <input
            id='tags'
            type='text'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Optional tags, comma separated'
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Create Idea
          </button>
        </div>
      </form>
    </div>
  );
}
