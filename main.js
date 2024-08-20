import { DiContainer } from './DiContainer.js';
import { Train } from './Train.js';
import { Passenger } from './Passenger.js';
import { Payment } from './Payment.js';
import { RailwayCompany } from './RailwayCompany.js';
import { Cancellation } from './Cancellation.js';
import { Booking } from './Booking.js';
import { BookingAgent } from './BookingAgent.js';
import { TrainStation } from './TrainStation.js';
import { PassengerTrain } from './PassengerTrain.js';
import { PassengerStation } from './PassengerStation.js';
import { Ticket } from './Ticket.js'; 
import { Station } from './Station.js'; 

// Create the Dependency Injection Container
const diContainer = new DiContainer();

// Register Dependencies
diContainer.register('station', new Station(1, 101, 'Ratnagiri'));
diContainer.register('ticket', new Ticket(4, 1, 2, '2024-08-30 15:00', 'Sawantwadi', 'Shivaji Nagar', 2000, 23));
diContainer.register('train', new Train(2, 23, 50, 'Ratnagiri', 'Pune', '2024-08-30 12:00'));
diContainer.register('passenger', new Passenger(3, 301, 'Janvi Mungekar', 'Sindhudurg'));
diContainer.register('payment', new Payment(4, 2, 'Cash', 2000, 2));
diContainer.register('railwayCompany', new RailwayCompany(5, 'MetroRail', 'New York', '2024-09-23'));
diContainer.register('cancellation', new Cancellation(6, 2, 2, '2024-08-09', 'Personal Reason'));
diContainer.register('booking', new Booking(7, 3, 2, 2, '2024-07-01', 2));
diContainer.register('bookingAgent', new BookingAgent(8, 'Janvi Mungekar', '345567854', 'mungekarjanvi@gmail.com', 'India'));
diContainer.register('trainStation', new TrainStation(9, 2, 101));
diContainer.register('passengerTrain', new PassengerTrain(10, 301, 2));
diContainer.register('passengerStation', new PassengerStation(11, 301, 101));

// Retrieve and use dependencies
const station = diContainer.get('station');
console.log(station.describe());

const ticket = diContainer.get('ticket');
console.log(ticket.showDetails());

const train = diContainer.get('train');
console.log(train.describe());

const passenger = diContainer.get('passenger');
console.log(passenger.describe());

const payment = diContainer.get('payment');
console.log(payment.describe());

const railwayCompany = diContainer.get('railwayCompany');
console.log(railwayCompany.describe());

const cancellation = diContainer.get('cancellation');
console.log(cancellation.describe());

const booking = diContainer.get('booking');
console.log(booking.describe());

const bookingAgent = diContainer.get('bookingAgent');
console.log(bookingAgent.describe());

const trainStation = diContainer.get('trainStation');
console.log(trainStation.describe());

const passengerTrain = diContainer.get('passengerTrain');
console.log(passengerTrain.describe());

const passengerStation = diContainer.get('passengerStation');
console.log(passengerStation.describe());
