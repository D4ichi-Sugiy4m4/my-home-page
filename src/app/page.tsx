import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline/>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CedarMan&apos;s Secret Base
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
