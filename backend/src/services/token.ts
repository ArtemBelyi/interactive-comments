import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import { config } from "../config";

export class TokenService {
  	static generate(userId: string, username: string): string {
    	const payload = { id: userId, username: username };
    	const options: SignOptions = { expiresIn: "1d" };

    	return jwt.sign(payload, config.secretKey,  options);
  	}
  
  	static verify(token: string): JwtPayload | string {
    	return jwt.verify(token, config.secretKey);
  	}
  
  	static decode(token: string): JwtPayload | string | null {
    	return jwt.decode(token);
  	}
}