import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const { alerts, setAlert } = useContext(AlertContext);

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-circle'></i>
        {' ' + alert.msg}
      </div>
    ))
  );
};

export default Alerts;