import { BASE_URL } from "../../constants/api";
import Heading from "../../layout/Heading";
import Navmenu from "../../layout/Navmenu";
import moment from "moment";

const url = BASE_URL + "wp/v2/posts";

export default function Post({ post }) {
  const content = post.content.rendered;
  const date = moment(post.date).format("DD. MMMM-YYYY");
  return (
    <>
      <Navmenu>
        <Heading content={"10 fact`s about:"} />
        <div className="grid place-content-center text-left mx-4 mb-52">
          <h2 className="text-center mt-4">{post.title.rendered}</h2>
          <p className="text-center my-4 font-medium">Posted: {date}</p>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </Navmenu>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const posts = json;

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const new_url = `${url}/${params.id}`;

  let post = null;

  try {
    const response = await fetch(new_url);
    const json = await response.json();
    post = json;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { post: post },
  };
}
