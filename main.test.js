
import { test, expect } from "vitest";
import {totalPrize} from "./main.js"

test("to check if first nephew received 100, total price = 360", () => {
    // Arrange
    const firstNephew = 100;
    const expected = 360; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    });  

test("to check if first nephew received 200, total price = 720", () => {
    // Arrange
    const firstNephew = 200;
    const expected = 720; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    });  

test("to check if first nephew received 300, total price = 1080", () => {
    // Arrange
    const firstNephew = 300;
    const expected = 1080; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 400, total price = 1440", () => {
    // Arrange
    const firstNephew = 400;
    const expected = 1440; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 500, total price = 1800", () => {
    // Arrange
    const firstNephew = 500;
    const expected = 1800; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 600, total price = 2160", () => {
    // Arrange
    const firstNephew = 600;
    const expected = 2160; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 700, total price = 2520", () => {
    // Arrange
    const firstNephew = 700;
    const expected = 2520; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 800, total price = 2880", () => {
    // Arrange
    const firstNephew = 800;
    const expected = 2880; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 900, total price = 3240", () => {
    // Arrange
    const firstNephew = 900;
    const expected = 3240; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

test("to check if first nephew received 1000, total price = 3600", () => {
    // Arrange
    const firstNephew = 1000;
    const expected = 3600; 
    // Act
    const actual = totalPrize(firstNephew); 
    // Assert
    expect(actual).toBe(expected); 
    }); 

    // test("to check if first nephew received less than 100", () => {
    //     // Arrange
    //     const firstNephew = Math.floor(Math.random() * 100);
    //     expect(() => totalPrize(firstNephew)).toThrowError(
    //         /^Amount can't be lower than 100$/
    //     );
    // });
    