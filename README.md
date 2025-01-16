
# What are React Hooks?

React hooks are special functions that let you use state and other React features in functional components. Before hooks, these features were only available in class components. 

Hooks make it easier to manage state, handle side effects (like data fetching), and share logic between components, all in a simpler and more readable way.

## useState React Hook

The useState hook in React is a special function that lets you add and manage state in a functional component. 

It allows you to store a value (like a variable) and update it when needed, while also making React re-render the component whenever the value changes.

## useCallback React Hook

The useCallback hook in React is a tool to remember a function so it doesn’t get recreated every time the component re-renders. This is useful when you want to optimize performance, especially when passing functions as props to child components or using them in dependencies.

**Why use useCallback?**

useCallback is a React Hook that lets you cache a function definition between re-renders.

Every time a component re-renders, all the functions inside it are recreated. If you pass a recreated function to a child component, it can cause unnecessary re-renders, even if the function behaves the same. useCallback helps you avoid this by "caching" the function and only recreating it if its dependencies change.

## useEffect React Hook

useEffect is a React Hook that lets you synchronize a component with an external system.

The useEffect hook in React is used to handle side effects in your components, such as fetching data, updating the DOM, or setting up subscriptions. It's called inside a functional component to manage tasks that happen outside of the React rendering process.

## useRef React Hook

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

The useRef hook in React is used to create a reference to a DOM element or a value that persists across renders without causing the component to re-render when it changes. It's a handy tool for accessing and manipulating DOM elements directly or keeping track of mutable values.

## useId React Hook

useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

The useId hook in React is used to generate unique IDs that are stable across server and client rendering. It's especially useful for accessibility purposes, such as associating form elements with their labels, or for ensuring unique keys in a list.

### ⚠️ Do not call useId to generate keys in a list. Keys should be generated from your data.

# What is Fiber in React?

Fiber is the new reconciliation engine in React, introduced to improve rendering performance and make React apps smoother. 

It breaks the rendering work into small units and spreads it over multiple frames, ensuring the app remains responsive.

**Key Features of Fiber:**

Handles updates with priority, such as animations or user inputs.

Supports asynchronous rendering for smoother user experience.

Enables pausing, resuming, or reusing work for better performance.

# How React Fiber Works:

##### Phases in Fiber Architecture:

**Reconciliation Phase ("Render Phase"):**

React Fiber creates a "work in progress" tree (virtual DOM) to calculate the minimal changes needed. This phase can be paused and resumed.

**Commit Phase:**

After determining the changes, React updates the real DOM in a single, synchronous step. This ensures UI consistency.

##### Unit of Work:

Fiber breaks rendering tasks into small units of work, each representing a part of the component tree. These units allow React to stop and resume rendering efficiently.

##### Fiber Nodes:
Fiber architecture uses fiber nodes as JavaScript objects to represent each component and its associated state, props, and DOM updates.


# What is Reconciliation in React?

Reconciliation is the process React uses to update the user interface efficiently. It compares the new virtual DOM tree with the previous one and calculates the minimal changes needed to update the real DOM.

**Key Points:**

React avoids full re-renders and updates only what has changed.

Makes React apps faster by optimizing DOM updates.

# What is an Update in React?

An update in React refers to any change in the state or props of a component that causes React to re-render the component and update the UI.

**Example:**  When you call setState or useState, React schedules an update.

**Types of Updates:**

State Updates

Props Updates

Context Changes


# What is Virtual DOM in React?

The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to track changes and update only the parts of the real DOM that have changed.

**Key Benefits:**

Faster updates because React avoids direct DOM manipulation.

Improves performance by batching and optimizing updates.

# Why Use Keys in Loops When Injecting HTML?

Keys help React identify which items in a list have changed, been added, or removed. They are crucial for efficient updates and maintaining the correct order of elements.

**Reasons to Use Keys:**

Improves rendering performance by avoiding unnecessary re-renders.

Helps React preserve the state of components between renders.

Avoids unexpected bugs in dynamic lists.

# What are Components?

Components are reusable building blocks of a React app. They are like JavaScript functions that take input (props) and return JSX to define the UI.

# What are Props?

Props (short for "properties") are like function arguments in React. They are used to pass data from a parent component to a child component. 

Props are read-only, meaning the child component cannot change them directly.

# Documentation

[React Hooks](https://react.dev/reference/react/hooks)

[useState Guide](https://react.dev/reference/react/useState)

[React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

## Author

[TM Web Dev](https://www.github.com/tm-web-dev)

## Learned From

Special Thanks to [Chai aur Code](https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige)

