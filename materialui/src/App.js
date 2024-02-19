
import './App.css';

import React from 'react';
import { Button } from '@material-ui/core';

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import TypographyExample from './Grid/Grid';

import ButtonAppBar from './Grid/Chip';

import Icon from './Grid/Icon';

function App() {

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="App"><br></br><br></br>
      <Button color="primary" variant="contained">Hello World</Button>
      <Button variant="contained">contained</Button> <br></br>

      <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} />}label="Check me" /> <br></br>

      <TypographyExample></TypographyExample>
      <Icon></Icon> <br></br>
      <ButtonAppBar></ButtonAppBar>
    </div>
  );
}

export default App;
