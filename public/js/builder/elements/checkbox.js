function FormElement_Checkbox(builder) {
  
  // Defaults
  this.label = "Label";
  this.help = "Help text goes here";
  this.builder = builder;

  this.options = [
    { value: "Option 1" },
    { value: "Option 2" },
    { value: "Option 3" }
  ];
  
  // Create a single-line text box
  this.init = function () {
    var $help = $("<small>").html(this.help);
    var $label = $("<label>", { class: "formbuilder-label" }).html(this.label).append($help);
    var $inputs = this.print_options();
    var $newelem = $("<div>", { class: "formbuilder-element" })
                        .append($label)
                        .append($inputs);

    this.builder.$body.append($newelem);
  }

  // Print options
  this.print_options = function () {
    var $checkbox_container = $("<div>", { class: "formbuilder-checkbox" });
    for (var i=0; i<this.options.length; i++) {
      var $input = $("<input>", { type: "checkbox", disabled: true });
      var $label = $("<label>", { class: "formbuilder-checkbox-label" }).html(this.options[i].value);
      $checkbox_container.append($input).append($label);
    }
    return $checkbox_container;
  }

}