const isCooked = (element,index,array) =>{
    return !element.recipeCooked
};

const isActive = (element,index,array) =>{
    return element.active
};

module.exports = {
    isCooked,
    isActive
}