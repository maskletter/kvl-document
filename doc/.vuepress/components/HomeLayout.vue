
<template>
	<div class="kvl-container" :style='{minHeight: height+"px"}'>
		<div class="kvl-wrapper">
			<div class="block-container">
				<img src="../public/icon.svg">
				<div class="content">
					<!-- <h1>Kvl</h1> -->
					<div class="href-group">
						<a href="use.html">使用</a>
						<a href="https://github.com/maskletter/Kvl" target="_blank">github</a>
						<a href="https://github.com/maskletter/kvl-demo" target="_blank">demo</a>
					</div>
					<div class="descripition">基于express/typescript的一款node.js框架</div>
				</div>
			</div>
			<div class="content-block">
				<p style="text-align: left;color: #666;padding: 0 10px;">通过Npm 方式安装kvl</p>
				<div class="language-bash line-numbers-mode">
					<pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> kvl@latest -g</code></pre> <div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>
			</div>
			<div class="content-block">
				<p style="text-align: left;color: #666;padding: 0 10px;">创建服务</p>
				<div class="language-typescript line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">import</span> kvl <span class="token keyword">from</span> <span class="token string">'kvl'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Main <span class="token punctuation">,</span>Router<span class="token punctuation">,</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'kvl'</span><span class="token punctuation">;</span>
@<span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> 
<span class="token keyword">class</span> <span class="token class-name">HelloWord</span><span class="token punctuation">{</span>

	<span class="token keyword">private</span> msg<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'Hello, world'</span>

	@<span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token punctuation">:</span> <span class="token string">'/hello'</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token keyword">type</span><span class="token punctuation">:</span> <span class="token string">'get'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">private</span> <span class="token function">hello</span><span class="token punctuation">(</span>req<span class="token punctuation">:</span> kvl<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> res<span class="token punctuation">:</span> kvl<span class="token punctuation">.</span>Response<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`&lt;h1&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h1&gt;`</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	port<span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
	router<span class="token punctuation">:</span> <span class="token punctuation">[</span> HelloWord <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>app<span class="token punctuation">,</span>httpServer<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre> <div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>
			</div>
		</div>

	</div>
</template>

<style type="text/css" scoped>
	.kvl-container{ text-align: center;margin: 0 auto;color: #666;background: #f5f5f5;overflow: hidden; }
	.block-container{ max-width: 400px;width: 94%;background: #fff;margin: 100px auto 60px;box-shadow: 0px 0px 30px rgba(0,0,0,.22);padding: 0px;position: relative;box-sizing: border-box; }
	.kvl-wrapper{ max-width: 700px;margin: 0 auto; }
	.descripition{ font-size:12px;text-decoration: underline;margin-top: 10px; }
	.block-container>.content{ padding-top: 20px;padding-bottom: 15px; }
	.block-container>.content>h1{ font-size: 60px; }
	.block-container>.content>.href-group{ display: flex;justify-content: space-around;margin-top: 0px;height:40px; }
	.block-container>.content>.href-group>a{ display: inline-block;width: 80px;background: #666;border-radius: 30px;color: #fff;line-height: 40px;font-size:13px;margin-top: 0px; }
	.content-block{ margin-bottom: 20px; }
</style>
<style type="text/css">
html{  }
	/*html,body,#app,.custom-layout{ height:100%; }
	#app>.theme-container{ height:100%; }
	.custom-layout{ box-sizing: border-box; }*/

</style>
<script type="text/javascript">

</script>