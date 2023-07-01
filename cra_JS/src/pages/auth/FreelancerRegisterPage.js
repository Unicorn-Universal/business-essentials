import { Helmet } from 'react-helmet-async';
// sections
import Register from '../../sections/auth/FreelancerRegister';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Freelancer Register | Business Essentials </title>
      </Helmet>

      <Register />
    </>
  );
}
