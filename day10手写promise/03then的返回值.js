function myPromise(exe) {
    // 把外层this保存
    const _this = this;
    _this.status = 'pending'
    _this.value = undefined

    // 接受then的两个参数
    _this.callback = {}
    function resolve(value) {
        if (_this.status !== 'pending') return;
        _this.status = 'resolved'
        _this.value = value

        setTimeout(() => {
            _this.callback.onResolve && _this.callback.onResolve(value)
        })
    }

    function reject(errValue) {
        if (_this.status !== 'pending') return;
        _this.status = 'reject'
        _this.value = errValue

        setTimeout(() => {
            _this.callback.onReject && _this.callback.onReject(errValue)
        })

    }


    exe(resolve, reject)
}


myPromise.prototype.then = function (onResolve, onReject) {
    const _this = this;
    // 返回promise对象
    return new myPromise((resolve, reject) => {


        _this.callback.onResolve = function (value) {
            

            try{
                const re = onResolve(value)

                if(re instanceof myPromise){
                    // 返回正确的还是错误的
                    re.then(function(data){
                        resolve(data)
                    },function(reason){
                        reject(reason)
                    })
                }else{
                    resolve(re)
                }
                
            }catch(e){
                reject(e)
            }
        }

        _this.callback.onReject = function (errValue) {
            try{
                const re = onReject(errValue)

                if(re instanceof myPromise){
                    re.then((value) => {
                        resolve(value)
                    }, (reason) => {
                        reject(reason)
                    })
                }else{
                    resolve(re)
                }
                
            }catch(e){
                reject(e)
            }
        }
    })

}