export default async function getRevolvingText() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][revolvingText][populate][chip][populate]=arrow"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getChatWithDocumentsHeading() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][chatWithDocumentsHeading][populate][fields][0]=title"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInstantAnswersWithCitedSources() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][heroHeader][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTryForFreeButton() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][tryForFreeButton][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFileTypes() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][fileTypes][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getHeroBackgroundImage() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.hero][populate][heroImg][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
