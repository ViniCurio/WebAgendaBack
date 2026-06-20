import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";   
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { routes } from "./routes.js";
import "dotenv/config";


const app = fastify().withTypeProvider<ZodTypeProvider>();


app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "API Agenda",
            version: "1.0.0",
        },
    },
    transform: jsonSchemaTransform,
})


app.register(fastifySwaggerUi, {
    routePrefix: "/docs",       
})


const start = async () => {

    await app.register(fastifyCors, {
        origin: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        preflight: true,
    });
    
    await app.register(routes);

    try {
        await app.listen({ port: 3030 }).then(() => {
        console.log("Server is running on port 3030");
    })} catch (err) {
        process.exit(1);  
    }
    
};

start();
