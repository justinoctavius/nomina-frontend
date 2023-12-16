import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './pages/app';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />;
    </QueryClientProvider>
  );
}

export default App;
