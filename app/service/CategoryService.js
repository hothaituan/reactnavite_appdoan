import Api from "../api/Api"


const CategoryService = {
    getList: async () => {
        return await Api.get('category')
    },
    // getId: async (id) => {
    //     return await Api.get(`category/show/${id}`);
    // },
    // getList0: async () => {
    //     return await Api.get('category/indexget0');
    // },

    // add: async (category) => {
    //     return await Api.post('category/store', category);
    // },

    // restore: async (id) => {
    //     return await Api.get(`category/restore/${id}`);
    // },
    // update: async (id, category) => {
    //     return await Api.post(`category/update/${id}`, category); // Sử dụng POST thay vì PUT
    // },


    // delete: async (id) => {
    //     return await Api.get(`category/delete/${id}`);
    // },
    // destroy: async (id) => {
    //     return await Api.delete(`category/destroy/${id}`);
    // },

}
export default CategoryService