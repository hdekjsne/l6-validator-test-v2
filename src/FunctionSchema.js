export default class {
	constructor() {
		this.props = 'none';
		this.expectedValue = 'none';
	}

	callWith(props) {
		this.props = props;
		return this;
	}

	expect(result) {
		this.expectedValue = result;
		return this;
	}

	isValid(value) {
		if (typeof value !== 'function') return false;
		const result = value.call(this.props);
		return this.expectedValue === 'none'
			? true
			: result === this.expectedValue;
	}
}