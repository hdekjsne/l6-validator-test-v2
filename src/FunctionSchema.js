export default class {
	constructor() {
		this.context = {};
		this.expectedValue = 'none';
		this.args = [];
	}

	callWith(props) {
		this.context = props;
		return this;
	}

	arguments(args) {
		this.args = args;
		return this;
	}

	expect(result) {
		this.expectedValue = result;
		return this;
	}

	isValid(value) {
		if (typeof value !== 'function') return false;
		const result = value.call(this.context, this.args);
		return this.expectedValue === 'none'
			? true
			: result === this.expectedValue;
	}
}