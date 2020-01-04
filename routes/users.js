// 导入MySql模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
var express = require('express');
var router = express.Router();


// 使用DBConfig.js的配置信息创建一个MySql链接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 用户注册
router.get('/reg', function(req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var UserName = param.uid;
        var Password = param.pswd;
        var _res = res;
        connection.query(userSQL.queryAll, function(err, res) {
            var isTrue = false;
            if (err) data.err = err;
            if (res) { //获取用户列表，循环遍历判断当前用户是否存在
                for (var i = 0; i < res.length; i++) {
                    if (res[i].uid == UserName && res[i].pswd == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if (isTrue) {
                data.result = {
                    code: 1,
                    msg: '用户已存在'
                }; //登录成功返回用户信息
            } else {
                connection.query(userSQL.insert, [param.uid, param.pswd], function(err, result) {
                    if (err) { data.err = err; }
                    if (result) {
                        data.result = {
                            code: 200,
                            msg: '注册成功'
                        };
                    } else {
                        data.result = {
                            code: -1,
                            msg: '注册失败'
                        };
                    }
                });
            }


            // 以json形式，把操作结果返回给前台页面
            setTimeout(function() {
                responseJSON(_res, data) //这传了个啥？怎么在前台通过判断data.result.code的值来确定是否注册成功？
            }, 300);
            // responseJSON(_res, data);
            // 释放链接
            connection.release();

        });
    });
});

// 用户登录
router.get('/log', function(req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var UserName = param.uid;
        var Password = param.pswd;
        var _res = res;
        connection.query(userSQL.queryAll, function(err, res, result) {
            var isTrue = false;
            if (res) { //获取用户列表，循环遍历判断当前用户是否存在
                for (var i = 0; i < res.length; i++) {
                    if (res[i].uid == UserName && res[i].pswd == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isLogin = isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if (isTrue) {
                data.userInfo = {};
                data.userInfo.uid = UserName;
                data.userInfo.pswd = Password;
            } //登录成功返回用户信息
            if (result) {
                result = {
                    code: 200,
                    msg: 'succeed'
                };
                data.result = result;
            }
            if (err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            responseJSON(_res, data);

            // 释放链接
            connection.release();

        });
    });
});

module.exports = router;