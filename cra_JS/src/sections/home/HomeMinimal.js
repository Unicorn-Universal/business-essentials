import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Accounting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Website Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Stock Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'File Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Payroll/Employees',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'Scheduling',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Keychain Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Features
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              What features and <br /> services do you get?
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 4 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div  key={card.title}>
              <StyledCard
                sx={{
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
