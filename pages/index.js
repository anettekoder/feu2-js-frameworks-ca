import * as React from "react";
import Navmenu from "../layout/Navmenu";
import Heading from "../layout/Heading";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <>
      <Navmenu />
      <div className="grid place-content-center">
        <Heading content={"Check out some animal facts!"} />
        <PostList />
      </div>
    </>
  );
}
