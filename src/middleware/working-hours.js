function isWithinWorkingHours(date = new Date()) {
  const weekday = date.getDay();
  const hour = date.getHours();
  return weekday >= 1 && weekday <= 5 && hour >= 9 && hour < 17;
}

function workingHoursMiddleware(now = () => new Date()) {
  return (req, res, next) => {
    if (isWithinWorkingHours(now())) {
      return next();
    }

    return res.status(503).render('closed', {
      title: 'Service indisponible | Atelier Nova',
      page: ''
    });
  };
}

module.exports = { isWithinWorkingHours, workingHoursMiddleware };