import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navbar */}
      <header className='bg-primary shadow-lg'>
        <div className='navbar bg-base-100'>
          <div className='flex-1'>
            <button
              className='btn btn-ghost normal-case text-xl'
              onClick={() => navigate('/')}
            >
              POSTS
            </button>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className='flex-1 container mx-auto p-6 text-center'>
        {children}
      </main>

      {/* Footer */}
      <footer className='bg-neutral text-neutral-content py-4 text-center mt-auto'>
        <p>Frontend Exercise</p>
      </footer>
    </div>
  );
};

export default Layout;
