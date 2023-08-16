import React from 'react';
import './App.css';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './components/Detail';
import Singin from './components/Singin';
import Blog from './components/Blog';
import Admin from './components/Admin';
import Bloglist from './components/Bloglist';
import Blogsil from './components/Blogsil';
import Blogupdate from './components/Blogupdate';
import İletisim from './components/İletisim';
import About from './components/About';
import Text from './components/Text';







const router = createBrowserRouter([
  {
    path:'/', 
    element:<MainLayout/>,
    children:
    [
      {
        path:'/', element:<Home/>
      },
  
      {
        path:'productDetail/:id', element:<Detail/>
      },
      {
        path:'/blog', element:<Blog/>
      },
      {
        path:'/admin', element:<Admin/>
      },
      {
        path:'/bloglist', element:<Bloglist/>
      },
      {
        path:'/contact', element:<İletisim/>
      },
      {
        path:'/about', element:<About/>
      },
      {
        path:'/text/:id', element:<Text/>
      },
      {
        path:'/blogsil/:id/:name', element:<Blogsil/>
      },
      {
        path:'/blogupdate/:id/:imageUrl/:name/:aciklama/:ustbaslik/', element:<Blogupdate/>
      },
   
   
  
    ]
  },
  {
    path:'/login', 
    element:<Login/>,
    
  },
  {
    path:'/singin', 
    element:<Singin/>,
    
  }
]);


function App() {
  return (
    

      <RouterProvider router= {router}/>

  );
}

export default App;
