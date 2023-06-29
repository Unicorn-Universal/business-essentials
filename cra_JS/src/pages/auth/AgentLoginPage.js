import { Helmet } from 'react-helmet-async';
// sections
import AgentLogin from '../../sections/auth/AgentLogin';

// ----------------------------------------------------------------------

export default function AgentLoginPage() {
  return (
    <>
      <Helmet>
        <title> Agent Login | Business Essentials </title>
      </Helmet>

      <AgentLogin />
    </>
  );
}
