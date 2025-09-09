import { createFileRoute, useNavigate, Link } from '@tanstack/react-router';
import React, { useState } from 'react';
import {
  useMutation,
  useSuspenseQuery,
  queryOptions,
} from '@tanstack/react-query';
import { fetchData, updateIdea } from '@/api/ideas';

const ideaqueryOptions = (id: string) =>
  queryOptions({
    queryKey: ['idea', id],
    queryFn: () => fetchData(id),
  });

export const Route = createFileRoute('/ideas/$ideaId/edit')({
  component: IdeaEditPage,
  loader: async ({ params, context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideaqueryOptions(params.ideaId));
  },
});

function IdeaEditPage() {
  const { ideaId } = Route.useParams();
  const navigate = useNavigate();
  const { data: idea } = useSuspenseQuery(ideaqueryOptions(ideaId));

  const [title, setTitle] = useState(idea.title);
  const [summary, setSummary] = useState(idea.summary);
  const [description, setDescription] = useState(idea.description);
  const [tagInputs, setTagInpits] = useState(idea.tags.join(', '));

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () =>
      updateIdea(ideaId, {
        title,
        summary,
        description,
        tags: tagInputs
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
      }),
    onSuccess: () => {
      navigate({ to: '/ideas/$ideaId', params: { ideaId } });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync();
  };

  return (
    <div className='space-y-6 '>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold '>Edit Idea</h1>
        <Link
          to='/ideas/$ideaId'
          params={{ ideaId }}
          className='text-sm text-blue-600 hover:underline'
        >
          Back to Idea
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4'>
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
            value={tagInputs}
            onChange={(e) => setTagInpits(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Optional tags, comma separated'
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            disabled={isPending}
            className='block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isPending ? 'Updating...' : 'Upadte Idea'}
          </button>
        </div>
      </form>
    </div>
  );
}
