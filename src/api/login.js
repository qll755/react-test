import ajax from './api';
export const login = async (obj) => {
    var url = `/api/test/where`;
    var result = await ajax.GET(url, obj)
    if (result.data.length > 0) {

        result = result.data
    } else {
        result = '密码账号错误'
    }
    return result
}