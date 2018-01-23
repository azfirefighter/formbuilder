function FormPages(form) {

  this.form = form;
  this.current = 0;
  this.data = { 0: [] };

  this.separate = function () {
    var page_count = 0;
    while (this.form.elements.length > 0) {
      var top = this.form.elements.shift();
      if (top.constructor.name == "FormElement_PageBreak") {
        var navigation = new FormElement_Buttons(this.form);
        if (page_count > 0) {
          navigation.props.button1.value = this.form.props.prev;
          navigation.props.button1.onclick = this.prev_page.bind(this);
        }
        navigation.props.button2.value = this.form.props.next;
        navigation.props.button2.onclick = this.next_page.bind(this);
        this.data[page_count].push(navigation);
        page_count++;
        this.data[page_count] = [];
      }
      else {
        this.data[page_count].push(top);
      }
    }
    
    var submit = new FormElement_Buttons(this.form);
    if (page_count > 0) {
      submit.props.button1.value = this.form.props.prev;
      submit.props.button1.onclick = this.prev_page.bind(this);
    }
    submit.props.button2.value = this.form.props.submit;
    submit.props.button2.onclick = this.submit_form.bind(this);
    this.data[page_count].push(submit);
  }

  this.prev_page = function () {
    this.form.save.page_submission(this.current);
    this.current--;
    this.form.init_page();
  }

  this.next_page = function () {
    if (this.form.validate()) {
      this.form.save.page_submission(this.current);
      this.current++;
      this.form.init_page();
    }
  }

  this.loading = function () {
    if (this.form.$form.find(".formpay-loading").length > 0) {
      this.form.$form.find(".formpay-loading, .formpay-spinner").remove();
    }
    else {
      this.form.$form.append($("<div>", { class: "formpay-loading" }))
                .append($("<i>", { class: "fas fa-circle-notch fa-spin formpay-spinner" }));
    }
  }

  this.submit_form = function () {
    if (this.form.validate()) {
      this.form.save.page_submission(this.current);
      var path = location.pathname.split("/");
      path.splice(-1);
      this.loading();
      $.post(path.join("/") + "/submit", { json: this.form.save.json() }, function (result) {
        this.loading();
        if (this.form.props.payment) {
          location.href = path.join("/") + "/pay/" + result;
        }
        else {
          location.href = this.form.props.redirect;
        }
      }.bind(this));
      
    }
  }

}