function FormElement_Dropdown(builder) {
  
  // Defaults
  this.label = "Label";
  this.help = "Help text goes here";
  this.builder = builder;
  this.index = null;

  // Properties
  this.$elem = null;
  this.super = new FormElement(this);
  
  // Create a single-line text box
  this.init = function () {
    var $help = $("<small>").html(this.help);
    var $label = $("<label>", { class: "formbuilder-label" }).html(this.label).append($help);
    var $input = $("<select>", { class: "formbuilder-dropdown", disabled: true });
    var $newelem = $("<div>", { class: "formbuilder-element formbuilder-selectable" })
                        .append($label)
                        .append($input)
                        .attr("formbuilder-index", this.index);

    this.builder.$body.append($newelem);
    this.$elem = $newelem;
    this.super.onclick();
    this.super.select();
  }

}