function add(...rest) {
    return rest.reduce((p, i) => {
        return p + i
    })
}


module.exports.add = add
