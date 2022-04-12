import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import BlogItem from "./BlogItem";
import axios from "../../library/Ajax";

export default function BlogList() {
  const [posts, updatePosts] = useState([]);
  const [isLoading, setLoadingStatus] = useState(true);
  const [isError, setErrorStatus] = useState(false);
  useEffect(() => {
    /*
    axios
      .get("photos")
      .then((res) => {
        const postsList = res.data.slice(0, 1);
        setErrorStatus(false);
        setLoadingStatus(false);
        updatePosts(postsList);
      })
      .catch((err) => {
        console.log(err);
        setLoadingStatus(false);
        setErrorStatus(true);
        updatePosts([]);
      });
      */
  }, []);

  return (
    <Row style={{ paddingBottom: "10px" }}>
      {isError ? (
        <ErrorMessageContent />
      ) : isLoading ? (
        <LoadingMessageContent />
      ) : (
        <PostListContent posts={posts} />
      )}
    </Row>
  );
}

export function ErrorMessageContent(props) {
  return <div>Error Message</div>;
}

export function LoadingMessageContent(props) {
  return <div>Loading Posts</div>;
}

export function PostListContent(props) {
  return (
    <>
      {props.posts.map((post) => (
        <BlogItem img={post.url} title={post.title} link={post.url} />
      ))}
    </>
  );
}
