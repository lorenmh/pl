Recently I've taken an interest in graphics programming.  This interest primarily began when I came across the JavaScript library [three.js](http://threejs.org/).  **three.js** uses WebGL and can render three dimensional scenes in [most modern web browsers](http://caniuse.com/#feat=webgl).  These rendered scenes can be embedded directly in the HTML document in a canvas element. There are no need for Java applets or Flash, and with WebGL the GPU is utilized to improve the rendering quality and speed.

The first thing I made with three.js was [a plane of hexagons which rotated about the origin](https://jsfiddle.net/exm8s0a3/embedded/result/).  Once I got the feel for rendering shapes and moving objects around, [I created a scene with two custom made octahedrons](https://jsfiddle.net/fzb1oayg/3/embedded/result/). Each octahdron consists of 8 meshes (one mesh per face of the octahedron).  By making each face its own mesh I was able to move the individual faces to open and close the octahedron.

Through trial and error I was able to render the scenes mentioned above, however I realized that I really didn't know what I was doing. I would need to learn the fundamentals of graphics rendering if I wanted to progress in a coherent direction.

I had three goals to progress with graphics:
1. Get a thorough understanding of the underlying math (linear algebra).
2. Get a thorough understanding of the steps the computer makes to render a scene (the graphics pipeline).
3. Render some scenes using nothing but OpenGL.

Recently I achieved the third and final goal, and have rendered some simple three dimensional shapes using nothing but OpenGL and SDL (the code is written in C and C++).

### Takeaways - What Did I Learn?
##### Linear Algebra
It should come as no surprise that linear algebra is absolutely necessary to understanding graphics.  After picking up a linear algebra textbook, it seems to me that linear algebra is the most important part of mathematics to learn for computer science.  It's more important than calculus.  Linear algebra is used in graphics, data science, probability, cryptography, etc.

##### Vector Transformations - It's All Smoke And Mirrors
One of the coolest things I discovered is that it truly is all smoke and mirrors when it comes to rendering scenes. The way pixels are drawn is by projecting 3 dimensional points onto a 2d surface (the screen).  A great way to conceptualize this is by [picturing 'shadow-puppets'](https://learnwithme2.files.wordpress.com/2013/07/shadow-puppet.jpg).  With shadow puppets, there is a light source, a three dimensional object, and a two dimensional screen.  The object is actually three dimensional, but with the light source it is projected onto the two dimensional screen.

When a scene is rendered on a computer, there are vertices corresponding to three dimensional object, then using projection and transformation matrices, the object is projected into 2D, and is eventually rendered on your screen.

A simplified process for rendering a scene is: 
- Client-side there are structs / arrays / objects corresponding to objects to be rendered.  These objects hold all of the vertices to be rendered.  Henceforth these objects will be called 'models'.
- A model transformation matrix is created. This matrix will transform the vertices in the model to their final positions in the world space.
- A projection matrix is created.  This matrix will transform the world space vertices into their positions on the 2D screen.  This matrix adds perspective and will move vertices based on the camera position.
- The transformation matrix is made by multiplying the model transformation matrix by the projection matrix.  Each model will have its own transformation matrix.
- The vertices for all of the models are sent to the GPU.
- The transformation matrix for each model is sent to the GPU.
- Using programmable shaders, each vertex is tranformed by multiplying the vertex by the transformation matrix.

### This Is Only The Beginning
Now that I've reached my goal of rendering simple scenes using nothing but OpenGL, I've realized just how much more there is to learn. 

Looking forward, the next things to learn are:
- Algorithms to remove faces / vertices that don't need to be rendered because they are occluded (Binary Space Partition Trees, etc. ).
- A further exploration of vertex and fragment shaders.
- Light maps, shadow maps.
- UV maps / applying textures to meshes.
- Creating reusable code that can render scenes across devices.

My next goals are to create a simple 2D game using nothing but OpenGL, and finally to create a simple Doom clone.  It won't be easy to accomplish these goals but I'll definitely learn a thing or two in the process.
