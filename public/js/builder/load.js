function FormLoad(builder) {

  this.builder = builder;
  
  // Load the form's stored data
  this.do = function (callback) {
    $.get(location.pathname + "/structure", function (response) {
      if (response) {
        json = JSON.parse(response);
        this.builder.props = json["props"];
        for (var i=0; i<json["elements"].length; i++) {
          var el = json["elements"][i];
          var new_el = new (window[el["class"]])(this.builder);
          new_el.props = json["elements"][i]["props"];
          this.builder.elements.push(new_el);
        }
      }
      callback();
    }.bind(this));
  }

}