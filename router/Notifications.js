import express from 'express'
import { getAllTokens } from '../controllers/Tokens.js';

const router = express.Router();

router.post('/sendnotification' , getAllTokens)

export default router;

