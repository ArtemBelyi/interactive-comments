import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import { config } from "../config";
import { ERROR_MESSAGES } from "../constants/messages";

export interface IPayloadToken extends JwtPayload {
	id: string; 
	username: string 
}

function isPayloadToken(token: string | JwtPayload): token is IPayloadToken {
	return typeof token === "object" && "username" in token;

}

export class TokenService {
  	static generate(userId: string, username: string): string {
    	const payload = { id: userId, username: username };
    	const options: SignOptions = { expiresIn: "1d" };

    	return jwt.sign(payload, config.secretKey,  options);
  	}
  
  	static verify(token: string): IPayloadToken {

		try {
			const result = jwt.verify(token, config.secretKey);
			return this.validatePayload(result);
		} catch (error) {
			throw error;
		};
  	}
  
  	static decode(token: string): JwtPayload | string | null {
    	return jwt.decode(token);
  	}

	private static validatePayload(payload: string | JwtPayload): IPayloadToken {
		if (isPayloadToken(payload)) {
			return payload;
		}

		throw new Error(ERROR_MESSAGES.AUTH.TOKEN_VERIFICATION_FAILED);
	}
}