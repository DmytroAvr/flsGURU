<a href="hw2">hw2</a><br/>
<a href="hw3">hw3</a><br/>
<a href="hw4">hw4</a><br/>
<a href="hw5">hw5</a><br/>
<a href="hw6">hw6</a><br/>
<br/><br/><br/>

<!--

<p><a href="hw7">hw7</a></p>
<p><a href="hw8">hw8</a></p>
<p><a href="hw9">hw9</a></p>
<p><a href="hw10">hw10</a></p>
-->

<p>how to markdonwn README.md:</p>
<https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>

<br/>
<!--  selectors-->
<details>
  <summary>##Selectors</summary>
<div >
<https://www.w3schools.com/cssref/css_selectors.asp>
<table>
  <tbody><tr>
    <th style="width:20%">Selector</th>
    <th style="width:20%">Example</th>
    <th>Example description</th>
  </tr>
  <tr>
    <td><a href="sel_class.asp">.<i>class</i></a></td>
    <td>.intro</td>
    <td>Selects all elements with class="intro"</td>
  </tr>
  <tr>
    <td><em>.class1.class2</em></td>
    <td>.name1.name2</td>
    <td>Selects all elements with both <em>name1</em> and <em>name2</em> set 
    within its class attribute</td>
  </tr>  
  <tr>
    <td><em>.class1 .class2</em></td>
    <td>.name1 .name2</td>
    <td>Selects all elements with <em>name2</em> that is a descendant of an 
    element with <em>name1</em></td>
  </tr>  
  <tr>
    <td><a href="sel_id.asp">#<i>id</i></a></td>
    <td>#firstname</td>
    <td>Selects the element with id="firstname"</td>
  </tr>  <tr>
    <td><a href="sel_all.asp">*</a></td>
    <td>*</td>
    <td>Selects all elements</td>
  </tr>
  <tr>
    <td><i><a href="sel_element.asp">element</a></i></td>
    <td>p</td>
    <td>Selects all &lt;p&gt; elements</td>
  </tr>
  <tr>
    <td><i><a href="sel_element_class.asp">element.class</a></i></td>
    <td>p.intro</td>
    <td>Selects all &lt;p&gt; elements with class="intro"</td>
  </tr>
  <tr>
    <td><i><a href="sel_element_comma.asp">element,element</a></i></td>
    <td>div, p</td>
    <td>Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_element_element.asp"><i>element</i> <i>element</i></a></td>
    <td>div p</td>
    <td>Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_element_gt.asp"><i>element</i>&gt;<i>element</i></a></td>
    <td>div &gt; p</td>
    <td>Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_element_pluss.asp"><i>element</i>+<i>element</i></a></td>
    <td>div + p</td>
    <td>Selects the first &lt;p&gt; element that is placed immediately after &lt;div&gt; elements</td>
  </tr>
  <tr>
    <td><a href="sel_gen_sibling.asp"><i>element1</i>~<i>element2</i></a></td>
    <td>p ~ ul</td>
    <td>Selects every &lt;ul&gt; element that is preceded by a &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_attribute.asp">[<i>attribute</i>]</a></td>
    <td>[target]</td>
    <td>Selects all elements with a target attribute</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value.asp">[<i>attribute</i>=<i>value</i>]</a></td>
    <td>[target=_blank]</td>
    <td>Selects all elements with target="_blank"</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_contains.asp">[<i>attribute</i>~=<i>value</i>]</a></td>
    <td>[title~=flower]</td>
    <td>Selects all elements with a title attribute containing the word "flower"</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_lang.asp">[<i>attribute</i>|=<i>value</i>]</a></td>
    <td>[lang|=en]</td>
    <td>Selects all elements with a lang attribute value equal to "en" or 
    starting with "en-"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_begin.asp">[<i>attribute</i>^=<i>value</i>]</a></td>
    <td>a[href^="https"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value begins with "https"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_end.asp">[<i>attribute</i>$=<i>value</i>]</a></td>
    <td>a[href$=".pdf"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value ends with ".pdf"</td>
  </tr>
  <tr>
    <td><a href="sel_attr_contain.asp">[<i>attribute</i>*=<i>value</i>]</a></td>
    <td>a[href*="w3schools"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value contains the substring "w3schools"</td>
  </tr>
  <tr>
    <td><a href="sel_active.asp">:active</a></td>
    <td>a:active</td>
    <td>Selects the active link</td>
  </tr>
  <tr>
    <td><a href="sel_after.asp">::after</a></td>
    <td>p::after</td>
    <td>Insert something after the content of each &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_before.asp">::before</a></td>
    <td>p::before</td>
    <td>Insert something before&nbsp;the content of each &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_checked.asp">:checked</a></td>
    <td>input:checked</td>
    <td>Selects every checked &lt;input&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_default.asp">:default</a></td>
    <td>input:default</td>
    <td>Selects the default &lt;input&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_disabled.asp">:disabled</a></td>
    <td>input:disabled</td>
    <td>Selects every disabled &lt;input&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_empty.asp">:empty</a></td>
    <td>p:empty</td>
    <td>Selects every &lt;p&gt; element that has no children (including text nodes)</td>
  </tr>
  <tr>
    <td><a href="sel_enabled.asp">:enabled</a></td>
    <td>input:enabled</td>
    <td>Selects every enabled &lt;input&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_firstchild.asp">:first-child</a></td>
    <td>p:first-child</td>
    <td>Selects every &lt;p&gt; element that is the first child of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_firstletter.asp">::first-letter</a></td>
    <td>p::first-letter</td>
    <td>Selects the first letter of every &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_firstline.asp">::first-line</a></td>
    <td>p::first-line</td>
    <td>Selects the first line of every &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_first-of-type.asp">:first-of-type</a></td>
    <td>p:first-of-type</td>
    <td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_focus.asp">:focus</a></td>
    <td>input:focus</td>
    <td>Selects the input element which has focus</td>
  </tr>
  <tr>
    <td><a href="sel_fullscreen.asp">:fullscreen</a></td>
    <td>:fullscreen</td>
    <td>Selects the element that is in full-screen mode</td>
  </tr>
  <tr>
    <td><a href="sel_hover.asp">:hover</a></td>
    <td>a:hover</td>
    <td>Selects links on mouse over</td>
  </tr>
  <tr>
    <td><a href="sel_in-range.asp">:in-range</a></td>
    <td>input:in-range</td>
    <td>Selects input elements with a value within a specified range</td>
  </tr>
  <tr>
    <td><a href="sel_indeterminate.asp">:indeterminate</a></td>
    <td>input:indeterminate</td>
    <td>Selects input elements that are in an indeterminate state</td>
  </tr>
  <tr>
    <td><a href="sel_invalid.asp">:invalid</a></td>
    <td>input:invalid</td>
    <td>Selects all input elements with an invalid value</td>
  </tr>
  <tr>
    <td><a href="sel_lang.asp">:lang(<i>language</i>)</a></td>
    <td>p:lang(it)</td>
    <td>Selects every &lt;p&gt; element with a lang attribute equal to "it" (Italian)</td>
  </tr>
  <tr>
    <td><a href="sel_last-child.asp">:last-child</a></td>
    <td>p:last-child</td>
    <td>Selects every &lt;p&gt; element that is the last child of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_last-of-type.asp">:last-of-type</a></td>
    <td>p:last-of-type</td>
    <td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_link.asp">:link</a></td>
    <td>a:link</td>
    <td>Selects all unvisited links</td>
  </tr>
  <tr>
    <td><a href="sel_marker.asp">::marker</a></td>
    <td>::marker</td>
    <td>Selects the markers of list items</td>
  </tr>
  <tr>
    <td><a href="sel_not.asp">:not(<i>selector</i>)</a></td>
    <td>:not(p)</td>
    <td>Selects every element that is not a &lt;p&gt; element</td>
  </tr>
  <tr>
    <td><a href="sel_nth-child.asp">:nth-child(<i>n</i>)</a></td>
    <td>p:nth-child(2)</td>
    <td>Selects every &lt;p&gt; element that is the second child of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_nth-last-child.asp">:nth-last-child(<i>n</i>)</a></td>
    <td>p:nth-last-child(2)</td>
    <td>Selects every &lt;p&gt; element that is the second child of its parent, counting from the last child</td>
  </tr>
  <tr>
    <td><a href="sel_nth-last-of-type.asp">:nth-last-of-type(<i>n</i>)</a></td>
    <td>p:nth-last-of-type(2)</td>
    <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting from the last child</td>
  </tr>
  <tr>
    <td><a href="sel_nth-of-type.asp">:nth-of-type(<i>n</i>)</a></td>
    <td>p:nth-of-type(2)</td>
    <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_only-of-type.asp">:only-of-type</a></td>
    <td>p:only-of-type</td>
    <td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_only-child.asp">:only-child</a></td>
    <td>p:only-child</td>
    <td>Selects every &lt;p&gt; element that is the only child of its parent</td>
  </tr>
  <tr>
    <td><a href="sel_optional.asp">:optional</a></td>
    <td>input:optional</td>
    <td>Selects input elements with no "required" attribute</td>
  </tr>
  <tr>
    <td><a href="sel_out-of-range.asp">:out-of-range</a></td>
    <td>input:out-of-range</td>
    <td>Selects input elements with a value outside a specified range</td>
  </tr>
  <tr>
    <td><a href="sel_placeholder.asp">::placeholder</a></td>
    <td>input::placeholder</td>
    <td>Selects input elements with the "placeholder" attribute specified</td>
  </tr>
  <tr>
    <td><a href="sel_read-only.asp">:read-only</a></td>
    <td>input:read-only</td>
    <td>Selects input elements with the "readonly" attribute specified</td>
  </tr>
  <tr>
    <td><a href="sel_read-write.asp">:read-write</a></td>
    <td>input:read-write</td>
    <td>Selects input elements with the "readonly" attribute NOT specified</td>
  </tr>
  <tr>
    <td><a href="sel_required.asp">:required</a></td>
    <td>input:required</td>
    <td>Selects input elements with the "required" attribute specified</td>
  </tr>
  <tr>
    <td><a href="sel_root.asp">:root</a></td>
    <td>:root</td>
    <td>Selects the document's root element</td>
  </tr>
  <tr>
    <td><a href="sel_selection.asp">::selection</a></td>
    <td>::selection</td>
    <td>Selects the portion of an element that is selected by a user</td>
  </tr>
  <tr>
    <td><a href="sel_target.asp">:target</a></td>
    <td>#news:target </td>
    <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
  </tr>
  <tr>
    <td><a href="sel_valid.asp">:valid</a></td>
    <td>input:valid</td>
    <td>Selects all input elements with a valid value</td>
  </tr>
  <tr>
    <td><a href="sel_visited.asp">:visited</a></td>
    <td>a:visited</td>
    <td>Selects all visited links</td>
  </tr>
  <tr>
    <td><a href="sel_visited.asp">:has()</a></td>
    <td>div:has(h1)</td>
    <td>Selects all div what have h1 inside</td>
  </tr>
</tbody></table>
</div>
</details>

<br/>
<!-- fonts -->
<details>
  <summary> ##Fonts add + attributes</summary>
&display=swap <br/><br/>
	> include fonts from hosting: <br/><br/>
@font-face { <br/>
font-family: "someNameOfFont"; <br/>
src: url("../fonts/someNameOfFont.woff2") format("woff2"), url("../fonts/someNameOfFont.woff") format("woff"); <br/>
font-display: swap; <br/>
font-weight: 400; <br/>
font-style: normal; <br/>
} <br/><br/>
100 - thin <br/>
300 - lite <br/>
<b>400</b> - Regular (normal) (за замовчуванням)<br/>
<b>500</b> - medium <br/>
<b>600</b> - semibold <br/>
<b>700</b> - bold <br/>
900 - black<br/>
<br/><br/>
font-family: "Ім'я шрифту", "Ім'я шрифту", тип шрифту;<br/>
Типи шрифтів:<br/>
serif — шрифт з зарубками (засічками)<br/>
sans-serif — рублений (без зарубок)<br/>
cursive - курсивні шрифти<br/>
fantasy — декоративні<br/>
monospace — моноширинні<br/>
<br/><br/>
.class{ <br/>
font-family: "some NameOfFont", someNameOfFont, sans-serif; <br/>
font-style: <b>normal</b> (за замовчуванням) - звичайний; <b>italic</b> - курсив; <b>oblique</b> - нахилення літер;<br/>
text-align: <b>center</b> - по центру; <b>left</b> - по лівому краю; <b>right</b> - по правому краю; <b>justify</b> - по ширині<br/>
text-decoration: <b>line-through</b> - закреслює текст; <b>overline</b> - лінія над текстом; <b>underline</b> - лінія під текстом; <b>none</b> - (за замовченням)<br/>
text-shadow: горизонтальне*зміщення вертикальне*зміщення розмір колір; (значення через кому - text-shadow: 2px 2px 5px #000, 5px -2px 10px red;)<br/>
text-transform: <b>capitalize</b> - кожне слово з заглавної літери
<b>lowercase</b> - усі літери прописні
<b>uppercase</b> - усі літери заглавні
<b>none</b> - (за замовчунням) не змінює/відмінює значення<br/>
line-height: значення; <i>(calc пікселі в частини: значення line-height поділити на значення font-size)</i><br/>
text-indent: значення; <i>Червона строка. Встановлює відступ зліва у першого рядка тексту</i><br/>
letter-spacing: значення; <i>Встановлює інтервал між літерами (символами)</i><br/>
white-space: <b>nowrap</b> - забороняє переніс рядка; <b>normal</b> - (за замовчунням) не змінює/відміняє <i>Gоведінкa пробілів між словами</i><br/>
word-spacing: значення; <i>Встановлює інтервал між словами</i><br/>
}
<br/><br/>
<div><table>
	<thead>
    <tr>
      <th>Value</th>
      <th>Common weight name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>100</td>
      <td>Thin (Hairline)</td>
    </tr>
    <tr>
      <td>200</td>
      <td>Extra Light (Ultra Light)</td>
    </tr>
    <tr>
      <td>300</td>
      <td>Light</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Normal (Regular) (за замовчуванням)</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>600</td>
      <td>Semi Bold (Demi Bold)</td>
    </tr>
    <tr>
      <td>700</td>
      <td>Bold</td>
    </tr>
    <tr>
      <td>800</td>
      <td>Extra Bold (Ultra Bold)</td>
    </tr>
    <tr>
      <td>900</td>
      <td>Black (Heavy)</td>
    </tr>
    <tr>
      <td>950</td>
      <td><a href="https://docs.microsoft.com/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks" class="external" rel=" noopener">Extra Black (Ultra Black)</a></td>
    </tr>
  </tbody>
</table>
</div>
</details>

<br/>
<!-- CSS-властивості блоків -->
<details>
  <summary>##CSS-властивості блоків</summary>
box-sizing: <b>content-box</b> - (за замовченням) додає відступи до розміру об'єкту; <b>border-box</b> - значення розмірів враховують відступи; <br/>
<b>padding: ;</b> Внутрішній відступ. Від кордонів об'єкту ДО ЙОГО КОНТЕНТУ
<i>При вказанні значення у відсотках відсоток береться від ширини батьківського об'єкту, навіть для горизонтальних відступів</i> <br/>
<b>margin: ;</b> - Зовнішній відступ. <i>Значення можуть бути від'ємними!</i><br/>
<b>width: ;</b> - чітко задає ширину блочного (блочно-рядкового) об'єкту<br/>
<b>height: ;</b> - чітко задає висоту блочного (блочно-рядкового) об'єкту<br/><br/><br/>
</details>

<br/>
<!-- for Example -->
<!-- for Example -->
<!-- for Example -->
<!-- for Example -->
<!-- for Example -->
<!-- for Example -->
<!-- for Example -->

<br/><br/><br/>

<br/>
<!-- Example -->

<details>
  <summary>Example</summary>
  <!-- text -->
</details>

<br/>
<!-- Example -->

<details>
  <summary>Example</summary>
  <!-- text -->
</details>
