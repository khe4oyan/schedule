export default function timerFormat(inputSeconds) {
  if (inputSeconds < 1) {
    return '0 sec.';
  }

  let minutes = 0;
  let seconds = 0;

  minutes = Math.floor(inputSeconds / 60);
  seconds = Math.floor(inputSeconds % 60);

  let result = '';

  if (minutes > 0) {
    result += `${minutes} min. `;
  }

  if (seconds > 0) {
    result += `${seconds} sec.`;
  }

  return result;
}