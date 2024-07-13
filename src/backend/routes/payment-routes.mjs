import express from 'express';
import PaymentController from '../controllers/payment-controller.mjs';
import {initializePayment} from '../validation/payment-validator.mjs'
import {resolveValidation} from '../middlewares/resolveValidation.mjs';
const router = express.Router();

router.post('/payment/start', initializePayment, resolveValidation, PaymentController.startPayment);
router.post('/payment/notify', PaymentController.notify);

export default router;
