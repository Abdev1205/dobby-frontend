

const firstName = (fullName) => {
  // Split the full name by space
  const names = fullName.split(' ');

  // Return the first element (first name)
  return names[0];
}

export default firstName
