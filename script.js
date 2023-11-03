let api = new XMLHttpRequest();
api.open("GET", "https://restcountries.com/v3.1/all", true);
api.send();
api.onload = function () {
  let data = api.response;
  let result = JSON.parse(data);

  //a. Get all the countries from Asia continent /region using Filter function

  let res = result.filter((reg)=> reg.region === "Asia");
  console.log("==> A.) ")
  res.map((_name) => console.log(`${_name.name.common}`))

  //b. Get all the countries with a population of less than 2 lakhs using Filter function
  console.log("==> B.)")
   let people = result.filter(peo => peo.population > 200000 )
   people.map(peo => console.log(peo.name.common))

  //c.Print the following details name, capital, flag, using forEach function
  console.log("==> C.)")
  result.forEach((data)=> console.log(`${data.name.common}, ${data.capital}, ${data.flags.png}`))

  //d. Print the total population of countries using reduce function
  console.log("==> D.)");
  let total = result.map((peo) => peo.population);
  let totalPopulation = total.reduce((pre, val) => pre + val);
  console.log(`Total Population = ${totalPopulation}`);

  //e. Print the country that uses US dollars as currency.
  console.log("==> E.)");
const dollar = result.filter((value)=> value.currencies && value.currencies.USD)
dollar.forEach((doll)=> console.log(doll.name.common))
}