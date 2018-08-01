import Header from "./Header";
import Footer from "./Footer";



const Layout = props => (
    <div className="site_wrapper">
      <Header mainNav={props.mainNav}/>
      {props.children}
      <Footer />
    </div>
);

export default Layout;
