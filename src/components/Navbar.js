const NavBar = ({ filterDone, getfilterDate }) => {
  return (
    <div>
      <select onChange={(e) => filterDone(e.target.value)} name="" id="">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notdone">Not done</option>
      </select>
      <div>
        <input type="text" />
        <button>Search</button>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => getfilterDate(e.target.value)}
        />
      </div>
    </div>
  );
};
export default NavBar;
