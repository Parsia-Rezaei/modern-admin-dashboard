import { Link, useParams } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart/Chart";
import { products, productsDatas } from "../../datas";
import PublishIcon from '@mui/icons-material/Publish';


const Product = () => {
  const params = useParams();

  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="product-add-button">Create</button>
        </Link>
      </div>

      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productsDatas} dataKey="sales" title="sale in month" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              className="product-info-img"
              src="../public/avatar.jpg"
              alt="product infotmation"
            />
            <span className="product-name">HP laptop</span>
          </div>

          <div className="product-info-bottom">
            <div className="product-info-item">
              <div className="product-info-key">ID:</div>
              <div className="product-info-value">132</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Name:</div>
              <div className="product-info-value">HP laptop</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Sales:</div>
              <div className="product-info-value">$90000</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">Active:</div>
              <div className="product-info-value">Yes</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">In stock:</div>
              <div className="product-info-value">No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-bottom">
        <form action="" className="product-form">
          <div className="product-form-left">
            <label htmlFor="">Product name</label>
            <input type="text" placeholder="Hp laptop" />
            <label htmlFor="">IN Stock</label>
            <select name="" id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="" id="inStock">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          {/* product right */}
          <div className="product-form-right">

            <div className="product-uploader">
              <img src="../public/avatar.jpg" alt="" className="product-upload-img"  />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{display:'none'}} />
            </div>

            <button className="product-edit-button">
              Upload (Edit)
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
