import { Helmet } from 'react-helmet-async';
// sections
import FreelancerLogin from '../../sections/auth/FreelancerLogin';

// ----------------------------------------------------------------------

export default function AgentLoginPage() {
  return (
    <>
      <Helmet>
        <title> Freelancer Login | Business Essentials </title>
      </Helmet>

      <FreelancerLogin />
    </>
  );
}
