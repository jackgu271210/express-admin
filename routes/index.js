var express = require('express');
var router = express.Router();
const {
  getList,
  newArticle
} = require('../controller/article')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/welcome', (req, res, next) => {
  res.render('welcome');
});

// router.get('/article-list', (req, res, next) => {
//   let movies =  [{
//     id:1,
//     type:'斗战胜佛之大圣之泪',
//     title: '西游释厄传',
//     content:'成为斗战胜佛的孙悟空竟被怨灵蛊惑，唐三藏遭遇灭顶之灾！危急关头，孙悟空揪出怨灵源头，却发现她竟是与自己有三百年缘分的天人界女神——“幸运星”！为了找出“幸运星”黑化的原因，拯救唐三藏，孙悟空踏上了一场回到过去之旅，却最终流下了一滴眼泪。大圣之泪，为何而流，为谁而流？',
//     create_time:'2020-05-55 02:45:26'
//   }];
//   res.render('article-list', {
//     movies: movies
//   });
// });

router.get('/article-list', (req, res, next) => {
  const result = getList()
  return result.then(listData => {
    res.render('article-list', {
      movies: listData
    });
  })
});

router.get('/articleadd.html', (req, res, next) => {
  res.render('articleadd');
});
module.exports = router;
