"use strict"
import { Router } from "express";

const ctrl = require('./home.ctrl');

const router = Router();

router.get('/', ctrl.output.home)

router.post('/', ctrl.post.home)

module.exports= Router;