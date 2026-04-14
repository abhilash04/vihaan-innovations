import axios from "axios";

export const invokeApi = (url, params) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        }
        const response = axios.post(url, params, { headers });
        return response;
    } catch (error) {
        console.log(error);
    }
}


export const apiList = {
    getMetaDataBySite: "/getMetaDataBySite",

    //blog
    getArticles: "/getArticles",
    getArticleByOgUrl: "/getArticleByOgUrl",
}
