import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Purchase from "./Pages/Purchase/Purchase";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/Dashboard/Layout";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import Payment from "./Pages/Dashboard/Payment";
import RequireAdmin from "./Pages/RequireAuth/RequireAdmin";
import ManageOrder from "./Pages/Dashboard/Admin/ManageOrder";
import Profile from "./Pages/Dashboard/Profile";
import Users from "./Pages/Dashboard/Users";
import NotFound from "./Pages/NotFound/NotFound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";
import AboutUs from "./Pages/AboutUS/AboutUs";
import LatestTool from "./Pages/LatestTool/LatestTool";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import Reviews from "./Pages/Reviews/Reviews";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/latestTool" element={<LatestTool />}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="profile" element={<Profile />}></Route>



          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="add-review" element={<AddReview />}></Route>

          <Route
            path="manage-order"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          ></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="addproduct" element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>}></Route>
          <Route path="manageproducts" element={<ManageProducts />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
