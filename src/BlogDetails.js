import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const baseURL = "https://my-blog-s-kingsonwong-projects.herokuapp.com";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog,error,isPending} = useFetch(baseURL+'/blogs/'+id)
    const history = useHistory()

    const handleClick = () => {
        fetch(baseURL+`/blogs/${blog.id}`,{
            method: 'DELETE'
        }).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;