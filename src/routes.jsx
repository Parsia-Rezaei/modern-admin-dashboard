import Home from "./pages/Home/Home.jsx";
import NewUsers from "./pages/NewUsers/NewUsers.jsx";
import UsersList from "./pages/UsersList/UsersList.jsx";
import Products from "./pages/Products/Products.jsx";
import Features from "./components/Features/Features.jsx";
import Product from "./pages/Product/Product.jsx";


let routes = [
    {path:'/' , element: <Home />},
    {path:'/usersList' , element: <UsersList />},
    {path:'/newUsers' , element:<NewUsers />},
    {path:"/products" , element:<Products />},
    {path:"/product/:id" , element:<Product />},
    {path:"/features" , element:<Features />},
]

export default routes;