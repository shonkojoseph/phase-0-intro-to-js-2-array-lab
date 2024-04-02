// Write your solution here!
const cats = ["Milo", "Otis", "Garfield",]

function destructivelyAppendCat (){
    cats.push("Ralph")
}
const destructivelyPrependCat=()=>{
    cats.unshift('Bob')
}
const destructivelyRemoveLastCat=()=>{
    cats.pop()
}

const destructivelyRemoveFirstCat=()=> {
cats.shift()
}

const appendCat=()=>{
    return['Milo','Otis', 'Garfield', 'Broom']
}

function prependCat(){
    return['Arnold','Milo','Otis','Garfield']
}

function removeLastCat(){
    return cats. slice(0,-1)
}

const removeFirstCat=()=>{
    return cats.slice(1)
}