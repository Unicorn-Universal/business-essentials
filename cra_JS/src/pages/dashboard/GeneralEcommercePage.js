import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid,  Stack } from '@mui/material';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
// _mock_
import {
  // _ecommerceNewProducts,
  _ecommerceSalesOverview,
  // persius added
  _bankingRecentTransitions,
} from '../../_mock/arrays';

// components
import { useSettingsContext } from '../../components/settings';
// sections
import {
  // EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';

import {
  BankingWidgetSummary,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';
// import { AppWelcome } from '../../sections/@dashboard/general/app';
// assets
// import { MotivationIllustration } from '../../assets/illustrations';

// ----------------------------------------------------------------------

export default function GeneralEcommercePage() {
  // const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> General: E-commerce | Business Essentials </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Congratulations! \n ${user?.displayName}`}
              description="Best seller of the month You have done 57.6% more sales today."
              img={
                <MotivationIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid> */}

          <Grid item xs={12} md={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingWidgetSummary
                title="Income"
                icon="eva:diagonal-arrow-left-down-fill"
                percent={2.6}
                total={18765}
                chart={{
                  series: [111, 136, 76, 108, 74, 54, 57, 84],
                }}
              />

              <BankingWidgetSummary
                title="Expenses"
                color="warning"
                icon="eva:diagonal-arrow-right-up-fill"
                percent={-0.5}
                total={8938}
                chart={{
                  series: [111, 136, 76, 108, 74, 54, 57, 84],
                }}
              />
            </Stack>
          </Grid>

          {/* <Grid item xs={12} md={4}>
            <EcommerceNewProducts list={_ecommerceNewProducts} />
          </Grid> */}

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Product Sold"
              percent={2.6}
              total={765}
              chart={{
                colors: [theme.palette.primary.main],
                series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Total Balance"
              percent={-0.1}
              total={18765}
              chart={{
                colors: [theme.palette.info.main],
                series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Sales Profit"
              percent={0.6}
              total={4876}
              chart={{
                colors: [theme.palette.warning.main],
                series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender
              title="Sale By Gender"
              total={2324}
              chart={{
                series: [
                  { label: 'Mens', value: 44 },
                  { label: 'Womens', value: 75 },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales
              title="Yearly Sales"
              subheader="(+43%) than last year"
              chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                series: [
                  {
                    year: '2019',
                    data: [
                      { name: 'Total Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                      { name: 'Total Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                    ],
                  },
                  {
                    year: '2020',
                    data: [
                      { name: 'Total Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                      { name: 'Total Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                    ],
                  },
                ],
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceCurrentBalance
              title="Current Balance"
              currentBalance={187650}
              sentAmount={25500}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
             <BankingExpensesCategories
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
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
             <BankingRecentTransitions
                title="Recent Transitions"
                tableData={_bankingRecentTransitions}
                tableLabels={[
                  { id: 'description', label: 'Description' },
                  { id: 'date', label: 'Date' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
            </Stack>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <EcommerceBestSalesman
              title="Best Salesman"
              tableData={_ecommerceBestSalesman}
              tableLabels={[
                { id: 'seller', label: 'Seller' },
                { id: 'product', label: 'Product' },
                { id: 'country', label: 'Country', align: 'center' },
                { id: 'total', label: 'Total' },
                { id: 'rank', label: 'Rank', align: 'right' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts title="Latest Products" list={_ecommerceLatestProducts} />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
