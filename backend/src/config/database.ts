import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../config';

const url = config.url;
const options: ConnectOptions = { 
    dbName: config.database,
    user: config.user,
    pass: config.password
 }

export async function connectDB(): Promise<void> {
     try {
        mongoose.connection.on('connected', () => console.log('DB connected successfully'));
        mongoose.connection.on('error', (err) => console.error('DB connection error:', err));
        mongoose.connection.on('disconnected', () => console.log('DB disconnected'));
        await mongoose.connect(url, options);
    } catch (error) {
        console.error('Failed connect to DB :', error);
        process.exit(1);
    }
}

export async function disconnectDB(): Promise<void> {
    await mongoose.disconnect();
}