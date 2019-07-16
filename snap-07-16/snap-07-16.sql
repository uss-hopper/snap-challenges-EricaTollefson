-- The statement below sets the collation of the database to utf8
ALTER DATABASE etollefson CHARACTER SET utf8 COLLATE utf8_unicode_ci;

-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS task;

-- the CREATE TABLE function is a function that takes tons of arguments to layout the table's schema
-- create the task entity
CREATE TABLE task (
	-- this creates the attribute for the primary key
	-- not null means the attribute is required!
	taskId BINARY(20) NOT NULL,
	taskTitle VARCHAR(255) NOT NULL,
	taskStartDate DATETIME,
	taskDueDate DATETIME,
	taskStatus VARCHAR(64) NOT NULL,
	-- to make something optional, exclude the not null
	taskPriority VARCHAR(64) NOT NULL,
	taskDescription VARCHAR(256),
	userDateOfBirth DATE NOT NULL,
	userRewardsStatus VARCHAR(16) NOT NULL,
	userRewardsNumber TINYINT NOT NULL,
	-- to make sure duplicate data cannot exist, create a unique index
	UNIQUE(taskID),
	-- this officiates the primary key for the entity
	PRIMARY KEY(taskID)
);
