import { useParams } from 'react-router-dom';
import posts from '../data/posts';

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
      <p className='text-lg mb-2 italic text-gray-600'>
        By {post.author} on{' '}
        {new Date(post.publicationDate).toLocaleDateString()}
      </p>
      <p className='text-lg mb-4'>{post.description}</p>
      <p className='whitespace-pre-line'>{post.content}</p>
    </div>
  );
};

export default PostDetails;
