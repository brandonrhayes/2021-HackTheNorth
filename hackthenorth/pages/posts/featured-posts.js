import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Nav from "../../components/navbar";
import FoodCard from "../../components/FoodCard";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/featured/?{dish})",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const featuredPosts = [
  {
    title: "Shrimp Curry",
    date: "Jan 16, 7:30PM ",
    address: "99 Main St.",
    dish_img_url: "/images/dish1.jpg",
    description:
      "I'm trying a new recipe and would love to get feedback on how it tastes! :)",
  },
  {
    title: "Double Patty Burger",
    date: "Jan 17, 5:30PM ",
    address: "101 Waterloo Ave.",
    dish_img_url: "/images/dish2.jpg",
    description:
      "Accidently bought too many burgers, need to make them all before the go bad! ",
  },
  {
    title: "Shrimp Salad",
    date: "Jan 17, 12:30PM ",
    address: "101 Waterloo Ave.",
    dish_img_url: "/images/dish3.jpg",
    description:
      "Accidently bought too many burgers, need to make them all before the go bad! ",
  },
  {
    title: "Mom's Spaghetti",
    date: "Jan 17, 7:00PM ",
    address: "101 Waterloo Ave.",
    dish_img_url: "/images/dish4.jpg",
    description:
      "Accidently bought too many burgers, need to make them all before the go bad! ",
  },
];

const FeaturedPosts = () => {
  const classes = useStyles();

  return (
    <>
      <Nav> </Nav>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Top Food Posts
          </Typography>
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: "none" }} alt="background" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="h5" color="inherit" paragraph>
                    This specific annonymous donor is always sharing food that
                    you've got to try!
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue to order...
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FoodCard post={post} />
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
    </>
  );
};

export default FeaturedPosts;
