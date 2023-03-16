import ApiManager from "./ApiManager";

export default user_login = async data => {
    try {
        const result = await ApiManager('bussiness-user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return result;
    } catch (error) {
        return error.response.data;
    }
};
