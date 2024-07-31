import './assets/sass/app.scss';
import React, { useState } from "react";
import { BrowserRouter,Route, Routes} from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutSite from './layouts/LayoutSite'
import RouterPrivate from "./router/RouterPrivate";
import RouterPublic from "./router/RouterPublic";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  //const noidung=<h1 className='myclass' title='hello'>Xinchao</h1>
  const [results, setResults] = useState([]);

  const searchProducts = (data) => {
    setResults(data);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {RouterPublic.map(function(router,index){
            const Page = router.component;
            return <Route path={router.path} element={<Page/>}/>
          })}
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          {RouterPrivate.map(function(router,index){
            const Page = router.component;
            return <Route path={router.path} element={<Page/>}/>
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
