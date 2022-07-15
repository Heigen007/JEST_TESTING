const axios = require('axios');
// integration with stringArray function
const {stringArray} = require('../stringArray/stringArray.js')

async function getData(){
    try{
        var res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        var userIdsStrings = stringArray(res.data.map(item => item.id))
        return userIdsStrings
    } catch(e) {
        return false
    }
}

module.exports = getData;