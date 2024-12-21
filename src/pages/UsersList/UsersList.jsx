import "./UsersList.css";
import { userRows } from "../../datas";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const UsersList = () => {
  const [userData, setUserData] = useState(userRows);

  const userDelete = (userId) => {
      setUserData(userData.filter((item) => item.id !== userId ))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="userlist-user">
              <img className="userlist-img" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Eamil",
      width: 200,
    },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width:160,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/user/${params.row.id}`}>
              <button className="userlist-edit">Edit</button>
              <DeleteIcon onClick={() => userDelete(params.row.id)} className="userlist-delete" />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={4}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UsersList;
