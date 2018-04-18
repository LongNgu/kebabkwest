'use strict';
/**
 * This is dummy data for kebab shops to get the prototype up and running.
 * You should be able to add new items to this list and they'll shop up on the map.
 */

const KebabShopTestData = [
    {
        id: 1,
        name: 'Turkish Halal Pide House Yarralumla',
        mainImageUrl: 'img/yarra.png',
        latitude: -35.3073036,
        longitude: 149.0980729,
        currentAverageRating: 5,
        numberofRatings: 42,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: [
            {author: 'Rob', time: '...', comment: 'Kebab was brilliant.'},
            {author: 'Rob', time: '...', comment: "I can't stop eating them."},
            {author: 'Rob', time: '...', comment: "I have to buy new pants this weekend."}
        ]
    },
    {
        id: 2,
        name: 'Charnwood Turkish Pide',
        mainImageUrl: 'img/charnwood.png',
        latitude: -35.2047226,
        longitude: 149.0342812,
        currentAverageRating: 4,
        numberofRatings: 12,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: []
    },
    {
        id: 3,
        name: "Aberdeen's Finest Kebabs",
        mainImageUrl: 'img/Kebab1.jpg',
        latitude: 57.149468,
        longitude: -2.077112,
        currentAverageRating: 2,
        numberofRatings: 41,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: [
            {author: 'Al', time: '...', comment: 'Ate the whole thing.'},
        ]
    },
    {
        id: 4,
        name: 'Union Street, Kebabs to eat',
        mainImageUrl: 'img/kebabshop2.jpg',
        latitude: 57.145464,
        longitude: -2.102926,
        currentAverageRating: 3,
        numberofRatings: 112,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: [
            {author: 'Al', time: '...', comment: 'Still alive.'},
        ]
    },
    {
        id: 5,
        name: 'Rosemount Queue and Spew',
        mainImageUrl: 'img/kebabshop3.jpg',
        latitude: 57.150566,
        longitude: -2.111747,
        currentAverageRating: 5,
        numberofRatings: 43,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: [
            {author: 'Al', time: '...', comment: 'Does what it says on the tin.'},
        ]
    }
];
