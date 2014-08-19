---
layout: default
---

# Download

Bootstrap (currently v3.2.0) has a few easy ways to quickly get started, each one appealing to a different skill level and use case. Read through to see what suits your particular needs.

            <div class="row bs-downloads">
              <div class="col-sm-4">

### Bootstrap

Compiled and minified CSS, JavaScript, and fonts. No docs or original source files are included.

                  [Download Bootstrap](https://github.com/twbs/bootstrap/releases/download/v3.2.0/bootstrap-3.2.0-dist.zip)

              </div>
              <div class="col-sm-4">

### Source code

Source Less, JavaScript, and font files, along with our docs. **Requires a Less compiler and [some setup.](#grunt)**

                  [Download source](https://github.com/twbs/bootstrap/archive/v3.2.0.zip)

              </div>
              <div class="col-sm-4">

### Sass

[Bootstrap ported from Less to Sass](https://github.com/twbs/bootstrap-sass) for easy inclusion in Rails, Compass, or Sass-only projects.

                  [Download Sass](https://github.com/twbs/bootstrap-sass/archive/v3.2.0.tar.gz)

              </div>
            </div>

### Bootstrap CDN

The folks over at [MaxCDN](http://www.maxcdn.com/) graciously provide CDN support for Bootstrap's CSS and JavaScript. Just use these [Bootstrap CDN](http://www.bootstrapcdn.com/) links.

          <div class="highlight">

    <span class="c"><!-- Latest compiled and minified CSS --></span>
              <span class="nt"><link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"</span><span class="nt">></span>

              <span class="c"><!-- Optional theme --></span>
              <span class="nt"><link</span> <span class="na">rel=</span><span class="s">"stylesheet"</span> <span class="na">href=</span><span class="s">"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css"</span><span class="nt">></span>

              <span class="c"><!-- Latest compiled and minified JavaScript --></span>
              <span class="nt"><script </span><span class="na">src=</span><span class="s">"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"</span><span class="nt">></script></span>`</pre></div>

    ### Install with Bower

    Install and manage Bootstrap's Less, CSS, JavaScript, and fonts using [Bower](http://bower.io).

                <div class="highlight"><pre>`<span class="nv">$ </span>bower install bootstrap`</pre></div>
              </div>

              <div class="bs-docs-section">

    # What's included

    Bootstrap is downloadable in two forms, within which you'll find the following directories and files, logically grouping common resources and providing both compiled and minified variations.

                <div class="bs-callout bs-callout-warning" id="jquery-required">

    #### jQuery required

    Please note that **all JavaScript plugins require jQuery** to be included, as shown in the [starter template](#template). [Consult our `bower.json`](https://github.com/twbs/bootstrap/blob/v3.2.0/bower.json) to see which versions of jQuery are supported.

                </div>

    ## Precompiled Bootstrap

    Once downloaded, unzip the compressed folder to see the structure of (the compiled) Bootstrap. You'll see something like this:

              <!-- NOTE: This info is intentionally duplicated in the README.
              Copy any changes made here over to the README too. -->
              <div class="highlight"><pre>`bootstrap/
              ├── css/
              │   ├── bootstrap.css
              │   ├── bootstrap.min.css
              │   ├── bootstrap-theme.css
              │   └── bootstrap-theme.min.css
              ├── js/
              │   ├── bootstrap.js
              │   └── bootstrap.min.js
              └── fonts/
                  ├── glyphicons-halflings-regular.eot
                  ├── glyphicons-halflings-regular.svg
                  ├── glyphicons-halflings-regular.ttf
                  └── glyphicons-halflings-regular.woff`</pre></div>

    This is the most basic form of Bootstrap: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). Fonts from Glyphicons are included, as is the optional Bootstrap theme.

    ## Bootstrap source code

    The Bootstrap source code download includes the precompiled CSS, JavaScript, and font assets, along with source Less, JavaScript, and documentation. More specifically, it includes the following and more:

              <div class="highlight"><pre>`bootstrap/
              ├── less/
              ├── js/
              ├── fonts/
              ├── dist/
              │   ├── css/
              │   ├── js/
              │   └── fonts/
              └── docs/
                  └── examples/`</pre></div>

    The `less/`, `js/`, and `fonts/` are the source code for our CSS, JS, and icon fonts (respectively). The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation, and `examples/` of Bootstrap usage. Beyond that, any other included file provides support for packages, license information, and development.

              </div>

              <div class="bs-docs-section">

    # Compiling CSS and JavaScript

    Bootstrap uses [Grunt](http://gruntjs.com) for its build system, with convenient methods for working with the framework. It's how we compile our code, run tests, and more.

    ## Installing Grunt

    To install Grunt, you must **first [download and install node.js](http://nodejs.org/download/)** (which includes npm). npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js.

                Then, from the command line:

1.  Install `grunt-cli` globally with `npm install -g grunt-cli`.
2.  Navigate to the root `/bootstrap/` directory, then run `npm install`. npm will look at the [`package.json`](https://github.com/twbs/bootstrap/blob/master/package.json) file and automatically install the necessary local dependencies listed there.

    When completed, you'll be able to run the various Grunt commands provided from the command line.

    ## Available Grunt commands

    ### `grunt dist` (Just compile CSS and JavaScript)

    Regenerates the `/dist/` directory with compiled and minified CSS and JavaScript files. As a Bootstrap user, this is normally the command you want.

    ### `grunt watch` (Watch)

    Watches the Less source files and automatically recompiles them to CSS whenever you save a change.

    ### `grunt test` (Run tests)

    Runs [JSHint](http://jshint.com) and runs the [QUnit](http://qunitjs.com) tests headlessly in [PhantomJS](http://phantomjs.org).

    ### `grunt` (Build absolutely everything and run tests)

    Compiles and minifies CSS and JavaScript, builds the documentation website, runs the HTML5 validator against the docs, regenerates the Customizer assets, and more. Usually only necessary if you're hacking on Bootstrap itself.

    ## Troubleshooting

    Should you encounter problems with installing dependencies or running Grunt commands, first delete the `/node_modules/` directory generated by npm. Then, rerun `npm install`.

              </div>

              <div class="bs-docs-section">

    # Basic template

    Start with this basic HTML template, or modify [these examples](#examples). We hope you'll customize our templates and examples, adapting them to suit your needs.

    Copy the HTML below to begin working with a minimal Bootstrap document.

              <div class="highlight"><pre>`<span class="cp"><!DOCTYPE html></span>
              <span class="nt"><html</span> <span class="na">lang=</span><span class="s">"en"</span><span class="nt">></span>
                <span class="nt"><head></span>
                  <span class="nt"><meta</span> <span class="na">charset=</span><span class="s">"utf-8"</span><span class="nt">></span>
                  <span class="nt"><meta</span> <span class="na">http-equiv=</span><span class="s">"X-UA-Compatible"</span> <span class="na">content=</span><span class="s">"IE=edge"</span><span class="nt">></span>
                  <span class="nt"><meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">></span>
                  <span class="nt"><title></span>Bootstrap 101 Template<span class="nt"></title></span>

                  <span class="c"><!-- Bootstrap --></span>
                  <span class="nt"><link</span> <span class="na">href=</span><span class="s">"css/bootstrap.min.css"</span> <span class="na">rel=</span><span class="s">"stylesheet"</span><span class="nt">></span>

                  <span class="c"><!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --></span>
                  <span class="c"><!-- WARNING: Respond.js doesn't work if you view the page via file:// --></span>
                  <span class="c"><!--[if lt IE 9]></span>
              <span class="c">      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script></span>
              <span class="c">      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script></span>
              <span class="c">    <![endif]--></span>
                <span class="nt"></head></span>
                <span class="nt"><body></span>
                  <span class="nt"><h1></span>Hello, world!<span class="nt"></h1></span>

                  <span class="c"><!-- jQuery (necessary for Bootstrap's JavaScript plugins) --></span>
                  <span class="nt"><script </span><span class="na">src=</span><span class="s">"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"</span><span class="nt">></script></span>
                  <span class="c"><!-- Include all compiled plugins (below), or include individual files as needed --></span>
                  <span class="nt"><script </span><span class="na">src=</span><span class="s">"js/bootstrap.min.js"</span><span class="nt">></script></span>
                <span class="nt"></body></span>
              <span class="nt"></html></span>`</pre></div>
              </div>

              <div class="bs-docs-section">

    # Examples

    Build on the basic template above with Bootstrap's many components. We encourage you to customize and adapt Bootstrap to suit your individual project's needs.

    ### Using the framework

                <div class="row bs-examples">
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/starter-template.jpg)
                    ](../examples/starter-template/)

    #### Starter template

    Nothing but the basics: compiled CSS and JavaScript along with a container.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/theme.jpg)
                    ](../examples/theme/)

    #### Bootstrap theme

    Load the optional Bootstrap theme for a visually enhanced experience.

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/grid.jpg)
                    ](../examples/grid/)

    #### Grids

    Multiple examples of grid layouts with all four tiers, nesting, and more.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/jumbotron.jpg)
                    ](../examples/jumbotron/)

    #### Jumbotron

    Build around the jumbotron with a navbar and some basic grid columns.

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/jumbotron-narrow.jpg)
                    ](../examples/jumbotron-narrow/)

    #### Narrow jumbotron

    Build a more custom page by narrowing the default container and jumbotron.

                  </div>
                </div>

    ### Navbars in action

                <div class="row bs-examples">
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/navbar.jpg)
                    ](../examples/navbar/)

    #### Navbar

    Super basic template that includes the navbar along with some additional content.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/navbar-static.jpg)
                    ](../examples/navbar-static-top/)

    #### Static top navbar

    Super basic template with a static top navbar along with some additional content.

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/navbar-fixed.jpg)
                    ](../examples/navbar-fixed-top/)

    #### Fixed navbar

    Super basic template with a fixed top navbar along with some additional content.

                  </div>
                </div>

    ### Custom components

                <div class="row bs-examples">
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/cover.jpg)
                    ](../examples/cover/)

    #### Cover

    A one-page template for building simple and beautiful home pages.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/carousel.jpg)
                    ](../examples/carousel/)

    #### Carousel

    Customize the navbar and carousel, then add some new components.

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/blog.jpg)
                    ](../examples/blog/)

    #### Blog

    Simple two-column blog layout with custom navigation, header, and type.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/dashboard.jpg)
                    ](../examples/dashboard/)

    #### Dashboard

    Basic structure for a admin dashboard with fixed sidebar and navbar.

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/sign-in.jpg)
                    ](../examples/signin/)

    #### Sign-in page

    Custom form layout and design for a simple sign in form.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/justified-nav.jpg)
                    ](../examples/justified-nav/)

    #### Justified nav

    Create a custom navbar with justified links. Heads up! [Not too Safari friendly.](../components/#nav-justified)

                  </div>
                  <div class="clearfix visible-xs"></div>

                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/sticky-footer.jpg)
                    ](../examples/sticky-footer/)

    #### Sticky footer

    Attach a footer to the bottom of the viewport when the content is shorter than it.

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/sticky-footer-navbar.jpg)
                    ](../examples/sticky-footer-navbar/)

    #### Sticky footer with navbar

    Attach a footer to the bottom of the viewport with a fixed navbar at the top.

                  </div>
                </div>

    ### Experiments

                <div class="row bs-examples">
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/non-responsive.jpg)
                    ](../examples/non-responsive/)

    #### Non-responsive Bootstrap

    Easily disable the responsiveness of Bootstrap [per our docs](#disable-responsive).

                  </div>
                  <div class="col-xs-6 col-md-4">
                    [
                      ![](../examples/screenshots/offcanvas.jpg)
                    ](../examples/offcanvas/)

    #### Offcanvas

    Build a toggleable off-canvas navigation menu for use with Bootstrap.

                  </div>
                </div>
              </div>

              <div class="bs-docs-section">

    # Community

    Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

*   Read and subscribe to [The Official Bootstrap Blog](http://blog.getbootstrap.com/).
*   Chat with fellow Bootstrappers using IRC in the `irc.freenode.net` server, in the [##twitter-bootstrap channel](irc://irc.freenode.net/#twitter-bootstrap).
*   For help using Bootstrap, ask on [StackOverflow using the tag `twitter-bootstrap-3`](http://stackoverflow.com/questions/tagged/twitter-bootstrap-3).
*   Find inspiring examples of people building with Bootstrap at the [Bootstrap Expo](http://expo.getbootstrap.com).

    You can also follow [@twbootstrap on Twitter](https://twitter.com/twbootstrap) for the latest gossip and awesome music videos.

              </div>

              <div class="bs-docs-section">

    # Disabling responsiveness

    Bootstrap automatically adapts your pages for various screen sizes.
                  Here's how to disable this feature so your page works like in [this non-responsive example](../examples/non-responsive/).

    ### Steps to disable page responsiveness

1.  Omit the viewport `<meta>` mentioned in [the CSS docs](../css/#overview-mobile)
2.  Override the `width` on the `.container` for each grid tier with a single width, for example `width: 970px !important;` Be sure that this comes after the default Bootstrap CSS. You can optionally avoid the `!important` with media queries or some selector-fu.
3.  If using navbars, remove all navbar collapsing and expanding behavior.
4.  For grid layouts, use `.col-xs-*` classes in addition to, or in place of, the medium/large ones. Don't worry, the extra-small device grid scales to all resolutions.

    You'll still need Respond.js for IE8 (since our media queries are still there and need to be processed).
                  This disables the "mobile site" aspects of Bootstrap.

    ### Bootstrap template with responsiveness disabled

    We've applied these steps to an example. Read its source code to see the specific changes implemented.

                  [View non-responsive example](../examples/non-responsive/)

              </div>

              <!-- Cross link to new migration page -->
              <div class="bs-callout bs-callout-info" id="migration">

    #### Migrating from v2.x to v3.x

    Looking to migrate from an older version of Bootstrap to v3.x? Check out [our migration guide](../migration).

              </div>

              <div class="bs-docs-section">

    # Browser and device support

    Bootstrap is built to work best in the latest desktop and mobile browsers, meaning older browsers might display differently styled, though fully functional, renderings of certain components.

    ### Supported browsers

    Specifically, we support the **latest versions** of the following browsers and platforms. On Windows, **we support Internet Explorer 8-11**. More specific support information is provided below.

                <div class="table-responsive">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <td></td>
                        <th>Chrome</th>
                        <th>Firefox</th>
                        <th>Internet Explorer</th>
                        <th>Opera</th>
                        <th>Safari</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Android</th>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-muted" rowspan="3" style="vertical-align: middle;">N/A</td>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> <span class="sr-only">Not Supported</span></td>
                        <td class="text-muted">N/A</td>
                      </tr>
                      <tr>
                        <th>iOS</th>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-muted">N/A</td>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> <span class="sr-only">Not Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                      </tr>
                      <tr>
                        <th>Mac OS X</th>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                      </tr>
                      <tr>
                        <th>Windows</th>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> <span class="sr-only">Supported</span></td>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> <span class="sr-only">Not Supported</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

    Unofficially, Bootstrap should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer 7, though they are not officially supported.

    For a list of some of the browser bugs that Bootstrap has to grapple with, see our [Wall of browser bugs](../browser-bugs/).

    ### Internet Explorer 8 and 9

    Internet Explorer 8 and 9 are also supported, however, please be aware that some CSS3 properties and HTML5 elements are not fully supported by these browsers. In addition, **Internet Explorer 8 requires the use of [Respond.js](https://github.com/scottjehl/Respond) to enable media query support.**

                <div class="table-responsive">
                  <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col" class="col-xs-4">Feature</th>
                        <th scope="col" class="col-xs-4">Internet Explorer 8</th>
                        <th scope="col" class="col-xs-4">Internet Explorer 9</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">`border-radius`</th>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> Not supported</td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> Supported</td>
                      </tr>
                      <tr>
                        <th scope="row">`box-shadow`</th>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> Not supported</td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> Supported</td>
                      </tr>
                      <tr>
                        <th scope="row">`transform`</th>
                        <td class="text-danger"><span class="glyphicon glyphicon-remove"></span> Not supported</td>
                        <td class="text-success"><span class="glyphicon glyphicon-ok"></span> Supported, with `-ms` prefix</td>
                      </tr>
                      <tr>
                        <th scope="row">`transition`</th>
                        <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove"></span> Not supported</td>
                      </tr>
                      <tr>
                        <th scope="row">`placeholder`</th>
                        <td colspan="2" class="text-danger"><span class="glyphicon glyphicon-remove"></span> Not supported</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

    Visit [Can I use...](http://caniuse.com/) for details on browser support of CSS3 and HTML5 features.

    ### Internet Explorer 8 and Respond.js

    Beware of the following caveats when using Respond.js in your development and production environments for Internet Explorer 8.

    #### Respond.js and cross-domain CSS

    Using Respond.js with CSS hosted on a different (sub)domain (for example, on a CDN) requires some additional setup. [See the Respond.js docs](https://github.com/scottjehl/Respond/blob/master/README.md#cdnx-domain-setup) for details.

    #### Respond.js and `file://`

    Due to browser security rules, Respond.js doesn't work with pages viewed via the `file://` protocol (like when opening a local HTML file). To test responsive features in IE8, view your pages over HTTP(S). [See the Respond.js docs](https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats) for details.

    #### Respond.js and `@import`

    Respond.js doesn't work with CSS that's referenced via `@import`. In particular, some Drupal configurations are known to use `@import`. [See the Respond.js docs](https://github.com/scottjehl/Respond/blob/master/README.md#support--caveats) for details.

    ### Internet Explorer 8 and box-sizing

    IE8 does not fully support `box-sizing: border-box;` when combined with `min-width`, `max-width`, `min-height`, or `max-height`. For that reason, as of v3.0.1, we no longer use `max-width` on `.container`s.

    ### Internet Explorer 8 and @font-face

    IE8 has some issues with `@font-face` when combined with `:before`. Bootstrap uses that combination with its Glyphicons. If a page is cached, and loaded without the mouse over the window (i.e. hit the refresh button or load something in an iframe) then the page gets rendered before the font loads. Hovering over the page (body) will show some of the icons and hovering over the remaining icons will show those as well. [See issue #13863](https://github.com/twbs/bootstrap/issues/13863) for details.

    ### IE Compatibility modes

    Bootstrap is not supported in the old Internet Explorer compatibility modes. To be sure you're using the latest rendering mode for IE, consider including the appropriate `<meta>` tag in your pages:

              <div class="highlight"><pre>`<span class="nt"><meta</span> <span class="na">http-equiv=</span><span class="s">"X-UA-Compatible"</span> <span class="na">content=</span><span class="s">"IE=edge"</span><span class="nt">></span>`</pre></div>

    Confirm the document mode by opening the debugging tools: press <kbd>F12</kbd> and check the "Document Mode".

    This tag is included in all of Bootstrap's documentation and examples to ensure the best rendering possible in each supported version of Internet Explorer.

    See [this StackOverflow question](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge) for more information.

    ### Internet Explorer 10 in Windows 8 and Windows Phone 8

    Internet Explorer 10 doesn't differentiate **device width** from **viewport width**, and thus doesn't properly apply the media queries in Bootstrap's CSS. Normally you'd just add a quick snippet of CSS to fix this:

              <div class="highlight"><pre>`<span class="k">@-ms-viewport</span>       <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>`</pre></div>

    However, this doesn't work for devices running Windows Phone 8 versions older than [Update 3 (a.k.a. GDR3)](http://blogs.windows.com/windows_phone/b/wpdev/archive/2013/10/14/introducing-windows-phone-preview-for-developers.aspx), as it causes such devices to show a mostly desktop view instead of narrow "phone" view. To address this, you'll need to **include the following CSS and JavaScript to work around the bug**.

              <div class="highlight"><pre>`<span class="k">@-webkit-viewport</span>   <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>
              <span class="k">@-moz-viewport</span>      <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>
              <span class="k">@-ms-viewport</span>       <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>
              <span class="k">@-o-viewport</span>        <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>
              <span class="k">@viewport</span>           <span class="p">{</span> <span class="na">width</span><span class="o">:</span> <span class="n">device-width</span><span class="p">;</span> <span class="p">}</span>`</pre></div>

              <div class="highlight"><pre>`<span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/IEMobile\/10\.0/</span><span class="p">))</span> <span class="p">{</span>
                <span class="kd">var</span> <span class="nx">msViewportStyle</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">'style'</span><span class="p">)</span>
                <span class="nx">msViewportStyle</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span>
                  <span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span>
                    <span class="s1">'@-ms-viewport{width:auto!important}'</span>
                  <span class="p">)</span>
                <span class="p">)</span>
                <span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s1">'head'</span><span class="p">).</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">msViewportStyle</span><span class="p">)</span>
              <span class="p">}</span>`</pre></div>

    For more information and usage guidelines, read [Windows Phone 8 and Device-Width](http://timkadlec.com/2013/01/windows-phone-8-and-device-width/).

    As a heads up, we include this in all of Bootstrap's documentation and examples as a demonstration.

    ### Safari percent rounding

    As of Safari v7.0.1 for OS X and Safari for iOS v7.0.1, Safari's rendering engine has some trouble with the number of decimal places used in our `.col-*-1` grid classes. So if you have 12 individual grid columns, you'll notice that they come up short compared to other rows of columns. We can't do much here ([see #9282](https://github.com/twbs/bootstrap/issues/9282)) but you do have some options:

*   Add `.pull-right` to your last grid column to get the hard-right alignment
*   Tweak your percentages manually to get the perfect rounding for Safari (more difficult than the first option)

    We'll keep an eye on this though and update our code if we have an easy solution.

    ### Modals, navbars, and virtual keyboards

    #### Overflow and scrolling

    Support for `overflow: hidden` on the `<body>` element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices' browsers, the `<body>` content will begin to scroll.

    #### Virtual keyboards

    Also, note that if you're using inputs in your modal or navbar, iOS has a rendering bug that doesn't update the position of fixed elements when the virtual keyboard is triggered. A few workarounds for this include transforming your elements to `position: absolute` or invoking a timer on focus to try to correct the positioning manually. This is not handled by Bootstrap, so it is up to you to decide which solution is best for your application.

    #### Navbar Dropdowns

    The `.dropdown-backdrop` element isn't used on iOS in the nav because of the complexity of z-indexing. Thus, to close dropdowns in navbars, you must directly click the dropdown element (or any other element which will fire a click event in iOS).

    ### Browser zooming

    Page zooming inevitably presents rendering artifacts in some components, both in Bootstrap and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.

    ### Printer viewports

    Even in some modern browsers, printing can be quirky. In particular, as of Chrome v32 and regardless of margin settings, Chrome uses a viewport width significantly narrower than the physical paper size when resolving media queries while printing a webpage. This can result in Bootstrap's extra-small grid being unexpectedly activated when printing. [See #12078 for some details.](https://github.com/twbs/bootstrap/issues/12078) Suggested workarounds:

*   Embrace the extra-small grid and make sure your page looks acceptable under it.
*   Customize the values of the `@screen-*` Less variables so that your printer paper is considered larger than extra-small.
*   Add custom media queries to change the grid size breakpoints for print media only.

    ### Android stock browser

    Out of the box, Android 4.1 (and even some newer releases apparently) ship with the Browser app as the default web browser of choice (as opposed to Chrome). Unfortunately, the Browser app has lots of bugs and inconsistencies with CSS in general.

    #### Select menus

    On `<select>` elements, the Android stock browser will not display the side controls if there is a `border-radius` and/or `border` applied. (See [this StackOverflow question](http://stackoverflow.com/questions/14744437/html-select-box-not-showing-drop-down-arrow-on-android-version-4-0-when-set-with) for details.) Use the snippet of code below to remove the offending CSS and render the `<select>` as an unstyled element on the Android stock browser. The user agent sniffing avoids interference with Chrome, Safari, and Mozilla browsers.

              <div class="highlight"><pre>`<span class="nt"><script></span>
              <span class="nx">$</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
                <span class="kd">var</span> <span class="nx">nua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span>
                <span class="kd">var</span> <span class="nx">isAndroid</span> <span class="o">=</span> <span class="p">(</span><span class="nx">nua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">'Mozilla/5.0'</span><span class="p">)</span> <span class="o">></span> <span class="o">-</span><span class="mi">1</span> <span class="o">&&</span> <span class="nx">nua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">'Android '</span><span class="p">)</span> <span class="o">></span> <span class="o">-</span><span class="mi">1</span> <span class="o">&&</span> <span class="nx">nua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">'AppleWebKit'</span><span class="p">)</span> <span class="o">></span> <span class="o">-</span><span class="mi">1</span> <span class="o">&&</span> <span class="nx">nua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">'Chrome'</span><span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span>
                <span class="k">if</span> <span class="p">(</span><span class="nx">isAndroid</span><span class="p">)</span> <span class="p">{</span>
                  <span class="nx">$</span><span class="p">(</span><span class="s1">'select.form-control'</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'form-control'</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">'width'</span><span class="p">,</span> <span class="s1">'100%'</span><span class="p">)</span>
                <span class="p">}</span>
              <span class="p">})</span>
              <span class="nt"></script></span>`</pre></div>

    Want to see an example? [Check out this JS Bin demo.](http://jsbin.com/OyaqoDO/2)

              </div>

              <div class="bs-docs-section">

    # Third party support

    While we don't officially support any third party plugins or add-ons, we do offer some useful advice to help avoid potential issues in your projects.

    ### Box-sizing

    Some third party software, including Google Maps and Google Custom Search Engine, conflict with Bootstrap due to `* { box-sizing: border-box; }`, a rule which makes it so `padding` does not affect the final computed width of an element. Learn more about [box model and sizing at CSS Tricks](http://css-tricks.com/box-sizing/).

    Depending on the context, you may override as-needed (Option 1) or reset the box-sizing for entire regions (Option 2).

              <div class="highlight"><pre>`<span class="cm">/* Box-sizing resets</span>
              <span class="cm"> *</span>
              <span class="cm"> * Reset individual elements or override regions to avoid conflicts due to</span>
              <span class="cm"> * global box model settings of Bootstrap. Two options, individual overrides and</span>
              <span class="cm"> * region resets, are available as plain CSS and uncompiled Less formats.</span>
              <span class="cm"> */</span>

              <span class="cm">/* Option 1A: Override a single element's box model via CSS */</span>
              <span class="nc">.element</span> <span class="p">{</span>
                <span class="na">-webkit-box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
                   <span class="na">-moz-box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
                        <span class="na">box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
              <span class="p">}</span>

              <span class="cm">/* Option 1B: Override a single element's box model by using a Bootstrap Less mixin */</span>
              <span class="nc">.element</span> <span class="p">{</span>
                <span class="nc">.box-sizing</span><span class="o">(</span><span class="nt">content-box</span><span class="o">);</span>
              <span class="p">}</span>

              <span class="cm">/* Option 2A: Reset an entire region via CSS */</span>
              <span class="nc">.reset-box-sizing</span><span class="o">,</span>
              <span class="nc">.reset-box-sizing</span> <span class="o">*,</span>
              <span class="nc">.reset-box-sizing</span> <span class="o">*</span><span class="nd">:before</span><span class="o">,</span>
              <span class="nc">.reset-box-sizing</span> <span class="o">*</span><span class="nd">:after</span> <span class="p">{</span>
                <span class="na">-webkit-box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
                   <span class="na">-moz-box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
                        <span class="na">box-sizing</span><span class="o">:</span> <span class="no">content</span><span class="o">-</span><span class="n">box</span><span class="p">;</span>
              <span class="p">}</span>

              <span class="cm">/* Option 2B: Reset an entire region with a custom Less mixin */</span>
              <span class="nc">.reset-box-sizing</span> <span class="p">{</span>
                <span class="k">&</span><span class="o">,</span>
                <span class="o">*,</span>
                <span class="o">*</span><span class="nd">:before</span><span class="o">,</span>
                <span class="o">*</span><span class="nd">:after</span> <span class="p">{</span>
                  <span class="nc">.box-sizing</span><span class="o">(</span><span class="nt">content-box</span><span class="o">);</span>
                <span class="p">}</span>
              <span class="p">}</span>
              <span class="nc">.element</span> <span class="p">{</span>
                <span class="nc">.reset-box-sizing</span><span class="o">();</span>
              <span class="p">}</span>`</pre></div>
              </div>

              <div class="bs-docs-section">

    # Accessibility

    Bootstrap follows common web standards and—with minimal extra effort—can be used to create sites that are accessible to those using <abbr title="Assistive Technology" class="initialism">AT</abbr>.

    ### Skip navigation

    If your navigation contains many links and comes before the main content in the DOM, add a `Skip to main content` link immediately after your opening `<body>` tag. [(read why)](http://a11yproject.com/posts/skip-nav-links/)

              <div class="highlight"><pre>`<span class="nt"><body></span>
                <span class="nt"><a</span> <span class="na">href=</span><span class="s">"#content"</span> <span class="na">class=</span><span class="s">"sr-only sr-only-focusable"</span><span class="nt">></span>Skip to main content<span class="nt"></a></span>
                <span class="nt"><div</span> <span class="na">class=</span><span class="s">"container"</span> <span class="na">id=</span><span class="s">"content"</span><span class="nt">></span>
                  The main page content.
                <span class="nt"></div></span>
              <span class="nt"></body></span>
</div>

### Nested headings

When nesting headings (`<h1>` - `<h6>`), your primary document header should be an `<h1>`. Subsequent headings should make logical use of `<h2>` - `<h6>` such that screen readers can construct a table of contents for your pages.

Learn more at [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/Standards/Section508/) and [Penn State's AccessAbility](http://accessibility.psu.edu/headings).

### Additional resources

*   ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
*   [The A11Y Project](http://a11yproject.com/)
*   [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Accessibility)
          </div>

          <div class="bs-docs-section">

# License FAQs

Bootstrap is released under the MIT license and is copyright 2014 Twitter. Boiled down to smaller chunks, it can be described with the following conditions.

#### It requires you to:

*   Include the license and copyright notice in your works

#### It permits you to:

*   Freely download and use Bootstrap, in whole or in part, for personal, private, company internal, or commercial purposes
*   Use Bootstrap in packages or distributions that you create
*   Modify the source code
*   Grant a sublicense to modify and distribute Bootstrap to third parties not included in the license

#### It forbids you to:

*   Hold the authors and license owners liable for damages as Bootstrap is provided without warranty
*   Hold the creators or copyright holders of Bootstrap liable
*   Redistribute any piece of Bootstrap without proper attribution
*   Use any marks owned by Twitter in any way that might state or imply that Twitter endorses your distribution
*   Use any marks owned by Twitter in any way that might state or imply that you created the Twitter software in question

#### It does not require you to:

*   Include the source of Bootstrap itself, or of any modifications you may have made to it, in any redistribution you may assemble that includes it
*   Submit changes that you make to Bootstrap back to the Bootstrap project (though such feedback is encouraged)

The full Bootstrap license is located [in the project repository](https://github.com/twbs/bootstrap/blob/master/LICENSE) for more information.

          </div>

          <div class="bs-docs-section">

# Translations

Community members have translated Bootstrap's documentation into various languages. None are officially supported and they may not always be up to date.

*   [Bootstrap 中文文档 (Chinese)](http://v3.bootcss.com/)
*   [Bootstrap en Français (French)](http://www.oneskyapp.com/docs/bootstrap/fr)
*   [Bootstrap auf Deutsch (German)](http://holdirbootstrap.de/)
*   [Bootstrap in Italiano (Italian)](http://www.hackerstribe.com/guide/IT-bootstrap-3.1.1/)
*   [Bootstrap 한국어 (Korean)](http://bootstrapk.com/BS3/)
*   [Bootstrap по-русски (Russian)](http://www.oneskyapp.com/docs/bootstrap/ru)
*   [Bootstrap en Español (Spanish)](http://www.oneskyapp.com/docs/bootstrap/es)
*   [Bootstrap ua Українською (Ukrainian)](http://twbs.site-konstruktor.com.ua)

**We don't help organize or host translations, we just link to them.**

Finished a new or better translation? Open a pull request to add it to our list.
