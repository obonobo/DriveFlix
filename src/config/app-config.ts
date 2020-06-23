import {  } from "log4js";

// Configures the app from env vars, some of which are 
// secretes passed in from Kubernetes

const envi = process.env

/**
 * App configuration
 */
export const appConfig = {
    APP_LOG_LEVEL: envi.LOGLVL    
};

export const appConfigTest = {
    APP_LOG_LEVEL: "DEBUG"
};

/**
 * Database configuration
 */
export const dbConfig = {

};
