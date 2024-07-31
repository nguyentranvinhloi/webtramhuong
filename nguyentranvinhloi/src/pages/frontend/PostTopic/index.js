import { useEffect, useState } from "react";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";
import PostItem from "../../../components/frontend/postitem";
import { useParams } from "react-router-dom";
import ListPost from "../../../layouts/LayoutSite/ListPost";

function PostTopic() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [title, setTitle] = useState("");
  document.title = title;
  useEffect(
    function () {
      (async function () {
        try {
          const result_topic = await topicservice.getById(slug);
          const topicid = result_topic.data.topic.id;
          const result = await postservice.getPostByTopicId(topicid, limit);
          setPosts(result.data.posts);
          setTitle(result_topic.data.topic.name);
        } catch (error) {
          console.error(error);
        }
      })();
    },
    [limit, slug]
  );

  return (
    <section className="maincontent">
      
      <div className="">
            <div className="row m-5">
              <div className="mb-3"><h3 className="text-danger">Lọc theo:</h3> </div>
              <ListCategory />
              <ListBrand />
              <ListPost/>
            </div>
          <div className="">
            <h3 className="text-center text-danger">{title}</h3>
            <div className="row">
              {posts.map(function (post, index) {
                return <PostItem post={post} key={index} />;
              })}
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <button
                  className="btn btn-success"
                  onClick={() => setLimit(limit + 12)}
                >
                  ༺Xem thêm༻
                </button>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
}

export default PostTopic;