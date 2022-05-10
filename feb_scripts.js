const btn = document.querySelector('#btn');
let finalResult;

btn.addEventListener('click', function(){ //Her tilføjer jeg en function til min knap - som er en if else function som leder efter den værdi mit input har

   if (document.querySelector('#postnummer').value >= 1000 && (document.querySelector('#postnummer').value) <= 2999) { //Her tjekker den om værdien som mit input er true, ellers forsætter den nedad indtil den finder det.
       finalResult = 'Københavns Kommune, Frederiksberg og omegn'
       
} else if (document.querySelector('#postnummer').value >= 3000 && (document.querySelector('#postnummer').value) <= 3699) {
    finalResult = 'Nordsjælland'
    
} else if (document.querySelector('#postnummer').value >= 3700 && (document.querySelector('#postnummer').value) <= 3799) {
    finalResult = 'Bornholm'
    
} else if (document.querySelector('#postnummer').value >= 3800 && (document.querySelector('#postnummer').value) <= 3899) {
    finalResult = 'Færøerne'
    
} else if (document.querySelector('#postnummer').value >= 3900 && (document.querySelector('#postnummer').value) <= 3999) {
    finalResult = 'Grønland'
    
} else if (document.querySelector('#postnummer').value >= 4000 && (document.querySelector('#postnummer').value) <= 4999) {
    finalResult = 'Østsjælland, Midt- og Vestsjælland, Sydsjælland, Lolland-Falster og Møn'
    
} else if (document.querySelector('#postnummer').value >= 5000 && (document.querySelector('#postnummer').value) <= 5999) {
    finalResult = 'Fyn og øerne'
    
} else if (document.querySelector('#postnummer').value >= 6000 && (document.querySelector('#postnummer').value) <= 6999) {
    finalResult = 'Sønderjylland'
    
} else if (document.querySelector('#postnummer').value >= 7000 && (document.querySelector('#postnummer').value) <= 7999) {
    finalResult = 'Midtjylland'
    
} else if (document.querySelector('#postnummer').value >= 8000 && (document.querySelector('#postnummer').value) <= 8999) {
    finalResult = 'Østjylland'
    
} else if (document.querySelector('#postnummer').value >= 9000 && (document.querySelector('#postnummer').value) <= 9999) {
    finalResult = 'Nordjylland'
    
} else{ //Hvis min if else function ikke finder noget som passer, så får brugeren en fejl 40.
    finalResult = ' Fejl 40 - Prøv igen.'
}

   let result = finalResult;
   document.getElementById('resultBox').innerHTML = result; //Her udskriver den resultaten i min div til sidst.
})