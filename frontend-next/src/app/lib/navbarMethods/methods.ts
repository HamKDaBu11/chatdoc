export default async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNavbarData() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.navbar][populate]=*"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNavbarImage() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.navbar][populate][logo][populate]=logoImg&populate[PageContent][on][components.navbar][populate][logo][fields][1]=logoTitle"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNavbarBtnImage() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.navbar][populate][button][populate]=btnImage&populate[PageContent][on][components.navbar][populate][button][fields][0]=title&populate[PageContent][on][components.navbar][populate][button][fields][1]=url"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getNavbarDropdownItems() {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.navbar][populate][dropdown][populate][dropdownItem][fields][0]=title&populate[PageContent][on][components.navbar][populate][dropdown][populate][dropdownItem][fields][1]=url"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getStartedButton() {
      const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(
      baseUrl +
        "/api/chat-doc?populate[PageContent][on][components.navbar][populate][getStartedButton][populate][fields][0]=title&populate[PageContent][on][components.navbar][populate][getStartedButton][populate][fields][1]=url"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
