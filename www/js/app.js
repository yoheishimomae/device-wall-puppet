
var settings = {
    interval: 1 * 1000,
    request_url: 'http://10.0.1.145:3000/request'
};

var app = {
    initialize: function() {
        // document.addEventListener('deviceready', this.deviceready, false);
        this.deviceready.call();
    },
    bind: function() {
        setInterval( app.request, settings.interval );
    },
    deviceready: function() {
        app.bind.call();
    },
    request: function() {
        var rnd = Math.random().toString().replace('.', '');
        $.getScript( settings.request_url + "?v=" + rnd + "&date=" + Date().toString() );
    }
};
