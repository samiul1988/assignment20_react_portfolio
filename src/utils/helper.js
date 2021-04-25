// this function capitalizes first letter of a string and returns the whole string
export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};