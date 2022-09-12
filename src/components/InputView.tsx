import { observer } from 'mobx-react-lite';
import { ComponentProps } from 'react';
import { Input as InputModel } from '../models/Input';
import { Input } from './Input';

export type InputViewProps = Omit<ComponentProps<typeof Input>, 'value' | 'onChange'> & {
    inputModel: InputModel,
}

export const InputView = observer(({
    inputModel,
    ...props
}: InputViewProps) => (
    <Input
        invalid={!inputModel.pristine && Boolean(inputModel.validationError)}
        value={inputModel.value}
        onChange={inputModel.setValue}
        {...props}
    />
))
