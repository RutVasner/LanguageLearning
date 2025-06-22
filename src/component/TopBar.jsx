import { Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./TopBar.css"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LanguageIcon from '@mui/icons-material/Language';
import QuestionMark from '@mui/icons-material/QuestionMark';
// import {MilitaryTechIcon,AccountBoxIcon} from '@mui/icons-material';

export default function TopBar() {
  const [playerDetails, setPlayerDetails] = useState({ playerName: "רות", playerScore: "10", playerLanguage: "אנגלית", numOfQuestion: "1/10" })
  return (
    <div>
      <Card className='topBarCard'>
        <div id="nameDiv">
          <AccountBoxIcon></AccountBoxIcon>
          <Typography id="playerName">{playerDetails.playerName}</Typography>
        </div>
        <div>
          <MilitaryTechIcon></MilitaryTechIcon>
          <Typography id="playerScore">{playerDetails.playerScore}</Typography>
        </div>
        <div>
          <LanguageIcon></LanguageIcon>
          <Typography id="playerLanguage">{playerDetails.playerLanguage}</Typography></div>
        <div>
          <QuestionMark></QuestionMark>
          <Typography id="numOfQuestion">{playerDetails.numOfQuestion}</Typography></div>
      </Card>
    </div>
  )
}
