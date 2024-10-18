import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';  // You can keep the import path as it is or replace it if required
import { DashboardLayout } from '@toolpad/core/DashboardLayout'; // Same as above
import { PageContainer } from '@toolpad/core/PageContainer'; // Same as above
import Grid from '@mui/material/Grid2';
import BugReportIcon from '@mui/icons-material/BugReport';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Upload File',
    title: 'Upload Project',
    icon: <UploadFileIcon />,
  },
  {
    segment: 'Projects',
    title: 'Projects',
    icon: <DeveloperModeIcon />,
  },
  {
    segment: 'Reports',
    title: 'Reports',
    icon: <SummarizeIcon />,
  },
  {
    segment: 'issues',
    title: 'Issues',
    icon: <BugReportIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Know more',
  },
  {
    segment: 'About',
    title: 'About',
    icon: <InfoIcon />,
  },
  {
    segment: 'Contact',
    title: 'Contact',
    icon: <PermContactCalendarIcon />,
  },
  {
    segment: 'help',
    title: 'Help',
    icon: <AccessibilityIcon />,
  }
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

const Dashboard = (props) => {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        title: 'Code Review'
      }}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default Dashboard;
