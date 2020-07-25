# Task List

## Initial Setup
- [ ] Create DB 'saga_movies_weekend'
- [ ] Run sql queries
    - [ ] Create movies table
    - [ ] Create genres table
    - [ ] Create junction table
        - [ ] Reference both movie and genre tables
    - [ ] Insert test data to all three
- [ ] npm installs
- [ ] run server, run client

## CSS components?
- [ ] Header
- [ ] Images?
- [ ] Details?

## Home
- [ ] Component to display all movies in DB
- [ ] GET on load
- [ ] Route to /details page on poster click

## Details
- [ ] Nav Buttons to Home and Edit pages
- [ ] Display detials of movie
    - [ ] title
    - [ ] description
    - [ ] genre
    - [ ] image

## Edit 
- [ ] Input field for...
    - [ ] title
    - [ ] description
- [ ] Cancel button to return to details
- [ ] Save button to UPDATE db



### Stretch Mode
- [ ] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.