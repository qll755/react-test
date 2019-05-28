import axios from 'axios'
import { reject, resolve, Promise } from 'q';
const config = {
    baseURL: "http://localhost:3000"
}
class HttpRequest {
    constructor() {
        this.ajax = axios.create(config)
    }
    async GET(url, data = {}) {
        let config = {
            url: url,
            method: 'get',
            params: data
        }
        let result = await this.http(config)
        return result
    }
    async POST(url, data) {
        let config = {
            url: url,
            method: 'get',
            data: data
        }
        let result = await this.http(config)
        return result
    }
    async http(webcon) {
        let ajax = this.ajax
        let result = await ajax(webcon);
        return new Promise((resolve, reject) => {
            if (result.status == 200) {
                // 等待axios发送一次请求后  查看状态码判断是否请求完全成功  然后再通过promise对象的resolve解析axios返回的result在.then的方法中可以取到解析的值
                resolve(result);
                console('请求成功')
            } else {
                console.log('请求失败')
            }
        })
    }
}
let ajax = new HttpRequest();
export default ajax