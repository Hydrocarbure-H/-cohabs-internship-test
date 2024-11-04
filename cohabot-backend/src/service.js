exports.generateResponse = (message) => {
    if (message.toLowerCase().includes("payments")) {
        return "Vous pouvez consulter notre FAQ des paiements ici : [lien fictif]";
    }

    return "Désolé, je n'ai pas de réponse pour cette question.";
};
