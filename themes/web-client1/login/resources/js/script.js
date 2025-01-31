function getParameterByName(name, url) {
    if (!url)
        url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

    results = regex.exec(url);

    if (!results)
        return null;

    if (!results[2])
        return '';
        
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


window.addEventListener("load", function(event) {

    //change favicon
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.href = '/auth/resources/1g3j8/login/web-client1/img/ceiia-favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);

    var clientId = getParameterByName('client_id');
    var title = document.getElementById('kc-header-wrapper');
    title.innerHTML = "Hello " + clientId;

    // apply css
    var lnk = document.createElement('link');
    lnk.href= "/auth/resources/1g3j8/login/web-client1/css/" + clientId + '.css';
    lnk.rel='stylesheet';
    document.getElementsByTagName('head')[0].appendChild(lnk);

 });
