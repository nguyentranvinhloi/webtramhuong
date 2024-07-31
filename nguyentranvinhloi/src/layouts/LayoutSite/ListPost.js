import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import topicservice from "../../services/TopicService";
import postservice from "../../services/PostService";

function ListPost() {
  // const [topics, setTopics] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     try {
  //       const result = await topicservice.getAll();
  //       setTopics(result.data.topics);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);
  const [posts, setPosts] = useState([]);
  useEffect(function () {
    (async function () {
      try {
        const result = await postservice.getAll();
        setPosts(result.data.posts);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <aside className="col-lg col-md-3 flex-lg-grow-0">
      <nav className="nav-home-aside">
        <ul className="menu-category">
          <li className="has-submenu"><h6 className="title-category">Danh sách tin tức<i className="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul className="submenu">
              {posts.map(function (pos, index) {
                return (
                  <li key={index}>
                    <Link className="nav-link" to={"/bai-viet/" + pos.slug}>{pos.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

    // <div className="listpost mb-5">
    //   <h4 className="head">DANH SÁCH BÀI VIẾT</h4>
    //   <ul className="ul">
    //     {posts.map(function (pos, index) {
    //       return (
    //         <li key={index}>
    //           <Link className="nav-link" to={"/bai-viet/" + pos.slug}>{pos.title}</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}

export default ListPost;
