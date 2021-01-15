// NAMED EXPORT - has a name, you can have as many as needed
const message = "Mi mensaje de mi consola de mi corazon..."

const name = "Axel"

const location = "Chicago"

const getGreeting = (name) => {
  return `Welcome to the jungle - ${name}` 
}

export { message, name, getGreeting, location as default }



// DEFAULT EXPORT - has no name, you can only have one