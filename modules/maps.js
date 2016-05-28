/**    the data of game.maps
 *
 */

// color[0] : bg & black
// color[i] : cope[i].color
var color   = ['white', 'cyan', 'red', 'yellow', 'Magenta'];
var imgFile = ['none.jpg', 'right.jpg', 'up.jpg', 'down.jpg', 'prog1.jpg', 'prog2.jpg', 'prog3.jpg', 'prog4.jpg'];

var levelData = {

    totLevel: 10,

    1 : {
        mapStart: [[0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 3,
            step  : 3
        }
    },
    2 : {
        mapStart: [[0, 0, 0, 0, 2, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 5,
            step  : 8
        }
    },
    3 : {
        mapStart: [[0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 2, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 2, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 10,
            step  : 23
        }
    },
    4 : {
        mapStart: [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 8,
            step  : 8
        }
    },
    5 : {
        mapStart: [[0, 0, 0, 0, 0, 0],
            [2, 1, 2, 1, 2, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 8,
            step  : 37
        }
    },
    6 : {
        mapStart: [[1, 2, 1, 2, 1, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 2, 2, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        scope   : {
            number: 12,
            step  : 34
        }
    },
    7 : {
        mapStart: [[0, 0, 1, 2, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 2, 3, 4]
        ],
        scope   : {
            number: 14,
            step  : 50
        }
    },
    8 : {
        mapStart: [[0, 0, 1, 2, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 2, 1]
        ],
        scope   : {
            number: 8,
            step  : 52
        }
    },
    9 : {
        mapStart: [[0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1, 1]
        ],
        scope   : {
            number: 9,
            step  : 90
        }
    },
    10: {
        mapStart: [[0, 0, 1, 2, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 2, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 2, 3, 4],
            [0, 0, 0, 0, 0, 0]
        ],
        mapGoal : [[0, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 2, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 2, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 4, 3, 2, 1]
        ],
        scope   : {
            number: 8,
            step  : 69
        }
    }
};

