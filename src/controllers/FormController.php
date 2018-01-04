<?php
class FormController extends Controller {
  public function create() {
    $form = Form::create([]);
    header("Location: /form/" . $form->id . "/build");
  }

  public function index($formId) {
    try {
      Form::find($formId);
      $this->render('forms_build.html', ['id' => $formId]);
    }
    catch (ActiveRecord\RecordNotFound $e) {
      header("Location: /");
    }
  }  

  public function delete($formId) {
    Form::find($formId)->delete();
  }

}
?>