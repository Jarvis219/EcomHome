import { connect, connection } from 'mongoose';

export default async function dbConnect() {
	//db connection
	connect(process.env.NEXT_PUBLIC_MONGO_URI || '').then(() => {
		console.log('DB Connected!');
	});

	connection.on('disconnected', () => {
		console.log('DB Disconnected!');
	});

	connection.on('error', (err) => {
		console.log(`DB connection error: ${err.message}`);
	});
}
