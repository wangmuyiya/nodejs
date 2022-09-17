function myPromise(exe){
    // 把外层this保存
    const _this = this;
    _this.status = 'pending'
    _this.value = undefined

    function resolve(value){
        if(_this.status !== 'pending') return;
        _this.status = 'resolved'
        _this.value = value
    }

    function reject(errValue){
        if(_this.status !== 'pending') return;
        _this.status = 'reject'
        _this.value = errValue
    }


    exe(resolve,reject)
}