import { useEffect } from "react";
import { useState } from "react";
import postservice from "../../../services/PostService";
import PostItem from "../../../components/frontend/postitem";

function Post() {
  const [posts, setPosts] = useState([]);
  const [limit,setLimit]=useState(8);

  useEffect(() => {
		document.title = 'Tất cả bài viết';
	  }, []);
  useEffect(function () {
    (async function () {
      await postservice.getPostAll(limit, 1).then(function (result) {
        setPosts(result.data.posts);
      });
    })();
  }, [limit]);
  return (
    <section className="maincontent">
      <div className="container">
        <strong><h3 className="text-center text-danger mt-1">
        ༺ 阿彌陀佛 ༻  Tất cả bài viết  ༺ 以戒為師 ༻ 
          </h3></strong>
          
        <div className="row my-3">
          {posts.map(function (post, index) {
            return <PostItem post={post} key={index} />;
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            
            </div>
        </div>
        <div className="text-center">
        <button className="btn btn-success text-center" onClick={()=>setLimit(limit+4)}>༺Xem thêm༻</button>
        </div>
      </div>
    </section>
  );
}

export default Post;