import { Card, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./TopBar.css"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LanguageIcon from '@mui/icons-material/Language';
import QuestionMark from '@mui/icons-material/QuestionMark';
import { useWords } from '../context/wordsContext';
import TopicIcon from '@mui/icons-material/Topic';
// import {MilitaryTechIcon,AccountBoxIcon} from '@mui/icons-material';

export default function TopBar() {
  const { playerDetails } = useWords();
  return (
    <div>
      <Card className='topBarCard'>
        <div id="nameDiv">
          <AccountBoxIcon className='topBarIcons'></AccountBoxIcon>
          <Typography id="playerName">{playerDetails.playerName}</Typography>
        </div>
        <div >
          <TopicIcon className='topBarIcons'></TopicIcon>
          <Typography id="topic">{playerDetails.topic}</Typography>
        </div>
        <div>
          <MilitaryTechIcon className='topBarIcons'></MilitaryTechIcon>
          <Typography id="playerScore">{playerDetails.playerScore}</Typography>
        </div>
        <div>
          <LanguageIcon className='topBarIcons'></LanguageIcon>
          <Typography id="playerLanguage">{playerDetails.playerLanguage}</Typography></div>
        <div>
          <QuestionMark className='topBarIcons'></QuestionMark>
          <Typography id="numOfQuestion">{playerDetails.numOfQuestion}</Typography></div>
      </Card>
    </div>
  )
}
