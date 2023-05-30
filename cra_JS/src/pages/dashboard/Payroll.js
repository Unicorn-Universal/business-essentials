import { forwardRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Button, Stack, Slide,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,Box,
  List,
  Avatar,
  ListItemText,
  ListItemAvatar,
  ListItemButton,} from '@mui/material';

// import { grey } from '@mui/material/colors';

import { Link as RouterLink, } from 'react-router-dom';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';


// components
import { useSettingsContext } from '../../components/settings';

import CustomBreadcrumbs from '../../components/custom-breadcrumbs';


import {
  _bankingContacts,
  _bankingRecentTransitions,
} from '../../_mock/arrays';


import {
  // AppWidget,
  // AppWelcome,
  // AppFeatured,
  // AppNewInvoice,
  // AppTopAuthors,
  // AppTopRelated,
  // AppAreaInstalled,
  AppWidgetSummary,
  // AppCurrentDownload,
  // AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';


import {
  BankingContacts,
  // BankingWidgetSummary,
  // BankingInviteFriends,
  BankingQuickTransfer,
  // BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';



import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const emails = ['username@gmail.com', 'user02@gmail.com', 'another2@gmail.com', 'andanother@gmail.com'];
export default function BlankPage() {
  const { themeStretch } = useSettingsContext();
  const [open, setOpen] = useState(false);
  const theme = useTheme();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title> Payroll | Business Essentials </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4"> Payroll </Typography>

        <CustomBreadcrumbs
          // heading="Invoice List"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Payroll',
              href: PATH_DASHBOARD.general.payroll,
            },
            {
              name: 'Overview',
            },
          ]}
          action={
            <Button
            onClick={handleClickOpen}
              component={RouterLink}
              to={PATH_DASHBOARD.general.payroll}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Payment
            </Button>
          }
        />

      {/* <Button variant="outlined" color="success" onClick={handleClickOpen}>
        Transitions Dialogs
      </Button> */}


        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{` Select Emplyee / Multi Select for group payment`}</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              List of employees enrolled in Business Essentials Payroll
            </DialogContentText>
            <List>
          {emails.map((email) => (
            <ListItemButton onClick={() => handleClose(email)} key={email}>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: 'info.main',
                    backgroundColor: 'info.lighter',
                  }}
                >
                  <Iconify icon="eva:person-fill" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          ))}

          <ListItemButton autoFocus onClick={() => handleClose('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <Iconify icon="eva:plus-fill" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </List>
          </DialogContent>

          <DialogActions>
            <Button color="inherit" onClick={handleClose}>
              Disagree
            </Button>

            <Button variant="contained" onClick={handleClose}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={3}
        // sx={{
        //   mt: 5,
        //   width: 1,
        //   height: 220,
        //   borderRadius: 2,
        //   bgcolor: 'rgb(27, 33, 42)',
        //   border: 'dashed 1px rgba(145, 158, 171, 0.24)',
        // }}
        >



          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Total working hours"
              percent={2.6}
              total={320.00}
              chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Total overtime hours"
              percent={-2.6}
              total={56.00}
              chart={{
                colors: [theme.palette.secondary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Total offtime hours"
              percent={0.2}
              total={80.32}
              chart={{
                colors: [theme.palette.info.main],
                series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppWidgetSummary
              title="Total payroll paid"
              percent={-0.1}
              total={132}
              chart={{
                colors: [theme.palette.warning.main],
                series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <BankingBalanceStatistics
                title="Payment Overview and Statistics"
                subheader="(+43% Work hours | +12% Overtime hours) than last year"
                chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  colors: [theme.palette.primary.main, theme.palette.warning.main],
                  series: [
                    {
                      type: 'Week',
                      data: [
                        { name: 'Total hours', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                        { name: 'Total overtime', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                        { name: 'Total offtime hours', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                        { name: 'Totsl paid', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                      ],
                    },
                    {
                      type: 'Month',
                      data: [
                        { name: 'Total hours', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                        { name: 'Total overtime', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                        { name: 'Total offtime hours', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                        { name: 'Totsl paid', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                      ],
                    },
                    {
                      type: 'Year',
                      data: [
                        { name: 'Total hours', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
                        { name: 'Total overtime', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
                        { name: 'Total offtime hours', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                        { name: 'Totsl paid', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                      ],
                    },
                  ],
                }}
              />

              {/* <BankingExpensesCategories item xs={12} md={4}
                title="Expenses Categories"
                chart={{
                  series: [
                    { label: 'Category 1', value: 14 },
                    { label: 'Category 2', value: 23 },
                    { label: 'Category 3', value: 21 },
                    { label: 'Category 4', value: 17 },
                    { label: 'Category 5', value: 15 },
                    { label: 'Category 6', value: 10 },
                    { label: 'Category 7', value: 12 },
                    { label: 'Category 8', value: 17 },
                    { label: 'Category 9', value: 21 },
                  ],
                  colors: [
                    theme.palette.primary.main,
                    theme.palette.warning.dark,
                    theme.palette.success.darker,
                    theme.palette.error.main,
                    theme.palette.info.dark,
                    theme.palette.info.darker,
                    theme.palette.success.main,
                    theme.palette.warning.main,
                    theme.palette.info.main,
                  ],
                }}
              /> */}

              {/* <BankingRecentTransitions
                title="Recent Transitions"
                tableData={_bankingRecentTransitions}
                tableLabels={[
                  { id: 'description', label: 'Description' },
                  { id: 'date', label: 'Date' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              /> */}
            </Stack>


          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <BankingExpensesCategories
                title="Expenses"
                chart={{
                  series: [
                    { label: 'Salaries', value: 14 },
                    { label: 'Benefits', value: 23 },
                    { label: 'Payroll taxes', value: 21 },
                    { label: 'Workers compensation', value: 17 },
                    { label: 'Other expenses', value: 15 },
                    // { label: 'Category 6', value: 10 },
                    // { label: 'Category 7', value: 12 },
                    // { label: 'Category 8', value: 17 },
                    // { label: 'Category 9', value: 21 },
                  ],
                  colors: [
                    theme.palette.primary.main,
                    theme.palette.warning.dark,
                    theme.palette.success.darker,
                    theme.palette.error.main,
                    theme.palette.info.dark,
                    theme.palette.info.darker,
                    theme.palette.success.main,
                    theme.palette.warning.main,
                    theme.palette.info.main,
                  ],
                }}
              />

            </Stack>

          </Grid>
          <Grid item xs={12} md={8}>
            <BankingRecentTransitions
              title="Recent Transfers"
              tableData={_bankingRecentTransitions}
              tableLabels={[
                { id: 'description', label: 'Description' },
                { id: 'date', label: 'Date' },
                { id: 'amount', label: 'Amount' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          </Grid>


          <Grid item xs={12} md={4}>
            <BankingContacts
              title="Employees"
              subheader="You have 122 contacts"
              list={_bankingContacts.slice(-6)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <BankingQuickTransfer title="Quick Transfer" list={_bankingContacts} />
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

