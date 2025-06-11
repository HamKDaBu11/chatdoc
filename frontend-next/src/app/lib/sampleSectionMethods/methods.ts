export default async function getSampleTypes() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.sample-section][populate][sampleTypes][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSampleSectionHeading() {
    const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.sample-section][populate][sampleHeading][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export async function getSampleTypes() {
//   const baseUrl = "http://localhost:1337";
//   try {
//     const response = await fetch(
//       baseUrl +
//         "/api/chat-doc?populate[PageContent][on][components.sample-section][populate][sampleTypes][populate]=*"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getSampleLinks() {
//     const baseUrl = "http://localhost:1337";
//   try {
//     const response = await fetch(
//       baseUrl +
//         "/api/chat-doc?populate[PageContent][on][components.sample-section][populate][sampleTypes][populate][sampleLink][populate]=*"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getSampleHeader() {
//     const baseUrl = "http://localhost:1337";
//   try {
//     const response = await fetch(
//       baseUrl +
//         "/api/chat-doc?populate[PageContent][on][components.sample-section][populate][sampleTypes][populate][sampleHeader][populate]=*"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
