import { useNavigate } from 'react-router-dom';
import posts from '../data/posts';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Posts</h1>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => navigate(`/post/${post.id}`)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
