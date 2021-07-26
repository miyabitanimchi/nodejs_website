module.exports.builtInModules = () => {

  // console.log(module);
  return `
  <html>
    <head>
      <title>Node.js Tutorial</title>
    </head>
    <body>
      <a href="/built-in-modules">Built-in Modules</a>
      <a href="./your-own-modules">Your Own Modules</a>
      <h1>Node.js Tutorial</h1>
      <h2>Built-in Modules</h2>
      <ol>
        <li>
          <a href="#">fs File System Module</a>
        </li>
        <li><a href="#">url URL Module</a></li>
        <li><a href="#">events Events Module</a></li>
      </ol>
      <a href="/">Go Back to Main Page</a>
    </body>
  </html>
  `;
}

// The difference between module.exports and exports?
// module.exports is a property of the module object.
// If you console.log()...
/*
Module {
  id: '/Users/miyabi/Desktop/desktop-folders/wmad/nodejs-course/w1_weekly_assignment/nodejs_tutorial/modules/buit-in-modules.js',
  path: '/Users/miyabi/Desktop/desktop-folders/wmad/nodejs-course/w1_weekly_assignment/nodejs_tutorial/modules',
  exports: { builtInModules: [Function] },
  parent: Module {
    id: '.',
    path: '/Users/miyabi/Desktop/desktop-folders/wmad/nodejs-course/w1_weekly_assignment/nodejs_tutorial',
    exports: {},
    parent: null,
    filename: '/Users/miyabi/Desktop/desktop-folders/wmad/nodejs-course/w1_weekly_assignment/nodejs_tutorial/index.js',
    loaded: true,
    children: [ [Circular], [Module], [Module] ],
    ...
 */

// module.exports... If the content to be exported is an object, but it can be anything.
// exports... Can not export an object

// the best is to use module.exports!