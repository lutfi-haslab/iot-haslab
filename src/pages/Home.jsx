import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Frame from 'react-frame-component'

let url = "https://blog.has-labs.com/wp-json/wp/v2/posts";
const Home = (props) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const res = await fetch(url);
      if (!res.ok) {
        return;
      }
      const posts = await res.json();
      console.log(posts[0]);
	  setPost(posts)
    }
    loadPost();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={8} key={index}>
            <Frame initialContent={post.content.rendered} className="w-full"></Frame>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
