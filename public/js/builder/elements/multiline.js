function FormElement_MultiLine(builder) {
 
  // Properties
  this.super = new FormElement(this);
  this.props = $.extend({}, this.super.props, {
  });
  this.builder = builder;
  this.index = null;
  this.$elem = null;
  
  
  // Create a single-line text box
  this.init = function ($container) {
    var $input = $("<textarea>", { type: "text", class: "formbuilder-multiline", readonly: true });
    var $newelem = $("<div>", { class: "formbuilder-element formbuilder-selectable" })
                        .append(this.super.print_label())
                        .append($input)
                        .attr("formbuilder-index", this.index);

    $container.append($newelem);
    this.$elem = $newelem;
    this.super.onclick();
    this.super.is_selected();
  }

  // Element settings
  this.get_settings = function () {
    this.super.regular_settings();
    this.super.setting_delete();
  }

  // Zip into json
  this.zip = function () {
    return this.super.zip();
  }

}