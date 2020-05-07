import React, {useState} from "react";

function UserForm(props) {
  const [input, setInput] = useState(props.searchValue)
  return (
    <div className="userForm">
      <input onChange={(e) => setInput(e.target.value)} type="text" id="searchValue" defaultValue={props.searchValue} value={input}/>
      <button onClick={() => props.handleSearch(input)}>Search</button>
    </div>
  );
}

export default UserForm;
