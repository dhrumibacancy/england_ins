//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$(".vodiapicker option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item =
    '<li><img src="' +
    img +
    '" alt="" value="' +
    value +
    '"/><span>' +
    text +
    "</span></li>";
  langArray.push(item);
});

$("#a").html(langArray);

//Set the button value to the first el of the array
$(".btn-select").html(langArray[0]);
$(".btn-select").attr("value", "en");

//change button stuff on click
$("#a li").click(function () {
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;
  var item =
    '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  $(".btn-select").html(item);
  $(".btn-select").attr("value", value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function () {
  $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem("lang");
if (sessionLang) {
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $(".btn-select").html(langArray[langIndex]);
  $(".btn-select").attr("value", sessionLang);
} else {
  var langIndex = langArray.indexOf("ch");
  console.log(langIndex);
  $(".btn-select").html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}

(function ($) {
  $.fn.mySelectDropdown = function (options) {
    return this.each(function () {
      var $this = $(this);

      $this.each(function () {
        var dropdown = $("<div />").addClass("f-dropdown selectDropdown");

        if ($(this).is(":disabled")) dropdown.addClass("disabled");

        $(this).wrap(dropdown);

        var label = $("<span />")
          .append($("<span />").text($(this).attr("placeholder")))
          .insertAfter($(this));
        var list = $("<ul />");

        $(this)
          .find("option")
          .each(function () {
            var image = $(this).data("image");
            if (image) {
              list.append(
                $("<li />").append(
                  $("<a />")
                    .attr("data-val", $(this).val())
                    .html($("<span />").append($(this).text()))
                    .prepend('<img src="' + image + '">')
                )
              );
            } else if ($(this).val() != "") {
              list.append(
                $("<li />").append(
                  $("<a />")
                    .attr("data-val", $(this).val())
                    .html($("<span />").append($(this).text()))
                )
              );
            }
          });

        list.insertAfter($(this));

        if (
          $(this).find("option:selected").length > 0 &&
          $(this).find("option:selected").val() != ""
        ) {
          list
            .find(
              'li a[data-val="' + $(this).find("option:selected").val() + '"]'
            )
            .parent()
            .addClass("active");
          $(this).parent().addClass("filled");
          label.html(list.find("li.active a").html());
        }
      });

      if (!$(this).is(":disabled")) {
        $(this)
          .parent()
          .on("click", "ul li a", function (e) {
            e.preventDefault();
            var dropdown = $(this).parent().parent().parent();
            var active = $(this).parent().hasClass("active");
            var label = active
              ? $("<span />").text(dropdown.find("select").attr("placeholder"))
              : $(this).html();

            dropdown.find("option").prop("selected", false);
            dropdown.find("ul li").removeClass("active");

            dropdown.toggleClass("filled", !active);
            dropdown.children("span").html(label);

            if (!active) {
              dropdown
                .find('option[value="' + $(this).attr("data-val") + '"]')
                .prop("selected", true);
              $(this).parent().addClass("active");
            }

            dropdown.removeClass("open");
          });

        $this.parent().on("click", "> span", function (e) {
          var self = $(this).parent();
          self.toggleClass("open");
        });

        $(document).on("click touchstart", function (e) {
          var dropdown = $this.parent();
          if (dropdown !== e.target && !dropdown.has(e.target).length) {
            dropdown.removeClass("open");
          }
        });
      }
    });
  };
})(jQuery);

$("select.f-dropdown").mySelectDropdown();

function formatRows(main, prefer, common) {
  return (
    '<tr><td class="col-md-6"><button  value="' +
    main +
    '" class="me-2 upload-btn" onclick="importData()"  />  License</button></td>' +
    '<td class="col-xs-3"><="text" value="' +
    prefer +
    '" class="form-control editable" /></td>' +
    '<td class="col-xs-3"><input type="text" value="' +
    common +
    '" class="form-control editable" /></td>' +
    '<td class="col-xs-1 text-center"><a href="#" onClick="deleteRow(this)">' +
    '<i class="fa fa-trash-o" aria-hidden="true"></a></td></tr>'
  );
}

function deleteRow(trash) {
  $(trash).closest("tr").remove();
}

function addRow() {
  var main = $(".addMain").val();
  var preferred = $(".addPrefer").val();
  var common = $(".addCommon").val();
  $(formatRows(main, preferred, common)).insertAfter("#addRow");
  $(input).val("");
}

$(".addBtn").click(function () {
  addRow();
});

function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    console.log(files);
  };
  input.click();
}

function importDatalicence() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = Array.from(input.files);
    console.log(files);
  };
  input.click();
}
