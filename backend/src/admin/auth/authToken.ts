import jwt from 'jsonwebtoken';

export function generateToken(admin: string) {
    const adminId = admin[0];

    const JWT_SECRET = process.env.JWT_SECRET;

    return jwt.sign(
        { adminId: adminId }, 
        JWT_SECRET!,
        { expiresIn: '1h' }
    );
};
