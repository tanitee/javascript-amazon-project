import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();
const addDays = today.add(2, 'days' );
const format = addDays.format('dddd');

document.querySelector('.display').innerHTML = format;

function isWeekend(date){
    const dayOfWeek = format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

let remainingDays  
