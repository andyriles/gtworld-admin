const headers = ["Name", "Account Number", "Cheque", "Date", "Status"];
const Table = ({ data, handleNavigate }) => {
  const formatDate = (dateToParse) => {
    const date = new Date(dateToParse);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="overflow-x-auto px-16 mt-4">
      <table className="table">
        {/* head */}
        <thead>
          <tr style={{ backgroundColor: "#d4d4d4" }}>
            {headers.map((header, i) => {
              return <th key={i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.data?.map((item, i) => {
            return (
              <tr
                key={i}
                style={{ backgroundColor: "#f0f0f0" }}
                className="cursor-pointer hover"
                onClick={() => handleNavigate(item)}
              >
                <td>{item.user.name}</td>
                <td>{item.account_number}</td>
                <td className="flex gap-x-2 -ml-8 items-center mt-4">
                  <span>
                    <img
                      src={item.back_image}
                      alt="back image"
                      style={{ width: "4em", height: "2em" }}
                    />
                  </span>
                  <span>
                    <img
                      src={item.front_image}
                      alt="back image"
                      style={{ width: "4em", height: "2em" }}
                    />
                  </span>
                </td>
                <td>{formatDate(item.date_created)}</td>
                <td className="flex gap-x-2 items-center ">
                  <div
                    className={`badge badge-xs ${
                      item.status == "Pending" ? "badge-warning" : null
                    } ${item.status == "Rejected" ? "badge-error" : null} ${
                      item.status == "Done" ? "badge-success" : null
                    } mb-8 `}
                  ></div>
                  <div className="flex items-center mb-8">
                    <p>{item.status}</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
