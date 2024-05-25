import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.eabe3503.js";const b=JSON.parse('{"title":"yum源常用配置","description":"","frontmatter":{"title":"yum源常用配置","createTime":"2023/12/21 23:14:27","updateTime":"2023/12/21 23:21:29","isPublished":true},"headers":[],"relativePath":"linux/00101_yum_config_tutorial.md","filePath":"linux/00101_yum_config_tutorial.md"}'),e={name:"linux/00101_yum_config_tutorial.md"},p=l(`<h2 id="常用yum源地址" tabindex="-1">常用yum源地址 <a class="header-anchor" href="#常用yum源地址" aria-label="Permalink to &quot;常用yum源地址&quot;">​</a></h2><p>base源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/yum.repos.d/Centos-Base.repo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/repo/Centos-7.repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>epel源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/yum.repos.d/epel.repo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/repo/epel-7.repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>docker-ce源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yum-utils</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">device-mapper-persistent-data</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lvm2</span></span>
<span class="line"><span style="color:#FFCB6B;">yum-config-manager</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--add-repo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>kubernetes源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;">EOF</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> /etc/yum.repos.d/kubernetes.repo</span></span>
<span class="line"><span style="color:#C3E88D;">[kubernetes]</span></span>
<span class="line"><span style="color:#C3E88D;">name=Kubernetes</span></span>
<span class="line"><span style="color:#C3E88D;">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span style="color:#C3E88D;">enabled=1</span></span>
<span class="line"><span style="color:#C3E88D;">gpgcheck=1</span></span>
<span class="line"><span style="color:#C3E88D;">repo_gpgcheck=1</span></span>
<span class="line"><span style="color:#C3E88D;">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>ceph源</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ceph.repo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">EOF</span></span>
<span class="line"><span style="color:#C3E88D;">[ceph]</span></span>
<span class="line"><span style="color:#C3E88D;">name=ceph</span></span>
<span class="line"><span style="color:#C3E88D;">baseurl=http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/x86_64/</span></span>
<span class="line"><span style="color:#C3E88D;">enable=1</span></span>
<span class="line"><span style="color:#C3E88D;">gpgcheck=0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">[ceph-noarch]</span></span>
<span class="line"><span style="color:#C3E88D;">name=cephnoarch</span></span>
<span class="line"><span style="color:#C3E88D;">baseurl=http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/noarch/</span></span>
<span class="line"><span style="color:#C3E88D;">enable=1</span></span>
<span class="line"><span style="color:#C3E88D;">gpgcheck=0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">[ceph-source]</span></span>
<span class="line"><span style="color:#C3E88D;">name=Ceph source packages</span></span>
<span class="line"><span style="color:#C3E88D;">baseurl=http://mirrors.aliyun.com/ceph/rpm-nautilus/el7/SRPMS</span></span>
<span class="line"><span style="color:#C3E88D;">enable=1</span></span>
<span class="line"><span style="color:#C3E88D;">gpgcheck=0</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="如何制作本地yum源" tabindex="-1">如何制作本地yum源 <a class="header-anchor" href="#如何制作本地yum源" aria-label="Permalink to &quot;如何制作本地yum源&quot;">​</a></h2><p>当你需要给内网环境安装 rpm 包，并且 CentOS-7-x86_64-*.iso 中自带的 rpm 包无法满足需求时，通常会配置相关软件的本地 yum 源；下文中已安装 <code>docker-ce-18.09</code> 为例</p><p>step01 查看所有可以安装的版本</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docker-ce</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--showduplicates</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">sort</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>step02 下载安装包到指定目录，其中版本号为冒号<code>:</code>开始至第一个连字符<code>-</code>结束</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docker-ce-18.09.9</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docker-ce-cli-18.09.9</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--downloadonly</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--downloaddir=docker-ce/packages/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>step03 生成repodata元数据</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">createrepo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docker-ce/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建带ssl证书的本地yum源" tabindex="-1">创建带ssl证书的本地yum源 <a class="header-anchor" href="#创建带ssl证书的本地yum源" aria-label="Permalink to &quot;创建带ssl证书的本地yum源&quot;">​</a></h2><p>出于安全考虑，有时候也会要求配置带 ssl 的本地 yum 源</p><p>step01 安装 <code>httpd</code>、<code>mod_ssl</code>，当然安装其它的静态文件服务器也行，例如 nginx</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">httpd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mod_ssl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>step02 修改配置文件 <code>/etc/httpd/conf.d/ssl.conf</code>，指定服务端证书和key</p><p>👉<a href="/vdocs/linux/00201_openssl_certs_tutorial.html">如何创建证书</a></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Listen</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">9090</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">VirtualHost _default_:</span><span style="color:#89DDFF;">9090&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">SSLCertificateFile</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/httpd/certs/192.168.10.11-server.crt</span></span>
<span class="line"><span style="color:#FFCB6B;">SSLCertificateKeyFile</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/httpd/certs/192.168.10.11-server.key</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">/VirtualHost</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>step03 配置 <code>/etc/yum.repos.d/network.repo</code>，相关配置参考: <code>man yum.conf</code></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">network</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">network</span></span>
<span class="line"><span style="color:#BABED8;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://192.168.10.11:9090/network</span></span>
<span class="line"><span style="color:#BABED8;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#BABED8;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line highlighted"><span style="color:#BABED8;">sslverify</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line highlighted"><span style="color:#BABED8;">sslcacert</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/etc/yum.repos.d/certs/ca.crt</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">docker-ce</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">docker-ce</span></span>
<span class="line"><span style="color:#BABED8;">baseurl</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://192.168.10.11:9090/docker-ce</span></span>
<span class="line"><span style="color:#BABED8;">enabled</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#BABED8;">gpgcheck</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line highlighted"><span style="color:#BABED8;">sslverify</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># sslcacert=/etc/yum.repos.d/certs/ca.crt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><h3 id="yum命令行被挂起-无响应" tabindex="-1">yum命令行被挂起，无响应 <a class="header-anchor" href="#yum命令行被挂起-无响应" aria-label="Permalink to &quot;yum命令行被挂起，无响应&quot;">​</a></h3><p>排查原因是 rpm 的文件锁没有释放，可以删除该文件锁</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/var/lib/rpm/.rpm.lock</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">bak/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,32),o=[p];function r(c,t,i,y,u,d){return n(),a("div",null,o)}const D=s(e,[["render",r]]);export{b as __pageData,D as default};
