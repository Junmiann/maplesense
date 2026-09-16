import jwt from 'jsonwebtoken';

export function generateToken(adminId: string) {
    const JWT_SECRET = process.env.JWT_SECRET;

    return jwt.sign(
        { adminId: adminId }, 
        JWT_SECRET!,
        { expiresIn: '1h' }
    );
};

export function verifyToken(token: string) {
    return jwt.verify(
        token, 
        process.env.JWT_SECRET!
    ) as { adminId: string };
};
