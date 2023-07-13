// import { useState } from 'react';
// import * as Yup from 'yup';
// import { Link, useNavigate  } from 'react-router-dom';

// import { getFirestore, collection, addDoc } from 'firebase/firestore';


// // form
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// // @mui
// import { Stack, IconButton, InputAdornment, Alert, Button } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// // auth
// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';
// // components
// import Iconify from '../../components/iconify';
// import FormProvider, { RHFTextField } from '../../components/hook-form';



// // ----------------------------------------------------------------------

// export default function AuthRegisterForm() {
//   const { register } = useAuthContext();

//   const [showPassword, setShowPassword] = useState(false);

//   const RegisterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name required'),
//     lastName: Yup.string().required('Last name required'),
//     email: Yup.string().required('Email is required').email('Email must be a valid email address'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     setError,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = methods;

//   const navigate = useNavigate(); 

  
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

  
//   //   try {
//   //     // Save the user's basic registration info to Firestore or any other storage/database
//   //     const firestore = getFirestore();
//   //     await addDoc(collection(firestore, 'users'), {
//   //       firstName: methods.getValues('firstName'),
//   //       lastName: methods.getValues('lastName'),
//   //       email: methods.getValues('email'),
//   //       password: methods.getValues('password'),
//   //     });
  
    
//   //     navigate('../pages/dashboard/GeneralEcommercePage');
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
  
  

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       // Save the user's basic registration info to Firestore or any other storage/database
//       const firestore = getFirestore();
//       await addDoc(collection(firestore, 'users'), {
//         // ...
//       });
  
//       // Redirect to the compliance form or another page
//       navigate('/compliance');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // onSubmit={handleSubmit(onSubmit)}

//   return (
//     <FormProvider methods={methods}>
//       <Stack spacing={2.5}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//           <RHFTextField name="firstName" label="First name" />
//           <RHFTextField name="lastName" label="Last name" />
//         </Stack>

//         <RHFTextField name="email" label="Email address" />

//         <RHFTextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Link to={ PATH_AUTH.signUpForm } variant="subtitle2">
//           <Button variant="contained" fullWidth>
//             Sign Up
//           </Button>
//         </Link>

//         <Link
//   to={PATH_AUTH.signUpForm}
//   component={RouterLink}
//   variant="subtitle2"
// >
//   Sign Up
// </Link>


//         {/* <LoadingButton
//           fullWidth
//           color="inherit"
//           size="large"
//           type="submit"
//           variant="contained"
//           loading={isSubmitting || isSubmitSuccessful}
//           sx={{
//             bgcolor: 'text.primary',
//             color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
//             '&:hover': {
//               bgcolor: 'text.primary',
//               color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
//             },
//           }}
//         >
//           Create account
//         </LoadingButton> */}
//       </Stack>
//     </FormProvider>
//   );
// }

import { useState } from 'react';
import * as Yup from 'yup';
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useAuthContext } from '../../auth/useAuthContext';
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';

export default function AuthRegisterForm() {
  const { register } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Register the user with the auth context
      if (register) {
        await register(data.email, data.password, data.firstName, data.lastName);
      }

      // Save user data to Firestore
      const firestore = getFirestore();
      await addDoc(collection(firestore, 'users'), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      // Handle successful registration
      console.log('User registration successful');
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting || isSubmitSuccessful}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}





// import { useState } from 'react';
// import * as Yup from 'yup';
// import { Link, useNavigate } from 'react-router-dom';

// // form
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';



// // Firebase
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// // @mui
// import { Stack, IconButton, InputAdornment, Alert, Button } from '@mui/material';
// import Iconify from '../../components/iconify';
// import FormProvider, { RHFTextField } from '../../components/hook-form';

// import { useAuthContext } from '../../auth/useAuthContext';

// import { PATH_AUTH } from '../../routes/paths';



// // ----------------------------------------------------------------------

// export default function AuthRegisterForm() {
//   const { register } = useAuthContext();

//   const [showPassword, setShowPassword] = useState(false);

//   const RegisterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name required'),
//     lastName: Yup.string().required('Last name required'),
//     email: Yup.string().required('Email is required').email('Email must be a valid email address'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     setError,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = methods;

//   const navigate = useNavigate(); // Move it outside the handleSubmit function

//   const handleSubmit = async (data) => {
//     try {
//       if (data.firstName) {
//         // Save the user's basic registration info to Firestore or any other storage/database
//         const firestore = getFirestore();
//         await addDoc(collection(firestore, 'Users'), {
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           password: data.password,
//         });
  
//         // Redirect to the compliance form or another page
//         navigate('/compliance');
//       } else {
//         console.error('First name is required'); // Log an error if first name is undefined
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <FormProvider methods={methods}>
//       <Stack spacing={2.5}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//           <RHFTextField name="firstName" label="First name" />
//           <RHFTextField name="lastName" label="Last name" />
//         </Stack>

//         <RHFTextField name="email" label="Email address" />

//         <RHFTextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Link to={PATH_AUTH.signUpForm} variant="subtitle2">
//           <Button variant="contained" 
//           type="submit"
//           // variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           margin=""
//           onClick={handleSubmit} // Call handleSubmit function on button click
//           fullWidth>
//             Sign Up
//           </Button>
//         </Link>
        
//         {/* <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           margin=""
//           onClick={handleSubmit} // Call handleSubmit function on button click
//         >
//           Submit
//         </Button> */}
//       </Stack>
//     </FormProvider>
//   );
// }





// import { useState } from 'react';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';

// // form
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// // Firebase
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// import { getAuth } from 'firebase/auth';
// // @mui
// import { Stack, IconButton, InputAdornment, Alert, Button } from '@mui/material';
// import Iconify from '../../components/iconify';
// import FormProvider, { RHFTextField } from '../../components/hook-form';

// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';


// // ----------------------------------------------------------------------

// export default function AuthRegisterForm() {
//   const { register } = useAuthContext();

//   const [showPassword, setShowPassword] = useState(false);

//   const RegisterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name required'),
//     lastName: Yup.string().required('Last name required'),
//     email: Yup.string().required('Email is required').email('Email must be a valid email address'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     setError,
//     // handleSubmit,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = methods;

//   const navigate = useNavigate();

//   const handleSubmit = async (data) => {
//     try {
//       const auth = getAuth();
//       const currentUser = auth.currentUser;
      
//       if (currentUser) {
//         // Save the user's basic registration info to Firestore or any other storage/database
//         const firestore = getFirestore();
//         await addDoc(collection(firestore, 'Users'), {
//           uid: currentUser.uid,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           password: data.password,
//         });
  
//         // Redirect to the compliance form or another page
//         navigate('/compliance');
//       } else {
//         console.error('User is not logged in'); // Log an error if the user is not logged in
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <FormProvider methods={methods}>
//       <Stack spacing={2.5}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//           <RHFTextField name="firstName" label="First name" />
//           <RHFTextField name="lastName" label="Last name" />
//         </Stack>

//         <RHFTextField name="email" label="Email address" />

//         <RHFTextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           size="large"
//           margin=""
//           onClick={handleSubmit(onSubmit)}
//         >
//           Sign Up
//         </Button>
//       </Stack>
//     </FormProvider>
//   );
// }





// import { useState } from 'react';
// import * as Yup from 'yup';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// // Firebase
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // @mui
// import { Stack, IconButton, InputAdornment, Alert, Button } from '@mui/material';
// import Iconify from '../../components/iconify';
// import FormProvider, { RHFTextField } from '../../components/hook-form';

// import { useAuthContext } from '../../auth/useAuthContext';
// import { PATH_AUTH } from '../../routes/paths';

// export default function AuthRegisterForm() {
//   const { register } = useAuthContext();

//   const [showPassword, setShowPassword] = useState(false);

//   const RegisterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name required'),
//     lastName: Yup.string().required('Last name required'),
//     email: Yup.string()
//       .required('Email is required')
//       .email('Email must be a valid email address'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     setError,
//     handleSubmit,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = methods;

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const auth = getAuth();
//       const currentUser = auth.currentUser;

//       if (currentUser) {
//         // Save the user's basic registration info to Firestore or any other storage/database
//         const firestore = getFirestore();
//         await addDoc(collection(firestore, 'Users'), {
//           uid: currentUser.uid,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           password: data.password,
//         });

//         // Redirect to the compliance form or another page
//         navigate('/compliance');
//       } else {
//         console.error('User is not logged in');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <FormProvider methods={methods}>
//       <Stack spacing={2.5}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//           <RHFTextField name="firstName" label="First name" />
//           <RHFTextField name="lastName" label="Last name" />
//         </Stack>

//         <RHFTextField name="email" label="Email address" />

//         <RHFTextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Link to={PATH_AUTH.signUpForm} variant="subtitle2">
//           <Button
//             variant="contained"
//             type="submit"
//             color="primary"
//             fullWidth
//             size="large"
//             margin=""
//             onClick={handleSubmit(onSubmit)}
//           >
//             Sign Up
//           </Button>
//         </Link>
//       </Stack>
//     </FormProvider>
//   );
// }








// import { useState } from 'react';
// import * as Yup from 'yup';
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// import PropTypes from 'prop-types';
// // @mui
// import { Stack, IconButton, InputAdornment, Alert, Button } from '@mui/material';
// import Iconify from '../../components/iconify';
// import FormProvider, { RHFTextField } from '../../components/hook-form';

// import { PATH_AUTH } from '../../routes/paths';


// export default function AuthRegisterForm({ onRegister }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const RegisterSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name required'),
//     lastName: Yup.string().required('Last name required'),
//     email: Yup.string()
//       .required('Email is required')
//       .email('Email must be a valid email address'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(RegisterSchema),
//     defaultValues,
//   });

//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = methods;

//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const { firstName, lastName, email, password } = data;
//     await onRegister(email, password, firstName, lastName);
//   };
  

//   return (
//     <FormProvider methods={methods}>
//       <Stack spacing={2.5}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//           <RHFTextField name="firstName" label="First name" control={control} />
//           <RHFTextField name="lastName" label="Last name" control={control} />
//         </Stack>

//         <RHFTextField name="email" label="Email address" control={control} />

//         <RHFTextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//           control={control}
//         />

//         <Link to={PATH_AUTH.signUpForm} variant="subtitle2">
//           <Button
//             variant="contained"
//             type="submit"
//             color="primary"
//             fullWidth
//             size="large"
//             margin=""
//             onClick={handleSubmit(onSubmit)}
//           >
//             Sign Up
//           </Button>
//         </Link>
//       </Stack>
//     </FormProvider>
//   );
// }

// AuthRegisterForm.propTypes = {
//   onRegister: PropTypes.func.isRequired,
// };
