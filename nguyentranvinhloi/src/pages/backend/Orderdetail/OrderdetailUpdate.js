import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import orderdetailservice from "../../../services/OrderdetailService";
import productservice from "../../../services/ProductService";

function OrderdetailUpdate() {
    const navigate=useNavigate();
    //khai báo state
  const [product_id, setProductId] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [qty, setQty] = useState(1);
  const [amount, setAmount] = useState(0);
  //chi tiết mẫu tin có id
  const { id } = useParams("id");
  useEffect(function () {
    (async function () {
      await orderdetailservice.getById(id)
      .then(function (result) {
        const tmp = result.data.orderdetails;
        setProductId(tmp.product_id);
        setPrice(tmp.price);
        setDiscount(tmp.discount);
        setQty(tmp.qty);
        setAmount(tmp.amount);
      });
    })();
  }, []);
  //----------------
    const [orderdetails, setOrderdetails] = useState([]);
    useEffect(function () {
      (async function () {
        await orderdetailservice.getAll().then(function (result) {
          setOrderdetails(result.data.orderdetails);
        });
      })();
    }, []);
    //Lấy dữ liệu product
    const [products, setProducts] = useState([]);
    useEffect(function () {
      (async function () {
        await productservice.getAll()
        .then(function (result) {
          setProducts(result.data.products);
        });
      })();
    }, []);

  async function orderdetailEdit(event) 
  {
    event.preventDefault();
    var orderdetail = new FormData();
    orderdetail.append("product_id", product_id);
    orderdetail.append("price", price);
    orderdetail.append("discount", discount);
    orderdetail.append("qty", qty);
    orderdetail.append("amount", amount);
    
    //update
    await orderdetailservice.update(orderdetail,id)
    .then(function(res)
    {
       alert(res.data.message)
       navigate('/admin/orderdetail',{replace:true});
    });
  }
  return (
    <form onSubmit={orderdetailEdit} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Sửa chi tiết hóa đơn</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/orderdetail" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
            <div className="mb-3">
                <label htmlFor="product_id">Mã sản phẩm</label>
                <select
                  name="product_id"
                  className="form-control"
                  value={product_id}
                  onChange={(e) => setProductId(e.target.value)}
                >
                  <option value="0">None</option>
                  {products.map(function (pro, index) {
                    return (
                      <option key={index} value={pro.id}>
                        {pro.id}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price">Giá</label>
                <input
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="discount">Giá giảm</label>
                <input
                  name="discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3">
                <label htmlFor="qty">Số lượng</label>
                <input
                  name="qty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="amount">Tổng tiền</label>
                <input
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                />
              </div>
            
          </div>
        </div>
      </div>
    </form>
  );
}

export default OrderdetailUpdate;
