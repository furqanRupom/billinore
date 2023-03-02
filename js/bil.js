const Billionaire = async(category)=>{
    const res = await fetch(`https://forbes400.onrender.com/api/forbes400/industries/${category}`);
    const bilData = await res.json();
    disPlayBillionaire(bilData.slice(1,10));
}


disPlayBillionaire = (bildata) =>{
        const BilContainer = document.getElementById('bil-container');
        bildata.forEach(everyBillionaire =>{

            console.log(everyBillionaire);

        const {name,squareImage} = everyBillionaire.person
        const {source,countryOfCitizenship,state,privateAssetsWorth,finalWorth,rank} = everyBillionaire;


        // console.log(everyBillionaire);

        BilContainer.innerHTML += `
        <div   class="bg-gray-300 rounded shadow-md p-5">
                <h1 class="text-2xl font-bold text-center py-4">${name}</h1>

                <div class="grid grid-cols-2 justify-items-center items-center gap-2 py-5">
                    <div>
                        <img class="rounded-2xl" src="${squareImage}" alt="">
                        <p class="text-lg py-2">Source: <span class="font-bold">${source}</span></p>
                    </div>
                    <div class="flex flex-col space-x-1">
                        <p class="text-sm">CitizenShip: ${countryOfCitizenship}</p>
                        <p class="text-sm">state: ${state ? state : 'state is not found'}</p>
                        <p class="text-sm">TotalShares: ${privateAssetsWorth}</p>
                        <p class="text-sm">SharePrize: ${finalWorth}</p>

                    </div>
                </div>

            </div>
        `
    });
}



document.getElementById('search-button').addEventListener('click', ()=>{
    const inputValue = document.getElementById('search-field').value;
    const setCategory = document.getElementById('category');
    const setSubCategory = document.getElementById('sub-category');
    setCategory.innerText = inputValue;
    setSubCategory.innerText = inputValue;
    Billionaire(inputValue);
})







