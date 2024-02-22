function convertDateString(inputDateString) {
  const inputDate = new Date(inputDateString);

  const day = inputDate.getDate();
  const month = inputDate.toLocaleString('default', { month: 'short' });

  const formattedDate = `${month} ${day}`;

  return formattedDate;
}

export default convertDateString;
