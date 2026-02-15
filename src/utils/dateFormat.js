// utils

const months = [
  "Հնվ", "Փտր", "Մրտ", "Ապր", 
  "Մյս", "Հնս", "Հլս", "Օգս", 
  "Սեպ", "Հոկ", "Նոյ", "Դեկ"
];

export default function dateFormat(date) {
  date = new Date(date);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${months[month]} ${year === new Date().getFullYear() ? "" : year} ${format(hours)}:${format(minutes)}`;
}

function format(value) {
  return value < 10 ? `0${value}` : value;
}