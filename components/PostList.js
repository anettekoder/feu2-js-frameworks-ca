import { useState, useEffect } from "react";
import Moment from "moment";
import { BASE_URL } from "../constants/api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "wp/v2/posts";
  const post = "";

  useEffect(function () {
    async function fetcData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setPosts(json);
        } else {
          setError("an error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetcData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      {posts.map(function (post, index) {
        const date = Moment(post.date).format("DD MMMM YYYY");
        return (
          <div key={index} className="text-center">
            <a key={post.id} href={`detail/${post.id}`}>
              <h3 key={post.title.rendered}>{post.title.rendered}</h3>
            </a>
            <p key={post.slug} className="font-medium">
              Posted: {date}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
