import Footer from './Footer'; 
import Nav from './Nav';

const Layout = ({children}) => (
  <>  
    <main>{children}</main> 
    <Nav />
    <br/>
    <Footer />
  </>
);

export default Layout;