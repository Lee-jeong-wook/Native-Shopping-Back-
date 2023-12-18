"use strict"
import { Router } from "express";

const ctrl = require('./home.ctrl');

const router = Router();

router.get('/', ctrl.output.home);

router.post('/item', ctrl.post.item);
router.post('/basket', ctrl.post.basket);
router.post('/like', ctrl.post.like);

module.exports= router;