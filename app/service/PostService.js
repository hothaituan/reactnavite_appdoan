import Api from "../api/Api"


const PostService = {
    getList: async () => {
        return await Api.get('post')
    },
    getId: async (id) => {
        return await Api.get(`post/show/${id}`)
    },
   

}
export default PostService