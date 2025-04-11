import React from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Divider from '@mui/joy/Divider';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import './MentorProfile.css';
import {
  Edit,
  Link,
  Work,
  School,
  Star,
  EmojiEvents,
  People,
  CalendarToday,
  Email,
  Person,
  LocationOn,
  Cake,
  Code,
  Build,
  Schedule,
  CheckCircle,
  Cancel,
  Save
} from '@mui/icons-material';

const customTheme = extendTheme({ defaultColorScheme: 'dark' });

const MentorProfile = () => {
  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.body',
        }}
      >
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
            px: 2,
          }}
        >
          <Typography level="h1" sx={{ mb: 4 }}>
            Mentor Profile
          </Typography>
          
          <Box
            sx={{
              width: '100%',
              maxWidth: 800,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {/* Profile Header */}
            <Card>
              <CardContent sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Avatar
                  size="lg"
                  src="/path-to-avatar.jpg"
                  sx={{ '--Avatar-size': '100px' }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography level="h3">John Doe</Typography>
                  <Typography level="body1" sx={{ color: 'text.secondary' }}>
                    Senior Software Engineer
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip
                      variant="soft"
                      color="primary"
                      startDecorator={<LocationOn />}
                    >
                      San Francisco, CA
                    </Chip>
                    <Chip
                      variant="soft"
                      color="neutral"
                      startDecorator={<Email />}
                    >
                      john.doe@example.com
                    </Chip>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  color="neutral"
                  startDecorator={<Edit />}
                >
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card>
              <CardContent>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Skills & Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip variant="solid" color="primary">JavaScript</Chip>
                  <Chip variant="solid" color="primary">React</Chip>
                  <Chip variant="solid" color="primary">Node.js</Chip>
                  <Chip variant="solid" color="primary">Python</Chip>
                  <Chip variant="solid" color="primary">AWS</Chip>
                  <Chip variant="solid" color="primary">Docker</Chip>
                </Box>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardContent>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Experience
                </Typography>
                <List>
                  <ListItem>
                    <ListItemDecorator>
                      <Work />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Senior Software Engineer</Typography>
                      <Typography level="body2">Tech Company Inc. (2020 - Present)</Typography>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <Work />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Software Engineer</Typography>
                      <Typography level="body2">Startup XYZ (2018 - 2020)</Typography>
                    </ListItemContent>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardContent>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Education
                </Typography>
                <List>
                  <ListItem>
                    <ListItemDecorator>
                      <School />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Master of Science in Computer Science</Typography>
                      <Typography level="body2">University of Technology (2016 - 2018)</Typography>
                    </ListItemContent>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Availability Section */}
            <Card>
              <CardContent>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Availability
                </Typography>
                <List>
                  <ListItem>
                    <ListItemDecorator>
                      <Schedule />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Monday - Friday</Typography>
                      <Typography level="body2">9:00 AM - 5:00 PM PST</Typography>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <CheckCircle color="success" />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography level="title-sm">Currently Available</Typography>
                      <Typography level="body2">Accepting new mentees</Typography>
                    </ListItemContent>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default MentorProfile;