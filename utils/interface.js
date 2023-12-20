/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */
// import envVariables from "@utils/envVariables.js"
// import {b64EncodeUnicode, b64DecodeUnicode} from "@utils/base64.js"
// import store from "../../store/index.js"
// import {goToLogin} from "../functions";

let app = getApp()
let baseUrl = app && app.globalData && app.globalData.baseUrl ? app.globalData.baseUrl + '/api' : envVariables.BASE_URL
uni.setStorageSync('baseUrl', baseUrl)
export default {
    /* 默认配置项 */
    config     : {
        baseUrl : baseUrl,
        header  : {
            'Content-Type' : 'application/json;charset=UTF-8',
            'Authorization': ``,
        },
        data    : {},
        method  : "GET",
        dataType: "json",
        /* 如设为json，会对返回的数据做一次 JSON.parse */
        responseType: "text",
        success(){
        },
        fail(){
        },
        complete(){
        }
    },
    interceptor: {
        request : null,
        response: null
    },
    request(options){
        if(!options){
            options = {}
        }
        /* 请求地址 */
        options.baseUrl = options.baseUrl || this.config.baseUrl
        /* 数据格式 */
        options.dataType = options.dataType || this.config.dataType
        /* 请求地址 */
        options.url = options.baseUrl + options.url
        /* 请求数据 */
        options.data = options.data || {}
        /* 请求方式 */
        options.method = options.method || this.config.method
        /* 请求头合并 */
        // console.log(options.header, this.config.header)
        options.header = Object.assign({}, this.config.header, options.header || {})
        /* 是否正在加载 */
        options.isLoading = options.isLoading || false
        /* 加载信息 */
        options.loadingMsg = options.loadingMsg || "正在加载请稍后..."
        /* 是否为刷新token */
        options.refreshToken = options.refreshToken

        const token = uni.getStorageSync('auth-token')
        if(token && !options.refreshToken) options.header['Blade-Auth'] = `bearer ${token}`
        if(options.refreshToken) delete options.header['Blade-Auth']
        // console.log(token)
        let authCount = 0
        return new Promise((resolve, reject) => {
            let _config = null
            if(options.isLoading) uni.showLoading({
                title: options.loadingMsg
            })
            options.complete = (response) => {
                let statusCode = response.statusCode || response.code
                response.config = _config
                if(process.env.NODE_ENV === 'development'){
                    if(statusCode === 200){
                        // console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
                    }
                }
                /* 请求后拦截器 */
                if(this.interceptor.response){
                    let newResponse = this.interceptor.response(response)
                    if(newResponse){
                        response = newResponse
                    }
                }else{
                    this.interceptor.response = async(response) => {
                        let statusCode = response.statusCode || response.code
                        let reg = new RegExp(options.baseUrl, 'gi')
                        let url = options.url.replace(reg, '')
                        if(statusCode === 401){
                            // store.commit('loginout');
                            // uni.removeStorageSync("auth-token")
                            // uni.removeStorageSync("auth-refreshToken")
                            // uni.removeStorageSync("auth-userinfo")
                            // uni.showToast({
                            //     title   : "身份信息过期，请重新登陆",
                            //     duration: 500,
                            //     icon    : 'none',
                            //     success(){
                            //         goToLogin('reLogin')
                            //     }
                            // })
                            // return
                        }else{
                            return response
                        }
                    }
                }
                let newResponse = this.interceptor.response(response)
                if(newResponse){
                    response = newResponse
                }
                response.then(res => {
                    // 统一的响应日志记录
                    // _reslog(res)
                    if(!res){
                        return reject(res);
                    }
                    let resStatusCode = res.statusCode || res.code
                    if(options.isLoading) uni.hideLoading();
                    if(resStatusCode === 200){ //成功
                        return  resolve(res.data);
                    }else{
                        if(res){
                            let title = res.errMsg
                            if(res.data) title = res.data.error_description || res.data.msg || res.data.message
                            // #ifdef IS_DEBUG
                            if(title){
                                uni.showToast({
                                    icon: 'none',
                                    title
                                })
                            }
                            // #endif
                        }
                        return  reject(res);
                    }
                })
            }

            _config = Object.assign({}, this.config, options)
            _config.requestId = new Date().getTime()

            /* 请求前拦截器 */
            if(this.interceptor.request){
                this.interceptor.request(_config)
            }

            // 统一的请求日志记录
            _reqlog(_config)

            if(process.env.NODE_ENV === 'development'){
                // console.log("【" + _config.requestId + "】 请求地址：" + _config.url)
                if(_config.data){
                    // console.log("【" + _config.requestId + "】 请求参数：" + JSON.stringify(_config.data))
                }
            }

            uni.request(_config);
        });
    },
    get(url, data, options){
        if(!options){
            options = {}
        }
        options.url = url
        options.data = data
        options.method = 'GET'
        return this.request(options)
    },
    post(url, data, options){
        if(!options){
            options = {}
        }
        options.url = url
        options.data = data
        options.method = 'POST'
        return this.request(options)
    },
    put(url, data, options){
        if(!options){
            options = {}
        }
        options.url = url
        options.data = data
        options.method = 'PUT'
        return this.request(options)
    },
    delete(url, data, options){
        if(!options){
            options = {}
        }
        options.url = url
        options.data = data
        options.method = 'DELETE'
        return this.request(options)
    },
}


/**
 * 请求接口日志记录
 */
function _reqlog(req){
    if(process.env.NODE_ENV === 'development'){
        // console.log("【" + req.requestId + "】 请求地址：" + req.url)
        if(req.data){
            // console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
        }
    }
    //TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res){
    let _statusCode = res.statusCode;
    if(process.env.NODE_ENV === 'development'){
        if(res.config){
            console.log("【" + res.config.requestId + "】 请求地址：" + res.config.url)
            if(res.config.data){
                console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
            }
            console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
        }
    }
    //TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
    switch(_statusCode){
        case 200:
            break;
        case 401:
            break;
        case 404:
            break;
        default:
            break;
    }
}

/* 请求重试 */
async function doRequest(response, url){
    let _this = module.exports.default
    const refresh_token = uni.getStorageSync('auth-refreshToken')
    // console.log(refresh_token)
    if(!refresh_token){

        uni.showToast({
            title   : "身份信息过期，请重新登陆",
            icon    : 'none',
            duration: 500,
            success(){
                goToLogin();
            }
        })
        return false
    }
    const res = await _this.request({
        url   : `/blade-auth/oauth/token?grant_type=refresh_token&scope=all&refresh_token=${refresh_token}`,
        method: 'POST',
        header: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${b64EncodeUnicode('wechat:wechat_secret')}`,
        },

        refreshToken: true,
        success(res){
            if(res.statusCode === 401){
                uni.removeStorageSync("auth-token")
                uni.removeStorageSync("auth-refreshToken")
                uni.removeStorageSync("auth-userinfo")
                uni.showToast({
                    title   : "身份信息过期，请重新登陆",
                    icon    : 'none',
                    duration: 2000,
                    success(){
                        goToLogin();
                    }
                })
            }
        }
    })
    // console.log('refresh', res)
    if(res && res.access_token){
        let config = response.config
        // console.log(Object.assign(config.header, {
        // 	'Content-Type': 'application/json;charset=UTF-8',
        // }), '重试')
        uni.setStorageSync("auth-token", res.access_token);
        if(url === '/xianboss-decorate/miropage/detail' && config.data.type === undefined){
            config.data.type = 1
        }
        // if (url === '/blade-user/user-tenant' && config.data.account === undefined) {
        // 	config.data.account = uni.getStorageSync('auth-userinfo').account
        // }
        const resold = await _this.request({
            url,
            header: Object.assign(config.header, {
                'Content-Type': 'application/json;charset=UTF-8',
            }),
            data  : config.data,
            method: config.method
        })
        uni.hideLoading()
        return {
            code: resold.code,
            data: resold
        }
    }else{ //这个时候状态码是 500
        // uni.removeStorageSync("auth-token")
        // uni.removeStorageSync("auth-refreshToken")
        // uni.removeStorageSync("auth-userinfo")
        // window.authCount++;
        // uni.redirectTo({
        //     url: '/pages-user/auth/wxlogin?f='+ b64EncodeUnicode(location.href)
        // });
        uni.showToast({
            title   : "身份信息过期，请重新登陆",
            duration: 500,
            icon    : 'none',
            success(){
                goToLogin('reLogin');
            }
        })
        return false
    }
}
