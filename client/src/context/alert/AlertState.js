import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { v4 as uuid } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  // state will be an array of alert objects
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    // remove alert after 3 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
  };

  return (
    <alertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
