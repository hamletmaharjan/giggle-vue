import axios from 'axios';


const ROOT_URL = 'http://localhost:8000/api';


export default{

    fetchArticles(token) {
        const url = `${ROOT_URL}/articles`;
        return axios.get(url,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },

    fetchSingleArticle(token,id) {
        const url = `${ROOT_URL}/articles/${id}`;
        return axios.get(url,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    },

    postComment(token,articleId,comment) {
        const url = `${ROOT_URL}/articles/${articleId}/comments`;
        const formData = new FormData();
        formData.append('comment',comment);

        return axios.post(url,formData,
            {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}