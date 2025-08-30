import { Button, Grid, TextField, Typography } from "@mui/material";
export default function App() {
  return (
    <div>    
      <Typography variant="h4" align="center" gutterBottom>
        Create Your Account
      </Typography>
  <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <TextField id="outlined-basic" label="FullName" variant="outlined" fullWidth/>
  </Grid>
  <Grid item xs={12} md={4}>
   <TextField id="outlined-basic" label="UserName" variant="outlined" fullWidth/>
  </Grid>
  <Grid item xs={12} md={4}>
   <TextField id="outlined-basic" label="Age" variant="outlined"fullWidth />
  </Grid>
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic" label="email" variant="outlined"fullWidth />
  </Grid>
  <Grid item xs={12} md={6}>
  <TextField id="outlined-basic" variant="outlined" label="Password" type="password"fullWidth/>
  </Grid>
  <Grid item xs={12} >
 <TextField sx={{ height: '100%', boxSizing: 'border-box' }} id="outlined-basic" label="Outlined" variant="outlined"    multiline
            rows={4}
            fullWidth />
  </Grid>

  <Grid item xs={12} align="center">
  <Button
            variant="contained"
            style={{ backgroundColor: "purple", color: "white", padding: "10px 40px" }}
          >
            SIGN UP
          </Button>
          </Grid>
</Grid>
    </div>
  );
}
