module.exports = {
	name: "azure 1", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://ozonewak-h9avg9bthdhzfje6.germanywestcentral-01.azurewebsites.net/"
	]
};