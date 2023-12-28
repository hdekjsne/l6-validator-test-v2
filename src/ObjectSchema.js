export default class {
	constructor() {
		this.customValidator = {};
	}

	shape(validatorObj) {
		this.customValidator = validatorObj;
		return this;
	}

	isValid(value) {

		function validateDeep(obj, validator) {
			const validations = [];
			for (const key of Object.keys(obj)) {
				if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
					validations.push(validateDeep(obj[key], validator[key]));
				} else validations.push(validator[key].isValid(obj[key]));
			}
			return !validations.includes(false);
		}

		return validateDeep(value, this.customValidator);
	}
}
