import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import BitForWeek from './BitForWeek';
import { Box } from '@material-ui/core';

export default function MainContent() {
  return (
    <main>
      <Box mt={2} mb={2}>
        <HashRouter>
          <Switch>
            <Route path="/" component={BitForWeek} />
          </Switch>
        </HashRouter>
      </Box>
    </main>
  );
};