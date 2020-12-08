import express from 'express';
import config from './config'
import apiRouter from './api'
import fs from 'fs'
const server = express();
server.set('view engine','ejs')
server.get("/",(req,res) => {
    res.render('index')
})
server.use('/api',apiRouter);
server.use(express.static('public'))
 server.listen(5000,() => {console.info('Express Server Listening on 5000 port....')});