import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Card, Stack, Typography } from '@mui/material';

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { LoadingButton } from '@mui/lab';

import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFSelect,
  RHFTextField,
  RHFUploadAvatar,
} from '../../../../components/hook-form';
import { countries } from '../../../../assets/data';
import { useAuthContext } from '../../../../auth/useAuthContext';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip code is required'),
    about: Yup.string().required('About is required'),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      displayName: '',
      email: '',
      photoURL: null,
      phoneNumber: '',
      country: '',
      address: '',
      state: '',
      city: '',
      zipCode: '',
      about: '',
      isPublic: false,
    },
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [fieldValues, setFieldValues] = useState({
    displayName: '',
    email: '',
    photoURL: null,
    phoneNumber: '',
    country: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    about: '',
    isPublic: false,
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
      console.log('DATA', data);
      const firestore = getFirestore();

      // Specify the path to the user profile document
      const userProfilesRef = doc(firestore, 'userProfiles', user.uid);

      // Create an object with the user data
      const userData = {
        uid: user.uid,
        displayName: data.displayName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        country: data.country,
        address: data.address,
        state: data.state,
        city: data.city,
        zipCode: data.zipCode,
        about: data.about,
        isPublic: data.isPublic,
      };

      // Check if the photoURL field exists in the form data
      if (data.photoURL) {
        // If photoURL exists, add it to the user data
        userData.photoURL = data.photoURL;
      }

      // Save the user data to the "userProfiles" collection
      await setDoc(userProfilesRef, userData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = () => {
      const fileUrl = reader.result; // URL or base64-encoded string

      if (fileUrl) {
        setValue('photoURL', fileUrl, { shouldValidate: true });
      }
    };

    if (file) {
      reader.readAsDataURL(file); // Convert file to URL or base64-encoded string
    }
  }, [setValue]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const firestore = getFirestore();
        const userProfilesRef = doc(firestore, 'userProfiles', user.uid);
        const docSnap = await getDoc(userProfilesRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFieldValues((prevValues) => ({ ...prevValues, ...data }));
          Object.keys(data).forEach((key) => {
            setValue(key, data[key]);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [user.uid, setValue]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="photoURL"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of 3MB
                </Typography>
              }
            />

            <RHFSwitch
              name="isPublic"
              labelPlacement="start"
              label="Public Profile"
              sx={{ mt: 5 }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="displayName" label="Name" />

              <RHFTextField name="email" label="Email Address" />

              <RHFTextField name="phoneNumber" label="Phone Number" />

              <RHFTextField name="address" label="Address" />

              <RHFSelect native name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((country) => (
                  <option key={country.code} value={country.label}>
                    {country.label}
                  </option>
                ))}
              </RHFSelect>

              <RHFTextField name="state" label="State/Region" />

              <RHFTextField name="city" label="City" />

              <RHFTextField name="zipCode" label="Zip/Code" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField name="about" multiline rows={4} label="About" />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
