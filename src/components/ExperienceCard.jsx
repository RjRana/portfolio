import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ExperienceCard(props) {
  const {name, role, year, location, link} = props.experience
  return (
    <Card sx={{height: '100%'}}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom lineHeight={1.3} height={60}>
          {name}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 14 }} color="text.secondary" component="div" gutterBottom>
          {role}
        </Typography>
        <Typography fontWeight={500} sx={{ mb: 1.5, fontSize: 14}} color="text.secondary">
          {year.from} - {year.to}
        </Typography>
        <Typography variant="body2">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}
