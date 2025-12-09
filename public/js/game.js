const yN = document.querySelector('.y-n')
const eN = document.querySelector('.e-n')

yN.addEventListener('click', ()=>{
    const div = document.querySelector('.distroy-r')
    
   
    yN.classList.add('active')
    
    eN.classList.remove('active')
    div.innerHTML =

       ` <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d79ab89872173d65758e134c07ef0645f7a0e504-3288x2100.png?auto=format&fit=fill&q=80&w=1630" alt="">
        </div>

        <div>
            <div class = "sh"> 
                YOUR NEXUS
            </div>
            <div class = "c">
                Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.
            </div>
        </div>`
    

        console.log('clicked')
})



eN.addEventListener('click', ()=>{
   
    yN.classList.remove('active')
    
    eN.classList.add('active')
    const div = document.querySelector('.distroy-r')
    div.innerHTML =

       ` <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5bf342fa15ae8a7cc0eda852fdb0361c5d7dcbbf-3288x2100.png?auto=format&fit=fill&q=80&w=1133" alt="">
        </div>

        <div>
            <div class = "sh"> 
               ENEMY NEXUS
            </div>
            <div class = "c">
                Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.
            </div>
        </div>`
    console.log('clicked')
})


const tU = document.querySelector('.tu')
const iN = document.querySelector('.in')


tU.addEventListener('click', ()=>{
    const div = document.querySelector('.path-r')
    
   
    tU.classList.add('active')
    
    iN.classList.remove('active')
    div.innerHTML =

        `   <div>
             <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/351bb454c18a5f55dc1d47ba5674e246bfaa171b-3288x2100.png?auto=format&fit=fill&q=80&w=1133" alt="">
            </div>

            <div>
                <div class="sh"> 
                    TURRETS
                </div>
                <div class="c">
                    Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage and charge ahead.
                </div>
            </div>`
    

        console.log('clicked')
})



iN.addEventListener('click', ()=>{
   
    tU.classList.remove('active')
    
    iN.classList.add('active')
    const div = document.querySelector('.path-r')
    div.innerHTML =

       ` <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c56d550aca55bcf28aeac0f2d9ecf35d7ff2c4f-3288x2100.png?auto=format&fit=fill&q=80&w=1133" alt="">
        </div>

        <div>
            <div class = "sh"> 
               INHIBITORS
            </div>
            <div class = "c">
                Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.
            </div>
        </div>`
    console.log('clicked')
})

const bn = document.querySelector('.bn')
const dr = document.querySelector('.dr')


bn.addEventListener('click', ()=>{
    const div = document.querySelector('.jungle-r')
    
   
    bn.classList.add('active')
    
    dr.classList.remove('active')
    div.innerHTML =

        `   <div>
                <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ed4bef5c2369044d76cf535e038b6c1f8d323f13-3288x2100.png?auto=format&fit=fill&q=80&w=1133" alt="">
            </div>

            <div>
                <div class="sh"> 
                    BARON NASHOR
                </div>
                <div class="c">
                    Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.
                </div>
            </div>`
    

        console.log('clicked')
})



dr.addEventListener('click', ()=>{
   
    bn.classList.remove('active')
    
    dr.classList.add('active')
    const div = document.querySelector('.jungle-r')
    div.innerHTML =

       ` <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1faaf44ebe07ec29900a21db0810b130f4777342-3288x2100.png?auto=format&fit=fill&q=80&w=1898" alt="">
        </div>

        <div>
            <div class = "sh"> 
               DRAKES

            </div>
            <div class = "c">
                Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are five Elemental Drakes and one Elder Dragon.



            </div>
        </div>`
    console.log('clicked')
})

const to = document.querySelector('.top')
const jung = document.querySelector('.jung')
const mid = document.querySelector('.mid')
const bot = document.querySelector('.bot')
const sup = document.querySelector('.sup')


to.addEventListener('click', ()=>{
   
    to.classList.add('active')
    jung.classList.remove('active')
    mid.classList.remove('active')
    bot.classList.remove('active')
    sup.classList.remove('active')
    
   
    const div = document.querySelector('.lane-r')
    div.innerHTML =

       `<div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fc8d0c8c803a8e91a1912df9054b3be90211a2d9-3288x2100.png?auto=format&fit=fill&q=80&w=1898" alt="">
        </div>

        <div>
            <div class="sh"> 
                TOP LANE
            </div>
            <div class="c">
                Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.
            </div>
        </div>`
    console.log('clicked')
})


jung.addEventListener('click', ()=>{
   
    to.classList.remove('active')
    jung.classList.add('active')
    mid.classList.remove('active')
    bot.classList.remove('active')
    sup.classList.remove('active')
    
   
    const div = document.querySelector('.lane-r')
    div.innerHTML =

       `<div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/eb84be329ef915096e908527267852ff26845bba-3288x2100.png?auto=format&fit=fill&q=80&w=1898" alt="">
        </div>

        <div>
            <div class="sh"> 
                JUNGLE
            </div>
            <div class="c">
                Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment an opponent lets their guard down.
            </div>
        </div>`
    console.log('clicked')
})


mid.addEventListener('click', ()=>{
   
    to.classList.remove('active')
    jung.classList.remove('active')
    mid.classList.add('active')
    bot.classList.remove('active')
    sup.classList.remove('active')
    
   
    const div = document.querySelector('.lane-r')
    div.innerHTML =

       `<div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/245d81d16cb5fef638753ce7d83e137a4d2aaca7-3288x2100.png?auto=format&fit=fill&q=80&w=1898" alt="">
        </div>

        <div>
            <div class="sh"> 
                MID LANE
            </div>
            <div class="c">
                Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.
            </div>
        </div>`
    console.log('clicked')
})


bot.addEventListener('click', ()=>{
   
    to.classList.remove('active')
    jung.classList.remove('active')
    mid.classList.remove('active')
    bot.classList.add('active')
    sup.classList.remove('active')
    
   
    const div = document.querySelector('.lane-r')
    div.innerHTML =

       `<div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/87489b0e450b3fa59e176a3189c61c8eb9092c78-3288x2100.png?auto=format&fit=fill&q=80&w=1898" alt="">
        </div>

        <div>
            <div class="sh"> 
                BOTTOM LANE
            </div>
            <div class="c">
                Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.
            </div>
        </div>`
    console.log('clicked')
})


sup.addEventListener('click', ()=>{
   
    to.classList.remove('active')
    jung.classList.remove('active')
    mid.classList.remove('active')
    bot.classList.remove('active')
    sup.classList.add('active')
    
   
    const div = document.querySelector('.lane-r')
    div.innerHTML =

       `<div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ee41cd027bf8af85bebc07c8480b1304b793fc1e-3288x2100.png?auto=format&fit=fill&q=80&w=1686" alt="">
        </div>

        <div>
            <div class="sh"> 
                SUPPORT
            </div>
            <div class="c">
                Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.
            </div>
        </div>`
    console.log('clicked')
})



const fist = document.querySelector('.fist')
const coin = document.querySelector('.coin')
const fire = document.querySelector('.fire')

fist.addEventListener('click', ()=>{
    const render = document.querySelector('.render-content')
    fist.classList.add('active')
    coin.classList.remove('active')
    fire.classList.remove('active')
    render.innerHTML = `
        <video autoplay muted controls loop>
            <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8d49feeb42c45ac59b1d6cc1cae71d64ce0089f7.webm" type="video/webm">
        </video>
    `

    const earn = document.querySelector('.earn')
    const eDis = document.querySelector('.e-dis')
    earn.innerHTML = `EARN EXPERIENCE`
    eDis.innerHTML = `When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defense structures.`
    
})

coin.addEventListener('click', ()=>{
    const render = document.querySelector('.render-content')
    fist.classList.remove('active')
    coin.classList.add('active')
    fire.classList.remove('active')
    render.innerHTML = `
        <video autoplay muted controls loop>
            <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/9b52333c4284f3e8e95a36981ba76c11820e0ac5.webm" type="video/webm">
        </video>
    `
    const earn = document.querySelector('.earn')
    const eDis = document.querySelector('.e-dis')
    earn.innerHTML = `EARN GOLD`
    eDis.innerHTML = `Gold is the in-game currency to buy items for your champion. Earn gold by killing enemy units and champions, assisting in a kill, destroying defense structures, and equipping gold income items.`
    
    
})

fire.addEventListener('click', ()=>{
    const render = document.querySelector('.render-content')
    fist.classList.remove('active')
    coin.classList.remove('active')
    fire.classList.add('active')
    render.innerHTML = `
        <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7c790e73c1d817e57c174d4c4cdceb87d061e5b6-2560x1440.png?auto=format&fit=fill&q=80&w=2368"/>
    `
    const earn = document.querySelector('.earn')
    const eDis = document.querySelector('.e-dis')
    earn.innerHTML = `SHOP`
    eDis.innerHTML = `The Shop is where you can buy and sell items with gold you’ve earned. It can only be accessed while you are at the Fountain.`
    
    
})


const abil = document.querySelector('.abli')
const summoner = document.querySelector('.summoner')
const item = document.querySelector('.item')

abil.addEventListener('click', ()=>{
    abil.classList.add('active')
    summoner.classList.remove('active')
    item.classList.remove('active')
    
    const render = document.querySelector('.abilities-r')

    render.innerHTML = `
        <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0ba11ec8e7981f3b482e40cacd5780253d1f3bd3-1806x372.png?auto=format&fit=fill&q=80&w=1666" alt="">
        </div>
        <div>Abilities</div>
        <div>Most champions have a unique kit made up of five abilities: a Passive, three Basics, and an Ultimate. These abilities are mapped to the Q, W, E, and R keys.</div>
    `


})

summoner.addEventListener('click', ()=>{
    abil.classList.remove('active')
    summoner.classList.add('active')
    item.classList.remove('active')
    
    const render = document.querySelector('.abilities-r')

    render.innerHTML = `
        <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3edf5b4e32d38eaab45eda9bdef7147703cf38d4-1806x372.png?auto=format&fit=fill&q=80&w=1384" alt="">
        </div>
        <div>Summoner Spells</div>
        <div>Summoner spells are abilities with unique effects that champions can use. They are mapped to the D and F keys. There are many spells, but a few commonly used ones are Flash, Teleport, Smite, and Ignite.</div>
    `



})

item.addEventListener('click', ()=>{
    abil.classList.remove('active')
    summoner.classList.remove('active')
    item.classList.add('active')
    
    const render = document.querySelector('.abilities-r')

    render.innerHTML = `
        <div>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fb1e69d96d9b5d2fb20cad10985345cd6c795eed-1806x372.png?auto=format&fit=fill&q=80&w=1370" alt="">
        </div>
        <div>items</div>
        <div>Items enhance your champion’s performance, like granting faster movement, improved damage, and reduced ability cooldowns. Unlike Trinkets, they require gold to purchase.</div>
    `
    


})




