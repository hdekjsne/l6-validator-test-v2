export default class {
	constructor() {
		this.spacesCheck = false;
	}

	hasSpaces() {
		this.spacesCheck = true;
		return this;
	}

	isValid(value) {
		console.log(this.spacesCheck);
		if (typeof value !== 'string') return false;
		if (this.spacesCheck && !value.includes(' ')) return false;
		return true;
	}
}
