const GetMidnightDate = require('get-midnight-date');

function GetNextDate(dateObj) {

	let nextDate = GetMidnightDate(dateObj);

	nextDate.setDate(nextDate.getDate() + 1);

	return nextDate;

}

module.exports = GetNextDate;
