function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  if (!state.days) {
    return appointmentArr;
  }
  // eslint-disable-next-line array-callback-return
  state.days.map((dayItem) => {
    if (dayItem.name === day) {
      dayItem.appointments.forEach((appointment) => {
        appointmentArr.push(state.appointments[appointment]);
      });
    }
  });
  return appointmentArr;
}

module.exports = { getAppointmentsForDay };
