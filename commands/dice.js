module.exports = {
	name: 'dice',
	description: 'dice, returns number between 1-6',
	execute(message, args) {
		let min = 1;
		let max = 6;
		const rng = Math.floor(Math.random() * (max - min)) + min;
		
		message.channel.send(`${rng}`);
	},};



/* yanderedev way of coding this shit
		const min = 1;
		const max = 6;
		const rng = Math.floor(Math.random() * (max - min)) + min;

		if (rng = 1) {
			message.channel.send(`${rng} = 1`);
		} else if (rng = 2) {
			message.channel.send(`${rng} = 2`);
		} else if (rng = 3) {
			message.channel.send(`${rng} = 3`);
		} else if (rng = 4) {
			message.channel.send(`${rng} = 4`);
		} else if (rng = 5) {
			message.channel.send(`${rng} = 5`);
		} else if (rng = 6) {
			message.channel.send(`${rng} = 6`);
		}

		*/
