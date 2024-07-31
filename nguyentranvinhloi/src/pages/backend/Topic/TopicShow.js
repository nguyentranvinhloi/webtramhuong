import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import topicservice from "../../../services/TopicService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function TopicShow() {
  const navigate = useNavigate();

    const {id} = useParams("id");
    const [topic,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
          await topicservice.getById(id)
          .then(function(result)
          {
            setTopic(result.data.topics);
          });
        })();
      },[]);
      function topicDelete(id)
    {
      topicservice.remove(id).then(function(result){
        alert(result.data.message);
        navigate("/admin/topic", { replace: true });
      });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">CHI TIẾT CHỦ ĐỀ</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/topic"
              className="btn btn-sm btn-success me-1"
            >
             Về danh sách
            </Link>
            <Link
              to={"/admin/topic/update/"+topic.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FaEdit />Sửa
            </Link>
            <button onClick={()=>topicDelete(topic.id)} className="btn btn-sm btn-danger">
              <FaRegTrashAlt />Xóa
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className=" table table-bordered">
            <thead>
                <tr>
                    <th style={{ width:300 }}>Tên trường</th>
                    <th>Gía trị</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Id</th>
                    <td>{topic.id}</td>
                </tr>
                <tr>
                    <th>Tên danh mục</th>
                    <td>{topic.name}</td>
                </tr>
                <tr>
                    <th>Slug</th>
                    <td>{topic.slug}</td>
                </tr>
                <tr>
                    <th>Mã cha</th>
                    <td>{topic.parent_id}</td>
                </tr>
                <tr>
                    <th>Từ khóa</th>
                    <td>{topic.metakey}</td>
                </tr>
                <tr>
                    <th>Mô tả</th>
                    <td>{topic.metadesc}</td>
                </tr>
                <tr>
                    <th>Ngày tạo</th>
                    <td>{topic.created_at}</td>
                </tr>
                <tr>
                    <th>Trạng thái</th>
                    <td>{topic.status}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopicShow;
