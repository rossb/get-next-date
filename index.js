const GetMidnightDate = require('get-midnight-date');

function GetNextDate(date) {

	let nextDate = GetMidnightDate(date);

	nextDate.setDate(nextDate.getDate() + 1);

	return nextDate;

}

module.exports = GetNextDate;
