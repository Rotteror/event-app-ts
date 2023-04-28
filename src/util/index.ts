import dayjs from "dayjs";

export const DATE_FORMAT = "YYYY-MM-DD";

export const formatDateRange = (
  startDate: string | Date,
  dateFormat: string = DATE_FORMAT
) => {
  return dayjs(startDate).format(dateFormat);
};

export const findDigit = (text: string): Number => {
  return Number(text.match(/\d/g)?.join(""));
};
