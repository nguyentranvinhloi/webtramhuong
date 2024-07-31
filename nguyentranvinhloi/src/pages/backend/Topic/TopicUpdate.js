import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import topicservice from "../../../services/TopicService";
import categoryservice from "../../../services/CategoryService";

function TopicUpdate() {
    const navigate=useNavigate();

  //khai báo state
  const [name, setName] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [status, setStatus] = useState(1);
  //chi tiết mẫu tin có id
  const { id } = useParams("id");
  useEffect(function () {
    (async function () {
      await topicservice.getById(id)
      .then(function (result) {
        const tmp = result.data.topics;
        setName(tmp.name);
        setMetakey(tmp.metakey);
        setMetadesc(tmp.metadesc);
        setStatus(tmp.status);
        setParentId(tmp.parent_id);
      });
    })();
  }, []);
  //Lấy danh sách
  const [categorys, setCategorys] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll()
      .then(function (result) 
      {
        setCategorys(result.data.categorys);
      });
    })();
  }, []);

  async function topicEdit(event) 
  {
    event.preventDefault();
    const image=document.querySelector("#image");
    var topic = new FormData();
    topic.append("name", name);
    topic.append("metakey", metakey);
    topic.append("metadesc", metadesc);
    topic.append("parent_id", parent_id);
    topic.append("status", status);
   
    //update
    await topicservice.update(topic,id)
    .then(function(res)
    {
       alert(res.data.message)
       navigate('/admin/topic',{replace:true});
    });
  }
  return (
    <form onSubmit={topicEdit} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm danh mục</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/topic" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên chủ đề</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metakey"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="parent_id">Danh mục cha</label>
                <select
                  name="parent_id"
                  className="form-control"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}
                >
                  <option value="0">Danh mục cha</option>
                  {categorys.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TopicUpdate;
