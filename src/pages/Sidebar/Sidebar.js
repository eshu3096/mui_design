import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import ProjectTable from '../ProjectTable/ProjectTable';
import Navbar from '../Navbar/Navbar';
import Divider from '@mui/material/Divider';

const NAVIGATION = [
  {
    segment: 'inbox',
    title: 'Inbox',
    icon: <DashboardIcon />,
    sx: { padding: "4px 8px", minHeight: "32px" },
  },
  {
    segment: 'direct_message',
    title: 'Direct Messages',
    icon: <ShoppingCartIcon />,
    sx: { padding: "4px 8px", minHeight: "32px" },
  },
  {
    segment: 'my_tasks',
    title: 'My Tasks',
    icon: <BarChartIcon />,
    sx: { padding: "4px 8px", minHeight: "32px" },
  },
  {
    segment: 'ai_agents',
    title: 'AI Agents',
    icon: <BarChartIcon />,
    sx: { padding: "4px 8px", minHeight: "32px" },
  },
  {
    segment: 'chat_with_anything',
    title: 'Chat with Anything',
    icon: <BarChartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Select Workspace',
  },
  {
    segment: 'demo_workspace',
    title: 'Demo Workspace',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <BarChartIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <BarChartIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    segment: 'portfolios',
    title: 'Portfolios',
    icon: <DashboardIcon />,
  },
  {
    segment: 'projects',
    title: 'Projects',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'goals',
    title: 'Goals',
    icon: <BarChartIcon />,
  },
  {
    segment: 'docs',
    title: 'Docs',
    icon: <BarChartIcon />,
  },
  {
    segment: 'channels',
    title: 'Channels',
    icon: <BarChartIcon />,
  },
  {
    segment: 'teams',
    title: 'Teams',
    icon: <BarChartIcon />,
  },
  {
    segment: 'track_time',
    title: 'Track Time',
    icon: <BarChartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
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

function DemoPageContent() {
  return (
    <Box
    >
      <Navbar />
      <Divider variant="middle" component="" />
      <ProjectTable />
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Sidebar(props) {
  const { window } = props;

  const router = useDemoRouter('/project_table');

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="Croolo logo" />,
        title: 'Kroolo',
        homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout disableCollapsibleSidebar>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
