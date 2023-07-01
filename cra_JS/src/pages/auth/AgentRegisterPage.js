import { Helmet } from 'react-helmet-async';
// sections
import Register from '../../sections/auth/AgentRegister';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Agent Register | Business Essentials </title>
      </Helmet>

      <Register />
    </>
  );
}
