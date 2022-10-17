import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, { SET_APPLICATION_DATA, SET_DAY } from "reducers/application";

export default function useApplicationData(props) {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => dispatch({ type: SET_DAY, day: day });
  useEffect(() => {
    //websocket function
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    ws.onmessage = (event) => {
      const appointment = JSON.parse(event.data);
      if (appointment.type === "SET_INTERVIEW") {
        // parsed event data matched the dispatch form, so don't need to modify it
        dispatch(appointment);
      }
    };
    // use axios to get data from api
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((response) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data,
      });
    });
  }, []);

  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, { interview });
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`);
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
