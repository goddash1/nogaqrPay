window.function = function (body_input) {

// const glideamount = in_amount.value;
// const gliderecip = String(in_recip.value) ?? "";
const body = String(body_input.value) ?? "";

const secret = 'cQAZUlyfgxojkRgPpLOZ6RZU4xb4nfx8WkCcKTbjxNz4EGlVOZndpnRQXaBnFw6ec5SSyllM63H8JxChGxwQEtjyUHKVQQTjAD3k7GdjCFnQKxHAa1NCVyqUR0ZcCZJnbGnAhiyYfSBWWUemMaJ4H90IKUsfeB16XprfIb9PsGnAJmNY2y9PPNtAXOKI8GR9MvPnLjbrYYxi7vNkaI1Slju2PywZgGYcEqcGfiHJHvlmDAXAF3YEVnLUb5tqmmly';
// const data = {
//   currencyID: 3,
//   amount: glideamount,
//   recipientTypeID: 1,
//   recipient: `${glideorder}`,
//   clientOrderID: `${gliderecip}`,
//   webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
// };
// const data = {
//   amount: glideamount,
//   currencyID: 3,
//   typeID: 4,
//   clientOrderID: gliderecip,
//   TTL: 999,
//   webhookURL: "https://webhook.site/c7e3b35d-3e0b-42e7-a46b-e51b98e865c4",
//   extra: {
//     comment: "KrossBeri",
//     allowedPaymentTypeIDs: [
//       3
//     ],
//     allowedPaymentSystemIDs: [
//       1,
//       2
//     ],
//     allowedCardIssuerIDs: [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8
//     ],
//     failedRedirectURL: "https://krossberi.glide.page/dl/failure",
//     successRedirectURL: "https://krossberi.glide.page/dl/success"
//   }
// }

//const raw = JSON.stringify(body_input);
const hash = CryptoJS.HmacSHA512(body, secret).toString();

return hash;

}
