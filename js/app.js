const elAsosiy = document.getElementById('asosiy')
const elSoz = document.getElementById('soz')
const elOrniga = document.getElementById('orniga')
const elBtn = document.getElementById('btn')
const elNatija = document.getElementById('natija')

elBtn.addEventListener('click' , () => {
    const elValue1 = elAsosiy.value
    const elValue2 = elSoz.value
    const elValue3 = elOrniga.value

    elNatija.textContent = elValue1.replaceAll(elValue2, elValue3)
})

