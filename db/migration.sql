CREATE DATABASE meandering;

\c meandering

CREATE TABLE users (id SERIAL PRIMARY KEY, user_name VARCHAR(30), user_email VARCHAR(255), password_digest VARCHAR(255));

CREATE TABLE profiles (id SERIAL PRIMARY KEY, profile_name VARCHAR(50), date_of_birth DATE, city VARCHAR(255), bio TEXT, image TEXT, base_64_image TEXT, user_id INTEGER REFERENCES users (id));

CREATE TABLE entries (id SERIAL PRIMARY KEY, title TEXT, entry_date DATE, journal_snippet TEXT, user_id INTEGER REFERENCES users (id));
