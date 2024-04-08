CREATE DATABASE Orca_db;
use Orca_db;

CREATE TABLE Properties (
    propertyID INT AUTO_INCREMENT PRIMARY KEY,
    Rent VARCHAR(255) NOT NULL,
    Bills VARCHAR(255) NOT NULL,
    Maintenance VARCHAR(255) NOT NULL,
    Event VARCHAR(255) NOT NULL,
    ERC VARCHAR(255) NOT NULL,
    managerID INT NOT NULL,
    FOREIGN KEY(managerID) REFERENCES Managers(managerID)
);

CREATE TABLE Resident (
    residentID INT AUTO_INCREMENT PRIMARY KEY,
    wallet VARCHAR(255) NOT NULL, 
);

CREATE TABLE Managers (
    managerID INT AUTO_INCREMENT PRIMARY KEY,
    wallet VARCHAR(255) NOT NULL,
);

CREATE TABLE ResidentsTransactions (
    resitrID INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    residentID INT NOT NULL,
    FOREIGN KEY(residentID) REFERENCES Resident(residentID),
    date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE PropertyTransactions (
    proptrID INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    value INT NOT NULL,
    propertytID INT NOT NULL,
    FOREIGN KEY(propertID) REFERENCES Properties(propertID),
    date TIMESTAMP NOT NULL DEFAULT NOW()
);