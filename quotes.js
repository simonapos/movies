const url = "https://quoteapi.pythonanywhere.com/random";
const proxyUrl = "https://api.allorigins.win/get?url=";

const updateQuote = (quote) =>
  (document.getElementById("quote").innerHTML = quote);

export const getQuote = async () => {
  try {
    updateQuote("Loading...");
    const res = await fetch(proxyUrl + url);
    const data = await res.json();
    const content = JSON.parse(data.contents);

    if (content && content.Quotes && content.Quotes.length > 0) {
      updateQuote(content.Quotes[0].quote);
    } else {
      updateQuote("No quotes found");
    }
  } catch (error) {
    console.error({ error });
    updateQuote("Sorry, no quote today :( Try again later");
  }
};