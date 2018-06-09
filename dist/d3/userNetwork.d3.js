'use strict';

var userVis = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
        var root, WIDTH, HEIGHT, RADVIZ_RADIUS, RADVIZ_CENTER_X, RADVIZ_CENTER_Y, g, userData, linkData, keys, keyField, attractors, dataPoints, links, selectedNodes, selectedKeywords, selectedLinks, keywordCor, lineBasis, update, Attractor, DataPoint, Link, save;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        Link = function Link(link) {
                            var start = { x: 0, y: 0 };
                            var end = { x: 0, y: 0 };
                            var id = link.start + 'to' + link.end;

                            _.forEach(dataPoints, function (dataPoint) {
                                if (_.isEqual(userData[link.start], dataPoint.user)) {
                                    start.x = dataPoint.coordinate.x;
                                    start.y = dataPoint.coordinate.y;
                                }
                                if (_.isEqual(userData[link.end], dataPoint.user)) {
                                    end.x = dataPoint.coordinate.x;
                                    end.y = dataPoint.coordinate.y;
                                }
                                if (start === { x: 0, y: 0 } || end === { x: 0, y: 0 }) {
                                    console.log("ERR : 노드를 찾지 못했습니다.");
                                }
                            });

                            this.render = function () {
                                if (start.x === 0 || end.x === 0 || start.y === 0 || end.y === 0) {
                                    return;
                                }

                                var lineG = g.append('line').attrs({
                                    x1: start.x,
                                    x2: end.x,
                                    y1: start.y,
                                    y2: end.y,
                                    stroke: COLOR_LINK,
                                    opacity: UNSELECTED_OPACITY / 2,
                                    'stroke-weight': '100px',
                                    'class': 'link'
                                }).on("mouseover", function () {
                                    d3.select(this).style("cursor", "pointer");
                                }).on('click', function () {
                                    if (selectedLinks.indexOf(id) < 0) {
                                        selectedLinks.push(id);
                                        lineG.attr('opacity', 1);
                                    } else {
                                        selectedLinks.splice(selectedNodes.indexOf(id), 1);
                                        lineG.attr('opacity', UNSELECTED_OPACITY / 2);
                                    }
                                    update();
                                });
                            };
                        };

                        DataPoint = function DataPoint(attractions, user) {
                            this.attractions = attractions;
                            this.user = user;
                            this.color = GIT_A_COLOR;
                            var thatNode = this;

                            this.totalAttractorForce = function () {
                                return this.attractions.map(function (a) {
                                    return a.force;
                                }).reduce(function (a, b) {
                                    return a + b;
                                });
                            };

                            this.getFieldScores = function () {
                                var scores = [];
                                var i = 0;
                                _.forEach(param.fields, function (field) {
                                    scores[i] = 0;
                                    _.forEach(field.keywords, function (keyword) {
                                        if (_.isNumber(thatNode.user.related_keyword[keyword])) {
                                            scores[i] += thatNode.user.related_keyword[keyword];
                                        }
                                    });
                                    i++;
                                });
                                return scores;
                            };

                            this.coordinateX = function () {
                                // return Data.POSITION[thatNode.user.id].x;
                                return this.attractions.map(function (a) {
                                    return a.force * a.attractor.x;
                                }).reduce(function (a, b) {
                                    return a + b;
                                }) / this.totalAttractorForce();
                            };

                            this.coordinateY = function () {
                                // return Data.POSITION[thatNode.user.id].y;
                                return this.attractions.map(function (a) {
                                    return a.force * a.attractor.y;
                                }).reduce(function (a, b) {
                                    return a + b;
                                }) / this.totalAttractorForce();
                            };

                            this.coordinate = { x: this.coordinateX(), y: this.coordinateY() };

                            this.render = function () {
                                if (this.coordinate.x === 0 || this.coordinate.y === 0) {
                                    return;
                                }
                                var r = Math.sqrt(thatNode.user.stars / 1000);
                                if (r < 3) r = 3;

                                var pieData = thatNode.getFieldScores();
                                d3Util.drawPie(g, thatNode.user.id, pieData, thatNode.coordinate.x, thatNode.coordinate.y, r - 0.5, "node");

                                // mouse event zone
                                g.append('circle').attrs({
                                    cx: thatNode.coordinate.x,
                                    cy: thatNode.coordinate.y,
                                    r: r - 0.5,
                                    fill: '#fff',
                                    'class': 'node',
                                    'opacity': 0
                                }).on('mouseover', function () {
                                    addTooltip(thatNode);
                                    d3.select(this).style("cursor", "pointer");
                                }).on('mouseout', function () {
                                    d3.selectAll('.tooltip').remove();
                                }).on('click', function () {
                                    console.log('클릭 :', thatNode.user.id);
                                    // addTooltip();
                                    if (selectedNodes.indexOf(thatNode.user.id) < 0) {
                                        selectedNodes.push(thatNode.user.id);
                                    } else {
                                        selectedNodes.splice(selectedNodes.indexOf(thatNode.user.id), 1);
                                    }
                                    update();
                                });
                            };

                            var addTooltip = function addTooltip(node) {
                                var r = Math.sqrt(node.user.stars / 1000);
                                var keywordKeys = _.keys(node.user.related_keyword);

                                var x = node.coordinate.x + r + 20;
                                var y = node.coordinate.y - r - 20;
                                var width = 400;
                                var height = 120 + Math.floor(keywordKeys.length / 2) * 1.5 * FONT_SIZE_DESC;
                                y = height + y > HEIGHT ? HEIGHT - height - 10 : y;

                                g.append('rect').attrs({
                                    x: x,
                                    y: y,
                                    width: width,
                                    height: height,
                                    fill: GIT_LIGHT_COLOR,
                                    stroke: GIT_DARK_COLOR,
                                    'stroke-width': 1,
                                    'class': 'tooltip tooltip-box'
                                });

                                // d3Util.drawTriangle(g, node.coordinate.x + r + 20, node.coordinate.y - 2, GIT_LIGHT_COLOR, 'tooltip tooltip-box');

                                g.append('text').text('name : ' + node.user.name).attrs({
                                    x: x + 10,
                                    y: y + 10,
                                    'alignment-baseline': 'hanging',
                                    'text-anchor': 'start',
                                    fill: GIT_DARK_COLOR,
                                    'font-size': FONT_SIZE_DESC,
                                    'class': 'tooltip tooltip-text'

                                });
                                g.append('text').text('star : ' + node.user.stars).attrs({
                                    x: x + 10,
                                    y: y + 10 + FONT_SIZE_DESC * 2,
                                    'alignment-baseline': 'hanging',
                                    'text-anchor': 'start',
                                    fill: GIT_DARK_COLOR,
                                    'font-size': FONT_SIZE_DESC,
                                    'class': 'tooltip tooltip-text'
                                });

                                g.append('text').text('keywords : ').attrs({
                                    x: x + 10,
                                    y: y + 10 + FONT_SIZE_DESC * 4,
                                    'alignment-baseline': 'hanging',
                                    'text-anchor': 'start',
                                    fill: GIT_DARK_COLOR,
                                    'font-size': FONT_SIZE_DESC,
                                    'class': 'tooltip tooltip-text'
                                });

                                var j = 0;
                                _.forEach(keywordKeys, function (keywordKey, i) {
                                    if (keyField[keywordKey] !== undefined) {
                                        g.append('text').text(keywordKey).attrs({
                                            x: x + 20 + j % 2 * 200,
                                            y: y + 10 + FONT_SIZE_DESC * (5.5 + Math.floor(j / 2) * 1.5),
                                            'alignment-baseline': 'hanging',
                                            'text-anchor': 'start',
                                            fill: FIELD_COLORS[keyField[keywordKey]],
                                            'font-size': FONT_SIZE_DESC,
                                            'class': 'tooltip tooltip-text'
                                        });
                                        j++;
                                    }
                                });
                            };
                        };

                        Attractor = function Attractor(name, theta) {
                            var _this = this;

                            // theta = theta - 90;
                            this.name = name;
                            this.field = keyField[name];
                            this.x = RADVIZ_CENTER_X + Math.cos(theta) * RADVIZ_RADIUS;
                            this.y = RADVIZ_CENTER_Y + Math.sin(theta) * RADVIZ_RADIUS;
                            this.theta = theta;
                            var thatKeyword = this;

                            var textX = RADVIZ_CENTER_X + Math.cos(theta) * (RADVIZ_RADIUS + 5);
                            var textY = RADVIZ_CENTER_Y + Math.sin(theta) * (RADVIZ_RADIUS + 10);

                            var anchor = this.theta >= PI / 2 && this.theta <= 3 * PI / 2 ? 'end' : 'start';
                            var align = this.theta >= PI / 2 && this.theta <= 3 * PI / 2 ? 'ideographic' : 'hanging';
                            var half = this.theta >= PI / 2 && this.theta <= 3 * PI / 2 ? 180 : 0;

                            this.render = function () {
                                var keyH = Data.FIELDS[thatKeyword.field].keywordCounts[thatKeyword.name] / 4;
                                if (_.isNaN(keyH)) keyH = 0;

                                var rectG = g.append('rect').attrs({
                                    x: 0,
                                    y: 0,
                                    width: keyH,
                                    height: 2 * PI * RADVIZ_RADIUS / keys.length,
                                    fill: FIELD_COLORS[_this.field],
                                    transform: 'translate(' + _this.x + ',' + _this.y + ') rotate(' + Util.radians_to_degrees(theta) + ')',
                                    'opacity': UNSELECTED_OPACITY
                                }).on("mouseover", function () {
                                    d3.select(this).style("cursor", "pointer");
                                }).on('click', function () {
                                    if (selectedKeywords.indexOf(thatKeyword.name) < 0) {
                                        selectedKeywords.push(thatKeyword.name);
                                        texgG.attr('opacity', 1);
                                        rectG.attr('opacity', 1);
                                    } else {
                                        selectedKeywords.splice(selectedKeywords.indexOf(thatKeyword.name), 1);
                                        texgG.attr('opacity', UNSELECTED_OPACITY);
                                        rectG.attr('opacity', UNSELECTED_OPACITY);
                                    }
                                    update();
                                });

                                var texgG = g.append('text').text(_this.name).attrs({
                                    x: _this.theta >= PI / 2 && _this.theta <= 3 * PI / 2 ? -keyH : keyH,
                                    y: 0,
                                    'alignment-baseline': align,
                                    'text-anchor': anchor,
                                    'fill': FIELD_COLORS[_this.field],
                                    'font-size': FONT_SIZE_AXIS,
                                    'transform': 'translate(' + textX + ',' + textY + ') rotate(' + (Util.radians_to_degrees(theta) - half) + ')',
                                    'opacity': UNSELECTED_OPACITY,
                                    'cass': 'keyword-text',
                                    'id': 'keyword-' + _this.name
                                }).on("mouseover", function () {
                                    d3.select(this).style("cursor", "pointer");
                                }).on('click', function () {
                                    if (selectedKeywords.indexOf(thatKeyword.name) < 0) {
                                        selectedKeywords.push(thatKeyword.name);
                                        texgG.attr('opacity', 1);
                                        rectG.attr('opacity', 1);
                                    } else {
                                        selectedKeywords.splice(selectedKeywords.indexOf(thatKeyword.name), 1);
                                        texgG.attr('opacity', UNSELECTED_OPACITY);
                                        rectG.attr('opacity', UNSELECTED_OPACITY);
                                    }
                                    update();
                                });

                                g.append('line').attrs({
                                    x1: -5,
                                    x2: 5,
                                    stroke: COLOR_AXIS,
                                    'stroke-weight': '1px',
                                    'opacity': UNSELECTED_OPACITY / 2,
                                    'transform': 'translate(' + _this.x + ',' + _this.y + ') rotate(' + Util.radians_to_degrees(theta) + ')'
                                });
                                return thatKeyword;
                            };
                        };

                        update = function update() {
                            // 선택된 키워드 및 링크를 통해 유저 자동 선택
                            _.forEach(selectedKeywords, function (selected) {
                                _.forEach(Data.REPOSITORIES, function (repo) {
                                    if (repo.keywords.indexOf(selected) >= 0) {
                                        selectedNodes.push(repo['owner_id']);
                                        selectedNodes.concat(_.keys(repo.users));
                                    }
                                });
                            });

                            _.forEach(selectedLinks, function (selected) {
                                selectedNodes.push(Data.LINKS[selected].start);
                                selectedNodes.push(Data.LINKS[selected].end);
                            });

                            // 선택된 애들 투명도 처리
                            _.forEach(dataPoints, function (dataPoint) {
                                d3.selectAll('#pie' + dataPoint.user.id).classed('selected', selectedNodes.indexOf(dataPoint.user.id) >= 0);
                            });

                            // 프로젝트 필터
                            var projects = [];
                            _.forEach(selectedNodes, function (selected) {
                                if (Data.USERS.hasOwnProperty(selected)) projects = projects.concat(Data.USERS[selected].projects);
                            });
                            _.forEach(selectedKeywords, function (selected) {
                                _.forEach(Data.REPOSITORIES, function (repo) {
                                    if (repo.keywords.indexOf(selected) >= 0) {
                                        projects.push(repo.id);
                                    }
                                });
                            });
                            _.forEach(selectedLinks, function (selected) {
                                projects = projects.concat(Data.LINKS[selected].projects);
                            });
                            _.uniq(projects);

                            d3.select('#trendRenderer > *').remove();
                            trendVis({ data: projects, conditionInfo: { descText: 'ALL PROJECT' } });
                            d3.select('#keywordRankingRenderer > *').remove();
                            keywordRankingVis({ projectsData: projects });
                        };

                        root = d3.select('#userNetworkRenderer');
                        WIDTH = 1180;
                        HEIGHT = 1030;
                        RADVIZ_RADIUS = 430;
                        RADVIZ_CENTER_X = WIDTH / 2;
                        RADVIZ_CENTER_Y = (HEIGHT - 20) / 2;
                        g = root.append('g').attr("transform", "translate(55,40) scale(0.9)");
                        userData = param.users;
                        linkData = param.links;
                        keys = [];
                        keyField = {};
                        attractors = []; // keyword

                        dataPoints = []; // node, developer

                        links = []; // link

                        selectedNodes = [];
                        selectedKeywords = [];
                        selectedLinks = [];
                        keywordCor = {};


                        _.forEach(param.fields, function (field, fieldName) {
                            _.forEach(field.keywords, function (keyword) {
                                keys.push(keyword);
                                keyField[keyword] = fieldName;
                            });
                        });

                        lineBasis = d3.line().x(function (d) {
                            return d.x;
                        }).y(function (d) {
                            return d.y;
                        }).curve(d3.curveBasis); // curveBasis

                        // radviz 외부 원
                        g.append('circle').attrs({
                            cx: RADVIZ_CENTER_X,
                            cy: RADVIZ_CENTER_Y,
                            r: RADVIZ_RADIUS,
                            fill: 'none',
                            opacity: 0.5,
                            stroke: COLOR_AXIS
                        });

                        // radviz 외부 축
                        _.forEach(keys, function (key, i) {
                            var theta = 2 * PI * (i / keys.length); // 0 ~ 2*PI
                            attractors.push(new Attractor(key, theta).render());
                        });

                        // radviz 내부 노드 생성
                        _.forEach(userData, function (user) {
                            var attractions = [];
                            _.forEach(keys, function (key, i) {
                                var force = _.isUndefined(user['related_keyword'][key]) ? 0 : user['related_keyword'][key];
                                attractions.push({ attractor: attractors[i], force: force });
                            });
                            dataPoints.push(new DataPoint(attractions, user));
                        });

                        // 노드간 링크 생성 // 태양신 데이터 생성
                        _.forEach(linkData, function (link) {
                            links.push(new Link(link));

                            // 태양신 데이터 생성
                            _.forEach(link.projects, function (project) {
                                var temp_keywords = [];
                                if (Data.REPOSITORIES[project] !== undefined && Data.REPOSITORIES[project].hasOwnProperty('keywords')) {
                                    temp_keywords = Util.extractSortedArray(Data.REPOSITORIES[project].keywords);
                                }
                                _.forEach(temp_keywords, function (from) {
                                    _.forEach(temp_keywords, function (to) {
                                        if (from !== to) {
                                            if (keywordCor[from] === undefined) keywordCor[from] = {};
                                            if (keywordCor[from][to] === undefined) keywordCor[from][to] = 0;
                                            keywordCor[from][to]++;
                                        }
                                    });
                                });
                            });
                        });

                        // 링크 그리기
                        // _.forEach(links, function (link) {
                        //     link.render();
                        // });

                        // 태양신 그리기
                        console.log(keywordCor);
                        _.forEach(keywordCor, function (eachKeywordCor, from) {
                            _.forEach(eachKeywordCor, function (cor, to) {
                                if (cor > 10 && from > to) {
                                    _.forEach(attractors, function (attractorA) {
                                        _.forEach(attractors, function (attractorB) {
                                            if (attractorA.name === from && attractorB.name === to) {
                                                var lineData = [];
                                                lineData.push({ x: attractorA.x - 0.1, y: attractorA.y });
                                                lineData.push({ x: attractorA.x, y: attractorA.y });
                                                lineData.push({ x: attractorA.x + 0.1, y: attractorA.y });
                                                var thetaDiff = attractorA.theta - attractorB.theta;
                                                console.log(from, to);
                                                console.log(attractorA);
                                                console.log(attractorB);
                                                console.log(Util.radians_to_degrees(thetaDiff));
                                                // if (Util.radians_to_degrees(thetaDiff) < 30) {
                                                //     let theta = attractorA.theta - (thetaDiff);
                                                //     let mid_x = RADVIZ_CENTER_X + Math.cos(theta) * (RADVIZ_RADIUS + 200);
                                                //     let mid_y = RADVIZ_CENTER_Y + Math.sin(theta) * (RADVIZ_RADIUS + 200);
                                                //     lineData.push(({ x: mid_x, y: mid_y }));
                                                // } else {
                                                //     console.log(Util.radians_to_degrees(thetaDiff), Math.ceil(Util.radians_to_degrees(thetaDiff) / 15));
                                                //     for (let i = 0; i < 100; i++) {
                                                // let theta = attractorA.theta - (thetaDiff) * i / 100 / 2;
                                                // let mid_x = RADVIZ_CENTER_X + Math.cos(theta) * (RADVIZ_RADIUS + 2 * (100 - Math.abs(i - 50)) );
                                                // let mid_y = RADVIZ_CENTER_Y + Math.sin(theta) * (RADVIZ_RADIUS + 2 * (100 - Math.abs(i - 50)));
                                                // lineData.push(({ x: mid_x, y: mid_y }));
                                                // }
                                                // }
                                                lineData.push({ x: attractorB.x - 0.1, y: attractorB.y });
                                                lineData.push({ x: attractorB.x, y: attractorB.y });
                                                lineData.push({ x: attractorB.x + 0.1, y: attractorB.y });
                                                // console.log(lineData);
                                                g.append("path").attr("d", lineBasis(lineData)).attrs({
                                                    fill: 'none',
                                                    stroke: '#E179C1',
                                                    opacity: 1,
                                                    // opacity: UNSELECTED_OPACITY/2,
                                                    'stroke-width': cor / 2
                                                });
                                            }
                                        });
                                    });
                                }
                            });
                        });

                        // radviz 내부 노드 그리기
                        save = {};

                        _.forEach(dataPoints, function (dataPoint) {
                            dataPoint.render();
                            var x = dataPoint.coordinateX();
                            var y = dataPoint.coordinateY();
                            var r = dataPoint.user.stars / 10000;

                            save[dataPoint.user.id] = { id: dataPoint.user.id, x: x, y: y, r: r };
                        });
                        //
                        // function download(filename, text) {
                        //     var element = document.createElement('a');
                        //     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                        //     element.setAttribute('download', filename);
                        //
                        //     element.style.display = 'none';
                        //     document.body.appendChild(element);
                        //
                        //     element.click();
                        //     console.log('hi');
                        //     document.body.removeChild(element);
                        // }
                        //
                        // download('circles2.json', JSON.stringify(save));
                        //

                    case 32:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function userVis(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }