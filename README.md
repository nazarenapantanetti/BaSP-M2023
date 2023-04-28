# In this space its going to be explained a little about how we work every week

# Week-01

Our first project was aquainted with Figma, a graphic editor tool, widely used for the creation of web pages.

The requirement was to set up the desing of a website of a gym. Each team must to develop a part of it.
We took into acount the concept of layout: the way in which the elements and shapes are distributed witin a desing, (distribution scheme). This contemplate header, navigation menu, main content, content and footer.
Also was important to consider all the necessary screens or "frames" according to the different paths that can be taken by the user. This is the reason why we create a happy path, and a negative as weel.

We started the bootcamp working in teams, in my case i worked with Alejandro and Ticiano. It was nice to do pair programming. We were awared the "Admin" section, which has severeal alternatives like interact with members, trainers, see the time's grid and the monthly reports.

Once we finished the design, we made the connections between different frames, simulating a background programming.

# Week-02

In this week i translated what i saw on the landing desktop from Figma to a HTML vocabulary. The chosen landing was developed by my classmates in Week-01.

HTML: is a language used for the elaboration of web pages.
Visual Code Studio: is a code editor, allows you to develop the HTML structure and others.  
Git: is a version control system, useful to save as much variety of versions of a project as you need.
Github: is a system to host projects from Git, like a remote repository.

Step by step:

1. Download Git and Visual Code Studio.
2. Create an account in Github and start a project, in this case is called "BaSP-M2023"
3. The next step is to begin Git using "git init" on the bash. Pay attention to the folder in which you give origin to the board. Optional, put the same project's name to your folder.
4. Connect your local repository (Git) with your remote one (Github) by using the command "git add remote + link of your project".
5. Once both are connected, go to Visual Code Studio, and let the HTML skeleton born.
   Visual Code Studio have a main structure conformed by a header, body and footer and also offers a lot of elements that you must use according to your needs, for example: "section" or "article" > for separate subjects, "h" > titles with different type of influence, or img > to include images.
6. As you make relevant changes or finish sections, you have to:

- Save on VCS = CTRL + S
- Save on git bash= "git add..+ name of file"
- Commit on git bash = "git commit -m "hi im a message"". Expressing the changes you have made since the last version you have saved of the file.

7. Finally, send the new information to the cloud, using "git push origin master" on the board.
   > > It is important to check the situation using "git status" on git bash as many times as you need. For greater ease, its returns a red message indicating the unsaved files.

# Week-03

In this third week we started to use CSS.
Cascading Style Sheets (CSS) is a language of styles widely used in the programming's world because of their usefulness to style an HTML document. It not only describes how HTML elements should be displayed, but also allows you give them a gorgeous design.
It is not necessary to download anything, you can work from Visual Studio Code, although it will be very helpfull for you to check the W3Schools website. On that page there is a manual that details how CSS works in a consistent and didactic way.
Given that when a browser reads a style sheet, it will format the HTML document according to the information in the style sheet, start creating a new file and associate it to the head of the HTML on which we are going to work (external way)

Following: <link rel="stylesheet" href="mystyle.css">

The basic operation consists of creating selectors for each section or element in order to give them styles. There are different combinations of selectors but the "classes" are the most common. The interesting thing about a class is to be able to assign values to it and reuse it for different areas of the model in a massive way. It also exists "ID" which is used for those sections that are unique.
The next step is to declare the size of your box model (margin, border, padding and content) and assing color, location and shapes to the paragraphs or even images within de document according to your requirements.

A piece of advice: go checking the applied changes in the browser and help you using "inspect" function (f12)

# Week-04

We went deeper in CSS learninig how to use Flex-Box. Flex-box is a tool that makes it easier to design flexible responsive layout structure.
Their organize consider one parent element (or container) which host another elements (or child items). To give the flexible property to the container you must set "display: flex ", and automatically their direct children becomes flexible too.
Once your box is flexible, you give it location to their items following two axis; exists: one main axis (horizontal by default) and a cross axis (vertical by default). The main axis always gonna take the same flex's direction, it can be row (by default) or column.
There are many properties to assing to the flex-box like order, shrink, grow or even align-self, this last one allows you to give an exclusive direction or property to one specific child.
It's useful to chose percentage or vw instead of pixel perfect to responsive layouts because it lets the page adapt according to different resolutions views.
This week's project consisted of creating a mobile, tablet and desktop model following figma's landscape design. The recommendation was to start developing the mobile version and then manage to adapte the features to the different size of gadget making use of media queries.
what is media queries? an option to achieve responsives layouts that works including a block of CSS properties only if a particular condition is true (called breakpoint). A breakpoint is usefull when parts of the design will behave differently under a certain condition or size version.
An example:
@media only screen and (min-width: 601px) {
body {
background-color: lightblue;
}
}
Since the browser's wide is 601px or bigger, the background will be blue.

Visit the following GitHub pages link to view the result:
https://nazarenapantanetti.github.io/BaSP-M2023/Week-04/

# Week 05

JavaScript arrived to us!
Once you have HTML (structure model) and CSS (design) its time to add JavaScript. It is the world's most popular programming language, which scripts web pages, giving them the attribute of being interactive in a light way.

In order to learn how to use this recognized language, the project of this week was doing a variety of excercises. The excercises included everything from definition of variables to the creation of loops, arrays and development of functions briefly explain below.

A few things to have in mind:

- Start inserting JavaScript on HTML's file making use of the tag <script> at Visual Code Studio.
- You can use // or /\* to comment. Comments arent taken into account when the code runs.
- A keyword is a reserved word.

VARIABLES AND OPERATORS
Variables are containers for storing data (var)
Operators: there are many types, such Assignment Operator (=) which assigns a value to a variable or arithmetic ones ( + - \* / ) to compute values.
STRINGS
Store text, include zero or more characters written inside quotes ('')
ARRAYS
Its characterized by being able to store more than one value. Unlike variables, its written in square brackets ([])
IF ELSE
Is one of the conditional statments, used to perform different actions according to different scenarios. If corresponds to the true condition, and else to an alternative path.
FOR
It a loop, what means it can execute a block of code repeatedly, each time with a different value.
FUNCTIONS
Contain code inside and parameters that contemplates when executing. It is defined with the function keyword, and is executed when is called by their name.

Visit the following GitHub pages link to view the result:
https://nazarenapantanetti.github.io/BaSP-M2023/Week-05/

# Week-06

Let's learn about the DOM (Document Object Model). When a web page is loaded, the browser creates a DOM of the page, as a tree of objects, where the branches are de different elements/nodes that make up the page. DOM's job is facilitate a structured representation of the document (tree) and define how programs can access, ir order to modify, both their srtucture, style and content (branches/nodes). It essentially connect web pages to programming languages.

This week's work consist of creating a form associated with the landing page in which he have been working on. Following the design of Figma, it has to contain a Login part and a Sign Up one too. Another consideration is that the page must allow navigation from one site to another.
In order to achieve the aim its necessary to complete the following points:

- Create separate HTML files for Login and Sign Up.
- Give them CSS style according to the previous landing page.
- Apply JavaScript logic for the operation of the form.

Plus: Requirement PDF: its a simple but important document in which the requirements/funtionalities that a project must achieve are refelected. This document is used by all the scrum team in order to check if a product can be considered satisfactory done.

Visit the following GitHub pages link to view the result:
https://nazarenapantanetti.github.io/BaSP-M2023/Week-06/
