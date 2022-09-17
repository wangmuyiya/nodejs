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
            _this.callback.onResolve(value)
        })
    }

    function reject(errValue) {
        if (_this.status !== 'pending') return;
        _this.status = 'reject'
        _this.value = errValue

        setTimeout(() => {
            _this.callback.onReject(errValue)
        })

    }


    exe(resolve, reject)
}


myPromise.prototype.then = function (onResolve, onReject) {
    const _this = this;

    _this.callback.onResolve = onResolve
    _this.callback.onReject = onReject



}