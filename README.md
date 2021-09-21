# 50-Projects-In-50-Days

## Day 1 Project 1: Forza Expanding Cards
![alt Project Image](https://i.imgur.com/dNR2Fzo.png)

Created Expanding cards using vanilla html, css and js. The cards are aligned using display flex and the expanding and shrinking is achieved through listening for a click event in javascript, along with changing the flex property of the cards to grow or shrink them. The images for the cards is fetched from free forza API and the name for the cars is extracted from the image url that the api responds with by using string operations on it. This helped better understand api fetching, flex properties and also how to manipulate DOM elements effectively from JavaScript

## Day 2 Project 2: Progress Steps
![alt Project Image](https://i.imgur.com/8wHVNQO.png)
![alt Project Image](https://i.imgur.com/dllq9oQ.png)
![alt Project Image](https://i.imgur.com/kZttUfJ.png)

Progress Steps commonly seen in multi-level forms. Created the steps for it learning about the use case of before pseudo elements, how to perfectly position absolute elements. How to show progress status in a bar using js and how to set the width for it.

## Day 3 Project 3: Rotating Navigation
![alt Project Image](https://i.imgur.com/aPNzaQ6.png)
![alt Project Image](https://i.imgur.com/QaTK5T3.png)

Rotating navigation takes a new approach as compared to the traditional navigation. Using transform property we can create dynamic looking sites. Rotate is great way to add interactivity to the web page. Challenges face were calculating the rotate and translate values to perfectly show the open and close icons on click.

## Day 4 Project 4: Hidden Search Widget
![alt Project Image](https://i.imgur.com/citlXRy.png)
![alt Project Image](https://i.imgur.com/dVohfn7.png)

Replicated a widget commonly found in navigation menus for searching site content. Basic implementation using relative absolute positioning along with transform translate properties with little js to achieve this. 

## Day 4 Project 4: Hidden Search Widget
![alt Project GIF](https://media.giphy.com/media/Z8JntAkU2GXc5kv9ZX/giphy.gif)

Blurry loading normally used to when fetching images from an api. This is created using the filter blur() property of css and and to combat the white borders on blurr the backgound of the container holding the div with background image, body in this case was given background color of #000. This better help understanding mapping of one range of numbers to another in process of mapping the loading range of 0 - 100 to blurring range of 30 - 0 and also opacity range of the loading text from 1 - 0.