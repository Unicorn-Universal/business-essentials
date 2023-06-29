import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as React from 'react';
// @mui
import { useTheme,styled, alpha } from '@mui/material/styles';
import { Menu, Box, Button, AppBar, Toolbar, Container, Link, MenuItem, Divider, } from '@mui/material';
// hooks
import { Link as RouterLink } from 'react-router-dom';
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import { bgBlur } from '../../utils/cssStyles';
// config
import { HEADER } from '../../config-global';
// routes
import { PATH_DOCS, PATH_MINIMAL_ON_STORE, PATH_AUTH } from '../../routes/paths';

// components
import Logo from '../../components/logo';
// import Label from '../../components/label';
//
import navConfig from './nav/config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------
const StyledMenu = styled((props) => (
  <Menu
    elevation={ 0 }
    anchorOrigin={ {
      vertical: 'bottom',
      horizontal: 'right',
    } }
    transformOrigin={ {
      vertical: 'top',
      horizontal: 'right',
    } }
    { ...props }
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export default function Header() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Link
            href={PATH_DOCS.changelog}
            target="_blank"
            rel="noopener"
            underline="none"
            sx={{ ml: 1 }}
           />

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}
           <Button
            id="demo-customized-button"
            
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        Login/Register
          </Button>
          <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={ handleClose }>
          <Link underline="none" component={RouterLink} to={PATH_AUTH.login}>Essentials</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
              <Link underline="none" component={RouterLink} to={PATH_AUTH.freelancerLogin}>Freelancer</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link underline="none" component={RouterLink} to={PATH_AUTH.agentLogin}>Agent</Link>
        </MenuItem>
</StyledMenu>
          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
