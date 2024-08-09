//import { yupResolver } from 'mantine-form-yup-resolver';
import * as yup from 'yup';

const phoneRegex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

export const validationSchema = object({
    email: yup.string().email("Please enter a valid email address"),
    phone: yup.string().matches(phoneRegex, "Please enter a valid US phone number").nullable(),
    website: yup.string().url("Please enter a valid URL").nullable(),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
    confirmPassword: yup.string().required("Please confirm your password").oneOf([yup.ref('password')], "Passwords must match")
});