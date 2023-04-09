import axios from "axios";
const instance = axios.create()
const hostname = process.env.REACT_APP_BACKEND_HOSTNAME;

export const getPosts = (tag) => {
    if (tag === null) {
        return instance.get(`${hostname}/posts/`);
    } else {
        return instance.get(`${hostname}/posts/${tag}`);
    }
}
export const getPost = (id) => {
    return instance.get(`${hostname}/posts/${id}`);
}
export const getTags = () => {
    return instance.get(`${hostname}/posts/tags`);
}

export const postPost = (obj, config) => {
    return instance.post(`${hostname}/posts/`, obj, config).catch((reason) => { return reason.response; })
}

export const postLogin = (obj) => {
    return instance.post(`${hostname}/auth/login`, obj).catch((reason) => { return reason.response })
}
export const getRefresh = (cfg) => {
    return instance.get(`${hostname}/auth/refresh`, cfg).catch(reason => { return reason.response; });
}