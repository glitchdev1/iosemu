var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Dom7
var $ = Dom7;



// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  cache: false,
  data: function () {
    return {
      background: 0,
      iconTheamIndex: 0,
      backgroundTheamsIdex:0,
    };
  },
  methods: {

    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    
  },
  on: {
    pageInit: function (page) {

      var self = this;

      /**
       * ========change pages background color theme=====
       */
      var cols = document.getElementsByClassName('page');
      var cardcols = document.getElementsByClassName('card');
      var cardcols1 = document.getElementsByClassName('rowColor');
      var cardcols2 = document.getElementsByClassName('navbar-inner navbar-inner-large navbar-current');
      var cardcols3 = document.getElementsByClassName('block-title item-title Themetext');

      var backimagearr = ['change-background-color-to-default','change-background-color-to-dark','change-background-color-to-green','change-background-color-to-color'];
      var rowcolorarr = ['change-row-background-color-to-default','change-row-background-color-to-dark','change-row-background-color-to-green','change-row-background-color-to-color'];
      var selectdColor =backimagearr[self.data.backgroundTheamsIdex];
      var selectdColorrow =rowcolorarr[self.data.backgroundTheamsIdex];
      console.log("selectdColor",selectdColor);

      for (var x = 0; x < cols.length; x++) {
        cols[x].classList.add(selectdColor);
      }
      for (var x = 0; x < cardcols.length; x++) {
        cardcols[x].classList.add(selectdColor);
      }
      for (var x = 0; x < cardcols1.length; x++) {
        cardcols1[x].classList.add(selectdColorrow);
      }
      for (var x = 0; x < cardcols2.length; x++) {
        cardcols2[x].classList.add(selectdColorrow);
       }
       for (var x = 0; x < cardcols3.length; x++) {
        cardcols3[x].classList.add(selectdColor);
       }

       /**
        * ======change inndex page background=========
        */

      var back = self.data.background;
      // ====Stills======
      if (back == 0) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');
        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});

        

      }

      if (back == 1) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);

        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});

      }

      if (back == 2) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }

      if (back == 3) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }

      if (back == 4) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }
      if (back == 5) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }
      if (back == 6) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }
      if (back == 7) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }
      if (back == 8) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "white"});
      }

      // ===== Animated=======
      if (back == 9) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }
      if (back == 10) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }
      if (back == 11) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }
      if (back == 12) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }
      if (back == 13) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }
      if (back == 14) {

        var classes = ['default-img', 'my-image', 'my-image1', 'my-image2', 'my-image3', 'my-image4', 'my-image5', 'my-image6', 'my-image7','my-image8','my-image9','my-image10','my-image11','my-image12','my-image13'];
        var doc = document.getElementById('sliderone');

        for (var x = 0; x < classes.length; x++) {
          if ($('#sliderone').hasClass(classes[x])) {
            $('#sliderone').removeClass(classes[x]);
          }
        }
        $('#sliderone').addClass(classes[back]);
        // ==== icon name color change
        $("nav").find("span").css({"color": "yellow"});
      }

      
        /**
         * ====Chagne wallpapaper page image======
         * 
         */
        var classes = ['default-page-background-img', 'page-background-img', 'page-background-img1', 'page-background-img2', 'page-background-img3', 'page-background-img4', 'page-background-img5', 'page-background-img6', 'page-background-img7','page-background-img8','page-background-img9','page-background-img10','page-background-img11','page-background-img12','page-background-img13'];
      
        for (var x = 0; x < classes.length; x++) {
          if ($('#bagwall').hasClass(classes[x])) {
            $('#bagwall').removeClass(classes[x]);
          }
        }
        $('#bagwall').addClass(classes[back]);

      /**
       * =========Change app icon Theme ============
       */

      var iconTheamIndex = self.data.iconTheamIndex;
      if (iconTheamIndex == 0) {

        if ($('#defaultIconTheam1').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam1').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam1').addClass("showDefaultIconTheam");

        // 2
        if ($('#defaultIconTheam2').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam2').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam2').addClass("showDefaultIconTheam");

        // 3
        if ($('#defaultIconTheam3').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam3').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam3').addClass("showDefaultIconTheam");

        // animateIconTheam1

        if ($('#animateIconTheam1').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam1').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam1').addClass("hideAnimateIconTheam");

        if ($('#animateIconTheam2').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam2').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam2').addClass("hideAnimateIconTheam");

        if ($('#animateIconTheam3').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam3').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam3').addClass("hideAnimateIconTheam");
        //darkIconTheam1


        if ($('#darkIconTheam1').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam1').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam1').addClass("hideDarkIconTheam");

        if ($('#darkIconTheam2').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam2').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam2').addClass("hideDarkIconTheam");


        if ($('#darkIconTheam3').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam3').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam3').addClass("hideDarkIconTheam");

        /**
         * ======tool bar For Default icon change =========
         */

         //showDefaultToolbarTheam hideDefaultToolbarTheam
        if ($('#ToolbarDefa').hasClass("showDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("showDefaultToolbarTheam");
        }
        if ($('#ToolbarDefa').hasClass("hideDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("hideDefaultToolbarTheam");
        }
        $('#ToolbarDefa').addClass("showDefaultToolbarTheam");

        // showDarkToolbarTheam hideDarkToolbarTheam

        if ($('#ToolbarDark').hasClass("showDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("showDarkToolbarTheam");
        }
        if ($('#ToolbarDark').hasClass("hideDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("hideDarkToolbarTheam");
        }
        $('#ToolbarDark').addClass("hideDarkToolbarTheam");

        //showAnimateToolbarTheam hideAnimateToolbarTheam
        if ($('#ToolbarAni').hasClass("showAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("showAnimateToolbarTheam");
        }
        if ($('#ToolbarAni').hasClass("hideAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("hideAnimateToolbarTheam");
        }
        $('#ToolbarAni').addClass("hideAnimateToolbarTheam");


      }else if (iconTheamIndex == 1) {
        //  showDefaultIconTheam
        // $('#defaultIconTheam1').removeClass("showDefaultIconTheam");
        if ($('#defaultIconTheam1').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam1').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam1').addClass("hideDefaultIconTheam");

        // 2
        if ($('#defaultIconTheam2').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam2').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam2').addClass("hideDefaultIconTheam");

        // 3
        if ($('#defaultIconTheam3').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam3').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam3').addClass("hideDefaultIconTheam");

        // animateIconTheam1

        if ($('#animateIconTheam1').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam1').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam1').addClass("hideAnimateIconTheam");

        if ($('#animateIconTheam2').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam2').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam2').addClass("hideAnimateIconTheam");

        if ($('#animateIconTheam3').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam3').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam3').addClass("hideAnimateIconTheam");
        //darkIconTheam1


        if ($('#darkIconTheam1').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam1').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam1').addClass("showDarkIconTheam");

        if ($('#darkIconTheam2').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam2').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam2').addClass("showDarkIconTheam");


        if ($('#darkIconTheam3').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam3').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam3').addClass("showDarkIconTheam");


        /**
         * ====tool bar for Dark icon change ==============
         */

         //showDefaultToolbarTheam hideDefaultToolbarTheam
         if ($('#ToolbarDefa').hasClass("showDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("showDefaultToolbarTheam");
        }
        if ($('#ToolbarDefa').hasClass("hideDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("hideDefaultToolbarTheam");
        }
        $('#ToolbarDefa').addClass("hideDefaultToolbarTheam");

        // showDarkToolbarTheam hideDarkToolbarTheam

        if ($('#ToolbarDark').hasClass("showDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("showDarkToolbarTheam");
        }
        if ($('#ToolbarDark').hasClass("hideDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("hideDarkToolbarTheam");
        }
        $('#ToolbarDark').addClass("showDarkToolbarTheam");

        //showAnimateToolbarTheam hideAnimateToolbarTheam
        if ($('#ToolbarAni').hasClass("showAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("showAnimateToolbarTheam");
        }
        if ($('#ToolbarAni').hasClass("hideAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("hideAnimateToolbarTheam");
        }
        $('#ToolbarAni').addClass("hideAnimateToolbarTheam");

      }else if (iconTheamIndex == 2) {
        //  showDefaultIconTheam
        // $('#defaultIconTheam1').removeClass("showDefaultIconTheam");
        if ($('#defaultIconTheam1').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam1').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam1').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam1').addClass("hideDefaultIconTheam");

        // 2
        if ($('#defaultIconTheam2').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam2').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam2').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam2').addClass("hideDefaultIconTheam");

        // 3
        if ($('#defaultIconTheam3').hasClass("showDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("showDefaultIconTheam");
        }
        if ($('#defaultIconTheam3').hasClass("hideDefaultIconTheam")) {
          $('#defaultIconTheam3').removeClass("hideDefaultIconTheam");
        }
        $('#defaultIconTheam3').addClass("hideDefaultIconTheam");

        // animateIconTheam1

        if ($('#animateIconTheam1').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam1').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam1').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam1').addClass("showAnimateIconTheam");

        if ($('#animateIconTheam2').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam2').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam2').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam2').addClass("showAnimateIconTheam");

        if ($('#animateIconTheam3').hasClass("showAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("showAnimateIconTheam");
        }
        if ($('#animateIconTheam3').hasClass("hideAnimateIconTheam")) {
          $('#animateIconTheam3').removeClass("hideAnimateIconTheam");
        }
        $('#animateIconTheam3').addClass("showAnimateIconTheam");
        //darkIconTheam1


        if ($('#darkIconTheam1').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam1').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam1').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam1').addClass("hideDarkIconTheam");

        if ($('#darkIconTheam2').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam2').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam2').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam2').addClass("hideDarkIconTheam");


        if ($('#darkIconTheam3').hasClass("showDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("showDarkIconTheam");
        }
        if ($('#darkIconTheam3').hasClass("hideDarkIconTheam")) {
          $('#darkIconTheam3').removeClass("hideDarkIconTheam");
        }
        $('#darkIconTheam3').addClass("hideDarkIconTheam");

         /**
         * ====tool bar for Animate icon change ============
         */

         //showDefaultToolbarTheam hideDefaultToolbarTheam
         if ($('#ToolbarDefa').hasClass("showDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("showDefaultToolbarTheam");
        }
        if ($('#ToolbarDefa').hasClass("hideDefaultToolbarTheam")) {
          $('#ToolbarDefa').removeClass("hideDefaultToolbarTheam");
        }
        $('#ToolbarDefa').addClass("hideDefaultToolbarTheam");

        // showDarkToolbarTheam hideDarkToolbarTheam

        if ($('#ToolbarDark').hasClass("showDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("showDarkToolbarTheam");
        }
        if ($('#ToolbarDark').hasClass("hideDarkToolbarTheam")) {
          $('#ToolbarDark').removeClass("hideDarkToolbarTheam");
        }
        $('#ToolbarDark').addClass("hideDarkToolbarTheam");

        //showAnimateToolbarTheam hideAnimateToolbarTheam
        if ($('#ToolbarAni').hasClass("showAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("showAnimateToolbarTheam");
        }
        if ($('#ToolbarAni').hasClass("hideAnimateToolbarTheam")) {
          $('#ToolbarAni').removeClass("hideAnimateToolbarTheam");
        }
        $('#ToolbarAni').addClass("showAnimateToolbarTheam");
      }

    },
  },

  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },

  actions: {
    convertToPopover: false,
    grid: true,
  }

});



}
/*
     FILE ARCHIVED ON 08:21:34 Oct 29, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:29:33 May 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.592
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 43.837
  LoadShardBlock: 83.81 (3)
  PetaboxLoader3.datanode: 99.616 (4)
  load_resource: 100.749
  PetaboxLoader3.resolve: 74.148
*/