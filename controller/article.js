const xss = require('xss')
const { exec } = require('../db/mysql')
const moment = require('moment')

const getList = () => {
    let sql = `select * from articles where 1=1`
    // sql += `order by createtime desc;`
    // 返回promise
    return exec(sql)
}

const newArticle = (articleData = {}) => {
    const type = (articleData.type)
    const title = xss(articleData.title)
    const content = articleData.content
    const create_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    const sql = `
        insert into articles (type, title, content, create_time)
        values ('${type}','${title}','${content}','${create_time}');
    `

    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

const delArticle = (id) => {
    // id就是要删除文章的id
    const sql = `delete from articles where id='${id}';`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    newArticle,
    delArticle
}