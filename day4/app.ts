const add = (n1: number, n2: number): number => {
  return n1 + n2
}

const printResult = (num: number):void => {
  console.log(`Result ${num}`)
}

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2
  cb(result)
}

addAndHandle(5, 6, printResult)

let userInput: unknown
let userName: string

userInput = 'Andrew'
if (typeof userInput === 'string') {
  userName = userInput
}