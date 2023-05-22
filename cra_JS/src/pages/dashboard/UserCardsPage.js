import { Helmet } from 'react-helmet-async';

import { Link as RouterLink  } from 'react-router-dom';
// @mui
import { Container, Box, Button } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _userCards } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// sections
import { UserCard } from '../../sections/@dashboard/user/cards';


import Iconify from '../../components/iconify';


// ----------------------------------------------------------------------

export default function UserCardsPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> User: Cards | Business Essentials</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="User Cards"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Team', href: PATH_DASHBOARD.user.root },
            // { name: 'Cards' },
          ]}
          action={
            <Button
              component={RouterLink}
              to={PATH_DASHBOARD.user.new}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New User
            </Button>
          }
        />



        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Container>
    </>
  );
}
