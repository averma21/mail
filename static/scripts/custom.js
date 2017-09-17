(function($){

  var WEB_SEARCH = "/search";
  var IMAGE_SEARCH = "/images/search";
  var VIDEO_SEARCH = "/videos/search";

  $(function(){
    $("[data-adjust-height]").each(function() {
      var $this = $(this);
      var $target = $($this.data("adjustHeight"));
      $this.height($target.outerHeight());
      $this.removeClass("hidden")
    });
    var searchPath = WEB_SEARCH;
    var $searchBox = $("#search-box");
    var $searchAlert = $(".search-alert-row");
    var $topNav = $("#topNav");
    $("[data-search-type]").click(function(e) {
      $topNav.find(".nav-item").removeClass("active");
      var searchType = $(this).data("searchType");
      $(this).addClass("active");
      if (searchType == "web") {
        searchPath = WEB_SEARCH;
      } else if (searchType == "images") {
        searchPath = IMAGE_SEARCH;
      } else if (searchType == "videos") {
        searchPath = VIDEO_SEARCH;
      }
    });
    function search() {
      var text = $searchBox.val();
      if (!text || text.length == 0) {
        $searchAlert.removeClass("hidden");
        window.setTimeout(function(){
          $searchAlert.addClass("hidden");
        }, 5000);
        return;
      }
      $searchAlert.addClass("hidden");
      window.open("https://www.bing.com" + searchPath + "?q=" + encodeURIComponent(text));
    }
    $(".search-btn").on("click", function(){
      search();
    });
    $searchBox.keyup(function (e) {
      if (e.which == 13) {
        search();
      }
    });
    $('.search-engine-selector').on( 'click', 'a', function() {
        var text = $(this).html();
        var htmlText = text + ' <span class="caret"></span>';
        $(this).closest('.search-box-container').find('.dropdown-toggle').html(htmlText);
    });
  });
})(window.$);
