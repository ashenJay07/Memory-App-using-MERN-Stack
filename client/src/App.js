import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// importing components
import Form from './components/form/Form';
import Posts from './components/posts/Posts';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOP34-CDeSEO36VW3uGFqODfwqTfgulJbnCs6qiAvs&s"
          alt="memories"
          height={400}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
