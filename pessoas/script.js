
fetch('https://randomuser.me/api/?results=25')
.then((result)=>{
    return result.json()
})
.then((data)=>{
    const lista = document.querySelector('.list')
    data.results.forEach(element => {
        lista.insertAdjacentHTML('beforeend','<li class="list-item"><img src="'+element.picture.large+'" alt=""><div><h1>'+element.name.first + ' '+ element.name.last+'</h1><p>'+element.location.street.number + ' ' + element.location.street.name+'</p></div></li>')
    });
})