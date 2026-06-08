import bcrypt from "bcrypt";

export class HashService {
    private static readonly SALT_ROUNDS = 10;
    
    static async hash(data: string): Promise<string> {
        return bcrypt.hash(data, this.SALT_ROUNDS);
    }
    
    static async compare(data: string, hash: string): Promise<boolean> {
        return bcrypt.compare(data, hash);
    }
}