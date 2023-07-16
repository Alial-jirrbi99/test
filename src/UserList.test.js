import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import "@testing-library/jest-dom";

function renderComponent() {
	const users = [
		{ name: "ali", email: "ali@gmail.com" },
		{ name: "osama", email: "osama@gmail.com" },
	];

	//ٌ Render the component
	render(<UserList users={users} />);

	return {
		users,
	};
}

test("render one row per user", () => {
	renderComponent();

	// const { container } = render(<UserList users={users} />);

	// Finde all the rows in the table

	//this test return 3 rows because it contain thead with users
	// const rows = screen.getAllByRole("row");

	//anther test
	const rows = within(screen.getByTestId("users")).getAllByRole("row");

	// anther test
	// const rows = container.querySelectorAll("tbody tr");

	// Assertion: correct number of rows in the table
	expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
	const { users } = renderComponent();

	for (let user of users) {
		const name = screen.getByRole("cell", { name: user.name });
		const email = screen.getByRole("cell", { name: user.email });

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	}
});
