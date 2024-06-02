import { Box, Grid, Paper, styled } from '@mui/material';

export function ColorFilter(): React.ReactNode {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=4</Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
    </Grid>
  );
}
