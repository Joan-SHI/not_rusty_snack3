function getPropTypes (obj) {
    let types = []
    let keys = Object.keys(obj)
for (i = 0; i < keys.length; i++) {
    types.push(typeof obj[keys[i]])
}
return types
}

module.exports = getPropTypes