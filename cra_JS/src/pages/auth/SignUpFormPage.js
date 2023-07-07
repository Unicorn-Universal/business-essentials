import { Helmet } from 'react-helmet-async';
// sections
import UserForm from '../../sections/auth/SignUp';

// ----------------------------------------------------------------------

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title> Sign Up Process | Business Essentials </title>
      </Helmet>

      <UserForm />
    </>
  );
}
