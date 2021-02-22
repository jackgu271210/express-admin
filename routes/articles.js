var express = require('express')
var router = express.Router()
const {
    getList,
    newArticle,
    delArticle
} = require('../controller/article')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/list', (req, res, next) => {
    const result = getList()
    return result.then(listData => {
        res.json(
            new SuccessModel(listData)
        )
        // res.send(listData)
    })
})

router.post('/new', (req, res, next) => {
    const result = newArticle(req.body)
    return result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
})

router.post('/del', (req, res, next) => {
    const result = delArticle(req.query.id)
    return result.then(val => {
        if (val) {
            res.json(
                new SuccessModel()
            )
        } else {
            res.json(
                new ErrorModel('删除文章失败')
            )    
        }
    })
})

module.exports = router;