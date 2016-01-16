# validify.js
a jquery plugin for simple login form validation

![alt tag](https://raw.github.com/emretekince/validify.js/master/cover.jpg)

## Installation

* Extract files
* Add validify.js and validify.css to your project and make sure that you have jQuery in your project.
* Call the plugin with $("#example-form").validify();
* Call the plugin with $("#example-form").validify();

## Options

Options for plugin.

**errorStyle** CSS class for textbox when it's invalid. 
Default: validifyError

**successStyle** CSS class for textbox when it's valid. 
Default: validifySuccess

**emailField** Name of e-mail field to special check. 
Default : input[name='email']

**emailCheck** Enables checking for email field.
Default : true

**requiredAttr** HTML tag which defines field is required. PS: dont use this as "required". 
Default : required

## Events

**onSubmit** Callback when the form is submitted.

**onFormSuccess** Callback when the form is valid.

**onFormFail** Callback when the form is invalid.

## Example

Form

```
<form  id="demo" >
                <div class="form-group">
                    <input type="email" class="form-control textbox" name="email" required placeholder="e-mail">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control textbox" required placeholder="pass">
                </div>
                <div class="form-group">
                    <button class="btn btn-default btn-osx btn-lg"  type="submit"><i class="fa fa-arrow-circle-right"></i></button>
                </div>
                <div class="alert alert-success hidden" role="alert">Successfully</div>
            </form>
```

Javascript
```
  $("#demo").validify({
        onSubmit: function (e, $this) {
            $this.find('.alert').removeClass('hidden')
        },
        onFormSuccess: function (form) {
            console.log("Form is valid now!")
        },
        onFormFail: function (form) {
            console.log("Form is not valid :(")
        }
    });
```
