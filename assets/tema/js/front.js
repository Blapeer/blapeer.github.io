$(function() {
	$(".sidebar-toggler").on("click", function() {
		$(".sidebar").toggleClass("shrink show")
	});
	
	var e = $("link#theme-stylesheet");
	$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(e);
	var t = $("link#new-stylesheet");
	$.cookie("theme_csspath") && t.attr("href", $.cookie("theme_csspath")), $("#colour").change(function() {

        if ("" !== $(this).val()) {

			var e = "https://drappwebydesarrolloweb.on.drv.tw/www.host/css/style." + $(this).val() + ".css";

			t.attr("href", e), $.cookie("theme_csspath", e, {
				expires: 365,
				path: document.URL.substr(0, document.URL.lastIndexOf("/"))
			})
		}
		return !1
	})
}), Cookies.set("active", "true");


