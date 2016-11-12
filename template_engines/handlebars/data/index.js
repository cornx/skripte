(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "        <div class=\"card col-xs-12 col-md-4 col-sm-6\">\r\n            <img src=\""
    + alias4(((helper = (helper = helpers.slika || (depth0 != null ? depth0.slika : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slika","hash":{},"data":data}) : helper)))
    + "\" class=\"card-img-top img-fluid\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"naslov_kartice\">"
    + alias4(((helper = (helper = helpers.naslov || (depth0 != null ? depth0.naslov : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"naslov","hash":{},"data":data}) : helper)))
    + "\r\n                ";
  stack1 = ((helper = (helper = helpers.autor || (depth0 != null ? depth0.autor : depth0)) != null ? helper : alias2),(options={"name":"autor","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.autor) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n                    ";
  stack1 = ((helper = (helper = helpers.autor || (depth0 != null ? depth0.autor : depth0)) != null ? helper : alias2),(options={"name":"autor","hash":{},"fn":container.noop,"inverse":container.program(4, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.autor) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h4>\r\n                <div class=\"kategorija\">"
    + alias4(((helper = (helper = helpers.kategorija || (depth0 != null ? depth0.kategorija : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kategorija","hash":{},"data":data}) : helper)))
    + "</div>\r\n                <div class=\"opis\">"
    + alias4(((helper = (helper = helpers.opis || (depth0 != null ? depth0.opis : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opis","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
  stack1 = ((helper = (helper = helpers.godina || (depth0 != null ? depth0.godina : depth0)) != null ? helper : alias2),(options={"name":"godina","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.godina) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.godina || (depth0 != null ? depth0.godina : depth0)) != null ? helper : alias2),(options={"name":"godina","hash":{},"fn":container.noop,"inverse":container.program(8, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.godina) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.zalihe || (depth0 != null ? depth0.zalihe : depth0)) != null ? helper : alias2),(options={"name":"zalihe","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.zalihe) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.zalihe || (depth0 != null ? depth0.zalihe : depth0)) != null ? helper : alias2),(options={"name":"zalihe","hash":{},"fn":container.noop,"inverse":container.program(12, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.zalihe) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"autor\">"
    + container.escapeExpression(((helper = (helper = helpers.autor || (depth0 != null ? depth0.autor : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"autor","hash":{},"data":data}) : helper)))
    + "</span>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span class=\"autor col-xs-4\">autor nepoznat</span>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"godina\">Godina: "
    + container.escapeExpression(((helper = (helper = helpers.godina || (depth0 != null ? depth0.godina : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"godina","hash":{},"data":data}) : helper)))
    + "</div>\r\n                ";
},"8":function(container,depth0,helpers,partials,data) {
    return "\r\n                <div class=\"godina\">Godina nepoznata</div>\r\n                ";
},"10":function(container,depth0,helpers,partials,data) {
    return "\r\n                <div class=\"zalihe puno\">dostupno</div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "\r\n                <div class=\"zalihe prazno\">nije dostupno</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.fotografije || (depth0 != null ? depth0.fotografije : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"fotografije","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.fotografije) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();