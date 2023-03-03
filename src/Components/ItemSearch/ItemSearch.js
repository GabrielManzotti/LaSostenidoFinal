import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./styles.css"

const ItemSearch = ({ search }) => {
  console.log("search", search)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={search.imageFB}
          alt={search.brand}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {search.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${search.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemSearch;
