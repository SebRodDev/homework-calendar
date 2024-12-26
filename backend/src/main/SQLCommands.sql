create table user {
    id integer not null,
    username varchar(255),
    password varchar(255),
}

create table homeworkAssignments {
    id integer not null,
    user_id integer not null,
    assignment_name TEXT not null,
    due_date DATE,
    FOREIGN KEY (user_id) REFERENCES user(id) -- allegedly should establish a connection with each one
}