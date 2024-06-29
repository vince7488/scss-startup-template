import {useState} from "react";
import {Card, Grid, Typography, Button} from "@mui/material";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign={'unset'}>
          <h1>SCSS start up template</h1>
          <Typography fontSize={14}>(Vernard Mercader)</Typography>

          <h2>Synopsis</h2>

          <p>Maintaining a consistent SCSS framework throughout frontend development can be tricky. To address this, I usually start with two core files:</p>

          <h3>The Files</h3>
          <ul>
            <li>
              <strong>Variables</strong>: Houses global values for media queries, theme colors, font definitions, and sometimes custom functions. This acts as a single source of truth for design values.
            </li>
            <li>
              <strong>Globally Declared Styles</strong>: Defines global styles like overrides for existing frameworks (e.g., Material UI, Bootstrap), general classes, and sometimes element-specific styling. This ensures consistent application throughout the project. This approach helps manage complexity and provides flexibility for adapting to project-specific needs.
            </li>
          </ul>
          <p>Depending on the project's complexity, a third file may be introduced for additional global configurations.</p>
        </Grid>

        <Grid item container justifyContent={'center'}>
          <Grid item md={6}><a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a></Grid>
          <Grid item md={6}><a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a></Grid>
        </Grid>

        <Grid container direction={'column'} item md={12}>
          <h2>Also with Vite + React!</h2>
          <Grid item md={4} alignSelf={'center'} justifySelf={'center'}>
            <Card sx={{maxWidth: 300}} variant='outlined'>
              <Button color='primary' variant='contained' onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
