import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function LayoutAdmin() {
    return (
        <section>
            <Header/>
            <section className="maincontent">
                <div className="container-fluid my-3">
                    <Outlet/>
                </div>
            </section>
            <Footer/>
        </section>
    );
};

export default LayoutAdmin;