document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("erreur");

    if (password === confirmPassword) {
        errorMessage.style.color = "green";
        errorMessage.innerText = "bravo! vous etes inscrit"; 

        setTimeout(function() {
            window.location.href = "connexion.html";
        }, 1000);

    } else {
       
        errorMessage.innerText = "Les mots de passe ne correspondent pas.";
    }
});


Document.getElementById("connexform").addEventListener("submit",function (e){
    e.preventDefault();

    let userName = document.getElementById("username");
    let password = document.getElementById("password");

    if (userName === "votre_nom_utilisateur" && password === "votre_mot_de_passe") {
      
        window.location.href = "moncompte.html"; 
    } else {
      
        alert("Identifiant ou mot de passe incorrect.");
    }
});


