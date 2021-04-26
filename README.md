## Assignment 20: React Portfolio
---
### Topic
React

### User Story (Obtained from the assignment description)

```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

### Acceptance Criteria (Obtained from the assignment description)

```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)  
```

## My Actions and Notes

* The project was developed from scratch.
* Basic considerations were as follows:
    * The application uses a single ```Header``` component and a single ```Footer``` component that appear on multiple pages
    * The application uses a ```Navigation``` component inside the ```Header``` component that selectively renders relevant content without refreshing the page
    * The application uses a single ```Project``` component that is used multiple times to generate each project card item in the ```Portfolio``` section
    * I have used [Coolors](https://coolors.co/) to pick the primary/secondary/tertiary colors of the application
    * The application was designed using mobile-first approach, and mobile screen size >= 390px were tested  
    * The application was deployed to Github Page using ```gh-pages``` package 

### Demo Run
![Demo Run](./src/assets/images/assignment20_demo.gif)

### Link of Deployed Application
[App Link](https://samiul1988.github.io/assignment20_react_portfolio/)