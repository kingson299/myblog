import BlogList from './BlogList';
import useFetch from './useFetch'

const baseURL = "https://my-blog-s-kingsonwong-projects.herokuapp.com";

const Home = () => {

    const { data: blogs, isPending, error }  = useFetch(baseURL+"/blogs");
    
    return ( 
        <div className="homePage">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}  title="All Blogs" />}
        </div>
     );
}
 
export default Home;