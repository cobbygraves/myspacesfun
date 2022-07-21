import { Typography } from "@mui/material";
import React from "react";
import AboutBanner from "../Banner";

const About = () => {
  return (
    <div>
      <AboutBanner image="smalllivingroom.jpg" />
      <Typography
        variant="h4"
        sx={{ marginBottom: 10, marginTop: 3, textAlign: "center" }}
      >
        This is the about page
      </Typography>
    </div>
  );
};

export default About;
