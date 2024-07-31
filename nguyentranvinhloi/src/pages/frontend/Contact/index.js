import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

function Contact() {
  const navigate = useNavigate();
  useEffect(() => {
		document.title = 'Liên hệ';
	  }, []);

  const [contacts, setContacts] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getAll().then(function (result) {
        setContacts(result.data.contacts);
      });
    })();
  }, []);
  const [user_id, setUserId] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("kkk");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(1);

  async function contactStore(event) {
    event.preventDefault();
    var contact = new FormData();
    contact.append("user_id", user_id);
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("status", status);

    await contactservice.create(contact).then(function (res) {
      alert(res.data.message);
      navigate("/", { replace: true });

    });
  }




  return (
    <section className="container mt-3">
      <h2 className="text-danger">༺Liên hệ༻</h2><br />
      <div className="row mb-5">
        <div className="col-md-4">
          <div>
            <h3>༺Chi tiết liên hệ༻</h3>
            <div>
              <h4>༺Trầm Hương Đắc Lợi༻</h4>
              <p>Địa chỉ: 40/2 đường 147, Phường Phước Long B, Thành Phố Thủ Đức, TP Hồ Chí Minh</p>
              <p>Email: Nguyentranvinhloi12@gmail.com</p>
              <p>Số điện thoại: 0932293748</p>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-7">
          <form onSubmit={contactStore} method="post">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">
                    <strong className="text-danger">Gửi liên hệ</strong>
                  </div>
                  <div className="col-md-6 text-end">
                    <button type="submit" className="btn-sm btn-success me-2 bg-warning">
                      Gửi
                    </button>

                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name">Tên</label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                      
                      <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone">Điện thoại</label>
                        <input
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                   
                    <div className="mb-3">
                      <label htmlFor="content">Nội dung</label>
                      <textarea
                        name="content"
                        value={content}
                        row="5"
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    {/* <div className="mb-3">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.751695074883!2d106.
            77240387422333!3d10.8303045581993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!
            2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!
            4v1687771783691!5m2!1svi!2s"
          width="1000" height="450" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

  );
}

export default Contact;