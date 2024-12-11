import { Routes, Route } from 'react-router-dom';
import Home from '../pages/index';
import PostDetails from '../components/postDetails';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:id' element={<PostDetails />} />
    </Routes>
  );
};

export default AppRouter;
