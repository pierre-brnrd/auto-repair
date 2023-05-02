import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Service } from "../data";

export const ServiceCard: React.FC<{
  service: Service;
}> = ({ service }) => {
  return (
    <Card sx={{ minWidth: 150, margin: "16px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {service.desc}
        </Typography>
        <Typography variant="body2">{`${service.code} - $${service.cost} - ${service.date}`}</Typography>
      </CardContent>
    </Card>
  );
};
