const dayjs = require('dayjs');

function getSalaryDay(thisMonth){
	const monthSize = dayjs(thisMonth).daysInMonth();
	const lastDay = dayjs(thisMonth).date(monthSize);

	return day(lastDay) === "Saturday" ? dayjs(lastDay).subtract(1, 'days')
			: day(lastDay) === "Sunday" ? dayjs(lastDay).subtract(2, 'days')
			: lastDay
}

function getBonusDay(thisMonth){
	let bonusDay = dayjs(thisMonth).date(15);

	return day(bonusDay) === "Saturday" ? findWednesday(bonusDay)
			: day(bonusDay) === "Sunday" ? findWednesday(bonusDay)
			: bonusDay

	function findWednesday(date){
		while(day(date) != "Wednesday"){
			date = dayjs(date).add(1, 'days')
		}

		return date
	}
}

function day(date){
	return dayjs(date).format("dddd");
}

exports.getSalaryDay = getSalaryDay;
exports.getBonusDay = getBonusDay;