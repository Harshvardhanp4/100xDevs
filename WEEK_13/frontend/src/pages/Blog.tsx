import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { AuthorBlog } from "../components/AuthorBlog";


export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <AuthorBlog blog={blog}></AuthorBlog>
    </div>
}