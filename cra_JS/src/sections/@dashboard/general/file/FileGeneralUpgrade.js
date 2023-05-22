import PropTypes from 'prop-types';
// @mui
import { Typography, Stack, Button } from '@mui/material';
// assets
import { UpgradeStorageIllustration } from '../../../../assets/illustrations';

// ----------------------------------------------------------------------

FileGeneralUpgrade.propTypes = {
  sx: PropTypes.object,
};

export default function FileGeneralUpgrade({ sx, ...other }) {
  return (
    <Stack
      alignItems="center"
      sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >
      <UpgradeStorageIllustration />

      <Button href='./files-manager' size="large" color="warning" variant="contained" sx={{ mt: 5, mb: 2 }}>
         File Manager
      </Button>

      <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'center' }}>
       Manage files on company server
      </Typography>
    </Stack>
  );
}
