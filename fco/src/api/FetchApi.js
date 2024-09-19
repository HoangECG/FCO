let hostIP = "localhost"



async function GetMatchId() {
    // console.log('IDMATCH')
    var res = []
    await fetch(`http://${hostIP}:10045/api/listmatchID`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetMatchInfo(id) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/${id}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}

async function Getcrrmatch() {
    var res = []
    await fetch(`http://${hostIP}:10045/api/crrmatch`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetLineUpInfo(site) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/lineup-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetChampsName(site) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/champsname`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetListTeam(site) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/listteam`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetLineupFull(site) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/lineupfull-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetNameFull(site) {
    var res = []
    await fetch(`http://${hostIP}:10045/api/namefull-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}

export {GetLineupFull,GetNameFull, GetMatchId, GetMatchInfo, Getcrrmatch,GetLineUpInfo,GetChampsName,GetListTeam, hostIP }



