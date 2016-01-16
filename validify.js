/*
 ** Validify.js - modern login form validation by Emre TEKİNCE
 ** https://github.com/emretekince/validify.js
 ** emretekince.com
 */

 ;(function ($) {
    'use strict';

    $.fn.validify = function (options) {
        new validify(this, options);
        return this;
    };

    var defaults = {
        errorStyle: "validifyError",
        successStyle: "validifySuccess",
        emailFieldName: "email",
        emailCheck: true,
        requiredAttr: "required",
        onSubmit: function () {
        },
        onFormSuccess: function () {
        },
        onFormFail: function () {
        }
    };

    function validify(element, options) {
        var widget = this;

        this.element = element;
        this.success = true;
        this.settings = $.extend({}, defaults, options);

        this.element.find("input").keyup(function () {
            widget.success = true;
            widget.makeItValidify($(this));
            var $this = this;
            widget.element.find("input").each(function () {
                if ($(this).attr(widget.settings.requiredAttr) !== undefined && !widget.checkSingle($(this))) {
                    widget.success = false;
                    if (this === $this)
                        widget.makeItErrorify($(this));
                }
            });

            if (widget.success){
                widget.element.find('button').removeAttr("disabled")
                widget.settings.onFormSuccess(widget.element);
            }
            else{
                widget.settings.onFormFail(widget.element);
                widget.element.find('button').attr("disabled", true)
            }
        });

        this.element.submit(function (e) {
            e.preventDefault()
            widget.settings.onSubmit(e, widget.element);
        });

        this.init();
    }

    validify.prototype = {

        init: function () {
            this.element.attr("novalidate", true).find('button').attr("disabled", true);
        },

        checkSingle: function (obj) {
            return !(obj.val().trim() === '' || (obj.attr("name") === this.settings.emailFieldName && !this.emailCheck(obj)))
        },

        makeItErrorify: function (obj) {
            obj.removeClass(this.settings.successStyle).addClass(this.settings.errorStyle);
        },

        makeItValidify: function (obj) {
            obj.removeClass(this.settings.errorStyle).addClass(this.settings.successStyle);
        },

        emailCheck: function (obj) {
            return this.settings.emailCheck && this.validateEmail(obj.val())
        },
        validateEmail: function (obj) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(obj);
        }

    };


})(jQuery);
