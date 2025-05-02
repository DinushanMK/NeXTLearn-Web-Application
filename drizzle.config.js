import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configurations/dbschema.js",
  dbCredentials:{ 
    url:'postgresql://NextlearnAI_owner:npg_sGPvEZCex65H@ep-green-butterfly-a8junxp3-pooler.eastus2.azure.neon.tech/NextlearnAI?sslmode=require'
  }
  
});




