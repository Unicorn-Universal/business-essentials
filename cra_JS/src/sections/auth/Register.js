import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthWithSocial from './AuthWithSocial';
import AuthRegisterForm from './AuthRegisterForm';

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <LoginLayout title="Manage the job more effectively with Minimal">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Get started absolutely free.</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Already have an account? </Typography>

          <Link component={RouterLink} to={PATH_AUTH.login} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
      </Stack>

      <AuthRegisterForm />

      <Typography
        component="div"
        sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
      >
        {'By signing up, I agree to '}
        <Link underline="always" color="text.primary">
          Terms of Service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary">
          Privacy Policy
        </Link>
        .
      </Typography>

      <AuthWithSocial />
    </LoginLayout>
  );
}


// import { Link as RouterLink, useHistory  } from 'react-router-dom';
// // @mui
// import { Stack, Typography, Link } from '@mui/material';
// // layouts
// import LoginLayout from '../../layouts/login';
// // routes
// import { PATH_AUTH } from '../../routes/paths';
// //
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';

// import { Link as RouterLink } from 'react-router-dom';
// // @mui
// import { Stack, Typography, Link } from '@mui/material';
// // layouts
// import LoginLayout from '../../layouts/login';
// // routes
// import { PATH_AUTH } from '../../routes/paths';
// //
// import AuthWithSocial from './AuthWithSocial';
// import UserForm from './SignUp'; // Update the component name here

// // ----------------------------------------------------------------------

// export default function Register() {
//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//         <Typography variant="h4">Get started absolutely free.</Typography>

//         <Stack direction="row" spacing={0.5}>
//           <Typography variant="body2"> Already have an account? </Typography>

//           <Link component={RouterLink} to={PATH_AUTH.login} variant="subtitle2">
//             Sign in
//           </Link>
//         </Stack>
//       </Stack>

//       <UserForm />

//       <Typography
//         component="div"
//         sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
//       >
//         {'By signing up, I agree to '}
//         <Link underline="always" color="text.primary">
//           Terms of Service
//         </Link>
//         {' and '}
//         <Link underline="always" color="text.primary">
//           Privacy Policy
//         </Link>
//         .
//       </Typography>

//       <AuthWithSocial />
//     </LoginLayout>
//   );
// }






// import { Link as RouterLink } from 'react-router-dom';
// // @mui
// import { Stack, Typography, Link } from '@mui/material';

// import React, { useState } from 'react';

// import UserForm from './SignUp';
// // layouts
// import LoginLayout from '../../layouts/login';
// // routes
// import { PATH_AUTH } from '../../routes/paths';
// //
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';







// // ----------------------------------------------------------------------

// export default function Register() {
//   const [showComplianceForm, setShowComplianceForm] = useState(false);

//   const handleRegister = () => {
//     // Handle user registration and saving basic user data

//     // After saving basic user data, show the compliance form
//     setShowComplianceForm(true);
//   };

//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//         <Typography variant="h4">Get started absolutely free.</Typography>
//         <Stack direction="row" spacing={0.5}>
//           <Typography variant="body2">Already have an account?</Typography>
//           <Link component={RouterLink} to={PATH_AUTH.login} variant="subtitle2">
//             Sign in
//           </Link>
//         </Stack>
//       </Stack>

//       {showComplianceForm ? (
//         <UserForm />
//       ) : (
//         <AuthRegisterForm onRegister={handleRegister} />
//       )}

//       <Typography
//         component="div"
//         sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}
//       >
//         {'By signing up, I agree to '}
//         <Link underline="always" color="text.primary">
//           Terms of Service
//         </Link>
//         {' and '}
//         <Link underline="always" color="text.primary">
//           Privacy Policy
//         </Link>
//         .
//       </Typography>

//       <AuthWithSocial />
//     </LoginLayout>
//   );
// }





// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Stack, Typography, Link } from '@mui/material';
// import LoginLayout from '../../layouts/login';
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';
// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';

// export default function Register() {
//   const navigate = useNavigate();
//   const { register } = useAuthContext();;

//   const handleRegister = async (email, password, firstName, lastName) => {
//     // Call the register function from your authentication system (e.g., Firebase) to create a new user
//     // Make sure to handle any errors that may occur during the registration process
//     try {
//       // Call the register function from your authentication system (e.g., Firebase) to create a new user
//       await register(email, password, firstName, lastName);
//       navigate('/compliance');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleRegistrationSuccess = () => {
//     navigate('/compliance');
//   };

//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//         <Typography variant="h4">Get started absolutely free.</Typography>
//         <Stack direction="row" spacing={0.5}>
//           <Typography variant="body2">Already have an account?</Typography>
//           <Link component={RouterLink} to={PATH_AUTH.login} variant="subtitle2">
//             Sign in
//           </Link>
//         </Stack>
//       </Stack>
//       <AuthRegisterForm
//         onRegister={handleRegister}
//         onRegistrationSuccess={handleRegistrationSuccess}
//         user={user}
//       />
//       <Typography
//         component="div"
//         sx={{
//           color: 'text.secondary',
//           mt: 3,
//           typography: 'caption',
//           textAlign: 'center',
//         }}
//       >
//         {'By signing up, I agree to '}
//         <Link underline="always" color="text.primary">
//           Terms of Service
//         </Link>
//         {' and '}
//         <Link underline="always" color="text.primary">
//           Privacy Policy
//         </Link>
//         .
//       </Typography>
//       <AuthWithSocial />
//     </LoginLayout>
//   );
// }





// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Stack, Typography, Link } from '@mui/material';
// import LoginLayout from '../../layouts/login';
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';
// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';

// export default function Register() {
//   const navigate = useNavigate();
//   const { register, user } = useAuthContext();

//   // const handleRegister = async (email, password, firstName, lastName) => {
//   //   try {
//   //     // Call the register function from your authentication system (e.g., Firebase) to create a new user
//   //     await register(email, password, firstName, lastName);
//   //     navigate(PATH_AUTH.signUpForm);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const handleRegister = async (email, password, firstName, lastName) => {
//     try {
//       // Call the register function from your authentication system (e.g., Firebase) to create a new user
//       await register(email, password, firstName, lastName);
//       // navigate(PATH_AUTH.signUpForm);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   // const handleRegistrationSuccess = () => {
//   //   navigate(PATH_AUTH.signUpForm);
//   // };

//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//         <Typography variant="h4">Get started absolutely free.</Typography>
//         <Stack direction="row" spacing={0.5}>
//           <Typography variant="body2">Already have an account?</Typography>
//           <Link component={RouterLink} to={PATH_AUTH.login} variant="subtitle2">
//             Sign in
//           </Link>
//         </Stack>
//       </Stack>
//       <AuthRegisterForm onRegister={handleRegister}
//         // onRegistrationSuccess={handleRegistrationSuccess}
//         user={user}
//       />
//       <Typography
//         component="div"
//         sx={{
//           color: 'text.secondary',
//           mt: 3,
//           typography: 'caption',
//           textAlign: 'center',
//         }}
//       >
//         {'By signing up, I agree to '}
//         <Link underline="always" color="text.primary">
//           Terms of Service
//         </Link>
//         {' and '}
//         <Link underline="always" color="text.primary">
//           Privacy Policy
//         </Link>
//         .
//       </Typography>
//       <AuthWithSocial />
//     </LoginLayout>
//   );
// }



// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Stack, Typography, Link } from '@mui/material';
// import LoginLayout from '../../layouts/login';
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';
// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';

// export default function Register() {
//   const navigate = useNavigate();
//   const { register } = useAuthContext();

//   const handleRegister = async (email, password, firstName, lastName) => {
//     try {
//       // Call the register function from your authentication system (e.g., Firebase) to create a new user
//       await register(email, password, firstName, lastName);
//       navigate('/compliance');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       {/* ... */}
//       <AuthRegisterForm onRegister={handleRegister} />
//       {/* ... */}
//     </LoginLayout>
//   );
// }


// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Stack, Typography, Link } from '@mui/material';
// import LoginLayout from '../../layouts/login';
// import AuthWithSocial from './AuthWithSocial';
// import AuthRegisterForm from './AuthRegisterForm';
// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';

// export default function Register() {
//   const navigate = useNavigate();
//   const { register, user } = useAuthContext();

//   const handleRegister = async (email, password, firstName, lastName) => {
//     try {
//       await register(email, password, firstName, lastName);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <LoginLayout title="Manage the job more effectively with Minimal">
//       <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
//         <Typography variant="h4">Get started absolutely free.</Typography>
//         <Stack direction="row" spacing={0.5}>
//           <Typography variant="body2">Already have an account?</Typography>
//           <Link component={RouterLink} to={PATH_AUTH.signUpForm} variant="subtitle2">
//             Sign in
//           </Link>
//         </Stack>
//       </Stack>
//       <AuthRegisterForm onRegister={handleRegister}
//         user={user}
//       />
//       <Typography
//         component="div"
//         sx={{
//           color: 'text.secondary',
//           mt: 3,
//           typography: 'caption',
//           textAlign: 'center',
//         }}
//       >
//         {'By signing up, I agree to '}
//         <Link underline="always" color="text.primary">
//           Terms of Service
//         </Link>
//         {' and '}
//         <Link underline="always" color="text.primary">
//           Privacy Policy
//         </Link>
//         .
//       </Typography>
//       <AuthWithSocial />
//     </LoginLayout>
//   );
// }





