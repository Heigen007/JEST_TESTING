const stringArray = (array) => {
    array = array.filter(item => item !== undefined && item !== null)
    return array.map(item => item.toString())
}

module.exports = {stringArray}