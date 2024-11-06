// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Pages
import MainLayout from './pages/layout';
import HomePage from './pages/home';

// Store
import queryClientStore from './lib/provider/query-client.store';

const App = () => {
  return (
    <QueryClientProvider client={queryClientStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
