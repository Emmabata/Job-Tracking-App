import { createBrowserRouter, RouterProvider } from  "react-router-dom";
import './App.css';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error
} from './pages'

const router = createBrowserRouter([
  {
    path:"/",
    element:
      <HomeLayout />,
      errorElement: <Error />,
      children: [
        {index: true,
          element: "Landing",
        },
        {
          path:"register",
          element:
            <Register />
        },
        {
          path:"landing",
          element:
            <Landing />
        },
        {
          path:"login",
          element:
            <Login />
        },
        {
          path:"dashboard",
          element:
            <DashboardLayout />
        },
      ]
  },
  
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App