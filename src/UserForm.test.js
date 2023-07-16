import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import UserForm from "./UserForm";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

test("it shows two inputs and a button", () => {
	render(<UserForm />);

	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");

	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

test("its calls onUserAdd when the form is submitted", () => {
	const mock = jest.fn();

	// Try to render my component
	render(<UserForm onUserAdd={mock} />);

	// Find the two inputs
	const nameInput = screen.getByRole("textbox", { name: /name/i });
	const emailInput = screen.getByRole("textbox", {
		name: /email/i,
	});

	// Simulate typing in a name
	user.click(nameInput);
	user.keyboard("ali");

	// Simulate typing in an email
	user.click(emailInput);
	user.keyboard("ali@gmail.com");

	// Find the button
	const button = screen.getByRole("button");

	// Simulate clicking the button
	user.click(button);

	// Assertion to make sure 'onUserAdd' gets called with email/name

	expect(mock).toHaveBeenCalled();
	expect(mock).toHaveBeenCalledWith({
		name: "ali",
		email: "ali@gmail.com",
	});
});

test("empties the two inputs when form is submitted", () => {
	render(<UserForm onUserAdd={() => {}} />);

	const nameInput = screen.getByRole("textbox", { name: /name/i });
	const emailInput = screen.getByRole("textbox", { name: /email/i });
	const button = screen.getByRole("button");

	user.click(nameInput);
	user.keyboard("ali");
	user.click(emailInput);
	user.keyboard("ali@ali.com");

	user.click(button);

	expect(nameInput).toHaveValue();
	expect(emailInput).toHaveValue();
});
