垂直居中的简易解决方案--flex

参考至：阮一峰文章：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

demo参考至阮一峰flex事例文章：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

布局的传统解决方案--基于盒状模型，依赖display属性+position属性+float属性；
-----对于特殊布局如垂直居中就不易实现；

【1】任何一个容器都可以指定为flex； 
.box{display:flex}
【2】行内元素也可以使用flex布局
.box{display:inline-flex;}
【3】Webkit内核的浏览器，必须加上-webkit前缀；
    .box{
      display: -webkit-flex; /* Safari */
      display: flex;
    }
【4】设为flex布局之后，子元素的float，clear，vertical-align属性将失效；
【5】flex容器默认存在两根轴，水平轴：main axis 和垂直的交叉轴：cross axis；
（main start，main end--main size；cross start，cross-end--cross size）
-----------------------------------------------------
一、容器----有以下6个属性可设置：
【1】flex-direction ---主轴的方向--即项目的排列方向
{row:从左往右排列}
{row-reverse:从右往左排列}
{column：从上往下排列}
{column-reverse：从下往上排列}

【2】flex-wrap---默认情况下，项目排在一行，如果一行排列不下，flex-wrap定义如何换行；
{nowrap：不换行}
{wrap：换行，且第一行在上}
{wrap-reverse：换行，第一行在下}

【3】flex-flow--是flex-direction和flex-wrap的简写形式，默认为row nowrap;
{flex-flow:row nowrap;}

【4】justify-content---定义项目在主轴上的对齐方式
{flex-start:左对齐；}
{flex-end:右对齐}
{center：居中}
{space-between：两端对齐，项目之间的间距都相同}
{space-around：每个项目两侧的间距相同，故项目之间的距离比项目与边框的距离大一倍}

【5】align-items---定义项目在交叉轴上如何排序
{flex-start:交叉轴的起点对齐}
{flex-end：交叉轴的终点对齐}
{center：交叉轴的中点对齐}
{baseline：项目的第一行文字的基线对齐}
{stretch：默认值，如果项目未设置高度或设为auto，将占满整个容器的宽度}

【6】align-content---定义了多根轴线（多行）的对齐方式，若只有一根轴线，则不起作用；
{flex-start:与交叉轴的起点对齐}
{flex-end:与交叉轴的重点对齐}
{center:与交叉轴的中点对齐}
{space-between：与交叉轴的两端对齐，轴线之间的间隔平均分布}
{space-around：每根轴线两侧的间隔都相同，所以，轴线之间的间隔比轴线与边框的间隔大一倍}
{stretch：默认值，轴线占满整个交叉轴}

--------------------------------------------------
二、项目属性
【1】order---定义项目的排列顺序。数值越小，排列月靠前，默认为0；
【2】flex-grow--定义项目在剩余空间放大的比例，默认为0,即如果存在剩余空间，也不放大。---如果项目的flex-grow值全相同，则他们将平分剩余空间（如果有的话），
如果有些设置为1，有些为2，则2的占比为1的两倍；
【3】flex-shrink--定义了项目在空间不足时的缩小比例，默认为1，即如果剩余空间不足，该项目将缩小。----如果flex-shrink属性都为1，当空间不足时，都将等比例缩小；如果一个项目的属性为0，其余为1，则空间不足时，前者不缩小；且该值越大，缩小程度越大。
【4】flex-basis---定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间，它的默认值是auto，即项目的本来大小；
【5】flex---是flex-grow，flex-shrink和flex-basis的简写。默认值0 1 auto ；
该属性有两个快捷值auto（1 1 auto） 和none（0 0 auto）
；
【6】flex-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父类的align-items属性，如果没有父元素，则等同于stretch;
该属性可能取6个值，除了auto，其他都与align-items属性完全相同。



