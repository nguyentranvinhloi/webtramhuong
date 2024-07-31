import Header from './Header'
import Menu from './Menu'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function LayoutSite() {
    return (
        <section className='bg-light'>
            <Header/>
            <Menu/>
            <Outlet />
            <Footer/>
        </section>
    );
}
export default LayoutSite;
