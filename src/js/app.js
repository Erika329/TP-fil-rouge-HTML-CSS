//Erika KAMDOM FOTSO
//TP FIL ROUGE
//SCRIPT JAVASCRIPT

//------------------//


//Vérification des champs du formulaire de connexion
function check_login(){
	//On vérifie les champs du formulaire
	const identifiant = document.querySelector("#identifiant");
	const mot_de_passe = document.querySelector('#mot_de_passe');

	//On récupère la valeur des input
	console.log("identifiant :", identifiant.value);
	//à retirer plus tard pour la sécurité
	console.log("mot_de_passe :", mot_de_passe.value);

	let nb_errors = 0;
	// Vérification identifiant
	const identifiant_error = document.querySelector('#identifiant_error');
	if (identifiant.value === "") {
		identifiant_error.classList.remove('hidden');
		nb_errors++;
	} else {
		identifiant_error.classList.add('hidden');
	}

	// Vérification mot de passe
	const mdp_error = document.querySelector('#mdp_error');
	if (mot_de_passe.value === "") {
		mdp_error.classList.remove('hidden');
		nb_errors++;
	} else {
		mdp_error.classList.add('hidden');
	}

	return nb_errors;
}	
//Validation du formulaire de connexion 
const f = document.querySelector('#submitform');
if(f) {
	//écouteur d'évènement 
	f.addEventListener("submit", function(event){
		// on empeche la soumission du formulaire
		// pour éviter le rechargement de page
		event.preventDefault();
		console.log("Formulaire soumis");

		// Utilisation de la fonction check_login pour valider le formulaire
		const connexion_valide = document.querySelector('#connexion_valide');
		const nb_errors = check_login();
		console.log("nb_errors :", nb_errors);
		// Si aucune erreur on affiche la validation de connexion
		if(nb_errors === 0){
			connexion_valide.classList.remove('hidden');
			console.log("Connexion validée");
		} else {
			// Sinon, on masque la validation
			connexion_valide.classList.add('hidden');
		}
	});
}

//------------//

// Validation du formulaire mot de passe oublié
const forgotForm = document.querySelector('#forgotform');
if(forgotForm) {
	forgotForm.addEventListener('submit', function(event) {
		event.preventDefault();
		console.log('Formulaire mot de passe oublié soumis');
		const email = document.querySelector('#email');
		const email_error = document.querySelector('#email_error');
		const mail_valide = document.querySelector('#mail_valide');
		let nb_errors = 0;
		// Vérification email
		if(!email.value) {
			email_error.classList.remove('hidden');
			nb_errors++;
		} else {
			email_error.classList.add('hidden');
		}
		if(nb_errors === 0) {
			mail_valide.classList.remove('hidden');
			console.log('Mail envoyé');
		} else {
			mail_valide.classList.add('hidden');
		}
	});
}

//------------//

// Validation du formulaire de création de compte
const createForm = document.querySelector('#createform');
if(createForm) {
	createForm.addEventListener('submit', function(event) {
		event.preventDefault();
		let nb_errors = 0;
		const prenom = document.querySelector('#prenom');
		const nom = document.querySelector('#nom');
		const email = document.querySelector('#email');
		const role = document.querySelector('#role');
		const mot_de_passe = document.querySelector('#mot_de_passe');
		const prenom_error = document.querySelector('#prenom_error');
		const nom_error = document.querySelector('#nom_error');
		const email_error = document.querySelector('#email_error');
		const role_error = document.querySelector('#role_error');
		const mdp_error = document.querySelector('#mdp_error');
		const creation_valide = document.querySelector('#creation_valide');

		// Affichage des valeurs dans la console
		console.log('prenom :', prenom.value);
		console.log('nom :', nom.value);
		console.log('email :', email.value);
		console.log('role :', role.value);
		console.log('mot_de_passe :', mot_de_passe.value);

		// Vérification prénom
		if(!prenom.value) {
			prenom_error.classList.remove('hidden');
			nb_errors++;
		} else {
			prenom_error.classList.add('hidden');
		}
		// Vérification nom
		if(!nom.value) {
			nom_error.classList.remove('hidden');
			nb_errors++;
		} else {
			nom_error.classList.add('hidden');
		}
		// Vérification email
		if(!email.value) {
			email_error.classList.remove('hidden');
			nb_errors++;
		} else {
			email_error.classList.add('hidden');
		}
		// Vérification rôle
		if(!role.value) {
			role_error.classList.remove('hidden');
			nb_errors++;
		} else {
			role_error.classList.add('hidden');
		}
		// Vérification mot de passe
		if(!mot_de_passe.value) {
			mdp_error.classList.remove('hidden');
			nb_errors++;
		} else {
			mdp_error.classList.add('hidden');
		}

		// Affichage du nombre d'erreurs
		console.log('nb_errors :', nb_errors);

		if(nb_errors === 0) {
			creation_valide.classList.remove('hidden');
			console.log('Compte créé');
		} else {
			creation_valide.classList.add('hidden');
		}
	});
}

//Filtre liste des projets par la recherche

const rechercheProjet = document.querySelector('#recherche-projet');
const projetsTbody = document.querySelector('#projets-tbody');
const filtreClient = document.querySelector('#filtre-client');
const boutonFiltrer = document.querySelector('form button[type="button"]');

function filtrerProjets() {
	const filtreNom = rechercheProjet ? rechercheProjet.value.toLowerCase() : "";
	const filtreClientValue = filtreClient ? filtreClient.value.toLowerCase() : "tous";
	const lignes = projetsTbody ? projetsTbody.querySelectorAll('tr') : [];
	lignes.forEach(function(tr) {
		const nomProjet = tr.querySelector('td a');
		const clientProjet = tr.querySelectorAll('td')[1];
		let matchNom = true;
		let matchClient = true;
		if (filtreNom && nomProjet) {
			matchNom = nomProjet.textContent.toLowerCase().includes(filtreNom);
		}
		if (filtreClientValue !== "tous" && clientProjet) {
			matchClient = clientProjet.textContent.toLowerCase().includes(filtreClientValue);
		}
		if (matchNom && matchClient) {
			tr.style.display = '';
		} else {
			tr.style.display = 'none';
		}
	});
}

if(rechercheProjet && projetsTbody) {
	rechercheProjet.addEventListener('input', filtrerProjets);
}
if(boutonFiltrer && projetsTbody) {
	boutonFiltrer.addEventListener('click', filtrerProjets);
}

//Validation du formulaire de création de ticket


//Validation du formulaire de création de projet


