import { createFileRoute } from '@tanstack/react-router';
import { Lightbulb } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className='flex flex-col md:flex-row items-start justify-between gap-10 p-6 text-blue-600'>
      <div className='flex flex-col items-start gap-4'>
        <Lightbulb className='w-16 h-16 text-yellow-400' />
        <h1 className='text-4xl font-bold text-gray-800'>
          Welcome to IdeaDrop
        </h1>
        <p className='text-gray-600 max-w-xs'>
          Share, explore, and build on the best startup ideas and side hustles.
        </p>
      </div>

      <section className='flex-1'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
          Latest Ideas
        </h2>
        <ul className='space-y-6'>
          <li className='border border-gray-300 rounded-lg shadow p-4 bg-white'>
            <h3 className='text-lg font-bold text-gray-900'>Idea Title 1</h3>
            <p className='text-gray-600 mb-2'>
              This will be the summary for idea 1...
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              {' '}
              Read more →{' '}
            </a>
          </li>
          <li className='border border-gray-300 rounded-lg shadow p-4 bg-white'>
            <h3 className='text-lg font-bold text-gray-900'>Idea Title 2</h3>
            <p className='text-gray-600 mb-2'>
              This will be the summary for idea 1...
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              {' '}
              Read more →{' '}
            </a>
          </li>
          <li className='border border-gray-300 rounded-lg shadow p-4 bg-white'>
            <h3 className='text-lg font-bold text-gray-900'>Idea Title 3</h3>
            <p className='text-gray-600 mb-2'>
              This will be the summary for idea 1...
            </p>
            <a href='#' className='text-blue-600 hover:underline'>
              {' '}
              Read more →{' '}
            </a>
          </li>
        </ul>

        <div className='mt-6'>
          <a
            href='/ideas'
            className='w-full text-center inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition'
          >
            View All Ideas
          </a>
        </div>
      </section>
    </div>
  );
}
