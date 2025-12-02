

function headerResize(){
    const width = window.innerWidth;
    const more = document.getElementById('more-drop-down');
    if (width < 1400){
        
    }

    // console.log(more.innerText)
    // console.log(more.innerHTML)
    // console.log(more.textContent)
}






window.addEventListener('resize', headerResize);
window.addEventListener('load', headerResize);


let data;


const cahmpians  = async () => {
    const allData = await fetch ( "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/en_US/champion.json")
    const stData = await allData.json()
    data  = stData.data


}




export {data}

