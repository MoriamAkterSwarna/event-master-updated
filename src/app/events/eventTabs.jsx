"use client";
import { events } from "@/data/eventData";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { EventCard } from "./eventCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="mx-auto"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EventTabs() {
  const [value, setValue] = React.useState(0);
  const uniqueEventTypes = [
    ...new Set(events.map((event) => event.event_type)),
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="mx-auto">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered>
          {uniqueEventTypes.map((eventType, index) => (
            <Tab
              key={index}
              label={eventType}
              {...a11yProps(index)}
              sx={{
                "&.Mui-selected": {
                  // Style for the active tab
                  backgroundColor: "#F86F03", // Background color for the active tab
                  color: "white", // Text color for the active tab
                  fontWeight: "bold", // Text weight for the active tab
                  borderRadius: "15px", // Add rounded corners
                },
                // Default style for inactive tabs
                fontWeight: "normal", // Text weight for inactive tabs
                borderRadius: "0", // Remove rounded corners for inactive tabs
              }}
            />
          ))}
        </Tabs>
      </Box>
      {uniqueEventTypes.map((eventType, index) => (
        <CustomTabPanel
          key={index}
          value={value}
          index={index}
          className="mx-20">
          <Grid container spacing={10} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            {events
              .filter((event) => event.event_type === eventType)
              .map((filteredEvent, eventIndex) => (
                <Grid item key={eventIndex}>
                  <EventCard filteredEvent={filteredEvent} />
                </Grid>
              ))}
          </Grid>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
