import React from 'react';
import { useParams } from 'react-router-dom';
import SendEmail from '../components/password/SendEmail';
import ResetPassword from '../components/password/ResetPassword';

function PasswordReset() {
  const { token } = useParams();
  if (token) {
    return (<ResetPassword token={token} />);
  } else {
   
    return (<SendEmail />);
  }
};

export default PasswordReset;