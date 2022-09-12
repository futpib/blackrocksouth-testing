import { action, computed, makeAutoObservable, observable } from 'mobx';

export type InputValidator = (value: string) => undefined | string;

export interface InputOptions {
    validator?: InputValidator;
}

export class Input {
    private _validator: InputValidator = () => undefined;

    value = '';
    pristine = true;

    constructor({
        validator,
    }: InputOptions = {}) {
        makeAutoObservable(this, {
            value: observable,
            pristine: observable,
            validationError: computed,
            setValue: action.bound,
        });

        this._validator = validator ?? this._validator;
    }

    get validationError() {
        return this._validator(this.value);
    }

    setValue(newValue: string) {
        this.pristine = false;
        this.value = newValue;
    }
}
