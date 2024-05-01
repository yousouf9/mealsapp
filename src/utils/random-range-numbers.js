export const getRandomInt = (start, end) => {
  // Check if start and end are valid numbers
  if (typeof start !== "number" || typeof end !== "number" || start >= end) {
    throw new Error(
      "Invalid input. Please provide valid numbers with start < end."
    );
  }

  // Calculate the range (inclusive)
  const range = end - start + 1;

  // Generate random integer within the range
  const randomInt = Math.floor(Math.random() * range) + start;

  return randomInt;
};
