
function searchCountry() {
    const searchInput = document.getElementById("currency").value;
    console.log(searchInput)

    fetch('https://restcountries.com/v3.1/currency/' + searchInput, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => {
        return res.json()
    })
        .then((data) => {
            console.log(data);
            const myNode = document.getElementById("country-list");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            for (var i = 0; i < data.length; i++) {
                var name = data[i].name.common;
                var flag = data[i].flags.png;
                var currency = Object.keys(data[i].currencies)[0];
                var badge = document.createElement('div');
                badge.innerHTML = null;
                badge.className = 'col-3 country-box';
                badge.innerHTML =
                    '<img src="' + flag + '"> </img>' +
                    '<div class="country-details"> <span> Name: ' + name + '</span> <br>' +
                    '<span> Currency: ' + currency + '</span> </div>';
                document.getElementById("country-list").append(badge);
            }
        })
        .catch(error => console.log('ERROR'))
}