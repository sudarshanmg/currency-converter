const submitBtn = document.getElementById("submitBtn");
const replaceBtn = document.getElementById("replaceBtn");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c1Opt = document.getElementById("c1opt");
const c2Opt = document.getElementById("c2opt");

const api_key = "8590a3b955694f2c22a4ebe0";
const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/`;

const rateExchanger = async () => {
  const response = await fetch(
    url + `${c1Opt.value}/${c2Opt.value}/${c1.value}`,
    {
      method: "GET",
      "Content-type": "application/json",
    }
  );

  const data = await response.json();

  c2.value = data.conversion_result;
};

replaceBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let opt1 = c1Opt.value;
  c1Opt.value = c2Opt.value;
  c2Opt.value = opt1;

  c1.value = c2.value;
  c2.value = null;
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  rateExchanger();
});
