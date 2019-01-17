
exports.localDate = (date = null) => {
  date = new Date(date);
  const year = String(date.getFullYear()).slice(2);
  return `${year}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};
exports.newsFormateDate = (date = null) => {
  date = new Date(date);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
