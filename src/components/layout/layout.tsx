import { IChildren } from "../container/container";
import Footer from "../footer/footer";
import Menu from "../menu/menu";

const Layout :React.FC<IChildren> = ({children}) => {
    return ( 
        <div className="">
            <Menu/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;