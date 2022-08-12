DELETE FROM animal;
DELETE FROM employee;
DELETE FROM foster;

INSERT INTO animal (name, species, age, weight, special_needs) VALUES
('Cheesemonger', 'dog', 4, 30, 0),
('Sophia', 'dog', 16, 40, 1),
('Ollie', 'dog', 8, 9, 0),
('Taffeta', 'cat', 15, 10, 1),
('Mittens', 'cat', 3, 9, 1),
('Mr. Whiskers', 'cat', 10, 12, 0),
('Hyde', 'rabbit', 3, 34, 0),
('Ellie', 'small pet', 3, 0.05, 0);

INSERT INTO employee (username, password, email) VALUES
('johndoe', 'password123', 'test@test.com'),
('janeeyre', 'el1zabeth4n', 'anothertest@test.com'),
('notarealperson', 'anotherpassword', 'email@gmail.com');

INSERT INTO foster (first_name, last_name, email, is_employee) VALUES
('Michael', 'Fox', 'yahoo@gmail.com', 0),
('Jennifer', 'Jones', 'email@yahoo.com', 1);