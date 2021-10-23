
if (false) {
    let affichage = "";

for(let table=0; table<=10; table++) {

    affichage = "<table><tr><th colspan=5>Table de multiplication de "+table+"</th></tr>";

    for(let j=0; j<=10; j++) {

        if (j % 2 == 0) {
            affichage += "<tr class='pair'><td>"+ j + "</td><td> x </td><td>" + table + "</td><td> = </td><td>" + j*table + "</td></tr>";
        }
        else {
            affichage += "<tr><td>"+ j + "</td><td> x </td><td>" + table + "</td><td> = </td><td>" + j*table + "</td></tr>";
        }
        
    }

    affichage += "</table><br>";

    document.getElementById('affichage').innerHTML += affichage;

}

}

let paris='75015';

console.log(paris.match(/[0-9]{2}/));
console.log(paris.match(/\d{5}/));

let tel = /^(\d{2}(\.|\s)?){5}$/

console.log(tel.test('06 07 08 09 01'));

let email = /^[\w.-]+@[\w-]+\.\w{3,6}$/;

console.log(email);

console.log(email.test('£££££toto@gmail.com'));