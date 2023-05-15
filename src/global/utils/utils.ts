import { HttpException, HttpStatus } from "@nestjs/common";

export class CommonUtils {

    public static throwHttpException(httpStatusCode: any, message?: string) {
        switch (httpStatusCode) {
            case 200:
                throw new HttpException({ status: HttpStatus.OK, error: message }, HttpStatus.OK);
            case 400:
                throw new HttpException({ status: HttpStatus.BAD_REQUEST, error: message }, HttpStatus.BAD_REQUEST);
            case 401:
                throw new HttpException({ status: HttpStatus.UNAUTHORIZED, error: message }, HttpStatus.UNAUTHORIZED);
            case 403:
                throw new HttpException({ status: HttpStatus.FORBIDDEN, error: message }, HttpStatus.FORBIDDEN);
            case 404:
                throw new HttpException({ status: HttpStatus.NOT_FOUND, error: message }, HttpStatus.NOT_FOUND);
            case 409:
                throw new HttpException({ status: HttpStatus.CONFLICT, error: message }, HttpStatus.CONFLICT);
            case 415:
                throw new HttpException({ status: HttpStatus.UNSUPPORTED_MEDIA_TYPE, error: message }, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
            case 422:
                throw new HttpException({ status: HttpStatus.UNPROCESSABLE_ENTITY, error: message }, HttpStatus.UNPROCESSABLE_ENTITY);
            case 500:
                throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: message }, HttpStatus.INTERNAL_SERVER_ERROR);
            default:
                throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, error: message }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}