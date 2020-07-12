const add = (n1: number, n2: number): number => {
  return n1 + n2
}

const printResultDay4 = (num: number):void => {
  console.log(`Result ${num}`)
}

const addAndHandleDay4 = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2
  cb(result)
}

addAndHandleDay4(5, 6, printResultDay4)

let userInput: unknown
let userName: string

userInput = 'Andrew'
if (typeof userInput === 'string') {
  userName = userInput
}
function generateString( message: string, code: number ): never {
  throw { message, errorCode: code }
}

generateString('an error occurred', 500)
