import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PageCard = (props) => {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: props.width,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: props.background,
      })}
      raised={props.raised}
    >
      <div>{props.iconComponent}</div>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default PageCard;
