import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 50125.94,
  },
  {
    title: "Orders",
    change: 14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Physics courses",
    type: "Illustration",
    items: '∞',
    change: 1000,
  },
  {
    name: "C# courses",
    type: "Illustration",
    items: '∞',
    change: 400
  },
  {
    name: "Java courses",
    type: "Illustration",
    items: 2,
    change: 300
  },
  {
    name: "JavaScript Courses",
    type: "Illustration",
    items: '∞',
    change: 150
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Lunch Pary',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states"
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description: "Setup react-kanban dep within Dashboard as seperate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


export const userData = [
  {
    name: { firstName: 'John', lastName: 'Doe' },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: { firstName: 'Jane', lastName: 'Doe' },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: { firstName: 'Alice', lastName: 'Smith' },
    address: '123 Apple St',
    city: 'New York',
    state: 'New York',
  },
  {
    name: { firstName: 'Bob', lastName: 'Johnson' },
    address: '456 Orange Ave',
    city: 'Los Angeles',
    state: 'California',
  },
  {
    name: { firstName: 'Charlie', lastName: 'Brown' },
    address: '789 Banana Blvd',
    city: 'Chicago',
    state: 'Illinois',
  },
  {
    name: { firstName: 'Diana', lastName: 'Prince' },
    address: '101 Maple Rd',
    city: 'Houston',
    state: 'Texas',
  },
  {
    name: { firstName: 'Edward', lastName: 'Cullen' },
    address: '202 Pine Ln',
    city: 'Phoenix',
    state: 'Arizona',
  },
  {
    name: { firstName: 'Fiona', lastName: 'Green' },
    address: '303 Cedar Ct',
    city: 'Philadelphia',
    state: 'Pennsylvania',
  },
  {
    name: { firstName: 'George', lastName: 'Washington' },
    address: '404 Willow Dr',
    city: 'San Antonio',
    state: 'Texas',
  },
  {
    name: { firstName: 'Hannah', lastName: 'Montana' },
    address: '505 Birch Pl',
    city: 'San Diego',
    state: 'California',
  },
  {
    name: { firstName: 'Ivy', lastName: 'League' },
    address: '606 Spruce St',
    city: 'Dallas',
    state: 'Texas',
  },
  {
    name: { firstName: 'James', lastName: 'Bond' },
    address: '707 Elm St',
    city: 'San Jose',
    state: 'California',
  },
  {
    name: { firstName: 'Kylie', lastName: 'Jenner' },
    address: '808 Ash Dr',
    city: 'Austin',
    state: 'Texas',
  },
  {
    name: { firstName: 'Luke', lastName: 'Skywalker' },
    address: '909 Maple Rd',
    city: 'Jacksonville',
    state: 'Florida',
  },
  {
    name: { firstName: 'Mia', lastName: 'Wallace' },
    address: '1200 Birch Pl',
    city: 'Fort Worth',
    state: 'Texas',
  },
  {
    name: { firstName: 'Nina', lastName: 'Simone' },
    address: '1313 Pine Ln',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: { firstName: 'Oscar', lastName: 'Wilde' },
    address: '1414 Palm St',
    city: 'Charlotte',
    state: 'North Carolina',
  },
  {
    name: { firstName: 'Paul', lastName: 'Atreides' },
    address: '1515 Maple Ln',
    city: 'San Francisco',
    state: 'California',
  },
  {
    name: { firstName: 'Quinn', lastName: 'Fabray' },
    address: '1616 Cedar Ct',
    city: 'Seattle',
    state: 'Washington',
  },
  {
    name: { firstName: 'Rachel', lastName: 'Green' },
    address: '1717 Walnut St',
    city: 'Denver',
    state: 'Colorado',
  },
  {
    name: { firstName: 'Steve', lastName: 'Rogers' },
    address: '1818 Maple Dr',
    city: 'Washington',
    state: 'DC',
  },
  {
    name: { firstName: 'Tina', lastName: 'Belcher' },
    address: '1919 Ash Ave',
    city: 'Detroit',
    state: 'Michigan',
  },
  {
    name: { firstName: 'Ursula', lastName: 'Andress' },
    address: '2020 Pine Blvd',
    city: 'Omaha',
    state: 'Nebraska',
  },
  {
    name: { firstName: 'Victor', lastName: 'Frankenstein' },
    address: '2121 Elm St',
    city: 'Virginia Beach',
    state: 'Virginia',
  },
  {
    name: { firstName: 'Wanda', lastName: 'Vision' },
    address: '2222 Oak Ct',
    city: 'Atlanta',
    state: 'Georgia',
  },
  {
    name: { firstName: 'Xander', lastName: 'Cage' },
    address: '2323 Palm Ln',
    city: 'Colorado Springs',
    state: 'Colorado',
  },
  {
    name: { firstName: 'Yara', lastName: 'Greyjoy' },
    address: '2424 Birch Pl',
    city: 'Kansas City',
    state: 'Missouri',
  },
  {
    name: { firstName: 'Zara', lastName: 'Larsson' },
    address: '2525 Cedar Dr',
    city: 'Long Beach',
    state: 'California',
  },
  {
    name: { firstName: 'Alex', lastName: 'Anderson' },
    address: '2626 Birch Ave',
    city: 'Bakersfield',
    state: 'California',
  },
  {
    name: { firstName: 'Bella', lastName: 'Swan' },
    address: '2727 Apple Dr',
    city: 'Tampa',
    state: 'Florida',
  },
  {
    name: { firstName: 'Charlie', lastName: 'Puth' },
    address: '2828 Cherry Ln',
    city: 'Henderson',
    state: 'Nevada',
  },
  {
    name: { firstName: 'Derek', lastName: 'Shepherd' },
    address: '2929 Walnut Ct',
    city: 'Stockton',
    state: 'California',
  },
  {
    name: { firstName: 'Eva', lastName: 'Green' },
    address: '3030 Elm Ave',
    city: 'Chula Vista',
    state: 'California',
  },
  {
    name: { firstName: 'Finn', lastName: 'Hudson' },
    address: '3131 Palm St',
    city: 'Fort Wayne',
    state: 'Indiana',
  },
  {
    name: { firstName: 'Gina', lastName: 'Rodriguez' },
    address: '3232 Oak St',
    city: 'Overland Park',
    state: 'Kansas',
  },
  {
    name: { firstName: 'Hugo', lastName: 'Weaving' },
    address: '3333 Cedar Ave',
    city: 'Knoxville',
    state: 'Tennessee',
  },
  {
    name: { firstName: 'Isla', lastName: 'Fisher' },
    address: '3434 Willow Way',
    city: 'Madison',
    state: 'Wisconsin',
  },
  {
    name: { firstName: 'Jake', lastName: 'Peralta' },
    address: '3535 Maple St',
    city: 'Baton Rouge',
    state: 'Louisiana',
  },
  {
    name: { firstName: 'Kendall', lastName: 'Jenner' },
    address: '3636 Pine Ct',
    city: 'Aurora',
    state: 'Colorado',
  },
  {
    name: { firstName: 'Liam', lastName: 'Neeson' },
    address: '3737 Spruce Ln',
    city: 'Santa Ana',
    state: 'California',
  },
  {
    name: { firstName: 'Mona', lastName: 'Lisa' },
    address: '3838 Oak Blvd',
    city: 'Raleigh',
    state: 'North Carolina',
  },
  {
    name: { firstName: 'Nolan', lastName: 'North' },
    address: '3939 Elm Dr',
    city: 'Virginia Beach',
    state: 'Virginia',
  },
  {
    name: { firstName: 'Oliver', lastName: 'Twist' },
    address: '4040 Cherry St',
    city: 'Huntington Beach',
    state: 'California',
  },
  {
    name: { firstName: 'Piper', lastName: 'Chapman' },
    address: '4141 Birch Rd',
    city: 'Mobile',
    state: 'Alabama',
  },
  {
    name: { firstName: 'Quentin', lastName: 'Tarantino' },
    address: '4242 Cedar St',
    city: 'Grand Rapids',
    state: 'Michigan',
  },
  {
    name: { firstName: 'Riley', lastName: 'Reid' },
    address: '4343 Pine Ln',
    city: 'Sioux Falls',
    state: 'South Dakota',
  },
];

