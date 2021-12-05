# 50-Projects-In-50-Days

## Day 1 Project 1: Forza Expanding Cards

![alt Project Image](https://media.giphy.com/media/zdmrOdviVlqyfF64DI/giphy.gif)

Created Expanding cards using vanilla html, css and js. The cards are aligned using display flex and the expanding and shrinking is achieved through listening for a click event in javascript, along with changing the flex property of the cards to grow or shrink them. The images for the cards is fetched from free forza API and the name for the cars is extracted from the image url that the api responds with by using string operations on it. This helped better understand api fetching, flex properties and also how to manipulate DOM elements effectively from JavaScript

## Day 2 Project 2: Progress Steps

![alt Project Image](https://media.giphy.com/media/qCbRuP2gpn6d1vFEUl/giphy.gif)

Progress Steps commonly seen in multi-level forms. Created the steps for it learning about the use case of before pseudo elements, how to perfectly position absolute elements. How to show progress status in a bar using js and how to set the width for it.

## Day 3 Project 3: Rotating Navigation

![alt Project Image](https://media.giphy.com/media/tjpOuShIQYW7cEH2gr/giphy.gif)

Rotating navigation takes a new approach as compared to the traditional navigation. Using transform property we can create dynamic looking sites. Rotate is great way to add interactivity to the web page. Challenges face were calculating the rotate and translate values to perfectly show the open and close icons on click.

## Day 4 Project 4: Hidden Search Widget

![alt Project Image](https://media.giphy.com/media/CuTw1uqtOFc3BJIx8l/giphy.gif)

Replicated a widget commonly found in navigation menus for searching site content. Basic implementation using relative absolute positioning along with transform translate properties with little js to achieve this.

## Day 5 Project 5: Blurry Loading

![alt Project GIF](https://media.giphy.com/media/Z8JntAkU2GXc5kv9ZX/giphy.gif)

Blurry loading normally used to when fetching images from an api. This is created using the filter blur() property of css and and to combat the white borders on blurr the backgound of the container holding the div with background image, body in this case was given background color of #000. This better help understanding mapping of one range of numbers to another in process of mapping the loading range of 0 - 100 to blurring range of 30 - 0 and also opacity range of the loading text from 1 - 0.

## Day 6 Project 6: Scrolling Animation

![alt Project GIF](https://media.giphy.com/media/sYPfcObxXLnq8RTUD3/giphy.gif)

Animate the div containers on scroll by adding event listener to the window and getting the top of each element using getBoundingClientRect() on the elements. Smoothing the animation by applying transition to the transform property.

## Day 7 Project 7: Split Landing Page

![alt Project GIF](https://media.giphy.com/media/O8wKOgbytgb0tWaljD/giphy.gif)

Made a container with height 100vh such that it covers the entire screen's height and width and made it a flex container. The flex items were given a 50% to fill the 50% of width and height of the screen. Then using before pseudo selector created and overlay for both the images. Made the layout responsive by giving font-sizes in terms of vmin. In js added eventlistener to the mouse enter and leave events for the left and the right divisions to grow or shrink them accordingly by changing the flew grow size value and makning the animation smooth by appyling transition to the flex property.

## Day 8 Project 8: Form Wave Animation

![alt Project GIF](https://media.giphy.com/media/jLrzzl1YY2CFHAJflM/giphy.gif)

Placeholder labels, the kind of labels that act as placeholders before being pushed up when the input field is in focus. Used transition property of translateY to move up the labels that were position absolutely to the relative form-field. A interactive label to make the website more interactive for the end used.

## Day 9 Project 9: Sound Board

![alt Project GIF](https://media.giphy.com/media/fAfxZOwmO2LR7xFxga/giphy.gif)

[YouTube Link With Audio](https://youtu.be/vifg5XJjM3o)

Created a sound board that plays certain sounds on button clicks. The challenge was playing each sound individually, that is, not have sounds overlapping when multiple buttons are clicked in quick succession. The buttons are created through javascript according to the number of audio tags are present in the html file. This helped better understand the audio tag of html and how can it be efficiently controlled using javascript. The buttons are styled using before pseudo selector. The text is replaced with play button to show the user that the button will play some sound.

## Day 10 Project 10: Dad Jokes

![alt Project GIF](https://media.giphy.com/media/vQGZRuxUQIBg6nbpZG/giphy.gif)

Using a free API we fetch jokes through the fetch function. Further to reduce the complexity of using then() for fetch we make use of async and await to clean our code and make it less complex to read and understand. We take on both approached of fetching data, first with then and in the last we see the simpler approach using await. We leanrt the await keywords waits for promise to resolve and then returns the response, await can only be placed inside a aysnc function.

## Day 11 Project 11: Event KeyCodes

![alt Project GIF](https://media.giphy.com/media/MVEjBi7XblkFAqUaLn/giphy.gif)

The project was basically showing the user the key he/she has pressed and give the key, keyCode which is depreceted now and code. A small project to learn about key events and how can we listen for key events and get the key pressed by the used. In this case we use the keydown event listener to listen for all the key presses user makes.

## Day 12 Project 12: FAQ Boxes

![alt Project GIF](https://media.giphy.com/media/F3it5yqXTJGSP5C8nF/giphy.gif)

Made a faq page styled boxes which can be toggled to show the answer to the most asked questions. Used two font awesome icons through css pseudo elements to show in background by positioning them absolute to the faq box. The comment icon is rotated and using absolute poitioning is placed crossing over each other.

## Day 13 Project 13: Random Choice Picker

![alt Project GIF](https://media.giphy.com/media/PWqpJ4HwRNObptSc20/giphy.gif)

This was morea javascript focus project where we created pill buttons as choices which user can input through the input box. The user then clicks enter to start the random selector which randomly animates the selection process and at the end selects a choice for the user and highlights the same.

## Day 14 Project 14: Animated Navigation

![alt Project GIF](https://media.giphy.com/media/n3Ms669dywkLqHtvzC/giphy.gif)

A simple animated navigation. Learnt how we can animate the transform rotate property to create vibrant animations like this where the nav toggler gives the effect of rotate for closing and opening along with the rotating nav links.

## Day 15 Project 15: Incrementing Counter

![alt Project GIF](https://media.giphy.com/media/Vgv1ejbWyPSl5i2C3y/giphy.gif)

Social media following counter usually common in websites. Learn about tag attributes and how we can give self defined attributes. In css side of things learnt about last-chil selector. In js implemented the counter by updating the numbers by a certain increment after a certain span of time using settimeout.

## Day 16 Project 16: Drink Water

![alt Project GIF](https://media.giphy.com/media/aesc7PFZ4Ea47TelBV/giphy.gif)

This project helped me understand how can we use javascript effectively to manipulate the DOM elements on click events and how to create interactive interfaces.

## Day 17 Project 17: Movie App

![alt Project GIF](https://i.giphy.com/media/dMbhwWjU0IMrzHjav6/giphy.webp)

Created a movie searching app that displays currently popular movies and also offers to search movies by query string. The API used for this project is the The Movie Database API (TMDB), it is used in this case bcz it provides currently popular movies through api and also helps in searching for particular movies using the search api endpoint. Implementing the API help me understand better as to how data coming from an API can be effectively populated on the front end and shown to the end user.

## Day 18 Project 18: Synced Background Slider

![alt Project GIF](https://media.giphy.com/media/rD7mKVBMgSJ3zYNHRN/giphy.gif)

A background slider that syncs the image in the slider with the background image of the body, that is, the image in the slider and the background changes simultaneously.

## Day 19 Project 19: Minimalistic Clock

![alt Project GIF](https://media.giphy.com/media/lmFX7HMmUMmNhJjIUu/giphy.gif)

Minimalistic clock with both dark and light theme achieved using css variables. This project helped me understand the date object of js better and how to integrate js with css to create cool animations and add functionality to the website through js.

## Day 20 Project 20: Ripple Effect On Button Click

![alt Project GIF](https://media.giphy.com/media/Q6Lm3zKJZ3gaHdndjc/giphy.gif)

Created a button which when clicked shows a ripple effect from the point where the user clicks the button. This is achieved by using js with css. In js we capture the x and y values of the point of click and then subtract it with the offset top and left values of the button element to get the exact position where the user clicks the button. The ripple effect is achieved by using the animation in css. Further, I learn to clean the DOM when using vanilla js as the spans created by the button click to perform the ripple effect need to removed once the animation is completed else it will result in n number of unwanted spans inside button when user clicks multiple times.

## Day 21 Project 21: Drag N Drop

![alt Project GIF](https://media.giphy.com/media/Mg55iEPwrvGGjYVPOO/giphy.gif)

Diving into the drag and drop functionalities provided by HTML5 and javascript. Learned how to use drag events like enter, leave, drop, etc and how to change styles based on them to create interactive UIs.
