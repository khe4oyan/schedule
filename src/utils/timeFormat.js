export default function timeFormat(inputDate) {
  const updateDate = new Date(inputDate);
  const currentDate = new Date();

  const diffSeconds = Math.floor((currentDate - updateDate) / 1000);
  if (diffSeconds < 60) return `${diffSeconds} վայրկյան`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} րոպե`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} ժամ`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} օր`;
}
