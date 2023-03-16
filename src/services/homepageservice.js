import axios from "axios";

export const getPosts = (tag) => {
    if (tag === null) {
        return axios.get("http://127.0.0.1:5000/posts/");
    } else {
        return axios.get(`http://127.0.0.1:5000/posts/${tag}`);
    }
}
export const getPost = (id) => {
    return axios.get(`http://127.0.0.1:5000/posts/${id}`);
}
export const getTags = () => {
    return axios.get(`http://127.0.0.1:5000/posts/tags`);
}

export const postPost = (obj) => {
    return axios.post(`http://127.0.0.1:5000/posts/`, obj).catch((reason) => { return reason; })
}