import { TestBed, async } from '@angular/core/testing';
import { FilterLift } from './lift.filter';
import { DataService } from '../data.service';
import { Trip } from '../entities/trip';

// 0.1: Return empty array if array of lifts is empty while searching on specific value


// 1.0: Find lifts by searching destination
// 1.1: Find lifts by searching origin
// 1.2: Find lifts by searching availableseats

// 2.0: Don't find lifts when searching for something not in the array
// 2.1: Return all lifts when search is undefined
// 2.2: return all lifts when search is empty string

// 3.0: Search for destination but the data does not contain destination
// 3.1: Search for a negative number of seats 

describe('Lift Filter', () => {
 beforeEach(() => {

   TestBed.configureTestingModule({
     declarations: [
       FilterLift
     ],
     });
    });
    
    it('0.1: Return empty array if array of lifts is empty while searching on specific value', ()=>{
        // Arrange
        const filter = new FilterLift();
        const data = [];
        const search = 'Copenhagen';
        // Act
        const result = filter.transform(data, search)
        // Assert (expect)
        expect(result).toEqual([]);
    });


    it('1.0: Find lifts by searching destination',()=>{
        // Arrange
        const filter = new FilterLift();
        const ds = new DataService();
        const search = 'Holte';
        let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
        let trips = ds.tempData;
        trips.push(trip);
        // Act
        const result = filter.transform(trips, search)
        // Assert(Expect)
        expect(result).toEqual([trip]);
    });

    
    it('1.1: Find lifts by searching origin',()=>{
          // Arrange
          const filter = new FilterLift();
          const ds = new DataService();
          const search = 'Randers';
          let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
          let trips = ds.tempData;
          trips.push(trip);
          // Act
          const result = filter.transform(trips, search)
          // Assert(Expect)
          expect(result).toEqual([trip]);
    });

    it('1.2: Find lifts by searching availableseats', ()=>{

        // Arrange
        const filter = new FilterLift();
        const ds = new DataService();
        const search = "7";
        let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
        let trips = ds.tempData;
        trips.push(trip);
        // Act
        const result = filter.transform(trips, search)
        // ASsert(expect)
        expect(result).toEqual([trip]);
    });

    it('2.0: Dont find lifts when searching for something not in the array',() =>{
                // Arrange
                const filter = new FilterLift();
                const ds = new DataService();
                const search = "FemFladeFlødeBoller";
                let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
                let trips = ds.tempData;
                trips.push(trip);
                // Act
                const result = filter.transform(trips, search)
                // ASsert(expect)
                expect(result).toEqual([]);
            });

    it('2.1: Return all lifts when search is undefined',() =>{
                // Arrange
                const filter = new FilterLift();
                const ds = new DataService();
                const search = undefined;
                let trips = ds.tempData;
            
                // Act
                const result = filter.transform(trips, search)
                // ASsert(expect)
                expect(result).toEqual(trips);
            });
    
    it('2.2: return all lifts when search is empty string', () =>{
                 // Arrange
                 const filter = new FilterLift();
                 const ds = new DataService();
                 const search = "";
                 let trip: Trip ={origin:'Randers', destination:'Holte',availableSeats: 7, departureTime: new Date(), } as Trip ;
                 let trips = ds.tempData;
                 trips.push(trip);
                 // Act
                 const result = filter.transform(trips, search)
                 // ASsert(expect)
                 expect(result).toEqual(trips);
        
    
        });

        it('3.0: Search for destination but the data does not contain destination', () =>{
            // Arrange
            const filter = new FilterLift();
            const ds = new DataService();
            const search = 'hej';
            let trip: Trip ={origin:'Randers', destination: undefined ,availableSeats: 7, departureTime: new Date(), } as Trip ;
            let trips = ds.tempData;
            trips.push(trip);
            // Act
            const result = filter.transform(trips, search)
            // ASsert(expect)
            expect(result).toEqual([]);
        });
        
        it('3.1: Search for a negative number of seats ', () =>{
            // Arrange
            const filter = new FilterLift();
            const ds = new DataService();
            const search = "-4";
            let trip: Trip ={origin:'Randers', destination: undefined ,availableSeats: 7, departureTime: new Date(), } as Trip ;
            let trips = ds.tempData;
            trips.push(trip);
            // Act
            const result = filter.transform(trips, search)
            // ASsert(expect)
            expect(result).toEqual(trips);
        });
    });
