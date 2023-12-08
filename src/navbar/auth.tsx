import { Routes, Route, Link } from 'react-router-dom';
import AuthUser from '../components/AuthUser';
import Home from '../Pages/Home/home';
import Login from '../components/login';
import CompanySelection from '../Pages/Login/companyselection';
function Auth() {
    // const {token,logout} = AuthUser();
    // const logoutUser = () => {
    //     if(token != undefined){
    //         logout();
    //     }
    // } 
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li> 
                    <li>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>                  
                    <li>
                        <Link className="nav-link" to="/companyselection">Company election</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
                {/* <Routes>
                    <Route path="/companyselection" element={<CompanySelection />} />
                </Routes> */}

            </div>
        </>
    );
}

export default Auth;
