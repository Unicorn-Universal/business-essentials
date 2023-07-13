import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Card, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, { RHFTextField } from '../../../../components/hook-form';

import Iconify from '../../../../components/iconify';

const SOCIAL_LINKS = [
  {
    value: 'facebookLink',
    icon: <Iconify icon="eva:facebook-fill" width={24} />,
  },
  {
    value: 'instagramLink',
    icon: <Iconify icon="ant-design:instagram-filled" width={24} />,
  },
  {
    value: 'linkedinLink',
    icon: <Iconify icon="eva:linkedin-fill" width={24} />,
  },
  {
    value: 'twitterLink',
    icon: <Iconify icon="eva:twitter-fill" width={24} />,
  },
];

AccountSocialLinks.propTypes = {
  socialLinks: PropTypes.shape({
    uid: PropTypes.string.isRequired, // Add the prop type validation for 'uid'
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    twitterLink: PropTypes.string,
  }).isRequired, // Make sure the prop is required
};

export default function AccountSocialLinks({ socialLinks }) {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
      console.log('DATA', data);
  
      const firestore = getFirestore();
      const socialLinksRef = doc(firestore, 'SocialLinks', socialLinks.uid);
  
      const updatedData = { ...data, uid: socialLinks.uid }; // Add the uid field to the data object
  
      await setDoc(socialLinksRef, updatedData);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const firestore = getFirestore();
        const socialLinksRef = doc(firestore, 'SocialLinks', socialLinks.uid);
        const docSnap = await getDoc(socialLinksRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          Object.keys(data).forEach((key) => {
            setValue(key, data[key]);
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSocialLinks();
  }, [socialLinks.uid, setValue]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ p: 3 }}>
        <Stack spacing={3} alignItems="flex-end">
          {SOCIAL_LINKS.map((link) => (
            <RHFTextField
              key={link.value}
              name={link.value}
              InputProps={{
                startAdornment: <InputAdornment position="start">{link.icon}</InputAdornment>,
              }}
            />
          ))}

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Card>
    </FormProvider>
  );
}
