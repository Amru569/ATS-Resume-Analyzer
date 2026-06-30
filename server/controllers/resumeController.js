import { parseResume } from "../utils/resumeParser.js";
import { extractKeywords } from "../utils/keywordExtractor.js";
import { calculateATSScore } from "../utils/atsScore.js";
import { analyzeWithGemini } from "../utils/aiAnalyzer.js";

export const uploadResume = async (req, res) => {

    try {

        console.log("Upload Request Received");

        if (!req.file) {

            return res.status(400).json({
                success: false,
                error: "No file uploaded"
            });

        }

        console.log("File Name:", req.file.originalname);
        console.log("File Size:", req.file.size);

        const resumeText = await parseResume(req.file.buffer);

        console.log("Resume Parsed Successfully");

        res.json({
            success: true,
            text: resumeText
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
};
export const analyzeResume = async (req, res) => {
    try {
        const { resumeText, jobDescription } = req.body;

        if (!resumeText || !jobDescription) {
            return res.status(400).json({ error: "Missing resumeText or jobDescription" });
        }

        // Keyword extraction
        const jdKeywords = extractKeywords(jobDescription);
        const resumeKeywords = extractKeywords(resumeText);

        // ATS Score
        const score = calculateATSScore(jdKeywords, resumeKeywords);

        console.log("ATS Score:", score);

        // Gemini AI analysis
        const suggestions = await analyzeWithGemini(resumeText, jobDescription);

        res.json({
            success: true,
            score,
            suggestions
        });

    } catch (err) {
        console.error("Analyze Resume Error:", err);
        res.status(500).json({ error: err.message });
    }
};