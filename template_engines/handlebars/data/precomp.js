(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['precomp'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"card col-xs-12 col-md-4 col-sm-6\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.slika || (depth0 != null ? depth0.slika : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slika","hash":{},"data":data}) : helper)))
    + "\" class=\"card-img-top img-fluid\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"naslov_kartice\">"
    + alias4(((helper = (helper = helpers.proizvod || (depth0 != null ? depth0.proizvod : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"proizvod","hash":{},"data":data}) : helper)))
    + "\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.skater : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</h4>\r\n                <div class=\"kategorija\">Stanje: "
    + alias4(((helper = (helper = helpers.stanje || (depth0 != null ? depth0.stanje : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stanje","hash":{},"data":data}) : helper)))
    + "</div>\r\n                <div class=\"opis\">"
    + alias4(((helper = (helper = helpers.opis || (depth0 != null ? depth0.opis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opis","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.podatci : depth0),{"name":"with","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"akicija\">"
    + alias4((helpers.kolicinaUpozorenje || (depth0 && depth0.kolicinaUpozorenje) || alias2).call(alias1,(depth0 != null ? depth0.podatci : depth0),{"name":"kolicinaUpozorenje","hash":{},"data":data}))
    + "</div>\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"autor\">"
    + container.escapeExpression(((helper = (helper = helpers.skater || (depth0 != null ? depth0.skater : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"skater","hash":{},"data":data}) : helper)))
    + "</span>\r\n                    ";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span class=\"autor col-xs-4\">skater nepoznat</span>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                <div class=\"godina\">Cijena: "
    + container.escapeExpression(((helper = (helper = helpers.cijena || (depth0 != null ? depth0.cijena : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cijena","hash":{},"data":data}) : helper)))
    + " kn</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.zalihe : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"zalihe puno\">"
    + container.escapeExpression(((helper = (helper = helpers.kolicina || (depth0 != null ? depth0.kolicina : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"kolicina","hash":{},"data":data}) : helper)))
    + " kom.</div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "\r\n                <div class=\"zalihe prazno\">nema na zalihama</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.daske : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();