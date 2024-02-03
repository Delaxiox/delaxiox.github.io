import Header from './Header';
import Footer from './Footer'; 
import Nav from './Nav';
import BackgroundImage from './BackgroundImage';

const Layout = ({children}) => (
  <>  
    <Header />
    <Nav />
    <main>{children}</main> 
    <BackgroundImage />
    <Footer />
  </>
);

export default Layout;