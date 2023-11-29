import { SecuritySchemeObject } from "openapi3-ts/oas31"

export const bearerAuthName = "session-token"
export const bearerConfig: SecuritySchemeObject = {
	type: "http",
	description:
		"Use /auth/login to create a session token then paste it here to authorize requests.",
	name: "Authorization",
	bearerFormat: "Bearer",
	scheme: "Bearer",
	in: "header"
}
