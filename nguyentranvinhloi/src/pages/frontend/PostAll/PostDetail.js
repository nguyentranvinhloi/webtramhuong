import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import PostItem from "../../../components/frontend/postitem";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  const [post_other, setPostOther] = useState([]);

  useEffect(() => {
		document.title = 'Chi tiết bài viết';
	  }, []);

  useEffect(function () {
    (function () {
       postservice.getPostBySlug(slug).then(function (result) {
        if (result.data.success === true)
        {
          setPost(result.data.post);
          setPostOther(result.data.post_other);
        }
      });
    })()
  }, [slug])
  return (
    <section className="maincontent">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-5">
            <img
              src={urlImage + "post/" + post.image}
              alt="hinh"
              className=""
              height="300px"width="370px"
            />
          </div>
          <div className="col-md-7 ">
          <div className=" text-danger">
            <h3>{post.title}</h3>
          </div>
          <div className="mt-5">
            <h6>{post.metadesc}</h6>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <p>{post.detail}</p>
          </div>
        </div>
        <h3 className="text-center text-danger mt-5">TIN TỨC KHÁC</h3>
        <div className="row center">
          {post_other.map(function(post,index){
            return <PostItem key={index} post={post}/>
          }
          )}
        </div>
      </div>
    </section>
  );
}

export default PostDetail;
