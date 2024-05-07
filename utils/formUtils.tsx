import React from "react";
import { ZodIssue } from "zod";

export const ErrorMessages = ({ errors }: { errors: string[] }) => {
    if (errors.length === 0) return null;

    const text = errors.join(", ");

    return <div className="text-red-600 peer">{text}</div>;
};

export const findErrors = (fieldName: string, errors: ZodIssue[]) => {
    return errors
        .filter((item) => {
            return item.path.includes(fieldName);
        })
        .map((item) => item.message);
};
