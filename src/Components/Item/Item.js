import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./styles.css"

const CardComponent = ({ products }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={products.imageFB}
          alt={products.brand}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {products.brand}

          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${products.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardComponent;
