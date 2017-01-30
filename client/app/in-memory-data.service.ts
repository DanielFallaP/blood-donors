import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let records = [
	  {id: '4543', type: 'firewall', owner: 'lina', state: 'Pending'},
      {id: '4560', type: 'firewall', owner: 'daniel', state: 'Pending'},
	  {id: 'Tenrox-R1_1234', type: 'build', owner: 'lina', state: 'Complete', timeStarted:1466623403000, metrics:2, build:2, unitTest:2, functionalTest:2},
	  {id: 'Tenrox-R1_1235', type: 'build', owner: 'daniel', state: 'Complete', timeStarted:1466571600000, metrics:2, build:2, unitTest:2, functionalTest:2},
	  {id: '4564', type: 'firewall', owner: 'mike', state: 'Pending'},
      {id: '4566', type: 'firewall', owner: 'lina', state: 'Accepted', timeStarted:1466623403000, metrics:2, build:2, unitTest:2, functionalTest:2},	  
	  {id: '4568', type: 'firewall', owner: 'miguel', state: 'Rejected', metrics:1, build:2, unitTest:2, functionalTest:1},
	  {id: '4571', type: 'firewall', owner: 'miguel', state: 'Running', metrics:3, timeStarted:1463874921000},
	  {id: '4572', type: 'firewall', owner: 'miguel', state: 'Running', metrics:3, timeStarted:1463874921000},
	  {id: '4573', type: 'firewall', owner: 'mike', state: 'Running', metrics:3, timeStarted:1463874921000},
	  {id: '4574', type: 'firewall', owner: 'miguel', state: 'Pending'},
	  {id: '4575', type: 'firewall', owner: 'daniel', state: 'Pending'}
	
	];
    return {records};
  }
}
