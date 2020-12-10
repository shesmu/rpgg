const dayjs = require("dayjs");
const req = require("./req");
const { Command } = require('commander');
const payroll = new Command();

payroll.version('1.0.0');
let format = "DD/MM/YYYY";

payroll
	.option('-m, --month <month>', 'eg.2020/01 Select specific month for payroll information.')
	.option('-f, --format <format>', 'Format dates. Supported date formats https://day.js.org/docs/en/display/format')

payroll.parse(process.argv);

if(payroll.format){
	format = payroll.format;
}

if(payroll.month){
	if(dayjs(payroll.month).isValid()){
		let salary = req.getSalaryDay(payroll.month).format(format);
		let bonus = req.getBonusDay(payroll.month).format(format);

		console.log('Salary Day, Bonus Day');
		console.log(`${salary},${bonus}`);
	}
	else{
		console.log("invald month")
	}
}
else {
	console.log('Salary Day, Bonus Day');
	for(let months=0; months < 12; months++){
		let salary = req.getSalaryDay(dayjs().add(months, 'months')).format(format);
		let bonus = req.getBonusDay(dayjs().add(months, 'months')).format(format);

		console.log(`${salary},${bonus}`);
	}
}