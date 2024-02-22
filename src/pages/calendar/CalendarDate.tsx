export default function CalendarDate({
  inputDateString,
}: {
  inputDateString: string;
}) {
  const convertDateString = (dataString: string) => {
    const inputDate = new Date(dataString);

    const day = inputDate.getDate();
    const month = inputDate.toLocaleString('default', { month: 'short' });

    const formattedDate = `${month} ${day}`;

    return formattedDate;
  };
  return (
    <div className="calendar-card-date">
      {convertDateString(inputDateString)}
    </div>
  );
}
