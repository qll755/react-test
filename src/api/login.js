import ajax from './api';
export const login = async (obj) => {
    var url = `/api/test/where`;
    var result = await ajax.GET(url,obj)
    debugger
}