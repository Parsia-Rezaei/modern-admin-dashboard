import "./WidgetLg.css";
import { transactions } from "../../datas";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widget-lg-button ${type}`}>{type}</button>;
  };

  return (
    <div className="widget-lg">
      <h3 className="widget-lg-title">Latest transactions</h3>
      <table className="widget-lg-table">
        <thead>
          <tr className="widget-lg-tr">
            <th className="widget-lg-th">Customer</th>
            <th className="widget-lg-th">Date</th>
            <th className="widget-lg-th">Amount</th>
            <th className="widget-lg-th">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((item) => (
              <tr key={item.id} className="widget-lg-tr">
                <td className="widget-lg-user">
                  <img
                    className="widget-lg-img"
                    src={item.img}
                    alt={item.customer}
                  />
                  <span className="widget-lg-name">{item.customer}</span>7
                </td>
                <td className="widget-lg-date">{item.date}</td>
                <td className="widget-lg-amount">{item.amount}</td>
                <td className="widget-lg-status">
                  <Button type={item.status} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
