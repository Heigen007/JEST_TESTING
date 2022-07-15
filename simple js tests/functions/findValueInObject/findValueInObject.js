const findValueInObject = (obj, value) => {
    function recursiveIteration(obj, value) {
        for (var key in obj) {
            if (obj[key] === value) {
                throw new Error("Key found")
            } else if (typeof obj[key] === 'object') {
                recursiveIteration(obj[key], value)
            }
        }
    }

    try {
        recursiveIteration(obj, value)
    } catch {
        return true
    }

    return false
}

module.exports = {findValueInObject}
