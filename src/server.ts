import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";   
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { routes } from "./routes.js";

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

app.register(routes);

app.listen({ port: 3030 }).then(() => {
    console.log("Server is running on port 3030");
})
