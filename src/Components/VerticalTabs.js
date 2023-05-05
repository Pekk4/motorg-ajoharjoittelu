import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useLocation, NavLink } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const route = useLocation()
  let index = 0

  const [value, setValue] = useState(index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (route.hash !== "") {
      const path = decodeURI(route.hash).replace("#", "")

      index = parseInt(props.names[path])
    }

    setValue(index)
  }, [route])

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          color: 'orange',
          "&& .Mui-selected": { color: "black"},
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "orange",
            color: "orange"
          }
        }}
      >
        {props.content.map((part) => (
          <Tab
            sx={{ px: 3 }} 
            key={part.id}
            label={part.name}
            component={NavLink}
            to={`#${part.name}`}
            {...a11yProps(part.id)}
          />
        ))}

      </Tabs>
      <Container maxWidth="lg">
        {props.content.map((part) => (
          <TabPanel value={value} index={part.id} key={part.id}>
            <div className="max-h-[75vh] overflow-y-auto my-14">
              <zero-md src={part.url}></zero-md>
            </div>
            
          </TabPanel>
        ))}
      </Container>
    </Box>
  );
}