import { QueryClient } from '@tanstack/react-query';

const queryClientStore = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export default queryClientStore;
