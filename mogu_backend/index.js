const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();
// 使用代理
// 跨域问题, => 已解决。 
apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(8080);