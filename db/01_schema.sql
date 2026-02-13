CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    job TEXT[] NOT NULL,
    origin TEXT NOT NULL,
    primary_weapon TEXT[] NOT NULL,
    secondary_weapon TEXT[],
    difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    mobility INTEGER NOT NULL CHECK (mobility BETWEEN 1 AND 5),
    range INTEGER NOT NULL CHECK (range BETWEEN 1 AND 5),
    image_url TEXT
);
