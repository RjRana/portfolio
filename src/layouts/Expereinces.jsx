import React from 'react'
import Grid from '@mui/material/Grid';
import ExperienceCard from '@components/ExperienceCard'
import ExploreIcon from '@mui/icons-material/Explore';
import Header from '@components/Header'

export default function Expereinces() {
  const componentCount = [
    {
      name: "Respond.io (Formerly Rocketbots)",
      role: "Lead Frontend Developer",
      year: { from: 2019, to: 'Present' },
      location: "Kuala Lumpur, Malaysia"
    },
    {
      name: "Getups.pk (Sellz Media)",
      role: "Senior Frontend Developer",
      year: { from: 2017, to: 2019 },
      location: "Lahore, Pakistan"
    },
    {
      name: "Cutting Edge Projects (Green origins)",
      role: "Frontend Developer",
      year: { from: 2015, to: 2017 },
      location: "Lahore, Pakistan"
    },
  ]
    ;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Header title={'Experience'} icon={ExploreIcon} />
      </Grid>
      {componentCount.map((ex, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <ExperienceCard experience={ex} />
        </Grid>
      ))}
    </Grid>
  )
}