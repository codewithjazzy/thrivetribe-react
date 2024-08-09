import * as yup from "yup"



const phoneRegex = /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
export const phone = yup.string().matches(phoneRegex, "Please enter a valid US phone number").nullable();

export const email = yup.string().email("Please enter a valid email address");

export const website = yup.string().url("Please enter a valid URL").nullable();

export const password = yup.string().required("Password is required").min(8, "Password must be at least 8 characters long");

export const confirmPassword = yup.string().required("Please confirm your password").oneOf([yup.ref('password')], "Passwords must match")

