import { StatusCodes } from "http-status-codes";

//(404)
export class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFoundError';//optional
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

//the server returns this error for invalid syntax (400)
export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

//this means the client must authenticate itself before getting response
export class UnauthenticatedError extends Error {
    constructor(message) {
        super(message);
        this.name = UnauthenticatedError;
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

//here, the client is forbidden to access the response until it's authorized(403)
export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = UnauthorizedError;
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}