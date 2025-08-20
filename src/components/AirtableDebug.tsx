import { useQuestions } from '@/hooks/useQuestions';
import { testAirtableConnection } from '@/services/airtable-test';

export function AirtableDebug() {
  const { data: questions, isLoading, error, refetch } = useQuestions();

  const handleTestConnection = async () => {
    console.log('🧪 Running Airtable connection test...');
    const result = await testAirtableConnection();
    console.log('Test result:', result);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border max-w-sm">
      <h3 className="font-bold mb-2">Airtable Debug</h3>
      <div className="text-sm space-y-1">
        <div>Status: {isLoading ? 'Loading...' : error ? 'Error' : 'Loaded'}</div>
        <div>Questions: {questions?.length || 0}</div>
        {error && (
          <div className="text-red-600">
            Error: {error.message}
          </div>
        )}
        {questions && questions.length > 0 && (
          <div className="text-green-600">
            ✅ Successfully loaded {questions.length} questions
          </div>
        )}
        <div className="mt-2 space-y-1">
          <button 
            onClick={handleTestConnection}
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            Test Connection
          </button>
          <button 
            onClick={() => refetch()}
            className="bg-green-500 text-white px-2 py-1 rounded text-xs ml-1"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
