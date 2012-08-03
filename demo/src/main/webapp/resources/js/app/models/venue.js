/**
 * Module for the Venue model
 */
define([
    'backbone',
    'configuration'
], function (Backbone, config) {

    /**
     * The Venue model class definition
     * Used for CRUD operations against individual events
     */
    var Venue = Backbone.Model.extend({
        urlRoot: config.baseUrl + 'rest/venues'
    });

    return Venue;
});