import dynamic from 'next/dynamic';
import Layout from '../components/layout';
import AppRouter from '../pages/appRouter';
import '../styles/globals.css';

const AppWithRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false }
);

function MyApp() {
  return (
    <AppWithRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </AppWithRouter>
  );
}

export default MyApp;
