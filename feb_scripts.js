const btn = document.querySelector('#btn');
let finalResult;

btn.addEventListener('click', function(){ //Her tilføjer jeg en function til min knap - som er en if else function som leder efter den værdi mit input har
    result = document.querySelector('#postnummer').value;

    
   if (result >= 1000 && result <= 2999) { //Her tjekker den om værdien som mit input er true, ellers forsætter den nedad indtil den finder det.
       finalResult = 'Københavns Kommune, Frederiksberg og omegn'
       
} else if (result >= 3000 && result <= 3699) {
    finalResult = 'Nordsjælland'
    
} else if (result >= 3700 && result <= 3799) {
    finalResult = 'Bornholm'
    
} else if (result >= 3800 && result <= 3899) {
    finalResult = 'Færøerne'
    
} else if (result >= 3900 && result <= 3999) {
    finalResult = 'Grønland'
    
} else if (result >= 4000 && result <= 4999) {
    finalResult = 'Østsjælland, Midt- og Vestsjælland, Sydsjælland, Lolland-Falster og Møn'
    
} else if (result >= 5000 && result <= 5999) {
    finalResult = 'Fyn og øerne'
    
} else if (result >= 6000 && result <= 6999) {
    finalResult = 'Sønderjylland'
    
} else if (result >= 7000 && result <= 7999) {
    finalResult = 'Midtjylland'
    
} else if (result >= 8000 && result <= 8999) {
    finalResult = 'Østjylland'
    
} else if (result >= 9000 && result <= 9999) {
    finalResult = 'Nordjylland'
    
} else{ //Hvis min if else function ikke finder noget som passer, så får brugeren en fejl 40.
    finalResult = ' Fejl 40 - Prøv igen.'
}

   document.getElementById('resultBox').innerHTML = finalResult; //Her udskriver den resultaten i min div til sidst.
})