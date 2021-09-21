function close() {
    $('#lock-img').attr('src', 'https://cdn-icons-png.flaticon.com/512/841/841097.png');
}

function open() {
    $('#lock-img').attr('src', 'https://cdn-icons-png.flaticon.com/512/880/880779.png');
}

$('#open-btn').click(open);
$('#close-btn').click(close);