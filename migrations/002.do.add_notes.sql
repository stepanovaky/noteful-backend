CREATE TABLE notes
(
    id TEXT NOT NULL,
    name TEXT NOT NULL,
    modified TIMESTAMPTZ NOT NULL,
    folderId TEXT NOT NULL,
    content TEXT
);

