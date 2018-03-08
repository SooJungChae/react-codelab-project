import express from 'express';
import account from './account';
import memo from './memo';
<<<<<<< HEAD
import empName from './getInfo';

const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
router.use('/empName', empName);
=======

const router = express.Router();

router.use('/*', (req, res, next) => {
    res.setHeader("Expires", "-1");
    res.setHeader("Cache-Control", "must-revalidate, private");
    next();
});

router.use('/account', account);
router.use('/memo', memo);
>>>>>>> master

export default router;
