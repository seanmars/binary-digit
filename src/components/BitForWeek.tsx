import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Divider, FormLabel, TextField, Typography } from '@material-ui/core';
import WeekData from '../data/WeekData';

// noinspection TypeScriptValidateTypes
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
    },

    itemButton: {
      width: '8rem',
      height: '8rem',
      border: '.1rem solid'
    },
    itemBox: {
      width: '100%',
      height: '100%'
    },

    utilButton: {
      border: '.1rem solid'
    }
  }),
);

const BitGrid = (props: { name: string, value: number, toggled: boolean, clickCallback: (bitValue: number) => void }) => {
  const classes = useStyles();
  const { name, value, toggled, clickCallback } = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!clickCallback) {
      return;
    }

    clickCallback(value);
  };

  return (
    <Grid item>
      <Button type="button" className={classes.itemButton} onClick={handleClick}>
        <Box className={classes.itemBox}>
          <Typography variant="h6">{name}</Typography>
          <Divider />
          <Box mt={1}>
            <Typography variant="h3">{toggled ? 1 : 0}</Typography>
          </Box>
        </Box>
      </Button>
    </Grid>
  );
};

export default function BitForWeek() {
  const minValue: number = 0;
  const maxValue: number = 255;

  const classes = useStyles();
  const [bitValue, setBitValue] = useState(0b00000000);

  const onBitClick = (value: number) => {
    const v = bitValue ^ value;
    setBitValue(v);
  };

  const handleInput = (event: any) => {
    const inputValue = event.target.value;
    let parsedInt = parseInt(inputValue);
    if (!Number.isFinite(parsedInt)) {
      return;
    }

    if (parsedInt < minValue) {
      setBitValue(minValue);
      return;
    }

    if (parsedInt > maxValue) {
      setBitValue(maxValue);
      return;
    }

    setBitValue(parsedInt);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.control}>
        <Grid container spacing={3}>
          {/* title */}
          <Grid item xs={12}>
            <FormLabel>Switch for Day</FormLabel>
          </Grid>

          {/* bit buttons */}
          <Grid container item xs={12} spacing={1}>
            <Grid item xs />
            {WeekData.map((o, index) => {
              const toggled = (bitValue & o.value) === o.value;
              return <BitGrid key={index} name={o.name} value={o.value} toggled={toggled} clickCallback={onBitClick} />;
            })}
            <Grid item xs />
          </Grid>

          {/* output and utils */}
          <Grid container item xs={12} justify="center" alignContent="center" alignItems="center" spacing={3}>
            <Grid item>
              <Button className={classes.utilButton} onClick={() => {
                setBitValue(minValue);
              }}>MIN</Button>
            </Grid>
            <Grid item>
              <TextField value={bitValue} onChange={handleInput}
                         type="number"
                         inputProps={{
                           inputMode: 'numeric',
                           pattern: '[0-9]*',
                           style: { textAlign: 'center' },
                           min: minValue,
                           max: maxValue
                         }} />
            </Grid>
            <Grid item>
              <Button className={classes.utilButton} onClick={() => {
                setBitValue(maxValue);
              }}>MAX</Button>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}
