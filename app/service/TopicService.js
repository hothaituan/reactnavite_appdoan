import Api from "../api/Api"


const TopicService = {
    getList: async () => {
        return await Api.get('topic')
    },
    getId: async (id) => {
        return await Api.get(`topic/topics/${id}/posts`)
    },


}
export default TopicService