let $keywordLink = $('#keywordLink');
let $userLink = $('#userLink');
let $userNode = $('#userNode');

$keywordLink.prop('checked', true);
$userLink.prop('checkd',false);
$userNode.prop('checkd',false);

$keywordLink.click(function () {
    update();
});

$userLink.click(function () {
    update();
});

$userNode.click(function () {
    update();
});

function update() {
    let options = {
        keywordLink: $($keywordLink).is(':checked'),
        userLink: $($userLink).is(':checked'),
        userNode: $($userNode).is(':checked'),
    };

    userVis({ users: Data.USERS, links: Data.LINKS, fields: Data.FIELDS }, options)
}



