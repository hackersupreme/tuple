# Tuple React SPA from Youtube Series Refactoring UI

Contents

- Overview
- Installation
- Documentation
- Resources / Contact Info

## Overview 

I was inspired to make this page in React as some good practice at taking a static sketch file and making it into a webpage.

I struggle sometimes coming up with practice side projects that also look good. I like the Youtube series Refactoring UI and I've learned a lot from watching their videos so I decided to use one of their projects as practice.

The page is made in React.js. The main focus of this page was to use consistent BEM CSS naming conventions in combination with React components. As a result, all the form does is alert the submitted email.

#### Youtube Video
https://www.youtube.com/watch?v=RC9cYdbQ-_c

#### Sketch File
https://www.dropbox.com/s/tictbuvpnzxpf7v/tuple-after.sketch?dl=0

## Installation

This assumes you have the following installed:
  - node.js 
  - node package manager (npm)

Get both here: https://nodejs.org/

###### Instructions

1. Create file directory on your local device
2. Download files to that directory

_note: PNG images are for this document, not needed for the project_

3. Using a command line software, enter the directory
```
cd directory-name
```
4. Use npm install to get the node modules
```
npm install
```
5. Use npm start to start the server
```
npm start
```

## Documentation

The top level component of the page is `App` and it is a `<div>` that contains a `Main` component, a `Details` component, and an `FAQ` component.

The `Main` component is a `main` element that contains the header of the page, the paragraphs of the article, and the input form for the user's email. The input form is defined separately to the `Main` component as its own component called `Form`.

The `Details` and `FAQ` components are `aside` elements containing sections of information under a header.

There are four stylesheets for the page: `index.css`, `Main.css`, `Details.css`, and `FAQ.css`. The `index.css` defines some global styles for the page while the others provide styles for their respective components.

The naming convention I used is called Block ELement Modifier (BEM). It's a way of structuring class names in a composable and readable way. 

This is the stylesheet `Main.css` as an example. There are two blocks in the file, `main__` and `form__`, so I should probably separate them if this was a part of a larger project but you can see the follorwing pattern:

`.block__element--modifier`

The modifier is optional.
```
.main__container {
	position: relative;
	width: 50%;
	left: 20%;
	padding: 32px 0px;
}

.main__header {
	margin: 32px 0px;
}

.main__title {
	margin: 24px 0px;
}

.main__paragraph {
	margin: 16px 0px;
}

.main__paragraph--first-line {
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: bolder;
	font-size: 14px;
}

.main__first-letter:first-letter {
	color: #dcdeef;
	float: left;
	padding: 4px 10px;
	background: #5a67d8;
	border-radius: 50%;
	margin: 8px;
	font-size: 20px;
}

.form__container {
	margin: 32px 0px;
	box-shadow: 0px 0px 20px #e3e4ef, 0px 5px 10px #adb0ca;
	position: relative;
	width: 75%;
	display: grid;
	grid-template-columns: auto 180px;
}

.form__input {
	position: relative;
	border: none;
	padding: 12px;
	border-radius: 4px 0 0 4px;
}

.form__input--submit {
	border: none;
	padding: 12px 16px;
	border-radius: 0px 4px 4px 0px;
	color: #dcdeef;
	background: #5a67d8;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: bolder;
}

.form__input--submit:hover,
.form__input--submit:focus {
	background: #434190;
}
```

## Resources / Contact Info
