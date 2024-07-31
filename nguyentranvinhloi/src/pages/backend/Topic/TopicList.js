import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import topicservice from "../../../services/TopicService";
import { useEffect, useState } from "react";
import {urlImage} from '../../../config';

function TopicList() {
  const [statusdel,setStatusDelete]=useState([]);

    const [topics,setTopics]=useState([]);
    useEffect(function(){
      (async function(){
        await topicservice.getAll()
        .then(function(result)
        {
          setTopics(result.data.topics);
        });
      })();
    },[statusdel]);
    function topicDelete(id)
    {
      topicservice.deleted(id).then(function(result){
        alert(result.data.message);
        setStatusDelete(result.data.id)
      });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">DANH SÁCH CHỦ ĐỀ</strong>
          </div>
          <div className="col-md-6 text-end">
          <Link to="/admin/topic/trash" className="btn btn-sm btn-primary me-1">
              <FaRegTrashAlt /> Thùng rác
            </Link>
            <Link to="/admin/topic/create" className="btn btn-sm btn-success">
              <FaPlus /> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              
              <th className="text-center">Tên danh mục</th>
              <th className="text-center">Slug</th>
              <th className="text-center">Mã cha</th>
              <th className="text-center">Từ khóa</th>
              <th className="text-center">Mô tả</th>
              <th style={{ width: 130 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 140 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.map(function (topic, index) {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td>{topic.name}</td>
                  <td>{topic.slug}</td>
                  <td>{topic.parent_id}</td>
                  <td>{topic.metakey}</td>
                  <td>{topic.metadesc}</td>
                  <td className="text-center">{topic.created_at}</td>
                  <td className="text-center">
                    <Link
                      to={"/admin/topic/show/"+topic.id}
                      className="btn btn-sm btn-success me-2"
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      to={"/admin/topic/update/"+topic.id}
                      className="btn btn-sm btn-primary me-2"
                    >
                      <FaEdit />
                    </Link>
                    <button onClick={()=>topicDelete(topic.id)} className="btn btn-sm btn-danger">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                  <td className="text-center">{topic.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default TopicList;
