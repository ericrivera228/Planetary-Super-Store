// React imports
import React from "react";

// Material UI imports
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useTheme } from "@material-ui/core/styles";

//Icon imports
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// Local imports
import { Product } from "./product";
import "./ProductCard.css";

// Height (in pixels) the image at the top of this component will default to if the height property is not provided.
const DEFAULT_IMAGE_HEIGHT = 160;

interface iProductCardProps {
  // Product to be displayed in this card
  product: Product;

  // Height (in pixels) for the image at the top of the card
  imageHeight?: number;
}

function ProductCard(props: iProductCardProps) {
  const theme = useTheme();

  return (
    <Card className="product-card">
      <div>
        {props.product.imageSrc && (
          <CardMedia
            component="img"
            image={props.product.imageSrc}
            height={
              props.imageHeight ? props.imageHeight : DEFAULT_IMAGE_HEIGHT
            }
            title={props.product.name}
          />
        )}

        <CardContent>
          <div className="header">
            <div
              className="title"
              style={{ color: theme.palette.primary.main }}
            >
              {props.product.name}
            </div>
            <div className="price">${props.product.price}</div>
          </div>

          {props.product.description && <div>{props.product.description}</div>}
        </CardContent>
      </div>

      <CardActions className="card-actions">
        <Button
          variant="contained"
          color="secondary"
          disableElevation={true}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
