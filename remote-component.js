return {
  template: `
      <div>
        <h3>This is a remote component</h3>
        <p>{{ message }}</p>
      </div>
    `,
  setup() {
    return {
      message: 'Hello from the remote component!'
    }
  }
}