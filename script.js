

const home = document.querySelector('#home')
counter = 0

const counterDiv = document.createElement('div')
counterDiv.style.padding = '5px'
counterDiv.style.backgroundColor = 'white'
counterDiv.style.color = 'black'
counterDiv.style.width = 'max-content'
counterDiv.style.position = 'absolute'
counterDiv.style.top = '0px'
counterDiv.style.left = '0px'


let counterContent = document.createTextNode(`Experience: ${counter}`)
counterDiv.appendChild(counterContent)
home.appendChild(counterDiv)




home.addEventListener('click', (e)=>{
    
    const div = document.createElement('div')
    div.style.backgroundColor = 'red'
    div.style.width= 'max-content'
    div.style.position = 'absolute'
    div.style.top = `${e.y}px`
    div.style.left = `${e.x}px`
    div.id = `${counter}`
    div.style.padding = '4px'
    div.style.borderRadius = "50%"
    

    setTimeout(()=>{
        div.remove()
    }, 300)


    
    const neContent = document.createTextNode("+3xp")
    div.appendChild(neContent)


    home.appendChild(div)

    counter += 3

    console.log(counter)
    
    const counterDiv = document.createElement('div')
    counterDiv.style.padding = '5px'
    counterDiv.style.backgroundColor = 'white'
    counterDiv.style.color = 'black'
    counterDiv.style.width = 'max-content'
    counterDiv.style.position = 'absolute'
    counterDiv.style.top = '0px'
    counterDiv.style.left = '0px'


    let counterContent = document.createTextNode(`Experience: ${counter}`)
    counterDiv.appendChild(counterContent)
    home.appendChild(counterDiv)
   

})




const character = 
    [
        { job: "ASSASSINS", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e1511d4d93a84b836844c77b4ff96b1cf65f4f8d-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: true, name:"AKALI", title:"The Rouge Assassin" },
        { job: "FIGHTERS", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/651b0a4388dffbb709588546d7d73fd1a4e5b45d-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: false, name:"YASUO", title:"The Unforgiven" },
        { job: "MAGES", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9872a60add3d215d217eda67e08a07ef7191ab89-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: false, name:"LUX", title:"The Lady of Luminosity" },
        { job: "MARKSMEN", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fce8a3c7b1267ce428530fa845dd3f970772d5cd-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: false, name:"Jinx", title:"The Loose Cannon" },
        { job: "SUPPORTS", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1824a47af762aeac9d88d3bae5a4eb2ece928f0d-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: false, name:"THRESH", title:"The Chain Warden" },
        { job: "TANKS", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/019898f21e749a5f6f71b609714d87f3fe084df5-220x220.png?auto=format&fit=crop&q=80&h=192&w=192&crop=center", character:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=1384", switch: false, name:"LEONA", title:"The Radiant Dawn" }
    ]




