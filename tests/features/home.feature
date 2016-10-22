Feature: Home page

	Scenario: Should have a contact form

		Given I am on the page "/"
		Then there should be a card titled "Contact Me"
		Then there should not be any Validation Errors visible
		And the field "Your Name" should be visible
		And the field "Your Email" should be visible
		And the field "Your Message" should be visible
		And the "Send" button should be visible

	Scenario: Submitting blank contact form should result in errors

		Given I am on the page "/"
		Then there should be a card titled "Contact Me"
		When I click the "Send" button
		Then there should be some Validation Errors visible