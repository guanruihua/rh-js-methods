import { test } from 'rh-test'
import { MAX_VALUES_NUMBER } from '../../constants'
import { isNumber } from '..'

test<any, any>('isNumber', isNumber,
	{ name: 'isNumber 1', param: MAX_VALUES_NUMBER, tobe: true },
	{ name: 'isNumber 2', param: '1', tobe: true },
	{ name: 'isNumber 3', param: null, tobe: false },
	{ name: 'isNumber 4', param: NaN, tobe: false },
	{ name: 'isNumber 5', param: undefined, tobe: false },
	{ name: 'isNumber 5-1', param: Infinity, tobe: false },
	{ name: 'isNumber 6', param: -1, tobe: true },
	{ name: 'isNumber 7', param: 10000, tobe: true },
	{ name: 'isNumber 8', param: (5e3), tobe: true },
	{ name: 'isNumber 9', param: (0xff), tobe: true },
	{ name: 'isNumber 10', param: (-1.1), tobe: true },
	{ name: 'isNumber 11', param: (0), tobe: true },
	{ name: 'isNumber 12', param: (1), tobe: true },
	{ name: 'isNumber 13', param: (1.1), tobe: true },
	{ name: 'isNumber 14', param: (10), tobe: true },
	{ name: 'isNumber 15', param: (10.10), tobe: true },
	{ name: 'isNumber 16', param: (100), tobe: true },
	
	{ name: 'isNumber 17', param: ('-1.1'), tobe: true },
	{ name: 'isNumber 18', param: ('0'), tobe: true },
	{ name: 'isNumber 19', param: ('012'), tobe: true },
	{ name: 'isNumber 20', param: ('0xff'), tobe: true },
	{ name: 'isNumber 21', param: ('1'), tobe: true },
	{ name: 'isNumber 22', param: ('1.1'), tobe: true },
	{ name: 'isNumber 23', param: ('10'), tobe: true },
	{ name: 'isNumber 24', param: ('10.10'), tobe: true },
	{ name: 'isNumber 25', param: ('100'), tobe: true },
	{ name: 'isNumber 26', param: ('5e3'), tobe: true },

	{ name: 'isNumber 27', param: (parseInt('012')), tobe: true },
	{ name: 'isNumber 28', param: (parseFloat('01')), tobe: true },
	{ name: 'isNumber 29', param: (Infinity), tobe: false },

	{ name: 'isNumber 30', param: (NaN), tobe: false },
	{ name: 'isNumber 31', param: (null), tobe: false },
	{ name: 'isNumber 32', param: (undefined), tobe: false },
	{ name: 'isNumber 33', param: (''), tobe: false },
	
	{ name: 'isNumber 34', param: ('   '), tobe: false },

	{ name: 'isNumber 35', param: ('foo'), tobe: false },
	
	{ name: 'isNumber 36', param: ([1]), tobe: false },
	{ name: 'isNumber 37', param: ([]), tobe: false },
	
	{ name: 'isNumber 38', param: (function () { }), tobe: false },
	{ name: 'isNumber 39', param: ({}), tobe: false },
)