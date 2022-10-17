function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  if (!state.days) {
    return appointmentArr;
  }
  // eslint-disable-next-line array-callback-return
  state.days.map((dayItem) => {
    // get appointments from a day
    if (dayItem.name === day) {
      dayItem.appointments.forEach((appointment) => {
        appointmentArr.push(state.appointments[appointment]);
      });
    }
  });
  return appointmentArr;
}

function getInterviewersForDay(state, day) {
  let interviewerArr = [];

  // eslint-disable-next-line array-callback-return
  state.days.map((dayItem) => {
    // get interviewers from a day
    if (dayItem.name === day) {
      dayItem.interviewers.forEach((interviewerId) =>
        interviewerArr.push(state.interviewers[interviewerId])
      );
    }
  });
  return interviewerArr;
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}

module.exports = { getAppointmentsForDay, getInterviewersForDay, getInterview };
