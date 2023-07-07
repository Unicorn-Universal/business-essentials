import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

// Save User Data
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// @mui
import { Container, Tab, Tabs, Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../_mock/arrays';
// components
import Iconify from '../../components/iconify';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
// sections
import {
  AccountGeneral,
  AccountBilling,
  AccountSocialLinks,
  AccountNotifications,
  AccountChangePassword,
} from '../../sections/@dashboard/user/account';

// ----------------------------------------------------------------------

export default function UserAccountPage() {
  // const DB = getFirestore(firebaseApp);

  const { themeStretch } = useSettingsContext();

  const [currentTab, setCurrentTab] = useState('general');

  const TABS = [
    {
      value: 'general',
      label: 'General',
      icon: <Iconify icon="ic:round-account-box" />,
      component: <AccountGeneral />,
    },
    {
      value: 'billing',
      label: 'Billing',
      icon: <Iconify icon="ic:round-receipt" />,
      component: (
        <AccountBilling
          cards={_userPayment}
          addressBook={_userAddressBook}
          invoices={_userInvoices}
        />
      ),
    },
    {
      value: 'notifications',
      label: 'Notifications',
      icon: <Iconify icon="eva:bell-fill" />,
      component: <AccountNotifications />,
    },
    {
      value: 'social_links',
      label: 'Social links',
      icon: <Iconify icon="eva:share-fill" />,
      component: <AccountSocialLinks socialLinks={_userAbout.socialLinks} />,
    },
    {
      value: 'change_password',
      label: 'Change password',
      icon: <Iconify icon="ic:round-vpn-key" />,
      component: <AccountChangePassword />,
    },
  ];

  return (
    <>
      <Helmet>
        <title> User: Account Settings | Business Essentials </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Account"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Account Settings' },
          ]}
        />

        <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
}





// import { Helmet } from 'react-helmet-async';
// import { useUser } from 'reactfire';

// import { useState } from 'react';
// import { Container, Tab, Tabs, Box } from '@mui/material';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';
// import { useFirebaseApp, useUser } from 'reactfire'; // Import the required hooks from reactfire

// import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../_mock/arrays';
// import Iconify from '../../components/iconify';
// import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// import { useSettingsContext } from '../../components/settings';
// import {
//   AccountGeneral,
//   AccountBilling,
//   AccountSocialLinks,
//   AccountNotifications,
//   AccountChangePassword,
// } from '../../sections/@dashboard/user/account';

// export default function UserAccountPage() {
//   const { themeStretch } = useSettingsContext();
//   const [currentTab, setCurrentTab] = useState('general');
//   const TABS = [
//     {
//             value: 'general',
//             label: 'General',
//             icon: <Iconify icon="ic:round-account-box" />,
//             component: <AccountGeneral />,
//           },
//           {
//             value: 'billing',
//             label: 'Billing',
//             icon: <Iconify icon="ic:round-receipt" />,
//             component: (
//               <AccountBilling
//                 cards={_userPayment}
//                 addressBook={_userAddressBook}
//                 invoices={_userInvoices}
//               />
//             ),
//           },
//           {
//             value: 'notifications',
//             label: 'Notifications',
//             icon: <Iconify icon="eva:bell-fill" />,
//             component: <AccountNotifications />,
//           },
//           {
//             value: 'social_links',
//             label: 'Social links',
//             icon: <Iconify icon="eva:share-fill" />,
//             component: <AccountSocialLinks socialLinks={_userAbout.socialLinks} />,
//           },
//           {
//             value: 'change_password',
//             label: 'Change password',
//             icon: <Iconify icon="ic:round-vpn-key" />,
//             component: <AccountChangePassword />,
//           },
//   ];

//   const firestore = getFirestore(firebaseApp); // Initialize the Firestore instance
//   const firebaseApp = useFirebaseApp();
//   const DB = getFirestore(firebaseApp);

//   const saveUserData = async (userData) => {
//     try {
//       const userRef = doc(DB, 'users', user.data.uid);
//       await setDoc(userRef, userData, { merge: true });
//       console.log('User data saved successfully!');
//     } catch (error) {
//       console.error('Error saving user data:', error);
//     }
//   };
  

//   return (
//     <>
//       <Helmet>
//         <title>User: Account Settings | Business Essentials</title>
//       </Helmet>
//       <Container maxWidth={themeStretch ? false : 'lg'}>
//         {<CustomBreadcrumbs
//           heading="Account"
//           links={[
//             { name: 'Dashboard', href: PATH_DASHBOARD.root },
//             { name: 'User', href: PATH_DASHBOARD.user.root },
//             { name: 'Account Settings' },
//           ]}
//         />}
//         {TABS.map((tab) => (
//           <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
//         ))}
//         {/* ...existing code */}
//         {TABS.map(
//           (tab) =>
//             tab.value === currentTab && (
//               <Box key={tab.value} sx={{ mt: 5 }}>
//                 {tab.component}
//               </Box>
//             )
//         )}
//       </Container>
//     </>
//   );
// }
