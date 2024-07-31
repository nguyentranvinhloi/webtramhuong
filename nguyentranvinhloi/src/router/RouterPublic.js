import BrandCategory from "../pages/frontend/ProductBrand";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Product from "../pages/frontend/Product";
import ProductSale from "../pages/frontend/Product/ProductSale";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import PostDetail from "../pages/frontend/PostAll/PostDetail";
import ProductCategory from "../pages/frontend/ProductCategory";
import Introduce from "../pages/frontend/Introduce";
import PurchasePolicy from "../pages/frontend/Policy/Purchase policy";
import ReturnPolicy from "../pages/frontend/Policy/Return policy";
import ShippingPolicy from "../pages/frontend/Policy/Shipping policy";
import WarrantyPolicy from "../pages/frontend/Policy/Warranty policy";
import Post from "../pages/frontend/Post";
import PostTopic from "../pages/frontend/PostTopic";
import Login from "../pages/frontend/login/Login";
import Register from "../pages/frontend/register";
import Cart from "../pages/frontend/cart";
import Profile from "../pages/frontend/profile";
import Edit from "../pages/frontend/profile/Edit";
import Setting from "../pages/frontend/profile/ResetPassword";
import Show from "../pages/frontend/profile/Show";
import Search from "../pages/frontend/search/Search";


import Cash from "../pages/frontend/cart/cash";
import Thanks from "../pages/frontend/cart/thanks";

const RouterPublic=[
    {path:"/",component: Home},
    {path:"/san-pham",component: Product},
    {path:"/san-pham/sale",component: ProductSale},
    {path:"/bai-viet",component: Post},
    {path:"/danh-sach-bai-viet/:slug",component: PostTopic},
    {path:"/chi-tiet-san-pham/:slug",component: ProductDetail},
    {path:'/cart',component:Cart},
    {path:"/danh-muc-san-pham/:slug",component: ProductCategory},
    {path:"/thuong-hieu/:slug",component: BrandCategory},
    {path:"/chi-tiet-bai-viet/:slug",component: PostDetail},
    {path:"/bai-viet/:slug",component: PostDetail},
    {path:"/lien-he",component: Contact},
    {path:"/chinh-sach-mua-hang",component: PurchasePolicy},
    {path:"/chinh-sach-doi-tra",component: ReturnPolicy},
    {path:"/chinh-sach-van-chuyen",component: ShippingPolicy},
    {path:"/chinh-sach-bao-hanh",component: WarrantyPolicy},
    {path:"/gioi-thieu",component: Introduce},
    {path:"/login",component: Login},
    {path:"/register",component: Register},
    // {path:"/cart",component: Cart},
    {path:"/profile",component: Profile},
    {path:"/profile/show/:id",component: Show},
    {path:"/edit",component: Edit},
    {path:"/search",component: Search},
    {path:"/setting",component: Setting},
   
    {path:"/cash",component: Cash},
    {path:"/thanks",component: Thanks},
    
];
export default RouterPublic;