---
layout: docs
---

### Content Layout

This is a section. Each topic in the page should be encapsulated within a section. A section provides standard formatting for headings and whitespace between other sections of the page.


  <div class="docs-sub-section">
    <h4>This is a sub section</h4>

When creating a long section of related content it can be helpful to break items up into sub sections. Sub sections make content more digestible and easier to find

  </div>

{% highlight html linenos %}
  <section class="docs-section">
    <h3 id="section-main-section">Main Section Heading</h3>
    <p>This is a section. Each are in the page is encapsulated within a section. A section provides standard formatting for headings and whitespace between other sections of the page.</p>

    <div class="docs-sub-section">
      <h4>Sub Section Heading</h4>
      <p>When creating a long section of related content it can be helpful to break items up into sub sections. Sub sections make content more digestable and easier to find</p>
    </div>
  </section>
{% endhighlight %}

<h3 id="section-headings">Headings</h3>

The following headings are available for use. Generally you will only ever used headings and sub headings for the content within each page. These items should be used within sections. You should add ids to h3 headings throughout your page. The ids allow these headings to be linked to which can be helpful for support of if the page needs a jump navigtaion menu. Heading ids should follow the format id="section-SOME-TITLE".

### This is a section heading

#### This is a section sub heading

{% highlight html linenos %}
<h3 id="section-saving-data">Section Heading</h3>
<h4>Section Sub Heading</h4>
{% endhighlight %}

### Text Formatting

This is a standard paragraph of text. You can <strong>draw attention</strong> to phrases or words that are important. You can also use the em tag to stress emphasis of its contents. Use standard anchor tags to link to other pages or resources. Links should never use "click here" but rather highlight the resources they are describing. Do not add target=_blank to anchors, links should behave normally in order to avoid potential frustration of creating undesired tabs and breaking the back button. You can learn more about these elements at the HTML5 Doctor.

{% highlight html linenos %}
<p>
  This is a standard paragraph of text. You can <strong>draw attention</strong>
  to phrases or words that are <strong>important</strong>.
  You can also use the <em>em</em> tag to stress <em>emphasis</em>
  of its contents. Use standard anchor tags to link to other pages or resources.
  Links should never use "click here" but rather highlight the resources they are describing.
  Do not add target=_blank to anchors, links should
  <a href="http://css-tricks.com/use-target_blank/">behave normally</a>
  in order to <a href="http://css-tricks.com/use-target_blank/">avoid potential frustration</a>
  of creating undesired tabs and breaking the back button. You can learn more about
  these elements at the <a href="http://html5doctor.com/i-b-em-strong-element/">HTML5 Doctor</a>
</p>
{% endhighlight %}

### Tables

Tables are another way to should groups of information. These can often be useful to group method definitions.

<table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
    </tbody>
</table>

{% highlight html linenos %}
<table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

### Asides

<aside class="tip right">
  <h5>Styles Guides</h5>
  style guide saves time by providing quick answers to questions that may arise while writing documentation thus significantly reducing the time required to create new documents.
</aside>

<p>An aside is used to display indirectly related content that could be helpful to the topic the user is currently reading. For example, when learning about saving data a user may be interested about security. An aside gives us an easy way to present this data to a user without interrupting their flow with extra/additional content. Asides are best using to break up large areas of text. Do not place them next to code snippets, callouts, alerts, or tables. They are a companion to paragraphs of text.</p>
<div class="clear"></div>

{% highlight html linenos %}
<aside class="tip right">
  <h5>Styles Guides</h5>
  style guide saves time by providing quick answers to questions that may arise while writing documentation thus significantly reducing the time required to create new documents.
</aside>

<p>An aside is used to display indirectly related content that could be helpful to the topic the user is currently reading. For example, when learning about saving data a user may be interested about security. An aside gives us an easy way to present this data to a user without interrupting their flow with extra/additional content. Asides are best using to break up large areas of text. Do not place them next to code snippets, callouts, alerts, or tables. They are a companion to paragraphs of text.</p>
<div class="clear"></div>
{% endhighlight %}

### Alerts

Alerts should contain small bits of important information. Alerts should not contain long sentences, paragraphs, or long code samples. Callouts can be used for longer items. You should also not stack alerts or use them liberally throughout a page. Consider using strong tags in a paragraph before using a alert. The information can range in severity, use the alerts accordingly.

<div class="alert alert-error full-width"><strong>Warning:</strong> This is an really important, something could break</div>
<div class="alert alert-warning full-width">This is a key concept, <a href="/docs/">here's a link</a></div>
<div class="alert alert-info full-width"><em>Oh by the way</em>, you can also do this</div>

{% highlight html linenos %}
<div class="alert alert-error full-width"><strong>Warning:</strong> This is an really important, something could break</div>
<div class="alert alert-warning full-width">This is a key concept, <a href="/docs/">here's a link</a></div>
<div class="alert alert-info full-width"><em>Oh by the way</em>, you can also do this</div>
{% endhighlight %}

### Callouts

When there is a larger portion of very important information that a user needs to read a callout can be used. You should also not stack callouts or use them liberally throughout a page.

<div class="callout callout-error">
  <header>You have to read this!</header>
  <p>
    High Life salvia Odd Future roof party. Bespoke mixtape Pinterest lo-fi drinking vinegar, readymade pork belly cornhole pug. Cliche tofu semiotics tattooed.
  </p>
</div>

<div class="callout callout-warning">
  <header>This is important to know</header>
  <p>
    High Life salvia Odd Future roof party. Bespoke mixtape Pinterest lo-fi drinking vinegar, readymade pork belly cornhole pug. Cliche tofu semiotics tattooed.
  </p>
</div>

{% highlight html linenos %}
<div class="callout callout-error">
  <header>You have to read this!</header>
  <p>
    High Life salvia Odd Future roof party. Bespoke mixtape Pinterest lo-fi drinking vinegar, readymade pork belly cornhole pug. Cliche tofu semiotics tattooed.
  </p>
</div>

<div class="callout callout-warning">
  <header>This is important to know</header>
  <p>
    High Life salvia Odd Future roof party. Bespoke mixtape Pinterest lo-fi drinking vinegar, readymade pork belly cornhole pug. Cliche tofu semiotics tattooed.
  </p>
</div>
{% endhighlight %}

### Code Examples

Code snippets are used heavily throughout the docs. Snippets allow you to provide a developer with a piece of required code or an example that they can easily copy and paste. Wrap your code using the tag and it will automatically get formatted. If you want to display code that should not be processed by jekyll (like the example below) surround it with the tag. You can specify the programming languange by using the lang attribute.

{% highlight html linenos %}
{% endhighlight %}

### Anti-Pattern Code Examples

Some code examples are used to demonstrate bad practices or antipatterns. You should add the anti_pattern=true attribute to these code examples. The code example will have a special style applied and copy button disabled.

### Grouped Code Examples

In some cases you may want to combine a code snippet into one group. This often happens when showing the same example for different languages
or platform types. The data-name attribute on the pre tag will be used for the title.

