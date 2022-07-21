import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const FindUs = () => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        bottom: 175,
        [theme.breakpoints.down("sm")]: {
          bottom: 25,
          marginBottom: 5,
        },
      })}
    >
      <Typography variant="h4">FIND US</Typography>
      <Grid
        container
        justifyContent="center"
        sx={{
          backgroundColor: "#ccc",
          padding: 3,
          width: "90%",
          margin: "5px auto",
          borderRadius: 5,
          boxShadow: "0px 0px 1px 1px",
        }}
      >
        <Grid item sm={8}>
          <img
            src={require("../../assets/images/GoogleMap.jpg")}
            style={{ width: "100%", height: 375 }}
            alt="map"
          />
        </Grid>
        <Grid item sm={4}>
          <Box
            textAlign="justify"
            sx={(theme) => ({
              padding: 3,
              [theme.breakpoints.down("xs")]: {
                padding: 0,
              },
            })}
          >
            <h4>Address / Location</h4>
            <p className="lead">14 Issaka Norgah Road</p>
            <p className="lead">Dansoman, Beachem GA-538-3483</p>
            <p className="lead">Accra - Ghana</p>
            <h4>Phone</h4>
            <p className="lead">(+233) 0206 881 133</p>
            <p className="lead">(+233) 0249 604 380</p>
            <h4>E-mail</h4>
            <p className="lead">krysevoke@gmail.com</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindUs;
