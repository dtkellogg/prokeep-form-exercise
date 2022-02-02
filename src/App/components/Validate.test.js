//  Build a unit test for the form - testing both a valid login and an invalid login. you are free to use whatever testing stack you like.
import Validate from './Validate.js'
const addToast = jest.fn(() => true)


const validUser = {
  email: 'test@example.com',
  password: '*'
}

const invalidUserEmail = {
  email: 'test.com',
  password: '*'
}

const invalidUserPassword = {
  email: 'test@example.com',
  password: ''
}


describe('Testing if valid/invalid data works as expected', () => {
  test('Form is submitted with a valid email and password', () => {
    expect(Validate(validUser.email, validUser.password, addToast)).toBe(true)
  })
  test('Form is submitted with an invalid email', () => {
    expect(Validate(invalidUserEmail.email, invalidUserEmail.password, addToast)).toBe(false)
  })
  test('Form is submitted with an invalid password', () => {
    expect(Validate(invalidUserPassword.email, invalidUserPassword.password, addToast)).toBe(false)
  })
})