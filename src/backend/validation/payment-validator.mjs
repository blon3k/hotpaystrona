import {checkEmail, checkIsPositiveNumber, isString, notEmpty} from '../utils/validation-utils.mjs';

export const initializePayment = [
    notEmpty(['amount', 'title_service', 'email']),
    isString(['title_service']),
    checkEmail('email'),
    checkIsPositiveNumber('amount')
]