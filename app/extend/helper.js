
exports.localDate = date => {
  date = new Date(date);
  const year = String(date.getFullYear()).slice(2);
  return `${year}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};
exports.newsFormateDate = date => {
  date = new Date(date);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
