import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '../common/components/Footer';
import { Header } from '../common/components/Header';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} key={router.route} />
      <Footer />
    </QueryClientProvider>
  );
}
