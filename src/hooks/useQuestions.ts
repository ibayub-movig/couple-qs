import { useQuery } from '@tanstack/react-query';
import { fetchQuestionsFromAirtable, Question } from '@/services/airtable';

export const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestionsFromAirtable,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (cacheTime renamed to gcTime in v5)
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
