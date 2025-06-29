const url = 'https://chatgpt-42.p.rapidapi.com/aitohuman';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'a0a03e1d97msh074217fc318438ep1fe03ejsn44efee5dfa35',
		'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		text: 'Global warming is the long-term rise in Earth\'s average temperature due to human activities, primarily the burning of fossil fuels, deforestation, and industrial emissions. These activities release greenhouse gases like carbon dioxide and methane, which trap heat in the atmosphere and lead to climate change. As a result, glaciers are melting, sea levels are rising, and extreme weather events such as hurricanes, heatwaves, and droughts are becoming more frequent. Global warming also threatens biodiversity, disrupts ecosystems, and impacts agriculture, leading to food and water shortages. Urgent action, including reducing carbon emissions, adopting renewable energy, and promoting sustainable practices, is essential to mitigate its effects.'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}