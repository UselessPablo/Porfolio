



import Router from './utils/Router';


function App() {
  return (
      <Router/>       
  );
}

export default App;


// import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
// import Main from './Layout/Main';
// import Registration from '../src/components/Registration';
// import Login from '../src/components/Login';
// import NavBar from './components/NavBar';

// function App() {
  
//   return(
//     <Router/>
//   )
  
  
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main></Main>,
  //     children: [
  //       { path: '/', element: <Registration></Registration> },
  //       { path: '/registration', element: <Registration></Registration> },
  //       { path: '/login', element: <Login></Login> },
  //       { path: '/home', element: <NavBar/>},
  //     ]
  //   }
  // ])
  // return (
  //   <div>
  //     <RouterProvider router={router} basename={process.env.PUBLIC_URL}></RouterProvider>
  //   </div>
  // );

