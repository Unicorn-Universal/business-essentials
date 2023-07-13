import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Card, Stack, Typography, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';

import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFTextField,
} from '../../../../components/hook-form';
import { countries } from '../../../../assets/data';
import { useAuthContext } from '../../../../auth/useAuthContext';


export default function CompliancePage() {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext();

  const UpdateComplianceSchema = Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    businessType: Yup.string().required('Business type is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Phone number is required'),
    ghanaCard: Yup.string().required('Ghana card is required'),
    registrationNumber: Yup.string().required('Registration number is required'),
    tinNumber: Yup.string().required('TIN number is required'),
    website: Yup.string().required('Website is required'),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateComplianceSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      email: '',
      phoneNumber: '',
      ghanaCard: '',
      registrationNumber: '',
      tinNumber: '',
      website: '',
    },
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [fieldValues, setFieldValues] = useState({
    businessName: '',
    businessType: '',
    email: '',
    phoneNumber: '',
    ghanaCard: '',
    registrationNumber: '',
    tinNumber: '',
    website: '',
  });

  const onSubmit = async (data) => {
    try {
      const firestore = getFirestore();
      const docRef = doc(firestore, 'ComplianceData', user.uid);

      await setDoc(docRef, {
        uid: user.uid,
        ...fieldValues,
        ...data,
      });

      enqueueSnackbar('Compliance data submitted!');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchComplianceData = async () => {
      try {
        const firestore = getFirestore();
        const docRef = doc(firestore, 'ComplianceData', user.uid);

        const docSnap = await getDoc(docRef);

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

    fetchComplianceData();
  }, [user.uid, setValue]);

  const renderInputLabel = (fieldName, label) => {
    const fieldValue = fieldValues[fieldName];

    if (!fieldValue) {
      return (
        <InputLabel sx={{ mt: 1 }} htmlFor={fieldName}>
          {label}
        </InputLabel>
      );
    }
    return null;
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
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
              {renderInputLabel('businessName', 'Business Name')}
              <RHFTextField name="businessName" label="" />

              {renderInputLabel('businessType', 'Business Type')}
              <RHFTextField name="businessType" label="" />

              {renderInputLabel('email', 'Email Address')}
              <RHFTextField name="email" label="" />

              {renderInputLabel('phoneNumber', 'Phone Number')}
              <RHFTextField name="phoneNumber" label="" />

              {renderInputLabel('ghanaCard', 'Ghana Card')}
              <RHFTextField name="ghanaCard" label="" />

              {renderInputLabel('registrationNumber', 'Registration Number')}
              <RHFTextField name="registrationNumber" label="" />

              {renderInputLabel('tinNumber', 'TIN Number')}
              <RHFTextField name="tinNumber" label="" />

              {renderInputLabel('website', 'Website')}
              <RHFTextField name="website" label="" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Submit Compliance Data
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
