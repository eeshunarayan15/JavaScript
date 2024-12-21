function divide(a, b) {
  try { if(b === 0|| a === 0) {
      throw new Error('Cannot divide by zero')
   }
    
  } catch (error) {
      console.log(error)            
    
  }
    
}
const a = divide(4, 0)
console.log(a) // Infinity