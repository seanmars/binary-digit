import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TopBar from './components/TopBar';
import MainContent from './components/MainContent';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}Sean Mars{' '}{new Date().getFullYear()}
    </Typography>
  );
}

function App() {
  return (
    <Container>
      <Box>
        <TopBar />
        <MainContent />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;