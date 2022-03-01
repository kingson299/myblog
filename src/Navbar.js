import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
                <h1>Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create" style={{
                        color: "white",
                        backgroundColor: '#3557f1',
                        borderRadius: '8px'
                    }}>New Blog</Link>
                </div>
            </nav>


        </div> 
    );
}
 
export default Navbar;