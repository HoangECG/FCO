function importLogo(nameImg){
    const logo = require('../logo/'+ nameImg +'.png')
    return logo
}
function importPlayer(nameImg){
    const logo = require('../player/'+ nameImg +'.png')
    return logo
}
function importIMG(nameImg){
    const logo = require('../img/'+ nameImg +'.png')
    return logo
}
export {importLogo, importPlayer, importIMG}