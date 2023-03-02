const Billionaire = async(category,dataLoad)=>{
    const res = await fetch(`https://forbes400.onrender.com/api/forbes400/industries/${category}`);
    const bilData = await res.json();
    disPlayBillionaire(bilData,dataLoad);
}


disPlayBillionaire = (bildata,dataLoad) =>{
        const BilContainer = document.getElementById('bil-container');
        const getShowMore = document.getElementById('showMore')
        if(dataLoad && bildata.length > 10){
            getShowMore.classList.remove('hidden');
            getShowMore.classList,add('flex')
        }else{
            getShowMore.classList.add('hidden');
            getShowMore.classList.remove('flex');
        }
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
    loadingOnProcess(false);
}


const loadingOnProcess = (isLoading) =>{
    const getSpinner = document.getElementById('spinner');
    if(isLoading){
        getSpinner.classList.remove('hidden')
    }else{
        getSpinner.classList.add('hidden');
    }
}



document.getElementById('search-button').addEventListener('click', ()=>{
    loadingOnProcess(true);
    const inputValue = document.getElementById('search-field').value;
    const setCategory = document.getElementById('category');
    const setSubCategory = document.getElementById('sub-category');
    setCategory.innerText = inputValue;
    setSubCategory.innerText = inputValue;
    Billionaire(inputValue,10);
})


document.getElementById('showMore').addEventListener('click', ()=>{
    loadingOnProcess(true);
    const inputValue = document.getElementById('search-field').value;
    const setCategory = document.getElementById('category');
    const setSubCategory = document.getElementById('sub-category');
    setCategory.innerText = inputValue;
    setSubCategory.innerText = inputValue;
    Billionaire(inputValue);
})







