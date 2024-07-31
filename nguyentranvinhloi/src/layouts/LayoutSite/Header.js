import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useCart } from 'react-use-cart';


function Header() {
  // const [keyword, setKeyword] = useState('');

  // const handleInputChange = (event) => {
  //   setKeyword(event.target.value);
  // };

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`/api/products?keyword=${keyword}`);
  //     onSearch(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const navigate = useNavigate();
  //   const [users, setUsers] = useState([]);
  //   useEffect(function () {
  //     (async function () {
  //       await userservice.getAll()
  //       .then(function (result) 
  //       {
  //           setUsers(result.data.users);
  //       });
  //     })();
  //   }, []);
  //   const [username, setUser] = useState("");
  //   const [password, setPassword] = useState("");
  // async function Login(event) {
  //   event.preventDefault();
  //   const user = new FormData();
  //   user.append("username", username);
  //   user.append("password", password);
  //   await userservice.Login(user).then(function (res) {
  //     if(res.data.success===true)
  //     {
  //       alert(res.data.message);
  //       navigate("/", { replace: true });
  //     }
  //     else
  //     {
  //       alert(res.data.message);
  //       navigate("/login", { replace: true });
  //     }
  //   });
  // }
  const {
    isEmpty,
    items,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [name, setName] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");
    let token1 = localStorage.getItem("token1");
    if (token) {
      const ten = JSON.parse(token);
      const layten = ten[0].name;
      setName(layten);
    };
    if (token1) {
      const ten = JSON.parse(token1);
      const layten = ten[0].name;
      setName(layten);
    };
  }, []);
  return (
    <section className="header-main border-bottom bg-info">

      <div className="row align-items-center">

        <div className="col-xl-4 col-lg-4 col-md-10 ms-5 me-3">
          {/* <input type="text" className=""
            placeholder="Bạn đang tìm kiếm?" value={keyword} onChange={handleInputChange} /> */}
          <Link to="/search">
            <button className="btn" type="submit" >
              <i className="fa fa-search white"></i>
            </button>
          </Link>

        </div>

        <div className="col-xl-2 col-lg-2 col-md-4 ms-5">
          <Link to="/" className="brand-wrap">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="col-xl-4 col-lg-3 col-md-6 ms-5">
          <div className="widgets-wrap float-md-right">
            {/* <small className="text mt-1">{name}</small> */}
            <div className="widget-header mr-3 ">
              <Link to="/login" className="widget-view">
                <div className="icon-area">
                  <i className="fa fa-user white"></i>
                  <span className="notifyy">Chào {name}</span>
                </div>
              </Link>
            </div>

            <div className="widget-header">
              <Link to="/cart" className="widget-view">
                <div className="icon-area">
                  <i className="fa fa-shopping-cart white"></i>
                  <span className="notify">{totalItems}</span>
                </div>
                {/* <small className="text"> Giỏ hàng </small> */}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
    //------------------------------------------------------------------------------------------
    // <section className=" header-main border-bottom bg-white  ms-2 me-2">
    //   <div className="container">
    //     <div className="row align-items-center">
    //       <div className="col-xl-2 col-lg-3 col-md-10 mt-4 mb-3">
    //         <Link to="/"><img src={logo} alt="" className="img-fluidd" /></Link>
    //       </div>
    //       <div className="col-md-1"></div>

    //       <div className="col-xl-6 col-lg-5 col-md-7 ">
    //         <form action="#" className="search-header">
    //           <div className="input-group w-100">

    //             <input
    //               type="text"
    //               className="form-control"
    //               placeholder="Bạn đang tìm kiếm?"
    //             />

    //             <div className="input-group-append">
    //               <button className="btn btn-primary" type="submit">
    //               <FontAwesomeIcon icon={faSearch} /> Tìm kiếm
    //               </button>
    //             </div>
    //           </div>

    //         </form>
    //       </div>

    //       <div className="col-md-3 collum text-center ms-7">
    //       <div className="text-danger"><Link to="/profile" className="nav-link text-danger">
    //         <FontAwesomeIcon icon={faUser}/><h7> Tài khoản</h7></Link></div>

    //         <div className="text-danger"><Link to="/cart" className="nav-link text-danger">
    //         <FontAwesomeIcon icon={faCartPlus}/><h7> Giỏ hàng</h7></Link></div>

    //         <div className="text-danger"><Link to="/login" className="nav-link text-danger">
    //           <FontAwesomeIcon icon={faHome}/><h7> Đăng nhập</h7></Link></div>
    //         </div>




    //     </div>
    //   </div>
    // </section>
  );
}
export default Header;