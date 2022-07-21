import * as React from "react";
import Box from "@mui/material/Box";
import CardAbout from "../Card";
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import { Typography, TextField, Button } from "@mui/material";

const CardContent = () => {
  const [social, setSocial] = React.useState({ show: false, info: "" });
  const changeSocialHandler = (account) => {
    switch (account) {
      case "instagram":
        setSocial({
          show: true,
          info: "krys_evoke",
        });
        break;
      case "facebook":
        setSocial({
          show: true,
          info: "krysevoke",
        });
        break;
      case "whatsapp":
        setSocial({
          show: true,
          info: "(+233) 0545 428 917",
        });
        break;
      default:
        setSocial({
          show: false,
          info: "",
        });
    }
  };
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: -175,
        // minHeight: 325,
        backgroundColor: "transparent",
        [theme.breakpoints.down("sm")]: {
          display: "block",
          position: "unset",
          top: 0,
          //   marginBottom: 13,
        },
      })}
    >
      <CardAbout
        iconComponent={<ForumIcon fontSize="32" />}
        title="Let Connect"
        background="#ccc"
        width={345}
        raised={true}
      >
        <Typography variant="body2" color="text.secondary">
          Interested in any of our services or products? Just pick up the phone
          to chat with us through any of the platforms below.
        </Typography>
        <i
          className="bi bi-whatsapp btn btn-text"
          style={{ fontSize: 37, color: "green" }}
          onClick={() => changeSocialHandler("whatsapp")}
        ></i>
        <i
          className="bi bi-facebook btn btn-text"
          style={{ fontSize: 37, color: "#106cce" }}
          onClick={() => changeSocialHandler("facebook")}
        ></i>
        <i
          className="bi bi-instagram btn btn-text"
          style={{ fontSize: 37, color: "#942b6a" }}
          onClick={() => changeSocialHandler("instagram")}
        ></i>
        {social.show && <Typography>{social.info}</Typography>}
      </CardAbout>
      <CardAbout
        iconComponent={<MailIcon fontSize="32" />}
        title="Share With Us"
        background="#ccc"
        width={345}
        raised={true}
      >
        <TextField
          id="standard-basic"
          placeholder="Email"
          variant="filled"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              paddingLeft: 0,
            },
          }}
        />
        <TextField
          id="filled-multiline-static"
          multiline
          rows={2}
          placeholder="Message"
          variant="filled"
          sx={{
            width: "100%",
          }}
        />
        <div>
          <Button variant="outlined" size="small" color="success">
            Send
          </Button>
        </div>
      </CardAbout>
    </Box>
  );
};

export default CardContent;
