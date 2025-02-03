import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries, 
     use environment varibales,
     interact witj a databse,
     process confidential information
    `
  );
  return "server result";
};
