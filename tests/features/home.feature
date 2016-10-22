Feature: Home page

	Scenario: Should have a contact form

		Given I am on the page "/"
		Then there should be a card titled "Contact Me"
		And the field "Your Name" should be visible
		And the field "Your Email" should be visible
		And the field "Your Message" should be visible
		And the "Send" button should be visible

