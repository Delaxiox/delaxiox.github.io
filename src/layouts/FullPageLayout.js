import Footer from './Footer'; 
import Nav from './Nav';
import BackgroundImage from './BackgroundImage';

const Layout = ({children}) => (
  <>  
    <main>{children}</main> 
    <Nav />
    <br/>
    <Footer />
  </>
);

export default Layout;