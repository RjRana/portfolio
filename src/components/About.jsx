import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function Intro() {
    const theme = useTheme();
    const spacerValue = theme.spacing(3);
    return (
        <Box sx={{ mt: spacerValue, textAlign: 'center' }}>
            <Typography variant="body1" color="text.secondary" align="center">
                I am a seasoned Senior Frontend Developer with extensive knowledge in HTML, CSS, and Vue. I also
                possess intermediate skills in React. Throughout my career, I have consistently achieved outstanding
                results by creating and implementing high-quality web applications with a primary emphasis on
                delivering exceptional user experiences. I excel in working collaboratively with diverse teams to provide
                efficient solutions, leveraging industry-leading practices to optimize code performance and establish
                maintainable architectures.
            </Typography>
        </Box>
    );
}
