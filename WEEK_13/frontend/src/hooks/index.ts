import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

import type { JSX } from "react/jsx-runtime";


export interface Blog {
    map(arg0: (blog: any) => JSX.Element): import("react").ReactNode;
    content: string
    title: string,
    id: string,
    author: {
        name: string
    }
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return { loading, blog };
}

export const useBlogs = () => {


    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, [])

    return { loading, blogs };
}