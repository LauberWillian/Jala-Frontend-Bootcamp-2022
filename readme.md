# Welcome guys to our first Brazilian bootcamp

###### This code will keep evolving as our classes advance as it happens I'll be sure to keep updating this readme file so everyone can run every code in here

## What do I need to start working on it?

**1) Visual code** </br />
**2) Git** </br />
**3) Eslint plugin (VScode)** </br />
**4) Prettier plugin (VScode)** </br />
**5) Live Server plugin (VScode)** </br />

## How to run this code?

**1) Download the code from source using the command on your terminal:**

###### throughout your career you will most likekly deal with a lot of ssh keys. I highly suggest creating your own ssh key, if you don't have one of course :-)

`git clone git@github.com:mateus-vianna/Jala-Frontend-Bootcamp-2022.git`

`git clone https://github.com/mateus-vianna/Jala-Frontend-Bootcamp-2022.git`

**2) Use npm to install all dependecys on the projects root folder:**

`npm install`

**3) Now you are all settled with prettier and eslint**

###### if you make any mistakes on your code now, eslint will warn about it

**4) Using VScode you just need to press the "Go Live" button on the bottom right. A browser window will open, showing everything on your project's root folder.**

###### if you click on **example 1** or **example 2** all javascript, css and html will be run

## About the projects

---

## Commands we've seen

document.querySelectorAll("html_tag_name || css_class_with_dot")
document.querySelector("html_tag_name || css_class_with_dot")

###### How dinossaurs used to do

document.getElementByClassName('css_class_with_out_dot')
document.getElementById('css_class_with_out_dot')

## TODO

3 - Create reset password page that receives uuid from back end reset password call
4 - Create API reset password call

## DONE

1 - Create a new route under the store page

2 - Get all products saved inside the redux-store

3 - Display those products and enable deleting each of them separately

4 - Change the redux-store calls to redux-thunk to add, delete and display products directly from the API

5 - Create a component that receives product data from the API using classes

6 - Create a HOC component to display alerts of warning, error and info

7 - Create a reset password page(email, name, birthdate)

8 - Create authentication via email call to validate user
