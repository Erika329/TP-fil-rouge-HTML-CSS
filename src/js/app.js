// Erika KAMDOM FOTSO 3A FISE
// TP Fil Rouge / Application de gestion de Ticket
// Script JavaScript principal

// On attend que le HTML soit charge avant d'utiliser le DOM

document.addEventListener("DOMContentLoaded", () => {
	// Formulaire de creation de ticket
	const ticketForm = document.querySelector(".ticket-form");
	if (!ticketForm) {
		return;
	}

	// Suggestion automatique pour le champ assignes (collaborateurs)
	const datalist = document.getElementById("collaborateurs-list");
	const assignesInput = document.getElementById("assignes");

	// Liste statique des collaborateurs (à améliorer si besoin)
	const collaborateurs = [
		"Erika K.",
		"Client Nova"
	];

	if (datalist) {
		datalist.innerHTML = collaborateurs.map(nom => `<option value="${nom}">`).join("");
	}

	// Ajoute une zone d'affichage des erreurs si elle n'existe pas
	let errorBox = document.querySelector(".ticket-error-box");
	if (!errorBox) {
		errorBox = document.createElement("div");
		errorBox.className = "ticket-error-box";
		errorBox.style.display = "none";
		errorBox.style.background = "#ffe0e0";
		errorBox.style.color = "#b00020";
		errorBox.style.border = "1px solid #b00020";
		errorBox.style.borderRadius = "6px";
		errorBox.style.padding = "10px";
		errorBox.style.marginBottom = "16px";
		errorBox.style.fontWeight = "bold";
		errorBox.style.boxShadow = "0 2px 8px rgba(176,0,32,0.08)";
		errorBox.style.transition = "all 0.3s";
		ticketForm.parentNode.insertBefore(errorBox, ticketForm);
	}

	ticketForm.addEventListener("submit", (event) => {
		event.preventDefault();

		// Champs du formulaire
		const titre = document.querySelector("#titre");
		const projet = document.querySelector("#projet");
		const description = document.querySelector("#description");
		const priorite = document.querySelector("#priorite");
		const type = document.querySelector("#type");
		const estimation = document.querySelector("#estimation");
		const assignes = document.querySelector("#assignes");

		// Liste des champs manquants
		const missingFields = [];

		if (!titre || titre.value.trim() === "") {
			missingFields.push("Titre");
		}
		if (!projet || projet.value.trim() === "") {
			missingFields.push("Projet");
		}
		if (!description || description.value.trim() === "") {
			missingFields.push("Description");
		}
		if (!priorite || priorite.value.trim() === "") {
			missingFields.push("Priorité");
		}
		if (!type || type.value.trim() === "") {
			missingFields.push("Type");
		}
		if (!estimation || estimation.value.trim() === "") {
			missingFields.push("Temps estimé");
		}
		if (!assignes || assignes.value.trim() === "") {
			missingFields.push("Collaborateur(s)");
		}

		let estimationInvalid = false;
		if (estimation && estimation.value.trim() !== "") {
			if (Number.isNaN(Number(estimation.value)) || Number(estimation.value) < 0) {
				estimationInvalid = true;
			}
		}

		if (missingFields.length > 0 || estimationInvalid) {
			let errorMsg = "";
			if (missingFields.length > 0) {
				errorMsg += `<span style='color:#b00020;font-weight:bold;'>Attention :</span> <span style='color:#b00020'>${missingFields.join(", ")}</span> obligatoire${missingFields.length > 1 ? 's' : ''}.`;
			}
			if (estimationInvalid) {
				errorMsg += (errorMsg ? "<br>" : "") + "Le temps estimé est invalide.";
			}
			errorBox.innerHTML = errorMsg;
			errorBox.style.display = "block";
			return;
		}

		// Formulaire valide
		errorBox.style.display = "none";
		errorBox.innerHTML = "";
		// Affichage d'une notification simple (slide-in) :
		let notif = document.createElement("div");
		notif.textContent = "Ticket enregistré avec succès !";
		notif.style.position = "fixed";
		notif.style.top = "24px";
		notif.style.right = "-350px";
		notif.style.background = "#4caf50";
		notif.style.color = "#fff";
		notif.style.padding = "14px 32px";
		notif.style.borderRadius = "8px";
		notif.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
		notif.style.fontWeight = "bold";
		notif.style.fontSize = "1.1em";
		notif.style.zIndex = "9999";
		notif.style.transition = "right 0.5s cubic-bezier(.4,2,.6,1)";
		document.body.appendChild(notif);
		setTimeout(() => {
			notif.style.right = "24px";
		}, 50);
		setTimeout(() => {
			notif.style.right = "-350px";
		}, 2200);
		setTimeout(() => {
			notif.remove();
		}, 2700);

		ticketForm.reset();
		if (assignes) {
			assignes.value = "";
		}
	});
});
