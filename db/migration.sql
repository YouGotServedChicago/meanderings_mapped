CREATE DATABASE meandering;

\c meandering

CREATE TABLE users (id SERIAL PRIMARY KEY, user_name VARCHAR(30), password VARCHAR(255), date_of_birth DATE, city VARCHAR(255), state_province VARCHAR(255), country VARCHAR(255), bio TEXT);

CREATE TABLE photos (id SERIAL PRIMARY KEY, photo TEXT, upload_time TIMESTAMP, user_id INTEGER REFERENCES users (id));

CREATE TABLE entries (id SERIAL PRIMARY KEY, title TEXT, entry_date DATE, journal_snippet TEXT, user_id INTEGER REFERENCES users (id));
