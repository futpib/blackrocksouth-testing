import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx';
import { postNames } from '../client';
import { Input } from './Input';

function nameValidator(name: string) {
    if (!name.trim()) {
        return "Пожалуйста заполните.";
    }

    return undefined;
}

export class NameForm {
    readonly firstName = new Input({
        validator: nameValidator,
    });

    readonly lastName = new Input({
        validator: nameValidator,
    });

    submitting = false;
    submitted = false;

    constructor() {
        makeAutoObservable(this, {
            submitting: observable,
            submitted: observable,
            validationErrors: computed,
            firstValidationError: computed,
            values: computed,
            submit: action.bound,
        });
    }

    get validationErrors() {
        return [
            this.firstName,
            this.lastName,
        ].flatMap(({ validationError }) => {
            if (validationError) {
                return [ validationError ];
            }

            return [];
        });
    }

    get firstValidationError(): undefined | string {
        return this.validationErrors[0]
    }

    get values() {
        return {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
        };
    }

    async submit() {
        if (this.submitting) {
            return;
        }

        if (this.firstValidationError) {
            this.firstName.pristine = false;
            this.lastName.pristine = false;
            return;
        }

        runInAction(() => {
            this.submitting = true;
        });

        try {
            await postNames(this.values);
            runInAction(() => {
                this.submitted = true;
            });
        } finally {
            runInAction(() => {
                this.submitting = false;
            });
        }
    }
}
