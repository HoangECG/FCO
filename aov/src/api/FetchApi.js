let hostIP = "localhost"



async function GetMatchId() {
    // console.log('IDMATCH')
    var res = []
    await fetch(`http://${hostIP}:14596/api/listmatchID`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetMatchInfo(id) {
    var res = []
    await fetch(`http://${hostIP}:14596/api/${id}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetBracket() {
    var res = []
    await fetch(`http://${hostIP}:14596/api/bracket`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}
async function GetLineUpInfo(site) {
    var res = []
    await fetch(`http://${hostIP}:14596/api/lineup-${site}`)
        .then(response => response.json())
        .then(data => res = data)
    return res
}


export { GetMatchId, GetMatchInfo, GetBracket,GetLineUpInfo, hostIP }



