import React from "react";
import "./DetailsCard.css";
import "@fontsource/noto-sans-hebrew";
import "@fontsource/noto-serif-hebrew";
import "@fontsource/noto-rashi-hebrew";
import "@fontsource/ibm-plex-sans-hebrew";
import "@fontsource/playpen-sans-hebrew";
import "@fontsource/solitreo";

import { Card, Grid, TextField, Typography } from "@mui/material";
import { useWords } from "./context/wordsContext";

export default function DetailsCard() {
  const { playerDetails, setPlayerDetails } = useWords();
  const handleChange = (e) => {
  const { name, value } = e.target;
  setPlayerDetails(prevUser => ({
    ...prevUser,
    [name]: value
  }));
  console.log(playerDetails.playerName);
  
};
  return (
    <Card id="detailsCard" className="playpen-sans">
      <Typography id="cardTytle">פרטי המשחק</Typography>

      <Grid container spacing={2} className="gridDetails">
        <Grid sx={{ width: "20%" }}>
          <Typography className="typoDetails">שם:</Typography>
        </Grid>
        <Grid sx={{ width: "70%" }}>
          {" "}
          <TextField name="playerName"
            onChange={handleChange}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="gridDetails">
        <Grid sx={{ width: "20%" }}>
          <Typography className="typoDetails">נושא:</Typography>
        </Grid>
        <Grid sx={{ width: "70%" }}>
          <TextField name="topic"
            onChange={handleChange}></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="gridDetails">
        <Grid sx={{ width: "20%" }}>
          <Typography className="typoDetails">שפה:</Typography>
        </Grid>
        <Grid sx={{ width: "70%" }}>
          <TextField name="playerLanguage"
            onChange={handleChange}></TextField>
        </Grid>
      </Grid>
    </Card>
  );
}
