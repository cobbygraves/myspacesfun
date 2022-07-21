import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import AboutBanner from "../Banner";
import AboutCard from "../Card";

const About = () => {
  return (
    <div>
      <AboutBanner image="smalllivingroom.jpg" />
      <Box sx={{ position: "absolute", top: 50 }}>
        <AboutCard width={500} title="About" background="#b4aca7" raised>
          Anim adipisicing eu sit est esse. Non sint aliqua Lorem nisi voluptate
          velit ullamco velit consectetur cupidatat pariatur in aliqua. Ullamco
          commodo ea pariatur deserunt cillum pariatur cillum Lorem occaecat.
          Voluptate exercitation enim excepteur duis non non laboris consectetur
          reprehenderit magna duis minim. Esse occaecat do dolore occaecat sit
          aliquip laborum aute consectetur dolore est. Nisi pariatur in eu qui
          sit fugiat anim. reprehenderit magna duis minim. Esse occaecat do
          dolore occaecat sit aliquip laborum aute.
        </AboutCard>
      </Box>

      <Box>
        <AboutCard width="100%" background="#353E4D" raised>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12} sm={6}>
              <img
                src={require(`../../assets/images/differentbottles.jpg`)}
                style={{ width: "95%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Disclaimer
              </Typography>
              <Typography align="justify">
                Anim adipisicing eu sit est esse. Non sint aliqua Lorem nisi
                voluptate velit ullamco velit consectetur cupidatat pariatur in
                aliqua. Ullamco commodo ea pariatur deserunt cillum pariatur
                cillum Lorem occaecat. Voluptate exercitation enim excepteur
                duis non non laboris consectetur reprehenderit magna duis minim.
                Esse occaecat do dolore occaecat sit aliquip laborum aute
                consectetur dolore est. Nisi pariatur in eu qui sit fugiat anim.
                reprehenderit magna duis minim. Esse occaecat do dolore occaecat
                sit aliquip laborum aute.
              </Typography>
            </Grid>
          </Grid>
        </AboutCard>
      </Box>
      <Box>
        <AboutCard width="100%" background="#F9971A">
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Privacy Policy
              </Typography>
              <Typography align="justify" sx={{ width: "95%" }}>
                Anim adipisicing eu sit est esse. Non sint aliqua Lorem nisi
                voluptate velit ullamco velit consectetur cupidatat pariatur in
                aliqua. Ullamco commodo ea pariatur deserunt cillum pariatur
                cillum Lorem occaecat. Voluptate exercitation enim excepteur
                duis non non laboris consectetur reprehenderit magna duis minim.
                Esse occaecat do dolore occaecat sit aliquip laborum aute
                consectetur dolore est. Nisi pariatur in eu qui sit fugiat anim.
                reprehenderit magna duis minim. Esse occaecat do dolore occaecat
                sit aliquip laborum aute.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={require(`../../assets/images/wallthree.jpg`)}
                style={{ width: "95%", height: "75%" }}
              />
            </Grid>
          </Grid>
        </AboutCard>
      </Box>
      <Box
        sx={{
          marginBottom: 10,
        }}
      >
        <AboutCard width="100%" background="#ffffff" raised>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item xs={12} sm={6}>
              <img
                src={require(`../../assets/images/redbottles.jpg`)}
                style={{ width: "95%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Terms of Use
              </Typography>
              <Typography align="justify">
                Anim adipisicing eu sit est esse. Non sint aliqua Lorem nisi
                voluptate velit ullamco velit consectetur cupidatat pariatur in
                aliqua. Ullamco commodo ea pariatur deserunt cillum pariatur
                cillum Lorem occaecat. Voluptate exercitation enim excepteur
                duis non non laboris consectetur reprehenderit magna duis minim.
                Esse occaecat do dolore occaecat sit aliquip laborum aute
                consectetur dolore est. Nisi pariatur in eu qui sit fugiat anim.
                reprehenderit magna duis minim. Esse occaecat do dolore occaecat
                sit aliquip laborum aute.
              </Typography>
            </Grid>
          </Grid>
        </AboutCard>
      </Box>
    </div>
  );
};

export default About;
