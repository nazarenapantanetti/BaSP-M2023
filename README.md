# In this space its going to be explained a little about how we work every week #

# Week-01 #

Our first project was aquainted with Figma, a graphic editor tool, widely used for the creation of web pages.

The requirement was to set up the desing of a website of a gym. Each team must to develop a part of it. 
We took into acount the concept of layout: the way in which the elements and shapes are distributed witin a desing, (distribution scheme). This contemplate header, navigation menu, main content, content and footer.
Also was important to consider all the necessary screens or "frames" according to the different paths that can be taken by the user. This is the reason why we create a happy path, and a negative as weel.

We started the bootcamp working in teams, in my case i worked with Alejandro and Ticiano. It was nice to do pair programming. We were awared the "Admin" section, which has severeal alternatives like interact with members, trainers, see the time's grid and the monthly reports. 

Once we finished the design, we made the connections between different frames, simulating a background programming.


# Week-02 #

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
>> It is important to check the situation using "git status" on git bash as many times as you need. For greater ease, its returns a red message indicating the unsaved files.

# Week-03 #

In this third week we started to use CSS. 
Cascading Style Sheets (CSS) is a language of styles widely used in the programming's world because of their usefulness to style an HTML document. It not only describes how HTML elements should be displayed, but also allows you give them a gorgeous design.
It is not necessary to download anything, you can work from Visual Studio Code, although it will be very helpfull for you to check the W3Schools website. On that page there is a manual that details how CSS works in a consistent and didactic way.
Given that when a browser reads a style sheet, it will format the HTML document according to the information in the style sheet, start creating a new file and associate it to the head of the HTML on which we are going to work (external way)

Following: <link rel="stylesheet" href="mystyle.css">

The basic operation consists of creating selectors for each section or element in order to give them styles. There are different combinations of selectors but the "classes" are the most common. The interesting thing about a class is to be able to assign values to it and reuse it for different areas of the model in a massive way. It also exists "ID" which is used for those sections that are unique. 
The next step is to declare the size of your box model (margin, border, padding and content) and assing color, location and shapes to the paragraphs or even images within de document according to your requirements. 

A piece of advice: go checking the applied changes in the browser and help you using "inspect" function (f12)
