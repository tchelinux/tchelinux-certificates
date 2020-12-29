/**
 * Given a date in the format YYYY-MM-DD returns the date in the
 * format "DD de Month de YYYY".
 */
function getDateString(date) {
    month = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]
    dateparts = date.split("-")
    return `${dateparts[2]} de ${month[dateparts[1] - 1]} de ${dateparts[0]}`
}

/**
 * Compute the digest for a given data, using a selected algorithm, and
 * return a Promise containing the hexstring of the digest.
 */
async function digest(algo, str) {
    const buf = await crypto.subtle.digest(
        algo, new TextEncoder("utf-8").encode(str)
    )
    return Array.prototype.map.call(
        new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))
    ).join('')
}

function getUrlVars() {
    var vars = {};
    var remove_hash = window.location.href.replace(/#.*/gi, "")
    var parts = remove_hash.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m,key,value) {
            vars[key] = value;
        }
    );
    return vars;
}