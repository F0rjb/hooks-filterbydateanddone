const NavBar = ({ filterDone }) => {
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
      </div>
    </div>
  );
};
export default NavBar;
