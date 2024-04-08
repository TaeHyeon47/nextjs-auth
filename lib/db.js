import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = MongoClient.connect(
    'mongodb+srv://taehyeon:1234@cluster0.dglpenj.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0'
  );

  return client;
}
