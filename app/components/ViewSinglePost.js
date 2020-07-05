import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Page from "./Page";

function ViewSinglePost() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();

  useEffect(() => {
    async function fetchPost() {
      try {
        const respose = await Axios.get(`/post/${id}`);
        setPost(respose.data);
        setIsLoading(false);
      } catch (e) {
        console.log(`There was a problem ${e}`);
      }
    }
    fetchPost();
  });
  if (isLoading) {
    return (
      <Page title="...">
        <div>Loading ...</div>
      </Page>
    );
  }
  return (
    <Page title="Post">
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <a href="#">
          <img className="avatar-tiny" src={post.author.avatar} />
        </a>
        Posted by <a href="#">{post.author.username}</a> on 2/10/2020
      </p>

      <div className="body-content">{post.body}</div>
    </Page>
  );
}

export default ViewSinglePost;
