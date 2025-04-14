const express = require('express')
const app = express()
const port = 3000

const responseHtml = `<div>
  <h1>Heroes</h1>
  <ol>
    <li><a href='/heroes/all-might'>All Might</a></li>
    <li><a href='/heroes/endeavor'>Endeavor</a></li>
    <li><a href='/heroes/hawks'>Hawks</a></li>
    <li><a href='/heroes/best-jeanist'>Best Jeanist</a></li>
    <li><a href='/heroes/edgeshot'>Edgeshot</a></li>
    <li><a href='/heroes/mirko'>Mirko</a></li>
    <li><a href='/heroes/crust'>Crust</a></li>
    <li><a href='/heroes/kamui-woods'>Kamui Woods</a></li>
    <li><a href='/heroes/wash'>Wash</a></li>
    <li><a href='/heroes/yaroi-musha'>Yoroi Musha</a></li>
  </ol>
</div>`

const responseAllMight = {
  realName: 'Yagi Toshinori',
  heroName: 'All Might',
  gender: 'male',
  weight: '255',
  height: '220',
  power: {
    name: 'One For All ',
    description: 'Transferable and greatly increasing physical abilities',
  }
}

const responseEndeavor = {
  realName: 'Todoroki Enji',
  heroName: 'Flame Hero: Endeavor',
  gender: 'male',
  weight: '195',
  height: '118',
  power: {
    name: 'Hell Flame ',
    description: 'Allows its user to control fire',
  }
}

const responseHawks = {
  realName: 'Takami Keigo',
  heroName: 'Hawks',
  gender: 'male',
  weight: '',
  height: '172',
  power: {
    name: 'Rigid Wings',
    description: 'Manipulate the feathers of his wings with his mind, allowing him to detach them from his body to perform individual tasks and reattach them afterwards',
  }
}

const responseBestJeanist = {
  realName: 'Hakamada Tsunagu',
  heroName: 'Best Jeanist',
  gender: '',
  weight: '',
  height: '190',
  power: {
    name: 'Fiber Master',
    description: 'Allows its user to manipulate textile fibers at will',
  }
}

const responseEdgeshot = {
  realName: 'Kamihara Shinya',
  heroName: 'Edgeshot',
  gender: 'male',
  weight: '',
  height: '170',
  power: {
    name: 'Foldabody',
    description: 'Foldabody grants the user the ability to manipulate the thinness of their body as well as stretch their limbs.',
  }
}

const responseMirko = {
  realName: 'Usagiyama Rumi',
  heroName: 'Mirko',
  gender: 'female',
  weight: '',
  height: '',
  power: {
    name: 'Rabbit',
    description: "Rabbit gives Rumi functional rabbit characteristics like long ears, large, strong legs, and a fluffy tail. She also possesses a rabbit's survival instincts, which alert her to any nearby danger.",
  }
}

const responseCrust = {
  realName: 'Kurasuto',
  heroName: 'Crust',
  gender: 'male',
  weight: '',
  height: '',
  power: {
    name: 'Shield',
    description: 'allows him to manifest extremely durable, stone-like hexagonal shields from his body that can be used for both defense and offense, capable of withstanding a multitude of offensive Quirks.',
  }
}

const responseKamuiWoods = {
  realName: 'Nishiya Shinji',
  heroName: 'Kamui Woods',
  gender: 'male',
  weight: '',
  height: '168',
  power: {
    name: 'Arbor',
    description: 'Arbor allows the user to generate and control wood from any part of their body.',
  }
}

const responseWash = {
  realName: 'Mitarai Susugu',
  heroName: 'Wash',
  gender: 'male',
  weight: '',
  height: '176',
  power: {
    name: 'Clean Bubbler',
    description: 'Releases bubbles from its internal tank to disinfect and heal the wounds of the injured.',
  }
}

const responseYoroiMusha = {
  realName: 'Yoroimusha',
  heroName: 'Yoroi Musha',
  gender: 'male',
  weight: '',
  height: '',
  power: {
    name: 'unknown',
    description: '',
  }
}


app.get('/', (req, res) => { res.send('Hello world') })

app.get('/heroes', (req, res) => {
  res.send(`${responseHtml}`)
})
app.get('/heroes/all-might', (req, res) => { res.send(`${responseAllMight.heroName}(${responseAllMight.realName})`) })
app.get('/heroes/endeavor', (req, res) => { res.send(`${responseEndeavor.heroName}(${responseEndeavor.realName})`) })
app.get('/heroes/hawks', (req, res) => { res.send(`${responseHawks.heroName}(${responseHawks.realName})`) })
app.get('/heroes/best-jeanist', (req, res) => { res.send(`${responseBestJeanist.heroName}(${responseBestJeanist.realName})`) })
app.get('/heroes/edgeshot', (req, res) => { res.send(`${responseEdgeshot.heroName}(${responseEdgeshot.realName})`) })
app.get('/heroes/mirko', (req, res) => { res.send(`${responseMirko.heroName}(${responseMirko.realName})`) })
app.get('/heroes/crust', (req, res) => { res.send(`${responseCrust.heroName}(${responseCrust.realName})`) })
app.get('/heroes/kamui-woods', (req, res) => { res.send(`${responseKamuiWoods.heroName}(${responseKamuiWoods.realName})`) })
app.get('/heroes/wash', (req, res) => { res.send(`${responseWash.heroName}(${responseWash.realName})`) })
app.get('/heroes/yaroi-musha', (req, res) => { res.send(`${responseYoroiMusha.heroName}(${responseYoroiMusha.realName})`) })

app.listen(port, () => { console.log(`I'm listening on port ${port} 🪼`) })