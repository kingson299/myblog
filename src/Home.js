import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
    }, []);//[] means only run initial render , [variable] means only run when this "variable" change

    return ( 
        <div className="homePage">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}  title="All Blogs" />}
        </div>
     );
}
 
export default Home;