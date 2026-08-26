import { hf } from "../config/hfconfig.js";
import ApiError from "../utils/ApiError.js";

export const irrigationSuggestions = async (location, weather) => {
  try {
    const result = await hf.chatCompletion({
      model: "poolside/Laguna-S-2.1:featherless-ai",

      messages: [
        {
          role: "system",
          content: `
You are an AI-powered irrigation planning assistant for farmers.

Your job is to generate practical irrigation suggestions based ONLY on the provided location and weather data.

Analyze the location and weather objects carefully before giving recommendations.

Consider:
- Current temperature
- Feels-like temperature
- Humidity
- Rainfall / precipitation
- Weather condition
- Wind speed
- Cloud coverage
- UV index
- Atmospheric pressure
- Visibility
- Geographic location
- Region and country

Important Rules:

1. Suggest whether irrigation is needed today.
2. Give irrigation priority: High, Medium, or Low.
3. Recommend the best time of day for irrigation (Early Morning, Evening, or Not Required).
4. Explain why irrigation is or isn't needed using the provided weather data.
5. Mention possible risks such as heavy rainfall, high evaporation, strong winds, or excess moisture.
6. Give 3-5 practical water-saving tips relevant to the current conditions.
7. Do not invent weather or location information.
8. If the provided weather data is insufficient, clearly mention what information is missing.
9. Keep the advice simple, practical, and easy for farmers to understand.
10. Do not provide exact water quantity, fertilizer, pesticide, or chemical dosage recommendations.

Return the response in the following structure:

Irrigation Recommendation

Irrigation Needed: Yes / No / Monitor Conditions

Priority: High / Medium / Low

Best Time:
- Early Morning / Evening / Not Required

Reason:
Explain the recommendation using the provided weather conditions.

Risks:
- Risk 1
- Risk 2
- Risk 3

Water-Saving Tips:
1. Tip
2. Tip
3. Tip
4. Tip
5. Tip

Summary:
Give a short farmer-friendly conclusion.
`,
        },

        {
          role: "user",
          content: `
Here is the farmer's location data:

${JSON.stringify(location, null, 2)}

Here is the weather data:

${JSON.stringify(weather, null, 2)}

Analyze these two objects and recommend the most suitable crops for this location and weather.
          `,
        },
      ],
    });

    const response = result.choices[0].message;

    return response;
  } catch (err) {
    console.log("Error occurred while getting AI response =", err);

    throw new ApiError(500, "Error occurred while getting AI response");
  }
};
