import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./footer/footer";
import First from './components/Pages/First/First';
import Second from './components/Pages/Second/Second';
import Cart from './components/Pages/Cart/Cart.jsx';


const Layout = () =>{
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/special/:id",
        element:<Second/>
      },
      {
        path:"/product/:id",
        element:<First/>
      },
      {
        path:"/cart/:id",
        element:<Cart/>
      },
      
    ] 
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;






//   import "./App.css";
//   import Header from "./components/Header/Header";
//   import Home from "./components/Home/Home";
// import Product from "./components/products/Product";
// import Slider from "./components/slider/Slider";
// import Special from "./components/special/Special";
// import Testimonials from "./components/testimonials/Testimonials";
// import Footer from "./footer/footer";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       {/* <Slider/>
//       <Product />
//       <Special />
//       <Testimonials /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
