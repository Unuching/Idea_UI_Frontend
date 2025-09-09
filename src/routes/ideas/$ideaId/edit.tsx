import { createFileRoute, useNavigate, Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
  useMutation,
  useSuspenseQuery,
  queryOptions,
} from '@tanstack/react-query';
import { fetchData } from '@/api/ideas';

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
  return <div>Hello "/ideas/$ideaId/edit"!</div>;
}
