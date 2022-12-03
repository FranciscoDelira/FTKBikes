// document.addEventListener('DOMContentLoaded', () => {
//     fetchData()
// })

// const fetchData = async () => {
//     try {
//         const res = await fetch('api.json')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
        
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
         traerDatos()
         console.log("correcto");
     })

function traerDatos(){
    console.log("dentro funcion");
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','api.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
}

// function traerDatos(){
//     const xhtt = new XMLHttpRequest();
//     xhtt.open('GET', 'api.json', true);
//     xhtt.send();

//     xhtt.onreadystatechange = function(){
//         if(this.readyState==4 && this.status==200){
//             let datos = JSON.parse(this.responseText);
//             console.log(datos);
//         }
//     }
// }