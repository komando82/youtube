const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('checking Name...')

describe('Checking Names', () => {
	beforeEach(() => nameCheck())

	test('User is Jeff', () => {
		const user = 'Jeff'
		expect(user).toBe('Jeff')
	})

	test('User is Karen', () => {
		const user = 'Karen'
		expect(user).toBe('Karen')
	})

	test('User is Tom', () => {
		const user = 'Tom'
		expect(user).toBe('Tom')
	})
})


// toBe
test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4)
})

// not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5)
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of to toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy()
})

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(0)).toBeFalsy()
})

// toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(undefined)).toBeFalsy()
})

// toBeTruthy
test('Should be truthy', () => {
	expect(functions.checkValue('true')).toBeTruthy()
})


// toEqual
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({ 
		firstName: 'Brad', 
		lastName: 'Traversy' 
	})
})

// Less than and
test('Should be under 1600', () => {
	const load1 = 800
	const load2 = 700
	expect(load1 + load2).toBeLessThan(1600)
})

// Less than or Equal
test('Should be under 1600', () => {
	const load1 = 800
	const load2 = 800
	expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i)
})

// Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin']
	expect(usernames).toContain('admin')
})

// Working with async data - Promise
test('User fatched name should be Leanne Graham', () => {
	// check docs on this
	expect.assertions(1)
	return functions.fetchUser()
		.then(data => {
			expect(data.name).toEqual('Leanne Graham')
		})
})

// Working with async data - Async Await
test('User fatched name should be Leanne Graham', async () => {
	// check docs on this
	expect.assertions(1)
	const data = await functions.fetchUser()
	expect(data.name).toEqual('Leanne Graham')
})





