import Location from "../models/Location.js";
import Expertise from "../models/Expertise.js";
import Treatment from "../models/Treatment.js";
import Language from "../models/Language.js";
import Dialect from "../models/Dialect.js";


export const getTherapistSignup = async (req, res) => {
    try {
        const expertise = await Expertise.find();
        const treatments = await Treatment.find();
        const languages = await Language.find();
        const dialects = await Dialect.find();
        const locations = await Location.find();
        const response = {
            expertise,
            treatments,
            languages,
            dialects,
            locations
        };
        res.json({ message: "Therapist signup", response })
    } catch (error) {
        console.error('Error loading therapist signup page:', error);
        res.status(500).send('An error occurred while loading the signup page.');
    }
};
