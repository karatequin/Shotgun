const deepFreeze = require('deep-freeze');
import { tripsReducer } from './trips.reducer';
import * as types from './../findalift/lift-actions';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';
import { LiftActions } from './../findalift/lift-actions';
import { TripState } from './store';

describe('trips reducer', () => {
  const ds = new DataService();

  it('should return the initial state', () => {
    // ARRANGE - ACT - ASSERT

    //Arrange
    const ds = new DataService();
    const expectedOutput = {isLift: false, lifts: ds.tempData};

    // Act
    const result = tripsReducer(undefined, {});

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('set isLift to true', () => {
    // Arrange
    const ds = new DataService();
    const expectedOutput = {isLift: true, lifts: ds.tempData };
    const inputState = { isLift: false, lifts: ds.tempData };
    const actionObject = { type: types.LiftActions.SET_TYPE, payload: true };

    // Act
    const result = tripsReducer(inputState, actionObject);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('set createLift to make a lift', () => {
    // Strategy
    // 
    
    // Arrange
    let TripList: Trip[] = [];
    let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
    
    const inputState = {lifts: TripList } as TripState;
    const actionObject = { type: types.LiftActions.CreateAction, payload: trip };
    const expectedOutput = {lifts: [trip]} as TripState;
    
    deepFreeze(inputState);
    
    // Act
    const result = tripsReducer(inputState, actionObject);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('should Create a trip in the lifts with a non-empty lifts-array', () => {
    // Add a new trip object by calling the reducer's CREATE_TRIP. 
    // expect after that the state has a lift array one size larger and check the object as well.
    const trip: Trip = { origin:"KEA", departureTime: new Date(2019, 0, 2) } as Trip;// Create a trip obj.

    const inputState = { isLift: false, lifts: ds.tempData }; // Configuring my previous state - this state has 3 trip objects and now i added a 4
    const actionObject = { type: types.LiftActions.CreateAction, payload: trip }; // Defining the Action object with the Create Action method

    deepFreeze(inputState);
    // Act
    const result = tripsReducer(inputState, actionObject); // Perform test - calling ActionObject and our initial state

    // Assert
    expect(result.lifts.length).toEqual(4); //  expect that the action objct has added another trip to the inputState
  });


  it('should Delete a trip in the lifts', () => {
    // Add a new trip object by calling the reducer's CREATE_TRIP. 
    // expect after that the state has a lift array one size larger and check the object as well.
    const trip: Trip = { _id: '1', origin:"KEA", departureTime: new Date(2019, 0, 2) } as Trip;// Create a trip obj.

    const inputState = { isLift: false, lifts: [trip] }; // Configuring my previous state
    const actionObject = { type: types.LiftActions.DeleteAction, payload: '1' }; // Action object
    const expectedOutput = { isLift: false, lifts: [] }; // After test I want this!

    deepFreeze(inputState);
    // Act
    const result = tripsReducer(inputState, actionObject); // Perform test

    // Assert
    expect(result.lifts.length).toEqual(0);
    expect(result).toEqual(expectedOutput); // If true, test passes
  });
});