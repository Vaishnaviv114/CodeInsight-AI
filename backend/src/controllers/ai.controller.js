const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
    try {

        const { code } = req.body;


        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required"
            });
        }

        const review = await aiService(code);
        console.log(review);

        res.json({
            success: true,
            review
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};