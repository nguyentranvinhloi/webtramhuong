import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import postservice from "../../../services/PostService";
import { Link } from "react-router-dom";
import quangdac from "../../../assets/images/logo don le.jpg";

function PostNew() {
  const [posts, setPosts] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getPostNew(2).then(function (result) {
        setPosts(result.data.posts);
      });
    })();
  }, []);
  return (
    <section className="padding-bottom padding-y bg-light  m-3" >
      <div className="text-center mt-3 mb-3">
        <img src={quangdac} alt="hinh" width='100px' height='100px' />
      </div>
      <div className="section-heading heading-line">
        <h4 className=" title-section text-danger ">༺TIN TỨC MỚI༻</h4>
      </div>
      <div className="row">
        {posts.map(function (post, index) {
          return (
            <div className="col-md-6">
              <div
                className="card-banner banner-quote overlay-gradient"

              >
                <Link to={"/chi-tiet-bai-viet/" + post.slug}>
                  <img src={urlImage + "post/" + post.image} height="400px" width="610px" className="" alt={post.image} />
                </Link>
                <div className="card-img-overlay white m-4">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text" style={{ maxheight: 800 }}>
                    {post.metadesc}
                  </p>
                  <Link to={"/chi-tiet-bai-viet/" + post.slug} className="btn btn-primary rounded-pill">
                    Xem thêm
                  </Link>
                </div>
              </div>
              
            </div>
          );
        })}
        <div className="text-center my-3">
                <Link to="/bai-viet" className="btn btn-success">༺Xem tất cả bài viết༻</Link>
              </div>
        {/* <div className="col-md-6">
        <div
          className="card-banner banner-quote overlay-gradient"
          style={{ backgroundImage: `url(${imagee})` }}
        >
          <div className="card-img-overlay white">
            <h3 className="card-title">Nụ cười trẻ thơ nơi cửa thiền</h3>
            <p className="card-text" style={{ maxheight: 800 }}>
            Mộc mạc, bình yên, thiền vị và an lành là điều mà bất cứ ai cũng sẽ tìm thấy, 
            dù chỉ xem qua những bức ảnh trẻ thơ vui chơi, tu học ở chùa Tường Vân, thôn Thanh Hạ, 
            xã Ninh Hòa, huyện Hoa Lư, tỉnh Ninh Bình.
            </p>
            <Link to="" className="btn btn-primary rounded-pill">
              Xem thêm
            </Link>
          </div>
        </div>
        </div> */}
      </div>

      {/* <div className="carousel-inner text-center mt-3">
        {posts.map(function (post, index) {
          return (
            <div className="col-md-15 mb-3"  >
              <div className="post-item ">
                <div className="post-image">
                  <Link to={"/chi-tiet-bai-viet/" + post.slug}>
                    <img src={urlImage + "post/" + post.image} height="300px" width="500px" className="" alt={post.image} />
                  </Link>
                </div>
                <div className="post-name p-2">
                  <h3 className="text-center fs-5">
                    <Link className="nav-link text-primary" to={"/chi-tiet-bai-viet/" + post.slug}>
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
}

export default PostNew;

/*{posts.map(function (post, index) {
  return(
    <div key={index}>
      <img src={urlImage+"post/"+post.image} className="img-fluid" alt={post.image}/>
      <h5>{post.title}</h5>
    </div>
  );
  })}*/

/*
<div className="col-md-3 mb-3"  >
          <div className="post-item border">
              <div className="post-image">
                  <Link to={"/chi-tiet-bai-viet/"+post.slug}>
                      <img src={urlImage+"post/"+post.image} className="img-fluid" alt={post.image} />
                  </Link>
              </div>
              <div className="post-name p-2">
                  <h3 className="text-center fs-4">
                  <Link to={"/chi-tiet-bai-viet/"+post.slug}>
                      {post.title}
                  </Link>
                  </h3>
                  
              </div>

              
          </div>


      </div>
*/