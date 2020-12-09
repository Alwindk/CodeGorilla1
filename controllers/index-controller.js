const express = require('express');

module.exports = {
    home,
}

function home(req,res) {
    res.render('index', {
        layout: './layouts/layout'
    })
}