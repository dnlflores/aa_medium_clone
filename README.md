# Shorts
![home]
[Shorts][shorts]

## Summary
[Shorts][shorts] is a multi-page web application inspired by Medium built with JavaScript, HTML and CSS using express and pug. Shorts allows users to :

* Create an account
* Log in / Log out
* Create and delete short stories
* Read and update short stories 
* Add and delete comments to short stories
* Like and unlike short stories
* Follow and unfollow other users
* See short stories based off of the people you follow

## Shorts List Page
![shorts-list-top]

![shorts-list-bottom]

Whether you are logged in or logged out you can view the 15 most recent shorts that people have created.
If you are logged in, from the shorts page you can delete on the spot.
You can also click on the name of the author and view their short page

## Short Page
![short-page]

Whether you are logged in or logged out you can view a users short and view the comments on that short. You can see the amount of likes but in order to make a comment or add a like you must be signed in. From this page you can also edit or delete your own short. And yes you can like your own short if you want to!

## Create Short Page
![create-short-page]

When you are logged in you will be able to come to this page and creat a short. You just need a title and some content to tell your story. If you change your mind and don't want to create a short you can cancel and go back to the shorts page.

## Edit Short Page
![edit-short-page]

When you are logged in and have created a short, you can edit your short. If you want to add more to the story or fix a simple spelling mistake, the edit page is there for you!

## Login Page
![login-page]

If you have an account already you can use your login credentials to sign in to the shorts website! We have made error handlers to tell you if your credentials are wrong but don't worry we don't give too much info to prying eyes.

## Register Page
![register-page]

If you are new to [Shorts][shorts] you can register here! All you need is a valid email, a unique username, a strong password with at least 1 Uppercase, 1 number, 1 special character and be at least 8 characters long.

## Application Structure

### Dependencies:
- bcryptjs – for authorization of user passwords
- connect-session-sequelize – to handle session cookies
- pug – a HTML template used to speed up HTML writting
- express – the application used to create the server
- sequelize – to automatically generate SQL allowing complicated queries to be written easier

### Front-End:

Shorts front end was built using HTML (using pug HTML template), CSS, and JavaScript. JavaScript allows the program to have dynamic features, allowing changes to appear without the need for refreshing the page and storing the information to be accessed later on. It also allowed for updates to the styling properties of elements that can become hidden and visible through buttons with event listeners.

### Back-End:

The back end was built using JavaScript, PostgreSQL, and Express. Requests are made using regular HTTP requests and AJAX with the fetch API. The requests are handled with JavaScript and queries are performed using sequelize. 

## Implementation Details:

### Associations

![associations]

A key part of how the app works is it’s database. In order for the queries to be performed easily, associations were made using sequelize. However, with dependencies in place, there was difficulty performing deletes. In order to correct this, ‘CASCADE’ was set to the onDelete property to ensure that all associated content would also be deleted.

### Event listeners

![eventListeners]

Event listeners are also a very important part of the apps functionality. It was important that the buttons continued to have listeners so that they would not lose functionality. This was of a particular concern with comments where new buttons were always being created. Proper checks had to be performed to ensure that elements were not assigned an event listeners more than once, leading to potentially buggy code.
The skipCheck function allowed certain events to start the function from within the if statement. This was important to be sure that when all event listeners needed to be reassigned it could do so.

### Styling Considerations

Styling was a process that needed to be done carefully. Moving or adding elements could have a negative effect on the elements that need to update dynamically. As much of the styling as possible was put into the reset.css stylesheet so that there was uniformity across pages and only overwritten when necessary. This allows for certain elements, like the navigation bar at the top to be consistent across the site.

## Upcoming Features:

While we are proud of what we were able to accomplish during the time given to create this web application, there are a few features that will be implemented at a later time:

- Likes to comments: while we were able to generate likes for shorts, likes to comments has yet to be introduced into the project.

- Websockets: For our application to become even more dynamic, adding websockets would allow two clients to see updates made to the web application without refreshing at the same time.

- Categories: In order for the user feed to become more relevant, adding categories would allow the application to give more meaningful shorts to the end user. This would be done by having filters available and users allowing to select preferred categories. 

[eventListeners]: https://user-images.githubusercontent.com/18316229/142693352-a0513db7-e4df-45c9-8f31-1a513b190cd8.png
[associations]: https://user-images.githubusercontent.com/18316229/142693311-954c38a5-574d-4e6e-a297-8aad9a0644f4.png
[shorts]: https://aa-gp7-shorts.herokuapp.com
[home]: https://user-images.githubusercontent.com/18316229/142678211-49fcdd8b-caa4-4026-a010-9b224eb84bb0.png
[shorts-list-top]: https://user-images.githubusercontent.com/18316229/142688787-cbe6bb4c-2dab-4139-925c-c6ce4a64346e.png
[shorts-list-bottom]: https://user-images.githubusercontent.com/18316229/142689222-37c64373-6cee-459f-8bb1-fc016bb52365.png
[short-page]: https://user-images.githubusercontent.com/18316229/142689239-23e90991-99b4-4891-af25-4b52110f7627.png
[create-short-page]: https://user-images.githubusercontent.com/18316229/142689656-e7b99045-678b-4c21-8e3b-6f14a4761703.png
[edit-short-page]: https://user-images.githubusercontent.com/18316229/142690030-36b2679f-3e9e-46c4-b563-794681f0d4ea.png
[login-page]: https://user-images.githubusercontent.com/18316229/142690233-1d5a9058-c17c-4e5d-85c5-712295984cf7.png
[register-page]: https://user-images.githubusercontent.com/18316229/142690253-95fc1500-ece2-4383-8f4f-e27cd0a9a28d.png
