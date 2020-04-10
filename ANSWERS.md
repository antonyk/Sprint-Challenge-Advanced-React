- [ ] Why would you use class component over function components (removing hooks from the question)?

  Using class components is an older method of composing Reactjs SPAs but still widely present in exisitng codebases. Therefore, one reason is it may be necessary when taking over maintenance of an existing app. Another reason is if developer prefers the mental model of components as classes.

- [ ] Name three lifecycle methods and their purposes.

  1. componentDidMount() - this method is called after React calls render(), thus generating its component's html and mounting it into the DOM. Good place to perform remote async operations for retrieving data. Once data comes back, it will update the component's state, but will not trigger a new componentDidMount().
  2. componentDidUpdate() - React calls this method when the component has changed (i.e. a state change), but not on initial render.
  3. componentWillUnmount() - method called immediately prior to component being removed from the DOM. Good for cleanup actions.

- [ ] What is the purpose of a custom hook?

  A "custom" hook is a hook function that we write ourselves, in order to extend the functionality of existing hooks or functions or create new functionality. The general motivation behind hooks is to solve 3 problems that existed prior to their introduction: reusability of stateful logic, component complexity and readability.

- [ ] Why is it important to test our apps?

  We test our apps to ensure that they work as intended and deliver the desired experience to end users. We create automated tests (Unit, Integration, E2E) in order to save future testing time and resources and most importantly enable quick iteration and release cycles.