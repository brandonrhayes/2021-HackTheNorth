import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "gray",
    "&:hover": {
      color: "white",
      backgroundColor: "limegreen",
    },
  },
  claimedButton: {
    color: "white",
    backgroundColor: "limegreen",
  },
  card: {
    boxShadow: "0 20px 25px 0 rgba(0,0,0,0.2)",
    display: "flex",
    borderRadius: "20px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 180,
  },
  cardDate: {
    paddingBottom: "1rem",
  },
  cardClaimBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const FoodCard = ({ post }) => {
  const classes = useStyles();
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClaim = () => {
    setIsClaimed((isClaimed) => !isClaimed);
  };
  return (
    <Grid item key={post.title} xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography
                className={classes.cardTitle}
                component="h2"
                variant="h5"
              >
                {post.title}
              </Typography>
              {/* <Typography variant="subtitle2" color="textSecondary">
                {post.sponsor_name}
              </Typography> */}
              <Typography
                className={classes.cardDate}
                variant="subtitle2"
                color="textSecondary"
              >
                {post.date} • {post.address}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Box className={classes.cardClaimBox}>
                {isClaimed ? (
                  <Button
                    onClick={handleClaim}
                    variant="contained"
                    className={classes.claimedButton}
                    startIcon={<CheckCircleIcon />}
                  >
                    CLAIMED
                  </Button>
                ) : (
                  <Button
                    onClick={handleClaim}
                    variant="contained"
                    className={classes.button}
                    startIcon={<CheckCircleIcon />}
                  >
                    CLAIM
                  </Button>
                )}
                <Typography>
                  {post.claimed}/{post.quantity}
                </Typography>
              </Box>
            </CardContent>
          </div>

          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.dish_img_url}
              title="Image title"
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FoodCard;
