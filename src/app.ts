import { configure, Logger, getLogger } from "log4js";
import express from 'express';
import { appConfig, dbConfig, appConfigTest  } from "./config/app-config";

const appConf = appConfigTest;

// Logger information
configure(`${__dirname}/../config/log4js.json`);
const logr: Logger = getLogger();
logr.level = appConf.APP_LOG_LEVEL;


// ?? ==================== EXPRESS ====================

