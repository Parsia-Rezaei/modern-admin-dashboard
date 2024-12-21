import "./Products.css";
import { userRows } from "../../datas";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { products } from "../../datas";

const Products = () => {
  const [productsData, setProductsData] = useState(userRows);

  const productDelete = (productId) => {
    setProductsData(productsData.filter((item) => item.id !== userId));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="userlist-user">
              <img className="userlist-img" src={params.row.avatar} alt="" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "price",
      width: 120,
    },
    {
      field: "action",
      headerName: "action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row.id}`}>
              <button className="userlist-edit">Edit</button>
              <DeleteIcon
                onClick={() => productDelete(params.row.id)}
                className="userlist-delete"
              />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={productsData}
        columns={columns}
        pageSize={3}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Products;
