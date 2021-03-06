function FormElement_MultiLine(form) {
 
  // Properties
  this.super = new FormElement(this);
  this.props = $.extend({}, this.super.props, {
    id: this.super.generate_id()
  });
  this.form = form;
  this.index = null;
  this.$elem = null;
  
  
  // Create a single-line text box
  this.init = function ($container) {
    var $input = $("<textarea>", { type: "text", class: "formbuilder-multiline", readonly: this.form.editable });
    var $newelem = $("<div>", { class: "formbuilder-element" })
                        .toggleClass("formbuilder-selectable", this.form.editable)
                        .append(this.super.print_label())
                        .append($input)
                        .attr("formbuilder-index", this.index);

    $container.append($newelem);
    this.$elem = $newelem;
    if (this.form.editable) {
      this.super.onclick();
      this.super.is_selected();
    }
    else {
      this.super.validate_on_change();
    }
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