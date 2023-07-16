import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import Button from "./Button";

test("it shows two button", () => {
	render(<Button />);

	const button = screen.getAllByRole("button");

	expect(button).toHaveLength(2);
});

describe("StatusButtons", () => {
	test('changes status to "Ready" when "Ready" button is clicked', () => {
		const { getByText } = render(<Button />);

		const readyButton = getByText("Ready");
		fireEvent.click(readyButton);

		const statusText = getByText("Status: Ready");
		expect(statusText).toBeInTheDocument();
	});

	test('changes status to "Cancelled" when "Cancelled" button is clicked', () => {
		const { getByText } = render(<Button />);

		const cancelButton = getByText("Cancelled");
		fireEvent.click(cancelButton);

		const statusText = getByText("Status: Cancelled");
		expect(statusText).toBeInTheDocument(); 
	});
});
