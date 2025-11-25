# React Interview Prep Roadmap

> 🎯 **Goal:** Master mid-senior level React concepts for technical interviews
>
> **Last Updated:** November 2025

---

## 🚀 Expedited 1-Week Crash Course

> ⚠️ **Use this if:** You have an interview coming up soon and need to cover maximum ground quickly.

### Day 1: Rendering & Performance Essentials

**🔴 Critical Reading (2-3 hours):**

- [ ] [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/) - Mark Erikson
- [ ] Skim: [Before You memo()](https://overreacted.io/before-you-memo/) - Dan Abramov

**💻 Quick Project (2-3 hours):**

- [ ] Build a searchable product list with 100+ items
- [ ] Add search, basic filtering
- [ ] Intentionally cause performance issues, then fix with useMemo/useCallback
- [ ] Use React DevTools Profiler to measure

**🎧 Commute:**

- [ ] Syntax.fm - Any React Performance episode

**📝 Interview Prep:**

- [ ] Write down 3 key takeaways about when/why to use memoization

---

### Day 2: Hooks Deep Dive

**🔴 Critical Reading (2 hours):**

- [ ] [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) - Sections 1-3 minimum
- [ ] [React Hook Pitfalls](https://kentcdodds.com/blog/react-hooks-pitfalls)

**💻 Quick Project (2-3 hours):**

- [ ] Build a custom `useFetch` hook with loading/error states
- [ ] Build a custom `useDebounce` hook
- [ ] Create a search component using both hooks with PokeAPI

**🎧 Commute:**

- [ ] Syntax.fm - React Hooks episode

**📝 Interview Prep:**

- [ ] Practice explaining: dependency arrays, cleanup functions, stale closures

---

### Day 3: State Management Patterns

**🔴 Critical Reading (1-2 hours):**

- [ ] [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)
- [ ] Skim Zustand docs if you haven't used it

**💻 Quick Project (2-3 hours):**

- [ ] Build a simple todo app with Context + useReducer
- [ ] Add: filter by status, persist to localStorage
- [ ] Implement undo/redo functionality

**🎧 Commute:**

- [ ] React Round Up - Any state management episode

**📝 Interview Prep:**

- [ ] Be ready to discuss: When to use Context vs prop drilling vs external state library
- [ ] Know the tradeoffs of different approaches

---

### Day 4: TypeScript + Testing

**🔴 Critical Reading (1-2 hours):**

- [ ] [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Props section
- [ ] [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

**💻 Quick Project (2-3 hours):**

- [ ] Take yesterday's todo app
- [ ] Add comprehensive TypeScript types (generic types, conditional props)
- [ ] Write 5-10 tests with React Testing Library
- [ ] Test: user interactions, async behavior, edge cases

**🎧 Commute:**

- [ ] Epic React podcast - Any episode

**📝 Interview Prep:**

- [ ] Practice: typing complex component props, testing async components

---

### Day 5: Advanced Patterns & Modern React

**🔴 Critical Reading (1-2 hours):**

- [ ] [Patterns.dev - React Patterns](https://www.patterns.dev/react) - Skim compound components, render props
- [ ] [React Server Components](https://react.dev/reference/rsc/server-components) - Overview section

**💻 Quick Project (2-3 hours):**

- [ ] Build ONE reusable component with compound component pattern
- [ ] Option 1: Tabs component
- [ ] Option 2: Accordion component
- [ ] Option 3: Modal with Modal.Header, Modal.Body, Modal.Footer

**🎧 Commute:**

- [ ] JS Party - React episode

**📝 Interview Prep:**

- [ ] Can you explain: compound components, when to use render props vs custom hooks?

---

### Day 6: Next.js & Real-World Patterns

**🔴 Critical Reading (1-2 hours):**

- [ ] [Next.js App Router](https://nextjs.org/docs/app) - Read: Routing, Data Fetching, Rendering
- [ ] [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)

**💻 Quick Project (2-3 hours):**

- [ ] Simple Next.js app with App Router
- [ ] Create 3-4 pages with proper routing
- [ ] Mix server and client components appropriately
- [ ] Implement data fetching in a server component

**🎧 Commute:**

- [ ] Syntax.fm - Next.js episode

**📝 Interview Prep:**

- [ ] Be ready to explain: RSC benefits, when to use server vs client components

---

### Day 7: Review & Mock Interview

**🔴 Critical Review:**

- [ ] Review all your mini projects
- [ ] Go through [React Interview Questions repo](https://github.com/sudheerj/reactjs-interview-questions)
- [ ] Focus on: reconciliation, hooks rules, common gotchas

**💻 Mock Interview Practice:**

- [ ] Sign up for mock interview on interviewing.io OR
- [ ] Have ChatGPT/Claude simulate an interview
- [ ] Practice explaining WHWS architecture decisions

**📝 Your Project Prep:**

- [ ] Prepare 3-minute explanation of WHWS
- [ ] Be ready to discuss: RAG implementation, analytics setup, tech stack choices
- [ ] Identify 2-3 interesting technical challenges you solved

**Final Prep:**

- [ ] List your top 3 achievements/projects
- [ ] Prepare questions to ask the interviewer
- [ ] Review company's tech stack

---

## 📚 Full 6-Week Deep Dive

> 💡 **Use this if:** You have more time and want comprehensive preparation

### Week 1: Rendering & Performance Fundamentals

**📖 Reading:**

- [ ] [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/) - Mark Erikson
- [ ] [Before You memo()](https://overreacted.io/before-you-memo/) - Dan Abramov
- [ ] [Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render) - Kent C. Dodds

**💻 Project: Performance Optimization Lab**

Build a product table/list with 1000+ items:

- [ ] Implement search functionality
- [ ] Add filtering by multiple criteria
- [ ] Add column sorting
- [ ] Intentionally make it slow first (no memoization)
- [ ] Optimize with useMemo, useCallback, React.memo
- [ ] Implement virtualization with react-window
- [ ] Add debouncing to search
- [ ] Use React DevTools Profiler to measure before/after

**🎧 Listening:**

- [ ] React podcast episode 102-104 with Dan Abramov on Concurrent React
- [ ] Syntax.fm - React Performance episodes

**📝 Key Concepts to Master:**

- [ ] Virtual DOM and reconciliation algorithm
- [ ] When React re-renders components
- [ ] Understanding useMemo vs useCallback vs React.memo
- [ ] React DevTools Profiler usage

---

### Week 2: Hooks Deep Dive

**📖 Reading:**

- [ ] [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) - Dan Abramov
- [ ] [useMemo and useCallback explained](https://kentcdodds.com/blog/usememo-and-usecallback) - Kent C. Dodds
- [ ] [React Hook Pitfalls](https://kentcdodds.com/blog/react-hooks-pitfalls)

**💻 Project: Custom Hooks Library**

Build these custom hooks:

- [ ] `useDebounce` - with proper cleanup
- [ ] `useFetch` - with loading, error, cancellation support
- [ ] `useLocalStorage` - with sync across tabs
- [ ] `useMediaQuery` - responsive hook
- [ ] `useIntersectionObserver` - for lazy loading

Then build:

- [ ] Autocomplete component using your hooks
- [ ] Fetch from an API (PokeAPI, SWAPI, or JSONPlaceholder)
- [ ] Handle loading states, errors, debouncing

**🎧 Listening:**

- [ ] Syntax.fm - Multiple React Hooks episodes
- [ ] React Round Up - Hooks discussions

**📝 Key Concepts to Master:**

- [ ] Rules of hooks and why they exist
- [ ] Dependency arrays - when to include what
- [ ] Cleanup functions in useEffect
- [ ] Stale closure problems
- [ ] useReducer vs useState
- [ ] useRef for mutable values

---

### Week 3: State Management & Architecture

**📖 Reading:**

- [ ] [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react) - Kent C. Dodds
- [ ] [Why I don't use Redux anymore](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples/)
- [ ] [React Context performance](https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/)
- [ ] Zustand documentation

**💻 Project: State Management Comparison**

Build the same todo app three different ways:

- [ ] **Version 1:** Context API + useReducer
- [ ] **Version 2:** Zustand
- [ ] **Version 3:** Pure prop drilling with composition

Features to implement:

- [ ] Add, edit, delete todos
- [ ] Filter by: all, active, completed
- [ ] Persist to localStorage
- [ ] Undo/redo functionality
- [ ] Bulk actions (complete all, delete completed)

Compare approaches in a README:

- [ ] Code complexity
- [ ] Performance implications
- [ ] Developer experience
- [ ] When you'd choose each

**🎧 Listening:**

- [ ] React Round Up - State management episodes
- [ ] Syntax.fm - Redux vs other solutions

**📝 Key Concepts to Master:**

- [ ] When to lift state up
- [ ] Component composition to avoid prop drilling
- [ ] Context API performance gotchas
- [ ] When you need external state management
- [ ] Server state vs client state

---

### Week 4: TypeScript + React & Testing

**📖 Reading:**

- [ ] [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Read thoroughly, bookmark
- [ ] [Testing Library docs](https://testing-library.com/docs/react-testing-library/intro/) - Guiding principles
- [ ] [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [ ] [Testing Hooks](https://react-hooks-testing-library.com/)

**💻 Project: Multi-Step Form with Tests**

Build a complex multi-step form wizard:

- [ ] 3-4 steps with navigation
- [ ] Complex validation rules
- [ ] Conditional fields based on previous answers
- [ ] Review step showing all data
- [ ] Progress indicator

TypeScript Requirements:

- [ ] Strongly typed form data with discriminated unions
- [ ] Generic form component types
- [ ] Proper event typing
- [ ] Type-safe validation functions

Testing Requirements:

- [ ] Test each step's validation
- [ ] Test navigation between steps
- [ ] Test conditional logic
- [ ] Test form submission
- [ ] Test error handling
- [ ] Test custom hooks in isolation

**🎧 Listening:**

- [ ] Epic React podcast by Kent C. Dodds
- [ ] React Native Radio (discusses React patterns)

**📝 Key Concepts to Master:**

- [ ] Typing props with optional/required fields
- [ ] Generic components in TypeScript
- [ ] Event typing (onChange, onSubmit, etc.)
- [ ] Testing user interactions vs implementation
- [ ] Testing async behavior
- [ ] What makes a good test

---

### Week 5: Advanced Patterns & Modern React

**📖 Reading:**

- [ ] [React docs on Server Components](https://react.dev/reference/rsc/server-components)
- [ ] [Patterns.dev - React patterns](https://www.patterns.dev/react)
  - [ ] Compound Components
  - [ ] Render Props
  - [ ] Higher-Order Components
  - [ ] Container/Presentational
- [ ] [New Suspense SSR Architecture](https://github.com/reactwg/react-18/discussions/37)

**💻 Project: Reusable Component Library**

Build 3-4 production-quality components:

**Modal Component (Compound Component Pattern):**

- [ ] Modal, Modal.Header, Modal.Body, Modal.Footer
- [ ] Proper focus management
- [ ] Escape key handling
- [ ] Click outside to close
- [ ] Accessible (ARIA attributes)

**Select/Dropdown Component:**

- [ ] Keyboard navigation
- [ ] Search/filter options
- [ ] Multi-select support
- [ ] Fully accessible
- [ ] Generic TypeScript types

**DataTable Component:**

- [ ] Sortable columns
- [ ] Filterable columns
- [ ] Pagination
- [ ] Row selection
- [ ] Generic types for any data shape

**Tabs Component:**

- [ ] Keyboard navigation
- [ ] Controlled/uncontrolled modes
- [ ] Lazy loading of tab content
- [ ] Accessible

**Requirements:**

- [ ] Proper TypeScript generics
- [ ] Comprehensive tests
- [ ] Storybook documentation (optional but good)
- [ ] Composable and flexible APIs

**🎧 Listening:**

- [ ] JS Party - React discussions
- [ ] Syntax.fm - Component patterns

**📝 Key Concepts to Master:**

- [ ] When to use each pattern
- [ ] Compound components API design
- [ ] Controlled vs uncontrolled components
- [ ] Component composition strategies
- [ ] Accessibility in React
- [ ] React 18 concurrent features

---

### Week 6: Next.js & SSR/SSG

**📖 Reading:**

- [ ] [Next.js App Router docs](https://nextjs.org/docs/app) - Complete App Router section
- [ ] [Server Components vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [ ] [Data Fetching patterns](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [ ] [Understanding React Server Components](https://www.joshwcomeau.com/react/server-components/) - Josh Comeau

**💻 Project: Blog or Product Showcase**

Build a full Next.js 14+ application:

- [ ] Multiple pages with proper routing
- [ ] Server components for initial render
- [ ] Client components where interactivity needed
- [ ] Data fetching in server components
- [ ] Implement proper metadata for SEO
- [ ] Image optimization with next/image
- [ ] Loading states and Suspense boundaries
- [ ] Error boundaries
- [ ] API routes for dynamic data

Features:

- [ ] Homepage with featured content
- [ ] List page with filtering/search
- [ ] Individual item pages (SSG)
- [ ] Dynamic routes
- [ ] Search functionality

**Deploy:**

- [ ] Deploy to Vercel
- [ ] Set up proper environment variables

**🎧 Listening:**

- [ ] Syntax.fm - Next.js episodes
- [ ] Vercel podcast episodes

**📝 Key Concepts to Master:**

- [ ] Server vs Client Components - when to use which
- [ ] Data fetching patterns in App Router
- [ ] SSR vs SSG vs ISR - tradeoffs
- [ ] Streaming and Suspense
- [ ] Client/Server composition patterns
- [ ] Metadata and SEO

---

## 🎯 Ongoing Practice (Throughout All Weeks)

### LeetCode-Style React Problems

Build these classic interview components:

- [ ] **Infinite Scroll** - with intersection observer
- [ ] **Debounced Search** - with cache and request cancellation
- [ ] **Drag and Drop List** - understand DnD mechanics
- [ ] **Real-time Collaborative Component** - with WebSockets
- [ ] **Optimistic UI Updates** - handle async operations
- [ ] **Typeahead/Autocomplete** - with keyboard navigation
- [ ] **Data Grid with Virtual Scrolling** - handle 10k+ rows
- [ ] **Form with Complex Validation** - async validation, field dependencies

---

## 🎧 Best Podcasts for Commute

### Regular Listening:

1. **Syntax.fm** - Wes Bos & Scott Tolinski

   - Most consistent quality for React content
   - Search their archives for React-specific episodes

2. **React Round Up** - TopEnd Devs

   - Multiple hosts discussing current React patterns
   - Good for staying up to date

3. **JS Party** - Changelog

   - Broader JavaScript but frequently covers React
   - Fun and informative

4. **Epic React Podcast** - Kent C. Dodds

   - Deep dives into React patterns
   - Practical advice from industry expert

5. **The Changelog**
   - Wider tech coverage
   - Great for staying current with ecosystem

---

## 📺 YouTube Channels (Video Learning)

- **Jack Herrington (Blue Collar Coder)** - Extremely practical React patterns
- **Web Dev Simplified** - Good for specific topics and comparisons
- **Theo (t3.gg)** - Opinionated but knowledgeable, Next.js focused
- **Fireship** - Quick 10-minute overviews of concepts

---

## 📝 Final Interview Prep Checklist

### Week Before Interview:

- [ ] Review your WHWS codebase
- [ ] Prepare to discuss architectural decisions
- [ ] Practice explaining your RAG implementation
- [ ] Practice explaining your analytics setup (ClickHouse)
- [ ] Write down 3 interesting technical challenges you solved

### Day Before Interview:

- [ ] Do 2-3 mock interviews on [interviewing.io](https://interviewing.io)
- [ ] Skim [React Interview Questions repo](https://github.com/sudheerj/reactjs-interview-questions)
- [ ] Review your mini projects
- [ ] Prepare questions to ask interviewer

### Day Of Interview:

- [ ] Review common gotchas:
  - Keys in lists (beyond just the warning)
  - Stale closure problems
  - Effect cleanup
  - Batching in React 18
  - Concurrent features basics

---

## 💡 Interview Discussion Topics from Your Work

### WHWS Platform - Be Ready to Discuss:

**Architecture:**

- Why you chose your tech stack
- How you structured the codebase
- Server/client component decisions

**RAG Implementation:**

- Vector database choice (Qdrant)
- Embedding strategy
- Query optimization

**Analytics:**

- Why ClickHouse
- What events you track
- How you handle the data

**Community Features:**

- Nested comments implementation
- Real-time updates approach
- Performance with scale

**Challenges Solved:**

- Pick 2-3 interesting technical problems
- Explain the problem, your solution, the tradeoff
- Have metrics if possible (performance improvement, etc.)

---

## 🎯 Priority If Time-Constrained

If you can only do some of this, prioritize:

1. ✅ Mark Erikson's rendering article (Week 1)
2. ✅ Dan Abramov's useEffect guide (Week 2)
3. ✅ Build the autocomplete + custom hooks project (Week 2)
4. ✅ Build the reusable component library (Week 5)
5. ✅ Listen to Syntax.fm React episodes during drives
6. ✅ Review your WHWS architecture decisions

---

## 📚 Quick Reference Links

### Essential Bookmarks:

- [React Docs](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Testing Library](https://testing-library.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [Patterns.dev](https://www.patterns.dev/)

### GitHub Repos:

- [React Interview Questions](https://github.com/sudheerj/reactjs-interview-questions)
- [Awesome React](https://github.com/enaqx/awesome-react)

---

## 💪 You Got This

Remember: The mini projects are more valuable than just reading. You'll retain patterns better and have concrete examples to discuss in interviews.

Given your work on WHWS, you already have sophisticated experience with:

- Complex state management
- RAG systems with vector databases
- Analytics implementation
- Community features
- Real-world performance optimization

That's EXACTLY what senior-level interviews are looking for. This roadmap just helps you articulate and expand on what you already know.

---

**Created:** November 2025  
**For:** Mid-Senior React Developer Interview Prep  
**Estimated Time:** 1 week (expedited) or 6 weeks (comprehensive)
