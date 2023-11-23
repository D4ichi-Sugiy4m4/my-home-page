import {
  AppBar,
  Box,
  Card,
  CssBaseline,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CedarMan&apos;s Secret Base
            </Typography>
          </Toolbar>
        </AppBar>
        {/* ブログページ */}
        <Grid container>
          <Grid item xs={2} p={4}>
              <Card>目次</Card>
          </Grid>
          <Grid item xs={7} p={4}>
            <Stack spacing={4}>
            <Card>コンテンツ</Card>
            </Stack>
          </Grid>
          <Grid item xs={3} p={4}>
            <Card>自己紹介などなど</Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
