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