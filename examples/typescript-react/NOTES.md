# READ ME
## Running the project
1. Build the project with `npm run build` or `yarn build`
2. Serve the project with `npm run start` or `yarn start`

## Testing 

### Component prototyping
Use the `yarn storybook` or `npm run storybook` command to run StorybookJS to view different states of the `todoItem` component. 

The story file for the component is located at  `src/stories/`.

### Integration/Unit tests
I have implemented tests for the new util functions and the newly implemented feature using `cypress`. Once the project has been built and is being served on port 4200, run the tests as follows:
-	Headless mode: `npm run test` or `yarn test` 
-	Visible mode: `npm run test:show` or `yarn test:show`
-	Interactive mode: `npm run test:interactive` or `yarn test:interactive` and use the 

# Responses for tasks

## Task 1:

1. What would you do differently?

	I would have: 

 - Used React function components over class components
 - Better seggregation of UI logic and business logic in `app.tsx`. The `render()` method is too long. For example, I would have extracted logic of generating and rendering the `shownTodos` 
 - Added support for HMR for better DX.

2. What's good?

- TodoModel is well implemented.
- I like the UI/UX. It's intuitive and doesn't make me think a lot as user.
- Named exports from component files

3. What's bad?

- I had to use inline styling since since to get css modules to work I would have to setup webpack/babel. 
- DOM elements are hidden using classes; those elements could have been removed/not rendered.
- Build output directory is same as the source directory. So the transpiled JS files were being generated alongside TS source files. I found that too messy so I changed the build and src directories.
- It is a dated project - lots of `vars` floating around.
- Maybe the requirement was to not use any external libraries, but I don't like the hacky way the routing has been setup.
- The typing on event for `handleChange` in todoItem.tsx was incorrect
- HMR is not setup


4. Are you missing anything in the tooling?

- Storybook for prototyping React components (I've set it up)
- Cypress for unit, integration testing.

  

## Task 2:

1. When entering a new item we want to add one or mreo albels by adding words like @work or @important to an item.

	This has been implemented. Words that begin with @ show up as badges
2. These labels should not be part of the item title itself, but instead show up right-aligned as badges.
	The text in the badge(s) do not show up in the text of the todo itself. 

4. When editing the item (double-click) we want to be abel to add, edit or remove labels.
	When editing a todo item, the badges show up as words beginning with @ and can be edited, removed or new ones added as required. 
  

## Bonus Task:

Write React component tests for your newly added feature.

- UI prototyping is implemented using StorybookJS, the story file for `todoItem` component is located at `src/stories/TodoItem.stories.tsx`.
- The test files for testing the badge feature and associated util functions are located at `cypress/integration/todomvc/`. I thought of using React Testing Library but being able to view the tests in Cypress looks cool :sunglasses:.

