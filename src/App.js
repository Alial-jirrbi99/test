import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import Button from "./Button";
import Timer from "./Timer";

function App() {
	const [users, setUsers] = useState([]);
	const onUserAdd = (user) => {
		setUsers([...users, user]);
	};
	return (
		<div>
			<UserForm onUserAdd={onUserAdd} />
			<hr />
			<UserList users={users} />
			<br />
			<br />
			<br />
			<Button />
			<br />
			<br />
			<br />

			<Timer />
		</div>
	);
}

export default App;
