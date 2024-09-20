let hostIP = "localhost"
let portApi = '10045'


async function GetMatchId() {
    // console.log('IDMATCH')
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/listmatchID`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetMatchInfo(id) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/${id}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}

async function Getcrrmatch() {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/crrmatch`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetLineUpInfo(site) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/lineup-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetChampsName(site) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/champsname`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetListTeam(site) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/listteam`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetLineupFull(site) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/lineupfull-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetNameFull(site) {
    var res = []
    await fetch(`http://${hostIP}:${portApi}/api/namefull-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
function GetPull(site) {
    fetch(`http://${hostIP}:${portApi}/api/pulldatasheet`)
}


export {GetPull, GetLineupFull,GetNameFull, GetMatchId, GetMatchInfo, Getcrrmatch,GetLineUpInfo,GetChampsName,GetListTeam, hostIP, portApi }



