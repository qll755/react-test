// 测试模块的接口
import ajax from './api'
import { async } from 'q';
export const getData = async () => {
    var url = `/api/test/findAll`
    var result = await ajax.GET(url,{})
    return result.data
}