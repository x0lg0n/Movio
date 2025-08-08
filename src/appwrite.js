import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client();
client
.setEndpoint(ENDPOINT)
.setProject(PROJECT_ID);

const database = new Databases(client);

// if it is connected to appwrite show a message 
database
  .listDocuments(DATABASE_ID, COLLECTION_ID)
  .then((response) => {
    console.log("✅ Connected to Appwrite DB");
    console.log("Documents:", response.documents);
  })
  .catch((error) => {
    console.error("❌ Failed to connect to Appwrite DB:", error.message);
  });
export const updateSearchCount = async (searchTerm, movie) => {
  // 1. Use Appwrite SDK to check if the search term exists in the database
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('searchTerm', searchTerm),
    ]);

    // 2. If it exists, increment the count by 1
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    }
    // 3. If it does not exist, create a document with the search term and set count to 1
    else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        movieID: movie.id,
        posterURL: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        count: 1,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);

    return result.documents;
  } catch (error) {
    console.error(error);
  }
};
