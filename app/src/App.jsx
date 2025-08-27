
export default function App() {
  return (
    <div>     
    <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 4 }}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
  <Grid size={{ xs: 6, md: 4 }}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
  <Grid size={{ xs: 6, md: 4 }}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
  <Grid size={12}>
    <Item><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Item>
  </Grid>
</Grid>
    </div>
  );
}
