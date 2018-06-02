const TEST_FIELD_DATA = {
    'f1': {
        'keywords': ['f1_k1', 'f1_k2', 'f1_k3']
    },
    'f2': {
        'keywords': ['f2_k1', 'f2_k2', 'f2_k3', 'react', 'ECMA']
    },
    'f3': {
        'keywords': ['f3_k1', 'f3_k2', 'f3_k3']
    },
    'f4': {
        'keywords': ['f4_k1', 'f4_k2', 'f4_k3']
    },
    'f5': {
        'keywords': ['f5_k1', 'f5_k2', 'f5_k3']
    }
};

const TEST_USER_DATA = {
    'd1': {
        'id': 'd1',
        'name': "tj",
        'star': 48057,
        'related_keyword': { 'f1_k1': 10, 'f1_k2': 15, 'f1_k3': 8, 'f2_k1': 4, 'f5_k3': 3 }
    },
    'd2': {
        'id': 'd2',
        'name': "jake",
        'star': 230393,
        'related_keyword': { 'f1_k1': 13, 'f1_k2': 25, 'f1_k3': 18, 'f2_k1': 6, 'f2_k2': 6, 'f4_k3': 3, 'f5_k3': 3 }
    },
    'd3': {
        'id': 'd3',
        'name': "tpope",
        'star': 60350,
        'related_keyword': { 'f1_k1': 8, 'f1_k2': 12, 'f1_k3': 28, 'f2_k2': 3 }
    },
    'd4': {
        'id': 'd4',
        'name': "june",
        'star': 124030,
        'related_keyword': { 'f1_k2': 6, 'f2_k1': 6, 'f2_k2': 35, 'f2_k3': 18, 'f3_k1': 6, 'f3_k2': 1 }
    },
    'd5': {
        'id': 'd5',
        'name': "flowoo",
        'star': 58035,
        'related_keyword': { 'f1_k3': 8, 'f2_k1': 13, 'f2_k2': 18, 'f2_k3': 10, 'f3_k1': 6 }
    },
    'd6': {
        'id': 'd6',
        'name': "antirez",
        'star': 72412,
        'related_keyword': { 'f2_k1': 12, 'f2_k2': 15, 'f2_k3': 21, 'f3_k3': 2 }
    },
    'd7': {
        'id': 'd7',
        'name': "jlevy",
        'star': 74805,
        'related_keyword': { 'f2_k3': 3, 'f3_k1': 19, 'f3_k2': 10, 'f3_k3': 6, 'f4_k1': 11 }
    },
    'd8': {
        'id': 'd8',
        'name': "sahat",
        'star': 62412,
        'related_keyword': { 'f2_k2': 2, 'f3_k1': 21, 'f3_k2': 7, 'f3_k3': 1, 'f4_k1': 3 }
    },
    'd9': {
        'id': 'd9',
        'name': "hukie",
        'star': 86408,
        'related_keyword': { 'f3_k1': 11, 'f3_k2': 27, 'f3_k3': 18, 'f4_k2': 2, 'f4_k3': 1 }
    },
    'd10': {
        'id': 'd10',
        'name': "chanhee",
        'star': 66094,
        'related_keyword': { 'f3_k3': 7, 'f4_k1': 13, 'f4_k2': 15, 'f4_k3': 6, 'f5_k1': 1 }
    },
    'd11': {
        'id': 'd11',
        'name': "CyCl",
        'star': 172412,
        'related_keyword': { 'f3_k2': 5, 'f4_k1': 10, 'f4_k2': 17, 'f5_k3': 10, 'f5_k2': 8 }
    },
    'd12': {
        'id': 'd12',
        'name': "ryanb",
        'star': 72412,
        'related_keyword': { 'f3_k3': 1, 'f4_k1': 23, 'f4_k2': 15, 'f4_k3': 7, 'f5_k1': 4 }
    },
    'd13': {
        'id': 'd13',
        'name': "spfe3",
        'star': 42803,
        'related_keyword': { 'f4_k3': 10, 'f5_k1': 15, 'f5_k2': 8, 'f5_k3': 4, 'f1_k2': 1 }
    },
    'd14': {
        'id': 'd14',
        'name': "erikas",
        'star': 63701,
        'related_keyword': { 'f4_k3': 4, 'f5_k1': 23, 'f5_k2': 18, 'f5_k3': 12, 'f1_k1': 2 }
    },
    'd15': {
        'id': 'd15',
        'name': "mechive",
        'star': 49329,
        'related_keyword': { 'f5_k1': 19, 'f5_k2': 6, 'f5_k3': 12, 'f1_k1': 8 }
    },
    'd16': {
        'id': 'd16',
        'name': "xyxye",
        'star': 66930,
        'related_keyword': { 'f5_k3': 4, 'f5_k1': 13, 'f5_k2': 18, 'f1_k3': 2, 'f2_k1': 2 }
    },
    'd17': {
        'id': 'd17',
        'name': "ukaia",
        'star': 42101,
        'related_keyword': { 'f5_k1': 8, 'f5_k2': 3, 'f5_k3': 7, 'f1_k2': 13 }
    },
    'd18': {
        'id': 'd18',
        'name': "tloko",
        'star': 93002,
        'related_keyword': { 'f1_k3': 18, 'f2_k1': 6, 'f2_k2': 18, 'f2_k3': 10, 'f3_k1': 6, 'f5_k1': 12, 'f5_k2': 8 }
    },
    'd19': {
        'id': 'd19',
        'name': "feili",
        'star': 70921,
        'related_keyword': { 'f2_k1': 18, 'f2_k2': 23, 'f2_k3': 27, 'f3_k2': 13, 'f4_k1': 12 }
    },
    'd20': {
        'id': 'd20',
        'name': "linlen",
        'star': 110801,
        'related_keyword': { 'f2_k3': 11, 'f3_k1': 16, 'f3_k2': 18, 'f4_k3': 30, 'f4_k2': 12, 'f5_k1': 12, 'f5_k2': 18 }
    }
};

const TEST_LINK_DATA = {
    'l1': {
        start: 'd10',
        end: 'd11'
    },
    'l2': {
        start: 'd10',
        end: 'd20'
    },
    'l3': {
        start: 'd4',
        end: 'd6'
    },
    'l4': {
        start: 'd1',
        end: 'd2'
    },
    'l5': {
        start: 'd2',
        end: 'd3'
    },
    'l6': {
        start: 'd2',
        end: 'd18'
    },
    'l7': {
        start: 'd4',
        end: 'd18'
    },
    'l8': {
        start: 'd11',
        end: 'd18'
    },
    'l9': {
        start: 'd11',
        end: 'd20'
    },
    'l10': {
        start: 'd7',
        end: 'd9'
    },
    'l11': {
        start: 'd10',
        end: 'd12'
    },
    'l12': {
        start: 'd14',
        end: 'd16'
    },
    'l13': {
        start: 'd15',
        end: 'd16'
    }
};

let TEST_PROJECT_DATA = {
    "8514": {
        "id": 8514,
        "name": "rails",
        "full_name": "rails/rails",
        "owner_name": "rails",
        "owner_id": 4223,
        "star": 39781,
        "users": "https://api.github.com/repos/rails/rails/contributors",
        "commit": "https://api.github.com/repos/rails/rails/commits{/sha}",
        "create_date": "2008-04-11T02:19:47Z",
        "update_date": "2018-05-31T15:55:15Z",
        "language": "Ruby"
    },
    "65252": {
        "id": 65252,
        "name": "jekyll",
        "full_name": "jekyll/jekyll",
        "owner_name": "jekyll",
        "owner_id": 3083652,
        "star": 34430,
        "users": "https://api.github.com/repos/jekyll/jekyll/contributors",
        "commit": "https://api.github.com/repos/jekyll/jekyll/commits{/sha}",
        "create_date": "2008-10-20T06:29:03Z",
        "update_date": "2018-05-31T16:55:54Z",
        "language": "Ruby"
    },
    "156018": {
        "id": 156018,
        "name": "redis",
        "full_name": "antirez/redis",
        "owner_name": "antirez",
        "owner_id": 65632,
        "star": 29316,
        "users": "https://api.github.com/repos/antirez/redis/contributors",
        "commit": "https://api.github.com/repos/antirez/redis/commits{/sha}",
        "create_date": "2009-03-21T22:32:25Z",
        "update_date": "2018-05-31T17:00:09Z",
        "language": "C"
    },
    "167174": {
        "id": 167174,
        "name": "jquery",
        "full_name": "jquery/jquery",
        "owner_name": "jquery",
        "owner_id": 70142,
        "star": 49092,
        "users": "https://api.github.com/repos/jquery/jquery/contributors",
        "commit": "https://api.github.com/repos/jquery/jquery/commits{/sha}",
        "create_date": "2009-04-03T15:20:14Z",
        "update_date": "2018-05-31T15:18:19Z",
        "language": "JavaScript"
    },
    "206084": {
        "id": 206084,
        "name": "legacy-homebrew",
        "full_name": "Homebrew/legacy-homebrew",
        "owner_name": "Homebrew",
        "owner_id": 1503512,
        "star": 28486,
        "users": "https://api.github.com/repos/Homebrew/legacy-homebrew/contributors",
        "commit": "https://api.github.com/repos/Homebrew/legacy-homebrew/commits{/sha}",
        "create_date": "2009-05-20T19:38:37Z",
        "update_date": "2018-05-31T10:37:19Z",
        "language": "Ruby"
    },
    "237159": {
        "id": 237159,
        "name": "express",
        "full_name": "expressjs/express",
        "owner_name": "expressjs",
        "owner_id": 5658226,
        "star": 38552,
        "users": "https://api.github.com/repos/expressjs/express/contributors",
        "commit": "https://api.github.com/repos/expressjs/express/commits{/sha}",
        "create_date": "2009-06-26T18:56:01Z",
        "update_date": "2018-05-31T16:04:56Z",
        "language": "JavaScript"
    },
    "291137": {
        "id": 291137,
        "name": "oh-my-zsh",
        "full_name": "robbyrussell/oh-my-zsh",
        "owner_name": "robbyrussell",
        "owner_id": 257,
        "star": 71218,
        "users": "https://api.github.com/repos/robbyrussell/oh-my-zsh/contributors",
        "commit": "https://api.github.com/repos/robbyrussell/oh-my-zsh/commits{/sha}",
        "create_date": "2009-08-28T18:15:37Z",
        "update_date": "2018-05-31T17:00:58Z",
        "language": "Shell"
    },
    "460078": {
        "id": 460078,
        "name": "angular.js",
        "full_name": "angular/angular.js",
        "owner_name": "angular",
        "owner_id": 139426,
        "star": 58548,
        "users": "https://api.github.com/repos/angular/angular.js/contributors",
        "commit": "https://api.github.com/repos/angular/angular.js/commits{/sha}",
        "create_date": "2010-01-06T00:34:37Z",
        "update_date": "2018-05-31T16:54:58Z",
        "language": "JavaScript"
    },
    "486550": {
        "id": 486550,
        "name": "html5-boilerplate",
        "full_name": "h5bp/html5-boilerplate",
        "owner_name": "h5bp",
        "owner_id": 1136800,
        "star": 40630,
        "users": "https://api.github.com/repos/h5bp/html5-boilerplate/contributors",
        "commit": "https://api.github.com/repos/h5bp/html5-boilerplate/commits{/sha}",
        "create_date": "2010-01-24T18:03:24Z",
        "update_date": "2018-05-31T16:23:41Z",
        "language": "JavaScript"
    },
    "507775": {
        "id": 507775,
        "name": "elasticsearch",
        "full_name": "elastic/elasticsearch",
        "owner_name": "elastic",
        "owner_id": 6764390,
        "star": 31368,
        "users": "https://api.github.com/repos/elastic/elasticsearch/contributors",
        "commit": "https://api.github.com/repos/elastic/elasticsearch/commits{/sha}",
        "create_date": "2010-02-08T13:20:56Z",
        "update_date": "2018-05-31T17:10:44Z",
        "language": "Java"
    },
    "557980": {
        "id": 557980,
        "name": "socket.io",
        "full_name": "socketio/socket.io",
        "owner_name": "socketio",
        "owner_id": 10566080,
        "star": 41828,
        "users": "https://api.github.com/repos/socketio/socket.io/contributors",
        "commit": "https://api.github.com/repos/socketio/socket.io/commits{/sha}",
        "create_date": "2010-03-11T18:24:48Z",
        "update_date": "2018-05-31T16:48:13Z",
        "language": "JavaScript"
    },
    "576201": {
        "id": 576201,
        "name": "three.js",
        "full_name": "mrdoob/three.js",
        "owner_name": "mrdoob",
        "owner_id": 97088,
        "star": 42180,
        "users": "https://api.github.com/repos/mrdoob/three.js/contributors",
        "commit": "https://api.github.com/repos/mrdoob/three.js/commits{/sha}",
        "create_date": "2010-03-23T18:58:01Z",
        "update_date": "2018-05-31T16:52:34Z",
        "language": "JavaScript"
    },
    "596892": {
        "id": 596892,
        "name": "flask",
        "full_name": "pallets/flask",
        "owner_name": "pallets",
        "owner_id": 16748505,
        "star": 36233,
        "users": "https://api.github.com/repos/pallets/flask/contributors",
        "commit": "https://api.github.com/repos/pallets/flask/commits{/sha}",
        "create_date": "2010-04-06T11:11:59Z",
        "update_date": "2018-05-31T16:10:37Z",
        "language": "Python"
    },
    "724712": {
        "id": 724712,
        "name": "rust",
        "full_name": "rust-lang/rust",
        "owner_name": "rust-lang",
        "owner_id": 5430905,
        "star": 28526,
        "users": "https://api.github.com/repos/rust-lang/rust/contributors",
        "commit": "https://api.github.com/repos/rust-lang/rust/commits{/sha}",
        "create_date": "2010-06-16T20:39:03Z",
        "update_date": "2018-05-31T17:18:49Z",
        "language": "Rust"
    },
    "892275": {
        "id": 892275,
        "name": "retrofit",
        "full_name": "square/retrofit",
        "owner_name": "square",
        "owner_id": 82592,
        "star": 28109,
        "users": "https://api.github.com/repos/square/retrofit/contributors",
        "commit": "https://api.github.com/repos/square/retrofit/commits{/sha}",
        "create_date": "2010-09-06T21:39:43Z",
        "update_date": "2018-05-31T16:15:43Z",
        "language": "Java"
    },
    "943149": {
        "id": 943149,
        "name": "d3",
        "full_name": "d3/d3",
        "owner_name": "d3",
        "owner_id": 1562726,
        "star": 76162,
        "users": "https://api.github.com/repos/d3/d3/contributors",
        "commit": "https://api.github.com/repos/d3/d3/commits{/sha}",
        "create_date": "2010-09-27T17:22:42Z",
        "update_date": "2018-05-31T16:42:58Z",
        "language": "JavaScript"
    },
    "952189": {
        "id": 952189,
        "name": "backbone",
        "full_name": "jashkenas/backbone",
        "owner_name": "jashkenas",
        "owner_id": 4732,
        "star": 27196,
        "users": "https://api.github.com/repos/jashkenas/backbone/contributors",
        "commit": "https://api.github.com/repos/jashkenas/backbone/commits{/sha}",
        "create_date": "2010-09-30T19:41:28Z",
        "update_date": "2018-05-31T14:24:50Z",
        "language": "JavaScript"
    },
    "1039520": {
        "id": 1039520,
        "name": "youtube-dl",
        "full_name": "rg3/youtube-dl",
        "owner_name": "rg3",
        "owner_id": 53487,
        "star": 37356,
        "users": "https://api.github.com/repos/rg3/youtube-dl/contributors",
        "commit": "https://api.github.com/repos/rg3/youtube-dl/commits{/sha}",
        "create_date": "2010-10-31T14:35:07Z",
        "update_date": "2018-05-31T17:37:34Z",
        "language": "Python"
    },
    "1062897": {
        "id": 1062897,
        "name": "gitignore",
        "full_name": "github/gitignore",
        "owner_name": "github",
        "owner_id": 9919,
        "star": 67765,
        "users": "https://api.github.com/repos/github/gitignore/contributors",
        "commit": "https://api.github.com/repos/github/gitignore/commits{/sha}",
        "create_date": "2010-11-08T20:17:14Z",
        "update_date": "2018-05-31T17:12:01Z",
        "language": null
    },
    "1129010": {
        "id": 1129010,
        "name": "jQuery-File-Upload",
        "full_name": "blueimp/jQuery-File-Upload",
        "owner_name": "blueimp",
        "owner_id": 244586,
        "star": 28786,
        "users": "https://api.github.com/repos/blueimp/jQuery-File-Upload/contributors",
        "commit": "https://api.github.com/repos/blueimp/jQuery-File-Upload/commits{/sha}",
        "create_date": "2010-12-01T15:35:32Z",
        "update_date": "2018-05-31T14:37:53Z",
        "language": "JavaScript"
    },
    "1334369": {
        "id": 1334369,
        "name": "resume.github.com",
        "full_name": "resume/resume.github.com",
        "owner_name": "resume",
        "owner_id": 602612,
        "star": 36431,
        "users": "https://api.github.com/repos/resume/resume.github.com/contributors",
        "commit": "https://api.github.com/repos/resume/resume.github.com/commits{/sha}",
        "create_date": "2011-02-06T13:39:55Z",
        "update_date": "2018-05-31T16:18:52Z",
        "language": "JavaScript"
    },
    "1362490": {
        "id": 1362490,
        "name": "requests",
        "full_name": "requests/requests",
        "owner_name": "requests",
        "owner_id": 2805331,
        "star": 32678,
        "users": "https://api.github.com/repos/requests/requests/contributors",
        "commit": "https://api.github.com/repos/requests/requests/commits{/sha}",
        "create_date": "2011-02-13T18:38:17Z",
        "update_date": "2018-05-31T16:21:45Z",
        "language": "Python"
    },
    "1380117": {
        "id": 1380117,
        "name": "lantern",
        "full_name": "getlantern/lantern",
        "owner_name": "getlantern",
        "owner_id": 624178,
        "star": 35157,
        "users": "https://api.github.com/repos/getlantern/lantern/contributors",
        "commit": "https://api.github.com/repos/getlantern/lantern/commits{/sha}",
        "create_date": "2011-02-17T22:12:29Z",
        "update_date": "2018-05-31T16:38:39Z",
        "language": "Go"
    },
    "1424470": {
        "id": 1424470,
        "name": "moment",
        "full_name": "moment/moment",
        "owner_name": "moment",
        "owner_id": 4129662,
        "star": 37176,
        "users": "https://api.github.com/repos/moment/moment/contributors",
        "commit": "https://api.github.com/repos/moment/moment/commits{/sha}",
        "create_date": "2011-03-01T02:46:06Z",
        "update_date": "2018-05-31T17:14:49Z",
        "language": "JavaScript"
    },
    "1700621": {
        "id": 1700621,
        "name": "normalize.css",
        "full_name": "necolas/normalize.css",
        "owner_name": "necolas",
        "owner_id": 239676,
        "star": 31194,
        "users": "https://api.github.com/repos/necolas/normalize.css/contributors",
        "commit": "https://api.github.com/repos/necolas/normalize.css/commits{/sha}",
        "create_date": "2011-05-04T10:20:25Z",
        "update_date": "2018-05-31T16:18:55Z",
        "language": "CSS"
    },
    "1828795": {
        "id": 1828795,
        "name": "AFNetworking",
        "full_name": "AFNetworking/AFNetworking",
        "owner_name": "AFNetworking",
        "owner_id": 1181541,
        "star": 31134,
        "users": "https://api.github.com/repos/AFNetworking/AFNetworking/contributors",
        "commit": "https://api.github.com/repos/AFNetworking/AFNetworking/commits{/sha}",
        "create_date": "2011-05-31T21:28:44Z",
        "update_date": "2018-05-31T16:03:07Z",
        "language": "Objective-C"
    },
    "1861458": {
        "id": 1861458,
        "name": "reveal.js",
        "full_name": "hakimel/reveal.js",
        "owner_name": "hakimel",
        "owner_id": 629429,
        "star": 40752,
        "users": "https://api.github.com/repos/hakimel/reveal.js/contributors",
        "commit": "https://api.github.com/repos/hakimel/reveal.js/commits{/sha}",
        "create_date": "2011-06-07T18:54:22Z",
        "update_date": "2018-05-31T16:38:07Z",
        "language": "JavaScript"
    },
    "1863329": {
        "id": 1863329,
        "name": "laravel",
        "full_name": "laravel/laravel",
        "owner_name": "laravel",
        "owner_id": 958072,
        "star": 43334,
        "users": "https://api.github.com/repos/laravel/laravel/contributors",
        "commit": "https://api.github.com/repos/laravel/laravel/commits{/sha}",
        "create_date": "2011-06-08T03:06:08Z",
        "update_date": "2018-05-31T17:37:35Z",
        "language": "PHP"
    },
    "2126244": {
        "id": 2126244,
        "name": "bootstrap",
        "full_name": "twbs/bootstrap",
        "owner_name": "twbs",
        "owner_id": 2918581,
        "star": 125020,
        "users": "https://api.github.com/repos/twbs/bootstrap/contributors",
        "commit": "https://api.github.com/repos/twbs/bootstrap/commits{/sha}",
        "create_date": "2011-07-29T21:19:00Z",
        "update_date": "2018-05-31T16:38:32Z",
        "language": "CSS"
    },
    "2325298": {
        "id": 2325298,
        "name": "linux",
        "full_name": "torvalds/linux",
        "owner_name": "torvalds",
        "owner_id": 1024025,
        "star": 59206,
        "users": "https://api.github.com/repos/torvalds/linux/contributors",
        "commit": "https://api.github.com/repos/torvalds/linux/commits{/sha}",
        "create_date": "2011-09-04T22:48:12Z",
        "update_date": "2018-05-31T17:21:13Z",
        "language": "C"
    },
    "2561582": {
        "id": 2561582,
        "name": "animate.css",
        "full_name": "daneden/animate.css",
        "owner_name": "daneden",
        "owner_id": 439365,
        "star": 51809,
        "users": "https://api.github.com/repos/daneden/animate.css/contributors",
        "commit": "https://api.github.com/repos/daneden/animate.css/commits{/sha}",
        "create_date": "2011-10-12T10:07:38Z",
        "update_date": "2018-05-31T16:07:42Z",
        "language": "CSS"
    },
    "2573058": {
        "id": 2573058,
        "name": "foundation-sites",
        "full_name": "zurb/foundation-sites",
        "owner_name": "zurb",
        "owner_id": 156122,
        "star": 27356,
        "users": "https://api.github.com/repos/zurb/foundation-sites/contributors",
        "commit": "https://api.github.com/repos/zurb/foundation-sites/commits{/sha}",
        "create_date": "2011-10-13T23:05:42Z",
        "update_date": "2018-05-31T15:21:56Z",
        "language": "HTML"
    },
    "2935735": {
        "id": 2935735,
        "name": "brackets",
        "full_name": "adobe/brackets",
        "owner_name": "adobe",
        "owner_id": 476009,
        "star": 28993,
        "users": "https://api.github.com/repos/adobe/brackets/contributors",
        "commit": "https://api.github.com/repos/adobe/brackets/commits{/sha}",
        "create_date": "2011-12-07T21:14:40Z",
        "update_date": "2018-05-31T17:37:36Z",
        "language": "JavaScript"
    },
    "3065454": {
        "id": 3065454,
        "name": "impress.js",
        "full_name": "impress/impress.js",
        "owner_name": "impress",
        "owner_id": 5477410,
        "star": 33609,
        "users": "https://api.github.com/repos/impress/impress.js/contributors",
        "commit": "https://api.github.com/repos/impress/impress.js/commits{/sha}",
        "create_date": "2011-12-28T22:23:19Z",
        "update_date": "2018-05-31T15:33:18Z",
        "language": "JavaScript"
    },
    "3100121": {
        "id": 3100121,
        "name": "nw.js",
        "full_name": "nwjs/nw.js",
        "owner_name": "nwjs",
        "owner_id": 10180421,
        "star": 33805,
        "users": "https://api.github.com/repos/nwjs/nw.js/contributors",
        "commit": "https://api.github.com/repos/nwjs/nw.js/commits{/sha}",
        "create_date": "2012-01-04T06:21:10Z",
        "update_date": "2018-05-31T14:13:03Z",
        "language": "C++"
    },
    "3214406": {
        "id": 3214406,
        "name": "meteor",
        "full_name": "meteor/meteor",
        "owner_name": "meteor",
        "owner_id": 789528,
        "star": 39855,
        "users": "https://api.github.com/repos/meteor/meteor/contributors",
        "commit": "https://api.github.com/repos/meteor/meteor/commits{/sha}",
        "create_date": "2012-01-19T01:58:17Z",
        "update_date": "2018-05-31T14:06:12Z",
        "language": "JavaScript"
    },
    "3228505": {
        "id": 3228505,
        "name": "atom",
        "full_name": "atom/atom",
        "owner_name": "atom",
        "owner_id": 1089146,
        "star": 45113,
        "users": "https://api.github.com/repos/atom/atom/contributors",
        "commit": "https://api.github.com/repos/atom/atom/commits{/sha}",
        "create_date": "2012-01-20T18:18:21Z",
        "update_date": "2018-05-31T17:36:05Z",
        "language": "JavaScript"
    },
    "3402537": {
        "id": 3402537,
        "name": "Front-end-Developer-Interview-Questions",
        "full_name": "h5bp/Front-end-Developer-Interview-Questions",
        "owner_name": "h5bp",
        "owner_id": 1136800,
        "star": 35238,
        "users": "https://api.github.com/repos/h5bp/Front-end-Developer-Interview-Questions/contributors",
        "commit": "https://api.github.com/repos/h5bp/Front-end-Developer-Interview-Questions/commits{/sha}",
        "create_date": "2012-02-09T23:34:10Z",
        "update_date": "2018-05-31T17:21:07Z",
        "language": null
    },
    "3470471": {
        "id": 3470471,
        "name": "Font-Awesome",
        "full_name": "FortAwesome/Font-Awesome",
        "owner_name": "FortAwesome",
        "owner_id": 1505683,
        "star": 56500,
        "users": "https://api.github.com/repos/FortAwesome/Font-Awesome/contributors",
        "commit": "https://api.github.com/repos/FortAwesome/Font-Awesome/commits{/sha}",
        "create_date": "2012-02-17T14:19:43Z",
        "update_date": "2018-05-31T17:22:18Z",
        "language": "CSS"
    },
    "3544424": {
        "id": 3544424,
        "name": "httpie",
        "full_name": "jakubroztocil/httpie",
        "owner_name": "jakubroztocil",
        "owner_id": 326885,
        "star": 35540,
        "users": "https://api.github.com/repos/jakubroztocil/httpie/contributors",
        "commit": "https://api.github.com/repos/jakubroztocil/httpie/commits{/sha}",
        "create_date": "2012-02-25T12:39:13Z",
        "update_date": "2018-05-31T16:58:39Z",
        "language": "Python"
    },
    "3638964": {
        "id": 3638964,
        "name": "ansible",
        "full_name": "ansible/ansible",
        "owner_name": "ansible",
        "owner_id": 1507452,
        "star": 30524,
        "users": "https://api.github.com/repos/ansible/ansible/contributors",
        "commit": "https://api.github.com/repos/ansible/ansible/commits{/sha}",
        "create_date": "2012-03-06T14:58:02Z",
        "update_date": "2018-05-31T17:30:07Z",
        "language": "Python"
    },
    "3678731": {
        "id": 3678731,
        "name": "webpack",
        "full_name": "webpack/webpack",
        "owner_name": "webpack",
        "owner_id": 2105791,
        "star": 41294,
        "users": "https://api.github.com/repos/webpack/webpack/contributors",
        "commit": "https://api.github.com/repos/webpack/webpack/commits{/sha}",
        "create_date": "2012-03-10T10:08:14Z",
        "update_date": "2018-05-31T17:35:02Z",
        "language": "JavaScript"
    },
    "3955647": {
        "id": 3955647,
        "name": "lodash",
        "full_name": "lodash/lodash",
        "owner_name": "lodash",
        "owner_id": 2565403,
        "star": 32087,
        "users": "https://api.github.com/repos/lodash/lodash/contributors",
        "commit": "https://api.github.com/repos/lodash/lodash/commits{/sha}",
        "create_date": "2012-04-07T04:11:46Z",
        "update_date": "2018-05-31T16:39:55Z",
        "language": "JavaScript"
    },
    "4164482": {
        "id": 4164482,
        "name": "django",
        "full_name": "django/django",
        "owner_name": "django",
        "owner_id": 27804,
        "star": 34231,
        "users": "https://api.github.com/repos/django/django/contributors",
        "commit": "https://api.github.com/repos/django/django/commits{/sha}",
        "create_date": "2012-04-28T02:47:18Z",
        "update_date": "2018-05-31T16:12:23Z",
        "language": "Python"
    },
    "5152285": {
        "id": 5152285,
        "name": "okhttp",
        "full_name": "square/okhttp",
        "owner_name": "square",
        "owner_id": 82592,
        "star": 26891,
        "users": "https://api.github.com/repos/square/okhttp/contributors",
        "commit": "https://api.github.com/repos/square/okhttp/commits{/sha}",
        "create_date": "2012-07-23T13:42:55Z",
        "update_date": "2018-05-31T16:01:41Z",
        "language": "Java"
    },
    "6498492": {
        "id": 6498492,
        "name": "javascript",
        "full_name": "airbnb/javascript",
        "owner_name": "airbnb",
        "owner_id": 698437,
        "star": 71508,
        "users": "https://api.github.com/repos/airbnb/javascript/contributors",
        "commit": "https://api.github.com/repos/airbnb/javascript/commits{/sha}",
        "create_date": "2012-11-01T23:13:50Z",
        "update_date": "2018-05-31T17:35:54Z",
        "language": "JavaScript"
    },
    "7508411": {
        "id": 7508411,
        "name": "RxJava",
        "full_name": "ReactiveX/RxJava",
        "owner_name": "ReactiveX",
        "owner_id": 6407041,
        "star": 33335,
        "users": "https://api.github.com/repos/ReactiveX/RxJava/contributors",
        "commit": "https://api.github.com/repos/ReactiveX/RxJava/commits{/sha}",
        "create_date": "2013-01-08T20:11:48Z",
        "update_date": "2018-05-31T16:16:46Z",
        "language": "Java"
    },
    "7691631": {
        "id": 7691631,
        "name": "moby",
        "full_name": "moby/moby",
        "owner_name": "moby",
        "owner_id": 27259197,
        "star": 49086,
        "users": "https://api.github.com/repos/moby/moby/contributors",
        "commit": "https://api.github.com/repos/moby/moby/commits{/sha}",
        "create_date": "2013-01-18T18:10:57Z",
        "update_date": "2018-05-31T15:32:49Z",
        "language": "Go"
    },
    "8843683": {
        "id": 8843683,
        "name": "Chart.js",
        "full_name": "chartjs/Chart.js",
        "owner_name": "chartjs",
        "owner_id": 10342521,
        "star": 37034,
        "users": "https://api.github.com/repos/chartjs/Chart.js/contributors",
        "commit": "https://api.github.com/repos/chartjs/Chart.js/commits{/sha}",
        "create_date": "2013-03-17T23:56:36Z",
        "update_date": "2018-05-31T16:43:14Z",
        "language": "JavaScript"
    },
    "9185792": {
        "id": 9185792,
        "name": "incubator-echarts",
        "full_name": "apache/incubator-echarts",
        "owner_name": "apache",
        "owner_id": 47359,
        "star": 27957,
        "users": "https://api.github.com/repos/apache/incubator-echarts/contributors",
        "commit": "https://api.github.com/repos/apache/incubator-echarts/commits{/sha}",
        "create_date": "2013-04-03T03:18:59Z",
        "update_date": "2018-05-31T14:56:01Z",
        "language": "JavaScript"
    },
    "9309093": {
        "id": 9309093,
        "name": "Semantic-UI",
        "full_name": "Semantic-Org/Semantic-UI",
        "owner_name": "Semantic-Org",
        "owner_id": 5796209,
        "star": 41421,
        "users": "https://api.github.com/repos/Semantic-Org/Semantic-UI/contributors",
        "commit": "https://api.github.com/repos/Semantic-Org/Semantic-UI/commits{/sha}",
        "create_date": "2013-04-08T23:32:04Z",
        "update_date": "2018-05-31T17:15:35Z",
        "language": "JavaScript"
    },
    "9384267": {
        "id": 9384267,
        "name": "electron",
        "full_name": "electron/electron",
        "owner_name": "electron",
        "owner_id": 13409222,
        "star": 60693,
        "users": "https://api.github.com/repos/electron/electron/contributors",
        "commit": "https://api.github.com/repos/electron/electron/commits{/sha}",
        "create_date": "2013-04-12T01:47:36Z",
        "update_date": "2018-05-31T15:58:30Z",
        "language": "C++"
    },
    "10270250": {
        "id": 10270250,
        "name": "react",
        "full_name": "facebook/react",
        "owner_name": "facebook",
        "owner_id": 69631,
        "star": 97169,
        "users": "https://api.github.com/repos/facebook/react/contributors",
        "commit": "https://api.github.com/repos/facebook/react/commits{/sha}",
        "create_date": "2013-05-24T16:15:54Z",
        "update_date": "2018-05-31T17:13:47Z",
        "language": "JavaScript"
    },
    "11167738": {
        "id": 11167738,
        "name": "gulp",
        "full_name": "gulpjs/gulp",
        "owner_name": "gulpjs",
        "owner_id": 6200624,
        "star": 29585,
        "users": "https://api.github.com/repos/gulpjs/gulp/contributors",
        "commit": "https://api.github.com/repos/gulpjs/gulp/commits{/sha}",
        "create_date": "2013-07-04T05:26:06Z",
        "update_date": "2018-05-31T17:03:20Z",
        "language": "JavaScript"
    },
    "11730342": {
        "id": 11730342,
        "name": "vue",
        "full_name": "vuejs/vue",
        "owner_name": "vuejs",
        "owner_id": 6128107,
        "star": 96013,
        "users": "https://api.github.com/repos/vuejs/vue/contributors",
        "commit": "https://api.github.com/repos/vuejs/vue/commits{/sha}",
        "create_date": "2013-07-29T03:24:51Z",
        "update_date": "2018-05-31T16:53:47Z",
        "language": "JavaScript"
    },
    "13491895": {
        "id": 13491895,
        "name": "free-programming-books",
        "full_name": "EbookFoundation/free-programming-books",
        "owner_name": "EbookFoundation",
        "owner_id": 14127308,
        "star": 105890,
        "users": "https://api.github.com/repos/EbookFoundation/free-programming-books/contributors",
        "commit": "https://api.github.com/repos/EbookFoundation/free-programming-books/commits{/sha}",
        "create_date": "2013-10-11T06:50:37Z",
        "update_date": "2018-05-31T17:12:47Z",
        "language": null
    },
    "14098069": {
        "id": 14098069,
        "name": "free-programming-books-zh_CN",
        "full_name": "justjavac/free-programming-books-zh_CN",
        "owner_name": "justjavac",
        "owner_id": 359395,
        "star": 33358,
        "users": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/contributors",
        "commit": "https://api.github.com/repos/justjavac/free-programming-books-zh_CN/commits{/sha}",
        "create_date": "2013-11-04T01:59:19Z",
        "update_date": "2018-05-31T16:46:53Z",
        "language": "JavaScript"
    },
    "14440270": {
        "id": 14440270,
        "name": "You-Dont-Know-JS",
        "full_name": "getify/You-Dont-Know-JS",
        "owner_name": "getify",
        "owner_id": 150330,
        "star": 82667,
        "users": "https://api.github.com/repos/getify/You-Dont-Know-JS/contributors",
        "commit": "https://api.github.com/repos/getify/You-Dont-Know-JS/commits{/sha}",
        "create_date": "2013-11-16T02:37:24Z",
        "update_date": "2018-05-31T17:05:19Z",
        "language": null
    },
    "14747598": {
        "id": 14747598,
        "name": "json-server",
        "full_name": "typicode/json-server",
        "owner_name": "typicode",
        "owner_id": 5502029,
        "star": 32120,
        "users": "https://api.github.com/repos/typicode/json-server/contributors",
        "commit": "https://api.github.com/repos/typicode/json-server/commits{/sha}",
        "create_date": "2013-11-27T13:21:13Z",
        "update_date": "2018-05-31T14:49:01Z",
        "language": "JavaScript"
    },
    "15204860": {
        "id": 15204860,
        "name": "papers-we-love",
        "full_name": "papers-we-love/papers-we-love",
        "owner_name": "papers-we-love",
        "owner_id": 6187757,
        "star": 30087,
        "users": "https://api.github.com/repos/papers-we-love/papers-we-love/contributors",
        "commit": "https://api.github.com/repos/papers-we-love/papers-we-love/commits{/sha}",
        "create_date": "2013-12-15T14:31:41Z",
        "update_date": "2018-05-31T13:28:19Z",
        "language": null
    },
    "16408992": {
        "id": 16408992,
        "name": "neovim",
        "full_name": "neovim/neovim",
        "owner_name": "neovim",
        "owner_id": 6471485,
        "star": 27247,
        "users": "https://api.github.com/repos/neovim/neovim/contributors",
        "commit": "https://api.github.com/repos/neovim/neovim/commits{/sha}",
        "create_date": "2014-01-31T13:39:22Z",
        "update_date": "2018-05-31T16:18:59Z",
        "language": "Vim script"
    },
    "18408635": {
        "id": 18408635,
        "name": "Apollo-11",
        "full_name": "chrislgarry/Apollo-11",
        "owner_name": "chrislgarry",
        "owner_id": 2200898,
        "star": 26723,
        "users": "https://api.github.com/repos/chrislgarry/Apollo-11/contributors",
        "commit": "https://api.github.com/repos/chrislgarry/Apollo-11/commits{/sha}",
        "create_date": "2014-04-03T15:45:02Z",
        "update_date": "2018-05-31T15:52:36Z",
        "language": "Assembly"
    },
    "19872456": {
        "id": 19872456,
        "name": "react-router",
        "full_name": "ReactTraining/react-router",
        "owner_name": "ReactTraining",
        "owner_id": 11823761,
        "star": 30539,
        "users": "https://api.github.com/repos/ReactTraining/react-router/contributors",
        "commit": "https://api.github.com/repos/ReactTraining/react-router/commits{/sha}",
        "create_date": "2014-05-16T22:22:51Z",
        "update_date": "2018-05-31T15:19:59Z",
        "language": "JavaScript"
    },
    "20580498": {
        "id": 20580498,
        "name": "kubernetes",
        "full_name": "kubernetes/kubernetes",
        "owner_name": "kubernetes",
        "owner_id": 13629408,
        "star": 37027,
        "users": "https://api.github.com/repos/kubernetes/kubernetes/contributors",
        "commit": "https://api.github.com/repos/kubernetes/kubernetes/commits{/sha}",
        "create_date": "2014-06-06T22:56:04Z",
        "update_date": "2018-05-31T15:15:00Z",
        "language": "Go"
    },
    "20929025": {
        "id": 20929025,
        "name": "TypeScript",
        "full_name": "Microsoft/TypeScript",
        "owner_name": "Microsoft",
        "owner_id": 6154722,
        "star": 34595,
        "users": "https://api.github.com/repos/Microsoft/TypeScript/contributors",
        "commit": "https://api.github.com/repos/Microsoft/TypeScript/commits{/sha}",
        "create_date": "2014-06-17T15:28:39Z",
        "update_date": "2018-05-31T17:01:47Z",
        "language": "TypeScript"
    },
    "21289110": {
        "id": 21289110,
        "name": "awesome-python",
        "full_name": "vinta/awesome-python",
        "owner_name": "vinta",
        "owner_id": 652070,
        "star": 50579,
        "users": "https://api.github.com/repos/vinta/awesome-python/contributors",
        "commit": "https://api.github.com/repos/vinta/awesome-python/commits{/sha}",
        "create_date": "2014-06-27T21:00:06Z",
        "update_date": "2018-05-31T17:40:17Z",
        "language": "Python"
    },
    "21737465": {
        "id": 21737465,
        "name": "awesome",
        "full_name": "sindresorhus/awesome",
        "owner_name": "sindresorhus",
        "owner_id": 170270,
        "star": 85959,
        "users": "https://api.github.com/repos/sindresorhus/awesome/contributors",
        "commit": "https://api.github.com/repos/sindresorhus/awesome/commits{/sha}",
        "create_date": "2014-07-11T13:42:37Z",
        "update_date": "2018-05-31T17:10:54Z",
        "language": null
    },
    "21872392": {
        "id": 21872392,
        "name": "awesome-machine-learning",
        "full_name": "josephmisiti/awesome-machine-learning",
        "owner_name": "josephmisiti",
        "owner_id": 246302,
        "star": 33134,
        "users": "https://api.github.com/repos/josephmisiti/awesome-machine-learning/contributors",
        "commit": "https://api.github.com/repos/josephmisiti/awesome-machine-learning/commits{/sha}",
        "create_date": "2014-07-15T19:11:19Z",
        "update_date": "2018-05-31T17:37:00Z",
        "language": "Python"
    },
    "22458259": {
        "id": 22458259,
        "name": "Alamofire",
        "full_name": "Alamofire/Alamofire",
        "owner_name": "Alamofire",
        "owner_id": 7774181,
        "star": 28050,
        "users": "https://api.github.com/repos/Alamofire/Alamofire/contributors",
        "commit": "https://api.github.com/repos/Alamofire/Alamofire/commits{/sha}",
        "create_date": "2014-07-31T05:56:19Z",
        "update_date": "2018-05-31T17:36:19Z",
        "language": "Swift"
    },
    "23096959": {
        "id": 23096959,
        "name": "go",
        "full_name": "golang/go",
        "owner_name": "golang",
        "owner_id": 4314092,
        "star": 42214,
        "users": "https://api.github.com/repos/golang/go/contributors",
        "commit": "https://api.github.com/repos/golang/go/commits{/sha}",
        "create_date": "2014-08-19T04:33:40Z",
        "update_date": "2018-05-31T17:37:52Z",
        "language": "Go"
    },
    "23357588": {
        "id": 23357588,
        "name": "protobuf",
        "full_name": "google/protobuf",
        "owner_name": "google",
        "owner_id": 1342004,
        "star": 26450,
        "users": "https://api.github.com/repos/google/protobuf/contributors",
        "commit": "https://api.github.com/repos/google/protobuf/commits{/sha}",
        "create_date": "2014-08-26T15:52:15Z",
        "update_date": "2018-05-31T17:36:57Z",
        "language": "C++"
    },
    "23974149": {
        "id": 23974149,
        "name": "materialize",
        "full_name": "Dogfalo/materialize",
        "owner_name": "Dogfalo",
        "owner_id": 2775751,
        "star": 32829,
        "users": "https://api.github.com/repos/Dogfalo/materialize/contributors",
        "commit": "https://api.github.com/repos/Dogfalo/materialize/commits{/sha}",
        "create_date": "2014-09-12T19:35:38Z",
        "update_date": "2018-05-31T17:35:52Z",
        "language": "JavaScript"
    },
    "24195339": {
        "id": 24195339,
        "name": "angular",
        "full_name": "angular/angular",
        "owner_name": "angular",
        "owner_id": 139426,
        "star": 36732,
        "users": "https://api.github.com/repos/angular/angular/contributors",
        "commit": "https://api.github.com/repos/angular/angular/commits{/sha}",
        "create_date": "2014-09-18T16:12:01Z",
        "update_date": "2018-05-31T17:17:17Z",
        "language": "TypeScript"
    },
    "24953448": {
        "id": 24953448,
        "name": "material-design-icons",
        "full_name": "google/material-design-icons",
        "owner_name": "google",
        "owner_id": 1342004,
        "star": 34930,
        "users": "https://api.github.com/repos/google/material-design-icons/contributors",
        "commit": "https://api.github.com/repos/google/material-design-icons/commits{/sha}",
        "create_date": "2014-10-08T18:01:28Z",
        "update_date": "2018-05-31T14:46:28Z",
        "language": "CSS"
    },
    "28428729": {
        "id": 28428729,
        "name": "awesome-android-ui",
        "full_name": "wasabeef/awesome-android-ui",
        "owner_name": "wasabeef",
        "owner_id": 1833474,
        "star": 30369,
        "users": "https://api.github.com/repos/wasabeef/awesome-android-ui/contributors",
        "commit": "https://api.github.com/repos/wasabeef/awesome-android-ui/commits{/sha}",
        "create_date": "2014-12-24T01:45:03Z",
        "update_date": "2018-05-31T16:53:24Z",
        "language": null
    },
    "28457823": {
        "id": 28457823,
        "name": "freeCodeCamp",
        "full_name": "freeCodeCamp/freeCodeCamp",
        "owner_name": "freeCodeCamp",
        "owner_id": 9892522,
        "star": 292271,
        "users": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
        "commit": "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
        "create_date": "2014-12-24T17:49:19Z",
        "update_date": "2018-05-31T17:42:23Z",
        "language": "JavaScript"
    },
    "29028775": {
        "id": 29028775,
        "name": "react-native",
        "full_name": "facebook/react-native",
        "owner_name": "facebook",
        "owner_id": 69631,
        "star": 64424,
        "users": "https://api.github.com/repos/facebook/react-native/contributors",
        "commit": "https://api.github.com/repos/facebook/react-native/commits{/sha}",
        "create_date": "2015-01-09T18:10:16Z",
        "update_date": "2018-05-31T16:28:26Z",
        "language": "JavaScript"
    },
    "29268051": {
        "id": 29268051,
        "name": "material-design-lite",
        "full_name": "google/material-design-lite",
        "owner_name": "google",
        "owner_id": 1342004,
        "star": 30160,
        "users": "https://api.github.com/repos/google/material-design-lite/contributors",
        "commit": "https://api.github.com/repos/google/material-design-lite/commits{/sha}",
        "create_date": "2015-01-14T22:01:33Z",
        "update_date": "2018-05-31T17:01:02Z",
        "language": "HTML"
    },
    "33614304": {
        "id": 33614304,
        "name": "thefuck",
        "full_name": "nvbn/thefuck",
        "owner_name": "nvbn",
        "owner_id": 1114542,
        "star": 35633,
        "users": "https://api.github.com/repos/nvbn/thefuck/contributors",
        "commit": "https://api.github.com/repos/nvbn/thefuck/commits{/sha}",
        "create_date": "2015-04-08T15:08:04Z",
        "update_date": "2018-05-31T14:22:35Z",
        "language": "Python"
    },
    "35955666": {
        "id": 35955666,
        "name": "the-art-of-command-line",
        "full_name": "jlevy/the-art-of-command-line",
        "owner_name": "jlevy",
        "owner_id": 2058167,
        "star": 35207,
        "users": "https://api.github.com/repos/jlevy/the-art-of-command-line/contributors",
        "commit": "https://api.github.com/repos/jlevy/the-art-of-command-line/commits{/sha}",
        "create_date": "2015-05-20T15:11:03Z",
        "update_date": "2018-05-31T17:30:11Z",
        "language": null
    },
    "41881900": {
        "id": 41881900,
        "name": "vscode",
        "full_name": "Microsoft/vscode",
        "owner_name": "Microsoft",
        "owner_id": 6154722,
        "star": 51125,
        "users": "https://api.github.com/repos/Microsoft/vscode/contributors",
        "commit": "https://api.github.com/repos/Microsoft/vscode/commits{/sha}",
        "create_date": "2015-09-03T20:23:38Z",
        "update_date": "2018-05-31T17:40:50Z",
        "language": "TypeScript"
    },
    "44571718": {
        "id": 44571718,
        "name": "awesome-vue",
        "full_name": "vuejs/awesome-vue",
        "owner_name": "vuejs",
        "owner_id": 6128107,
        "star": 33416,
        "users": "https://api.github.com/repos/vuejs/awesome-vue/contributors",
        "commit": "https://api.github.com/repos/vuejs/awesome-vue/commits{/sha}",
        "create_date": "2015-10-20T00:16:14Z",
        "update_date": "2018-05-31T17:29:11Z",
        "language": null
    },
    "44838949": {
        "id": 44838949,
        "name": "swift",
        "full_name": "apple/swift",
        "owner_name": "apple",
        "owner_id": 10639145,
        "star": 44010,
        "users": "https://api.github.com/repos/apple/swift/contributors",
        "commit": "https://api.github.com/repos/apple/swift/commits{/sha}",
        "create_date": "2015-10-23T21:15:07Z",
        "update_date": "2018-05-31T16:41:14Z",
        "language": "C++"
    },
    "45717250": {
        "id": 45717250,
        "name": "tensorflow",
        "full_name": "tensorflow/tensorflow",
        "owner_name": "tensorflow",
        "owner_id": 15658638,
        "star": 101377,
        "users": "https://api.github.com/repos/tensorflow/tensorflow/contributors",
        "commit": "https://api.github.com/repos/tensorflow/tensorflow/commits{/sha}",
        "create_date": "2015-11-07T01:19:20Z",
        "update_date": "2018-05-31T17:37:23Z",
        "language": "C++"
    },
    "46629305": {
        "id": 46629305,
        "name": "hacker-scripts",
        "full_name": "NARKOZ/hacker-scripts",
        "owner_name": "NARKOZ",
        "owner_id": 253398,
        "star": 31418,
        "users": "https://api.github.com/repos/NARKOZ/hacker-scripts/contributors",
        "commit": "https://api.github.com/repos/NARKOZ/hacker-scripts/commits{/sha}",
        "create_date": "2015-11-21T19:05:09Z",
        "update_date": "2018-05-31T14:49:41Z",
        "language": "JavaScript"
    },
    "49970642": {
        "id": 49970642,
        "name": "yarn",
        "full_name": "yarnpkg/yarn",
        "owner_name": "yarnpkg",
        "owner_id": 22247014,
        "star": 31832,
        "users": "https://api.github.com/repos/yarnpkg/yarn/contributors",
        "commit": "https://api.github.com/repos/yarnpkg/yarn/commits{/sha}",
        "create_date": "2016-01-19T17:39:16Z",
        "update_date": "2018-05-31T16:23:27Z",
        "language": "JavaScript"
    },
    "51117837": {
        "id": 51117837,
        "name": "models",
        "full_name": "tensorflow/models",
        "owner_name": "tensorflow",
        "owner_id": 15658638,
        "star": 35955,
        "users": "https://api.github.com/repos/tensorflow/models/contributors",
        "commit": "https://api.github.com/repos/tensorflow/models/commits{/sha}",
        "create_date": "2016-02-05T01:15:20Z",
        "update_date": "2018-05-31T16:51:35Z",
        "language": "Python"
    },
    "51148780": {
        "id": 51148780,
        "name": "android-architecture",
        "full_name": "googlesamples/android-architecture",
        "owner_name": "googlesamples",
        "owner_id": 7378196,
        "star": 27521,
        "users": "https://api.github.com/repos/googlesamples/android-architecture/contributors",
        "commit": "https://api.github.com/repos/googlesamples/android-architecture/commits{/sha}",
        "create_date": "2016-02-05T13:42:07Z",
        "update_date": "2018-05-31T16:47:52Z",
        "language": null
    },
    "54346799": {
        "id": 54346799,
        "name": "public-apis",
        "full_name": "toddmotto/public-apis",
        "owner_name": "toddmotto",
        "owner_id": 1655968,
        "star": 37291,
        "users": "https://api.github.com/repos/toddmotto/public-apis/contributors",
        "commit": "https://api.github.com/repos/toddmotto/public-apis/commits{/sha}",
        "create_date": "2016-03-20T23:49:42Z",
        "update_date": "2018-05-31T17:14:48Z",
        "language": "Python"
    },
    "60493101": {
        "id": 60493101,
        "name": "coding-interview-university",
        "full_name": "jwasham/coding-interview-university",
        "owner_name": "jwasham",
        "owner_id": 3771963,
        "star": 64484,
        "users": "https://api.github.com/repos/jwasham/coding-interview-university/contributors",
        "commit": "https://api.github.com/repos/jwasham/coding-interview-university/commits{/sha}",
        "create_date": "2016-06-06T02:34:12Z",
        "update_date": "2018-05-31T17:08:03Z",
        "language": null
    },
    "63537249": {
        "id": 63537249,
        "name": "create-react-app",
        "full_name": "facebook/create-react-app",
        "owner_name": "facebook",
        "owner_id": 69631,
        "star": 49721,
        "users": "https://api.github.com/repos/facebook/create-react-app/contributors",
        "commit": "https://api.github.com/repos/facebook/create-react-app/commits{/sha}",
        "create_date": "2016-07-17T14:55:11Z",
        "update_date": "2018-05-31T17:27:07Z",
        "language": "JavaScript"
    },
    "85077558": {
        "id": 85077558,
        "name": "developer-roadmap",
        "full_name": "kamranahmedse/developer-roadmap",
        "owner_name": "kamranahmedse",
        "owner_id": 4921183,
        "star": 50253,
        "users": "https://api.github.com/repos/kamranahmedse/developer-roadmap/contributors",
        "commit": "https://api.github.com/repos/kamranahmedse/developer-roadmap/commits{/sha}",
        "create_date": "2017-03-15T13:45:52Z",
        "update_date": "2018-05-31T17:20:58Z",
        "language": null
    },
    "90796663": {
        "id": 90796663,
        "name": "puppeteer",
        "full_name": "GoogleChrome/puppeteer",
        "owner_name": "GoogleChrome",
        "owner_id": 1778935,
        "star": 32780,
        "users": "https://api.github.com/repos/GoogleChrome/puppeteer/contributors",
        "commit": "https://api.github.com/repos/GoogleChrome/puppeteer/commits{/sha}",
        "create_date": "2017-05-09T22:16:13Z",
        "update_date": "2018-05-31T16:46:30Z",
        "language": "JavaScript"
    }
};

const Data = new function () {
    let REPOSITORIES = {};

    $.getJSON('../data/repos.min.json', function (data) {
        REPOSITORIES = data;
        trendVis({ data: REPOSITORIES, conditionInfo: { descText: 'ALL PROJECT', conditions: [] } });
    });
}();