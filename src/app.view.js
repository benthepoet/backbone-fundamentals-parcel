// Import Underscore for templating
var _ = require('underscore');
// Import Backbone and its dependencies
var Backbone = require('backbone');

// Define the template
var rawTemplate = `
  <div>
    <h4><%= message %></h4>
  </div>
`;

// Declare our options we'll use to extend the base view
var viewOptions = {
  el: 'body',
  
  initialize: function () {
    // Compile the template
    this.template = _.template(rawTemplate);
    
    // Render the view
    this.render();
  },
  
  render: function () {
    // Render the template
    var renderedHtml = this.template({ message: 'App Ready' });
    
    // Update the DOM
    this.$el.html(renderedHtml);
  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);