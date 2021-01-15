import location, {message, name, getGreeting} from './myModule'
import add from './math'

console.log(message);
console.log(name)
console.log(location);
console.log(add(2, 5))
console.log(getGreeting(name))