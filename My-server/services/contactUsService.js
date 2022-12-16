
const Query = require(`../models/contacUsModel`)


async function saveQuery(data){
    return await Query.create({...data})
}

module.exports = {
    saveQuery
}