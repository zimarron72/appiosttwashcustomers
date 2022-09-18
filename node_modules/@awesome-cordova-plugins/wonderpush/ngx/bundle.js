'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var NestedObject = /** @class */ (function () {
    function NestedObject(pluginObj) {
        this.pluginObj = pluginObj;
    }
    NestedObject.prototype.wrap = function (functionName, args) {
        var plugin = WonderPush.getPlugin();
        var userPreferences = plugin ? plugin.UserPreferences : null;
        if (!plugin || !userPreferences || !userPreferences[functionName]) {
            return core.getPromise(function (res, rej) {
                rej(new Error('Could not find plugin'));
            });
        }
        return core.getPromise(function (res, rej) {
            userPreferences[functionName].apply(userPreferences, tslib.__spreadArrays(args, [res]));
        });
    };
    return NestedObject;
}());
var UserPreferencesMethods = /** @class */ (function (_super) {
    tslib.__extends(UserPreferencesMethods, _super);
    function UserPreferencesMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the default channel id
     *
     * @returns {Promise<string>}
     */
    UserPreferencesMethods.prototype.getDefaultChannelId = function () {
        return this.wrap('getDefaultChannelId', []);
    };
    /**
     * Set the default channel id
     *
     * @param {string} id
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setDefaultChannelId = function (id) {
        return this.wrap('setDefaultChannelId', [id]);
    };
    /**
     * Get a channel group
     *
     * @param {string} groupId
     * @returns {Promise<WonderPushChannelGroup | null>}
     */
    UserPreferencesMethods.prototype.getChannelGroup = function (groupId) {
        return this.wrap('getChannelGroup', [groupId]);
    };
    /**
     * Get a channel
     *
     * @param {string} channelId
     * @returns {Promise<WonderPushChannel | null>}
     */
    UserPreferencesMethods.prototype.getChannel = function (channelId) {
        return this.wrap('getChannel', [channelId]);
    };
    /**
     * Create, update and remove channel existing groups to match the given channel groups
     *
     * @param {WonderPushChannelGroup[]} channelGroups
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannelGroups = function (channelGroups) {
        return this.wrap('setChannelGroups', [channelGroups]);
    };
    /**
     * Create, update and remove channels to match the given channels
     *
     * @param {WonderPushChannel[]} channels
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.setChannels = function (channels) {
        return this.wrap('setChannels', [channels]);
    };
    /**
     * Create or update a channel group
     *
     * @param {WonderPushChannelGroup} channelGroup
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannelGroup = function (channelGroup) {
        return this.wrap('putChannelGroup', [channelGroup]);
    };
    /**
     * Create or update a channel
     *
     * @param {WonderPushChannel} channel
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.putChannel = function (channel) {
        return this.wrap('putChannel', [channel]);
    };
    /**
     * Remove a channel group
     *
     * @param {string} groupId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannelGroup = function (groupId) {
        return this.wrap('removeChannelGroup', [groupId]);
    };
    /**
     * Remove a channel
     *
     * @param {string} channelId
     * @returns {Promise<any>}
     */
    UserPreferencesMethods.prototype.removeChannel = function (channelId) {
        return this.wrap('removeChannel', [channelId]);
    };
    return UserPreferencesMethods;
}(NestedObject));
var WonderPush = /** @class */ (function (_super) {
    tslib.__extends(WonderPush, _super);
    function WonderPush() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UserPreferences = new UserPreferencesMethods(_this);
        return _this;
    }
    WonderPush.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    WonderPush.prototype.setLogging = function (enabled) { return core.cordova(this, "setLogging", {}, arguments); };
    WonderPush.prototype.setDelegate = function (delegate) { return core.cordova(this, "setDelegate", {}, arguments); };
    WonderPush.prototype.getDelegate = function () { return core.cordova(this, "getDelegate", {}, arguments); };
    WonderPush.prototype.getUserId = function () { return core.cordova(this, "getUserId", {}, arguments); };
    WonderPush.prototype.getInstallationId = function () { return core.cordova(this, "getInstallationId", {}, arguments); };
    WonderPush.prototype.getDeviceId = function () { return core.cordova(this, "getDeviceId", {}, arguments); };
    WonderPush.prototype.getPushToken = function () { return core.cordova(this, "getPushToken", {}, arguments); };
    WonderPush.prototype.getAccessToken = function () { return core.cordova(this, "getAccessToken", {}, arguments); };
    WonderPush.prototype.trackEvent = function (type, attributes) { return core.cordova(this, "trackEvent", {}, arguments); };
    WonderPush.prototype.addTag = function (tag) { return core.cordova(this, "addTag", {}, arguments); };
    WonderPush.prototype.removeTag = function (tag) { return core.cordova(this, "removeTag", {}, arguments); };
    WonderPush.prototype.removeAllTags = function () { return core.cordova(this, "removeAllTags", {}, arguments); };
    WonderPush.prototype.getTags = function () { return core.cordova(this, "getTags", {}, arguments); };
    WonderPush.prototype.hasTag = function (tag) { return core.cordova(this, "hasTag", {}, arguments); };
    WonderPush.prototype.setProperty = function (field, value) { return core.cordova(this, "setProperty", {}, arguments); };
    WonderPush.prototype.unsetProperty = function (field) { return core.cordova(this, "unsetProperty", {}, arguments); };
    WonderPush.prototype.addProperty = function (field, value) { return core.cordova(this, "addProperty", {}, arguments); };
    WonderPush.prototype.removeProperty = function (field, value) { return core.cordova(this, "removeProperty", {}, arguments); };
    WonderPush.prototype.getPropertyValue = function (field) { return core.cordova(this, "getPropertyValue", {}, arguments); };
    WonderPush.prototype.getPropertyValues = function (field) { return core.cordova(this, "getPropertyValues", {}, arguments); };
    WonderPush.prototype.getProperties = function () { return core.cordova(this, "getProperties", {}, arguments); };
    WonderPush.prototype.putProperties = function (properties) { return core.cordova(this, "putProperties", {}, arguments); };
    WonderPush.prototype.subscribeToNotifications = function () { return core.cordova(this, "subscribeToNotifications", {}, arguments); };
    WonderPush.prototype.isSubscribedToNotifications = function () { return core.cordova(this, "isSubscribedToNotifications", {}, arguments); };
    WonderPush.prototype.unsubscribeFromNotifications = function () { return core.cordova(this, "unsubscribeFromNotifications", {}, arguments); };
    WonderPush.prototype.getUserConsent = function () { return core.cordova(this, "getUserConsent", {}, arguments); };
    WonderPush.prototype.setUserConsent = function (consent) { return core.cordova(this, "setUserConsent", {}, arguments); };
    WonderPush.prototype.clearAllData = function () { return core.cordova(this, "clearAllData", {}, arguments); };
    WonderPush.prototype.clearEventsHistory = function () { return core.cordova(this, "clearEventsHistory", {}, arguments); };
    WonderPush.prototype.clearPreferences = function () { return core.cordova(this, "clearPreferences", {}, arguments); };
    WonderPush.prototype.downloadAllData = function () { return core.cordova(this, "downloadAllData", {}, arguments); };
    WonderPush.pluginName = "WonderPush";
    WonderPush.plugin = "wonderpush-cordova-sdk";
    WonderPush.pluginRef = "WonderPush";
    WonderPush.repo = "https://github.com/wonderpush/wonderpush-cordova-sdk";
    WonderPush.install = "ionic cordova plugin add wonderpush-cordova-sdk --variable CLIENT_ID=YOUR_CLIENT_ID --variable CLIENT_SECRET=YOUR_CLIENT_SECRET ";
    WonderPush.installVariables = ["CLIENT_ID", "CLIENT_SECRET"];
    WonderPush.platforms = ["Android", "iOS"];
    WonderPush.decorators = [
        { type: core$1.Injectable }
    ];
    return WonderPush;
}(core.AwesomeCordovaNativePlugin));

exports.NestedObject = NestedObject;
exports.UserPreferencesMethods = UserPreferencesMethods;
exports.WonderPush = WonderPush;
