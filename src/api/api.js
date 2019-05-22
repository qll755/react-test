// 封装axios  生成webapi
import axios from 'axios';
import { Promise, reject } from 'q';
import { Resolver } from 'dns';


class WebApi {
    constructor() {
        this.request = axios
    }
    GET(url, data) {
        var result = this.request({
            url: url,
            method: 'get',
            parmas: data,
        })
        console.log(result)
        this.AWP(result)
    }
    AWP(data) {
        try {
            var promise = new Promise((Resolver, reject) => {
                Resolver(data)
                reject(data)
            })
            var obj = promise.then((data) => {
                if (data.status === 200) {
                    console.log('操作成功   ' + data)
                    return data
                } else {
                    console.log('数据库连接异常！   ' + data.data)
                }
            }).catch((data) => {
                console.log('数据解析失败！！' + data)
            })
        } catch (error) {
            console.log('解析出错')
        }
    }

}

export default WebApi