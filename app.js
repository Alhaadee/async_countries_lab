document.addEventListener("DOMContentLoaded",()=>{

    const list = document.querySelector("#countries");
    const population = document.querySelector("h2");

    const fetchCountries = async ()=>{
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        const countryNames =[];
        
        jsonData.forEach((country)=>countryNames.push(country.name))
        const countryOfficialName = countryNames.map((name_array)=>name_array.official)
        
        // countryOfficialName.forEach((name)=>{
        // const countryLi = document.createElement("li");
        // countryLi.textContent = name;
        // list.appendChild(countryLi);
        // })

        const countryImages =[];
        jsonData.forEach(country => countryImages.push(country.flags))
        const countryPngImages = countryImages.map((flagsObject)=>flagsObject.png)


        for (let i = 0; i < 250; i++) {
            const countryLi = document.createElement("li")
            const countryImg = document.createElement("img")
            countryImg.src = countryPngImages[i];
            countryLi.textContent = countryOfficialName[i]
            countryLi.append(countryImg)
            list.appendChild(countryLi)
        }

        const totalPopulation = jsonData.reduce((reducer, country)=> reducer + country.population, 0)
        console.log(totalPopulation);
        population.textContent = "Total Population = " + totalPopulation
    }
    fetchCountries();
})
