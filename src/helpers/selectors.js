
export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day

  let appointmentArr = [];
  // eslint-disable-next-line
  state.days.map((dayObject) => {
    if (dayObject.name === day) {
      dayObject.appointments.forEach((apptId) => appointmentArr.push(apptId));
    }
  });
  return matchIds(state.appointments, appointmentArr);
}