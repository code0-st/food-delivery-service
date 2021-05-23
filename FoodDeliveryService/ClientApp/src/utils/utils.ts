import formatStringByPattern from "format-string-by-pattern";

export const formatPhone = (value: string) => {
    return formatStringByPattern('+7 (999) 999 99 99', value)
}