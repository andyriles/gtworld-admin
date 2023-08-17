const Filters = () => {
  return (
    <div className="flex items-center justify-end pt-4 mr-28 gap-x-8">
      <div>
        <select className="select select-bordered w-full max-w-xs bg-neutral-200 ">
          <option selected>All Deposits</option>
          <option>Last 20 Deposits</option>
          <option>Last 50 Deposits</option>
        </select>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs bg-neutral-200">
          <option selected>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last 24 Hours</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
