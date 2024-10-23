import Api from "../api/Api"


const SubCategoryService = {
    getList: async () => {
        return await Api.get('subcategory')
    },
    getId: async (id) => {
        return await Api.get(`subcategory/show/${id}`);
    },
    getListByCategoryId: async (categoryId) => {
        return await Api.get(`subcategory/subcategory?category_id=${categoryId}`);
    },
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
export default SubCategoryService