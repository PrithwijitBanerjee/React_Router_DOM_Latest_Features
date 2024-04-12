import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
// import App from './App.jsx'
// import './index.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { getAllPosts } from './utils/getAllPosts'
import PostDetail from './pages/PostDetail'
import { getSinglePostData } from './utils/getSinglePostData'

// Array Of Objects Format Route ...
// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'contactUs',
//         element: <Contact />
//       },
//       {
//         path: '/about',
//         element: <About />
//       }
//     ]
//   }
// ]);


// JSX Route ....
const route1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<NotFound />}>
      <Route path='' element={<Home />} loader={() => getAllPosts('posts')} />
      <Route path='about' element={<About />} />
      <Route path='contactUs' element={<Contact />} />
      <Route path='/postDetail/:id'
        element={<PostDetail />}
        loader={({ params }) => getSinglePostData('posts', params?.id)} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route1} />
  </React.StrictMode>,
)
