import Navigation from "../Navigation";
import Sidebar from "../Sidebar";

function Layout({ children }) {
    return (
        <div className="main d-flex">
            <Sidebar />
            <div className=" d-flex flex-column w-100">
                <Navigation />
                {children}
            </div>
        </div>

    )
}
export default Layout;