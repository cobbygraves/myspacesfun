import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AboutCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 7,
        marginBottom: 7,
      }}
      raised
    >
      <div>
        {/* <ForumIcon fontSize="32px" /> */}
        {props.iconComponent}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default AboutCard;
