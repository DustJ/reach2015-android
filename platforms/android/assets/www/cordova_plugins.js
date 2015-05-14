cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
        "id": "cordova-plugin-google-analytics.UniversalAnalytics",
        "clobbers": [
            "analytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.socialsharing": "4.3.18",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "org.apache.cordova.statusbar": "0.1.10",
    "cordova-plugin-google-analytics": "0.7.2",
    "com.google.playservices": "19.0.0"
}
// BOTTOM OF METADATA
});