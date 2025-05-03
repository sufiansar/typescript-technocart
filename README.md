____type assertion
let anything: any;


(anything as string) = "NLWD";
(anything as number) = 222;


const convertedValue = (
  value: string | number
): string | number | undefined => {
  if (typeof value === "string") {
    const convertedString = parseFloat(value) * 1000;
    return convertedString;
  } else if (typeof value === "number") {
    return value * 1000;
  }
};


const result = convertedValue(1000) as number;
export {};


