import { useEffect, useState } from "react";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import topicservice from "../../../services/TopicService";
import postservice from "../../../services/PostService";
import PostItem from "../../../components/frontend/postitem";
import { useParams } from "react-router-dom";
import ListPost from "../../../layouts/LayoutSite/ListPost";

function PostTopic() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(2);
  const [title, setTitle] = useState("");
  document.title = title;
  useEffect(function () {
    (async function () {
      try {
          const result_topic = await topicservice.getBySlug(slug);
          const topicid=result_topic.data.post.topic.id;
          const result = await postservice.getPostTopic(topicid,limit);
          setPosts(result.data.posts);
          setTitle(result_topic.data.topic.name);
      } catch (error) {
         console.error(error);
       }
    })();
  },
  [limit,slug]
);
const [topics,setTopics]=useState([]);
    useEffect(function(){
      (async function(){
        await topicservice.getAll()
        .then(function(result)
        {
          setTopics(result.data.topics);
        });
      })();
    },[]);
    return ( 
        <section className="maincontent">
        <div className="container my-4">
          <div className="row">
            <div className="col-md-3">
              <ListCategory />
              <ListBrand />
              <ListPost/>
            </div>
            <div className="col-md-9">
              <h3 className="text-center text-danger">{title}</h3>
              <div className="row">
                {topics.map(function (topic, index) {
                  return <PostItem topic={topic} key={index} />;
                })}
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <button
                    className="btn btn-success"
                    onClick={() => setLimit(limit + 2)}
                  >
                    ༺Xem thêm༻
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
}

export default PostTopic;