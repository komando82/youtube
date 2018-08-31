// react needs requestAnimationFrame
// jest >= 22.* seams NOT to need this file in jest.config.js
global.requestAnimationFrame = callback => {
	setTimeout(callback, 0)
}