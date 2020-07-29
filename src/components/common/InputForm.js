import React, {Component} from 'react';
import InputField from './InputField';

const FormInput = ({field, onChange, onBlur}) => {
    if (!field) {
        return null;
    }
    return (
        <div>
            <InputField
                label = {field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                onChange={e => onChange(e, field)}
                onBlur={e => onBlur(e, field)}
                errorMessage={field.errorMessage}
            />
        </div>
    );
};

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const {fields, onChange, onBlur} = this.props;
        const inputFields = fields.map((field) => {
            return <FormInput field={field} key={field.name} onChange={onChange} onBlur={onBlur} />;
        });
        return (
            <>
                {inputFields}
            </>
        );
    }
}

export default InputForm;