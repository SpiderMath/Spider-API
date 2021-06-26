import { NextFunction, Request, Response } from "express";
import { App } from "./App";

interface RouteConfig {
	name: string,
	description: string,
	adminOnly?: boolean,
};

export default abstract class BaseRoute {
	public name: string = "";
	public description: string = "";
	public app: App;
	public adminOnly: boolean = false;

	constructor(app: App, config: RouteConfig) {
		this.app = app;
		Object.assign(this, config);

		Object.defineProperty(this, "app", {
			configurable: true,
			writable: true,
		});
	}

	// eslint-disable-next-line no-unused-vars
	abstract run(req: Request, res: Response, next: NextFunction): Promise<any>;
};