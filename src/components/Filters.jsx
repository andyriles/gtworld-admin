import { useState } from "react";

const Filters = () => {
  const [secondFilter, setSecondFilter] = useState("All Deposits");
  const [firstFilter, setFirstFilter] = useState("Last 30 Days");
  return (
    <div className="flex items-center justify-end pt-4 mr-28 gap-x-8">
      <div>
        <select
          onChange={(e) => setFirstFilter(e.target.value)}
          value={firstFilter}
          className="select select-bordered w-full max-w-xs bg-neutral-200 "
        >
          <option value={"All Deposits"}>All Deposits</option>
          <option value={"Last 20 Deposits"}>Last 20 Deposits</option>
          <option value={"Last 50 Deposits"}>Last 50 Deposits</option>
        </select>
      </div>
      <div>
        <select
          onChange={(e) => setSecondFilter(e.target.value)}
          value={secondFilter}
          className="select select-bordered w-full max-w-xs bg-neutral-200"
        >
          <option value={"Last 30 Days"}>Last 30 Days</option>
          <option value={"Last 7 Days"}>Last 7 Days</option>
          <option value={"Last 24 Hours"}>Last 24 Hours</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
