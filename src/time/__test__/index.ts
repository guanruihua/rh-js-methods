import { test, expect } from 'rh-test'
import * as _ from '../index'
import { logGroup } from '../../util'

test('isSameDate',
	expect(_.isSameDate).setParams(new Date(), new Date()).tobe(true),
	expect(_.isSameDate).setParams(new Date().getTime(), new Date()).tobe(true),
	expect(_.isSameDate).setParams(new Date(), 123).tobe(false),
	expect(_.isSameDate).setParams(123, new Date()).tobe(false),
	expect(_.isSameDate).setParams(123, 123).tobe(false),
)


0 && logGroup('deadline',
	_.deadline(new Date('2023/7/14'), 'year', new Date()),
	24 * 60 * 60
)

0 && logGroup('isDate',
	_.isDate('123'),
	_.isDate(new Date()),
	_.isDate(new Date().getTime()),
)

0 && logGroup('format',
	_.format(new Date()),
	_.format(new Date(), 'yy'),
	_.format(new Date(), 'yyyy'),
	_.format(new Date(), 'yyyy-M'),
	_.format(new Date(), 'yyyy-MM'),
	_.format(new Date(), 'yyyy-MM-D'),
	_.format(new Date(), 'yyyy-MM-DD'),
	_.format(new Date(), 'yyyy-MM-DD H'),
	_.format(new Date(), 'yyyy-MM-DD HH'),
	_.format(new Date(), 'yyyy-MM-DD h'),
	_.format(new Date(), 'yyyy-MM-DD hh'),
	_.format(new Date(), 'yyyy-MM-DD hh:mm:ss'),
	_.format(new Date(), 'yyyy-MM-DD hh:m:s'),
	_.format('fjsdkfj')
)


0 && logGroup('clamp',
	// _.calendar,
	// _.calendar.isLeapYear(),

)