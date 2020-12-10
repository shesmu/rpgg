const req = require('./req');
const dayjs = require('dayjs');

const salaries = [
	['2021-01', '29/01/2021'],
	['2020-12', '31/12/2020'],
	['2021-07', '30/07/2021'],
	['2020-07', '31/07/2020'],
	['2020-05', '29/05/2020'],
	[null, 'Invalid Date'],
	['yesterday', 'Invalid Date']
]

const bonuses = [
	['2020-08', '19/08/2020'],
	['2020-11', '18/11/2020'],
	['2021-05', '19/05/2021'],
	[null, 'Invalid Date'],
	['yesterday', 'Invalid Date']
]

test.each(salaries)(
	'on the month of %s payday should be %s',
	(month, payday) => {
		expect(req.getSalaryDay(month).format("DD/MM/YYYY")).toBe(payday);
	}
)

test.each(bonuses)(
	'on the month of %s bonuses should be paid on %s',
	(month, payday) => {
		expect(req.getBonusDay(month).format("DD/MM/YYYY")).toBe(payday);
	}
)