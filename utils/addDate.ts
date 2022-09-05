export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date.valueOf());
  newDate.setDate(date.getDate() + days);
  return newDate;
};
