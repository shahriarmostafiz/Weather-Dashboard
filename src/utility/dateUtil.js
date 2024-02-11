const getFormatedDate = (time, type, inMS) => {
  if (!type) return time;
  if (!inMS) {
    time = time * 1000;
  }
  const date = new Date(time);
  let options;
  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }
  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getFormatedDate };
