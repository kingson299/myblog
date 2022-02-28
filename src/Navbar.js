import React from 'react';

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
                <h1>Blog</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create" style={{
                        color: "white",
                        backgroundColor: '#3557f1',
                        borderRadius: '8px'
                    }}>New Blog</a>
                </div>
            </nav>


        </div> 
    );
}
 
export default Navbar;