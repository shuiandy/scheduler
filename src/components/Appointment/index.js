import React, { useEffect } from "react";

import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const showApp = () => {
    return !!props.interview;
  };

  return (
    <article className='appointment' data-testid='appointment'>
      <Header time={props.time} />
      {showApp() === false && (<Empty />)}
      {showApp() === true && (<Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />)}
    </article>
  );
}
