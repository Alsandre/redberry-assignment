export function priceFormatter(price: number, delimeter: string = " "): string {
  if (price < 1000) return "" + price + " ₾";
  else {
    let chunkedPrice: string[] = [];
    while (price >= 1000) {
      let reminder = price % 1000;
      if (reminder % 1000 === 0) {
        chunkedPrice.push("000");
        price = price / 1000;
      } else {
        chunkedPrice.push(reminder.toString().padStart(3, "0"));
        price = (price - (price % 1000)) / 1000;
      }
      if (price < 1000) chunkedPrice.push("" + price);
    }
    return (
      chunkedPrice
        .reverse()
        .reduce((acc, priceChunk) => `${acc}${delimeter}${priceChunk}`) + " ₾"
    );
  }
}
