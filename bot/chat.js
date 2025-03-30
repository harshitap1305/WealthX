import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const result = await genAI.generateContent({
        model: 'gemini-1.5-pro',
        prompt: message,
      });

      // Check if the response contains the expected data
      if (result && result.data && result.data.choices && result.data.choices[0]) {
        const geminiReply = result.data.choices[0].text;
        res.status(200).json({ reply: geminiReply });
      } else {
        console.error('Unexpected API response:', result);
        res.status(500).json({ error: 'Unexpected response from Gemini API.' });
      }
    } catch (error) {
      console.error('Error communicating with Gemini API:', error);

      // Check if the error is related to an HTML response
      if (error.response && error.response.data && typeof error.response.data === 'string') {
        console.error('API returned an HTML response:', error.response.data);
      }

      res.status(500).json({ error: 'Error processing your request.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}