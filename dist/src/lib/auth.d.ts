export declare enum UserRole {
    USER = "USER",
    PROVIDER = "PROVIDER",
    ADMIN = "ADMIN"
}
export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    baseURL: string;
    trustedOrigins: string[];
    emailAndPassword: {
        enabled: true;
    };
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
        };
    };
    user: {
        additionalFields: {
            role: {
                type: "string";
                defaultValue: string;
                required: false;
            };
            phone: {
                type: "string";
                required: false;
            };
            status: {
                type: "string";
                defaultValue: string;
                required: false;
            };
            address: {
                type: "string";
                required: false;
            };
        };
    };
    advanced: {
        cookies: {
            session_token: {
                name: string;
                attributes: {
                    httpOnly: true;
                    secure: true;
                    sameSite: "none";
                    partitioned: true;
                };
            };
            state: {
                name: string;
                attributes: {
                    httpOnly: true;
                    secure: true;
                    sameSite: "none";
                    partitioned: true;
                };
            };
        };
    };
    plugins: [{
        id: "oauth-proxy";
        version: string;
        options: NoInfer<import("better-auth/plugins").OAuthProxyOptions>;
        endpoints: {
            oAuthProxy: import("better-auth").StrictEndpoint<"/oauth-proxy-callback", {
                method: "GET";
                operationId: string;
                query: import("better-auth").ZodObject<{
                    callbackURL: import("better-auth").ZodString;
                    profile: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, import("zod/v4/core").$strip>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        description: string;
                        parameters: ({
                            in: "query";
                            name: string;
                            required: true;
                            description: string;
                        } | {
                            in: "query";
                            name: string;
                            required: false;
                            description: string;
                        })[];
                        responses: {
                            302: {
                                description: string;
                                headers: {
                                    Location: {
                                        description: string;
                                        schema: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, never>;
        };
        hooks: {
            before: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
            }[];
            after: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
            }[];
        };
    }];
}>;
//# sourceMappingURL=auth.d.ts.map