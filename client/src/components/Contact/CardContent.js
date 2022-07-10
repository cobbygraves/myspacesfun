import * as React from "react";
import Box from "@mui/material/Box";
import CardAbout from "./Card";
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import { Typography, TextField, Button } from "@mui/material";

const CardContent = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: -85,
        minHeight: 325,
        backgroundColor: "transparent",
        [theme.breakpoints.down("sm")]: {
          display: "block",
          position: "unset",
          top: 0,
          marginBottom: 13,
        },
      })}
    >
      <CardAbout
        iconComponent={<ForumIcon fontSize="32" />}
        title="Let Connect"
      >
        <Typography variant="body2" color="text.secondary">
          Interested in any of our services or products? Just pick up the phone
          to chat with us through any of the platforms below.
        </Typography>
        <i
          className="bi bi-whatsapp btn btn-text"
          style={{ fontSize: 37, color: "green" }}
        ></i>
        <i
          className="bi bi-facebook btn btn-text"
          style={{ fontSize: 37, color: "blue" }}
        ></i>
        <i
          className="bi bi-instagram btn btn-text"
          style={{ fontSize: 37, color: "pink" }}
        ></i>
      </CardAbout>
      <CardAbout
        iconComponent={<MailIcon fontSize="32" />}
        title="Share With Us"
      >
        {" "}
        <form>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={2}
            variant="filled"
          />
          <div>
            <Button
              variant="outlined"
              size="small"
              type="submit"
              color="success"
            >
              Send
            </Button>
          </div>
        </form>
      </CardAbout>
    </Box>
  );
};

export default CardContent;
