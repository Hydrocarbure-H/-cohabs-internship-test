const { generateResponse } = require('./service');

// Contrôleur pour gérer les questions des utilisateurs
exports.getResponse = (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: "Message manquant dans la requête" });
    }

    const response = generateResponse(userMessage);
    res.json({ response });
};
