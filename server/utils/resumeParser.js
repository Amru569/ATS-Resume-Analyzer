import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export async function parseResume(fileBuffer) {
    try {
        console.log("Starting PDF Parsing...");

        if (!fileBuffer || fileBuffer.length === 0) {
            throw new Error("Received empty PDF buffer.");
        }

        const uint8Array = new Uint8Array(fileBuffer);

        const loadingTask = pdfjsLib.getDocument({
            data: uint8Array
        });

        const pdf = await loadingTask.promise;

        console.log(`PDF Loaded. Total Pages: ${pdf.numPages}`);

        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {

            console.log(`Reading Page ${i}`);

            const page = await pdf.getPage(i);

            const textContent = await page.getTextContent();

            extractedText += textContent.items
                .map(item => item.str)
                .join(" ");

            extractedText += "\n";
        }

        console.log("PDF Parsing Completed");

        return extractedText.trim();

    } catch (err) {

        console.error("PDF Parsing Error:", err);

        throw err;
    }
}