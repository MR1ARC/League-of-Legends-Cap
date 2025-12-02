// import { data } from "../home/script.js";

let data;


const cahmpians  = async () => {
    const allData = await fetch ( "https://ddragon.leagueoflegends.com/cdn/15.23.1/data/en_US/champion.json")
    const stData = await allData.json()
    data  = stData.data


}

const start = async()=>{
    await cahmpians()
    const chmapions = document.querySelector('.champions')
    Object.values(data).forEach((chmapion)=>{
        
        const div = document.createElement('div')
        div.className = 'image-box'
        const src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chmapion.name}_0.jpg`

        div.innerHTML = 

            `
                <img alt="" src = ${src} >

                <div class="name">
                    ${chmapion.name}
                </div>
            
            `
        

        chmapions.append(div)
    })


}

start()



