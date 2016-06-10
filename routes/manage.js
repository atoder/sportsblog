var express = require('express');
var router = express.Router();


router.get('/articles', function(req, res, next) {
  res.render('manage_articles', { title: 'Manage Articles' });
});

router.get('/categories', function(req, res, next) {
  res.render('manage_categories', { title: 'Manage Categories' });
});

router.get('/articles/add', function(req, res, next) {
  res.render('add_article', { title: 'Add Article' });
});

router.get('/categories/add', function(req, res, next) {
  res.render('add_category', { title: 'Add Category' });
});

router.get('/articles/edit/:id', function(req, res, next) {
  res.render('edit_article', { title: 'Edit Article' });
});

router.get('/categories/edit/:id', function(req, res, next) {
  res.render('edit_category', { title: 'Edit Category' });
});


module.exports = router;
