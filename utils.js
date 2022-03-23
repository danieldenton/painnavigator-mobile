import React from "react";

export const snakify = (item) => {
    return item.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};