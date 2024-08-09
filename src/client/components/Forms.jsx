import { Textarea, TextInput } from "@mantine/core";


export function FormInput({ type, id, name, label, defaultValue }) {
    return (
        <div>       
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} defaultValue={defaultValue} />
        </div>
    );
};
//<FormInput type="" id="" name="" label="" required />


export function FormTextarea({ name, label, defaultValue }){
    return (
        <Textarea
            name={name}
            label={label}
            defaultValue={defaultValue}
            size="md"
            resize="vertical"
            autosize
            minRows={2}
            placeholder="Enter your text here"
        />
    );
}
//<FormTextarea id="" name="" label="" />
//       <TextInput
//  name={name}
//  label={label}
//  defaultValue={defaultValue}
//  size="md"
//  resize="vertical"
//  autosize
//  minRows={2}
//  placeholder="Enter your text here"
// />