import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Nav from "../components/navbar";
import FoodCard from "../components/FoodCard";
import MainPost from "../components/MainPost";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: "2rem",
    paddingTop: "0",
  },
  toolbarTitle: {
    flex: 1,
  },
}));

const featuredPosts = [
  {
    id: 1,
    title: "Shrimp Curry",
    sponsor_name: "Mrs. Smith",
    date: "Jan 16, 7:30PM ",
    address: "99 Main St.",
    claimed: 0,
    quantity: 4,
    dish_img_url: "/images/dish1.jpg",
    description:
      "I'm trying a new recipe and would love to get feedback on how it tastes! :)",
  },
  {
    title: "Double Patty Burger",
    sponsor_name: "Mr. James",
    date: "Jan 17, 5:30PM ",
    address: "101 Waterloo Ave.",
    claimed: 3,
    quantity: 8,
    dish_img_url: "/images/dish2.jpg",
    description:
      "Accidently bought too many burgers, need to make them all before the go bad! ",
  },
  {
    title: "Shrimp Salad",
    sponsor_name: "Jonathan Scena",
    date: "Jan 17, 12:30PM ",
    address: "101 Waterloo Ave.",
    claimed: 2,
    quantity: 4,
    dish_img_url: "/images/dish3.jpg",
    description:
      "Accidently bought too many burgers, need to make them all before the go bad! ",
  },
  {
    title: "Mom's Spaghetti",
    sponsor_name: "Anonymous",
    date: "Jan 17, 7:00PM ",
    address: "101 Waterloo Ave.",
    claimed: 3,
    quantity: 4,
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

      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          {/* <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Top Food Posts
          </Typography> */}
        </Toolbar>
        <main>
          <MainPost />
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
      <Button>Hello</Button>
    </>
  );
};

export default FeaturedPosts;
