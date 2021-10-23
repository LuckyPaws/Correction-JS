function verification()
{
    let email = document.getElementById('user_email').value;
    let postal = document.getElementById('user_postal').value;
    let tel = document.getElementById('user_tel').value;

    let verif_email = /^[\w.-]+@[\w-]+\.\w{3,6}$/;
    let verif_postal = /^\d{5}$/;
    let verif_tel = /^(\d{2}(\.|\s|\-)?){5}$/;

    while (!verif_email.test(email))
    {
        email = prompt("Veuillez entrer un email valide");
    }
    document.getElementById('user_email').value = email;

    while (!verif_postal.test(postal))
    {
        postal = prompt("Veuillez entrer un code postal valide");
    }
    document.getElementById('user_postal').value = postal;

    while (!verif_tel.test(tel))
    {
        tel = prompt("Veuillez entrer un numéro de téléphone valide");
    }   
    document.getElementById('user_tel').value = tel;

    if (verif_email.test(email) && verif_postal.test(postal) && verif_tel.test(tel))
    {
        document.getElementById('affichage').innerHTML = "<p class='valide'>Votre Formulaire est valide!</p>";
    }
    else
    {
        document.getElementById('affichage').innerHTML = "<p class='invalide'>Votre Formulaire est invalide!</p>";
    }
}