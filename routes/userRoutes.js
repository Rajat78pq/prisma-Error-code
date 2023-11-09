import { createUser } from '../Controller/UserController.js';
import {Router} from 'express';
// import { createUser } from '../Controller/UserController';

const router = Router();

router.post("/", createUser);

export default router;