import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
    cleanup()
})

// CUSTOMRENDER FUNCTIONS FOR WRAPPER - EX. REDUX

function customRender(ui, options = {}) {
    return render(ui, {
      // wrap provider(s) here if needed
      wrapper: ({ children }) => children,
      ...options,
    });
  }
  
  export * from "@testing-library/react";
  export { default as userEvent } from "@testing-library/user-event";
  // override render export
  export { customRender as render };