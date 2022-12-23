import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import BlogPage from './components/Blog/BlogPage';
import AuthorPage from './components/Authors/AuthorPage';
import Layout from './components/layout/Index';
import ScrollToTop from './components/shared/ScrollToTop';



function App() {

  return (
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/blogs/:slug' element={ <BlogPage/> }/>
          <Route path='/authors/:slug' element={ <AuthorPage/> }/>
        </Routes>
      </Layout>
  );
}

export default App;
