## TASK 1:

1. What would you do differently? 
Use React function component over class component
Better seggregation of UI logic and business logic in `app.tsx`. The `render()` is too long
Add support for HMR for better DX.

2. What's good? 

TodoModel is well implemented.
I like the UI/UX. It's intuitive and doesn't make me think a lot as user. 
Named exports from component files

3. What's bad?

Conditional rendering is handled in CSS using classes
Build output directory is same as the source directory.
It is a dated project - lots of `vars` floating around. 
Maybe the requirement was to not use any external libraries, but I don't like the hacky way the routing has been setup as well.
Improper typing on event for `handleChange` in todoItem.tsx
HMR is not setup
Missing .gitignore
JS files being generated alongside TS source files
JS bundle being served from the source directory
Lots of 'vars' floating around. Use let or const


4. Are you missing anything in the tooling? 
Storybook
Jest
Cypress