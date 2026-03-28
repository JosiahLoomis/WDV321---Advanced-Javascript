export async function fetchData() {
  // Fetch data using the Fetch API
  // Be sure to handle errors
  //   This does not mean updating the UI with error messages
  //   Instead, throw() an error that can be captured in the calling code
  // Return the data to the calling function as a JSON object
  console.log("getting data");

  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("data retrived");
    return data;

  } catch (error) {
    throw error;
  }
}