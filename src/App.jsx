// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Root from "./pages/Root";
// import ErrorPage from "./pages/ErrorPage";
// import ProductDetails from "./pages/ProductDetails";



// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Root />,
//     errorElement :<ErrorPage /> ,
//     children: [
//       { path: "", element: <Home /> },

//       { path: "products", element: <Products /> },
//       { path: "products/:id", element: <ProductDetails /> },

//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };

// export default App;


//////////////////////////////////////////////////////////////////


// import React from 'react'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import HomePage from './useParams/HomePage'
// import BookPage from './useParams/BookPage'


// const rounter =   createBrowserRouter([
//   {path: '', element: <HomePage/>},
//   {path:'/book/:id' , element : <BookPage/>}
// ])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={rounter}/>
//     </div>
//   )
// }

// export default App


//////////////////////////////////////////////////////////////////////////////////////////////


// import React from 'react'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import HomePage2 from './useParams/HomePage2'
// import Users from './useParams/Users'

// const dk = createBrowserRouter([
//   {path : '' , element: <HomePage2 />},
//   {path : '/users/:id' , element:<Users />}
// ])

// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={dk} />
//     </div>
//   )
// }
// export default App



/////////////////////////////////////////////////////////////////////////



// import React from 'react'
// import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
// import HomePage3 from './useParams/HomePage3'
// import Items from './useParams/Items'


// const x = createBrowserRouter([
//   {path: "" , element : <HomePage3 />},
//   {path : '/items/:id' , element : <Items />},
  
// ])
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={x}/>
//     </div>
//   )
// }

// export default App





import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {path:'/' , element:<Home/>},
  {path : 'about' , element : <About/>}
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
