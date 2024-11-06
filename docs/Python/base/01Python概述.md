# 初识Python

## Python概述

### 背景

- 使创始人为Guido van Rossum在1989年圣诞节期间, 为了打发无聊开发出来的
- Python官网:[https://www.python.org/](https://www.python.org/)

![Python创始人](https://raw.githubusercontent.com/christinemu/biz-mining/9d8cc885bb8a9ce985b372fbfedaf66bdc3772c8//img/python/Rossum.jpg ":size=20% Python创始人")

### 为什么选用Python?

- **简单**
  - 语法简单精练: 对于初学者来说, 比起其他编程语言, `Python`更容易上手
- **免费**
  - `Python`是免费开源的。这意味着不用花钱, 就可以共享、复制和改动它
  - 帮助`Python`形成了强壮的社区, 使`Python`更加完善, 技术发展更快
- **兼容**
  - `Python`兼容众多平台（Windows、Mac、Linux）, 所以开发者不会遇到使用其他语言时常会遇到的困扰
  - `Python`能够以多种方式轻易地与其他语言的组件粘接在一起, 被称为**胶水语言**
- **面向对象**
  - `Python`既支持面向过程, 也支持面向对象编程
- **丰富的库**
  - `Python`标准库庞大, 可以帮助你处理各种工

<div style="text-align: center;"><img alt='202410031721996' src='https://cdn.jsdelivr.net/gh/weno861/image@main/img/202410031721996.png' style="width: 600px"> </div>

### Python的应用领域

`Python`的应用领域极为宽泛, 主要可以参见下图

<img src='https://raw.githubusercontent.com/christinemu/biz-mining/9d8cc885bb8a9ce985b372fbfedaf66bdc3772c8//img/python/where-is-python-used.gif'>

#### 数据科学领域

由于`Python`在数据科学与机器学习领域有丰富的库和活跃的开源社区，因此使得`Python`成为数据科学家和分析师的首选语言

<center><img src='https://raw.githubusercontent.com/christinemu/biz-mining/9d8cc885bb8a9ce985b372fbfedaf66bdc3772c8//img/python/programming_languages_used.jpg' style="width: 500px"></center>

#### 财务会计

<img src='https://raw.githubusercontent.com/christinemu/biz-mining/9d8cc885bb8a9ce985b372fbfedaf66bdc3772c8//img/python/pythonAccounting.png' style="width: 500px">

### 安装Python解释器

想要开始`Python`编程之旅, 首先得在自己使用的计算机上安装`Python`解释器环境, 下面将以安装官方的`Python`解释器为例, 官方的`Python`解释器是用C语言实现的, 也是使用最为广泛的`Python`解释器, 通常称之为`CPython`。除此之外, `Python`解释器还有Java语言实现的Jython、C#语言实现的IronPython以及PyPy、Brython、Pyston等版本, 有兴趣的读者可以自行了解。

- 下载地址(傻瓜式安装即可)[https://www.python.org/downloads/](https://www.python.org/downloads/)
- Windows系统注意设置以下路径为环境变量

```console
# 以下的python_home均修改为你的Python安装目录
python_home 
python_home/Lib 
python_home/Scripts
```

## 虚拟环境

`Python`的虚拟环境是一种工具，用于创建一个独立的`Python`环境，允许你在同一台机器上运行不同版本的`Python`及其库，而不会互相干扰。这样可以避免依赖冲突，让项目更易于管理和部署

### 创建虚拟环境

可以使用Python自带的虚拟环境模块`venv`，使用起来非常简单

```python
python -m venv myvenv # 指定虚拟环境的名称
```

### 激活虚拟环境

* Windows系统

```python
myvenv\Scripts\activate
```

* macOS和Linux系统

```python
source myvenv/bin/activate
```

## 包（package）管理工具

`pip`是 `Python`包管理工具, 该工具提供了对 `Python`包的查找、下载、安装、卸载的功能

### pip升级

要是你觉得自己的pip版本有点低, 想要升级一下的话, 在命令行中输入以下命令:

```console
pip install --upgrade pip
# 等价于以下命令
pip install -U pip
```

### 安装某个版本的包

如果打算用pip来安装第三方的包, 用的是以下的命令行

```console
pip install package-name==VERSION # VERSION为包的版本
```

### 指定国内源来安装

默认的官方安装源是<https://pypi.org/simple>, 如果默认的官方安装源安装包的速度有点慢，可以考虑更换一下国内镜像来安装指定的`Python`包

```python
pip install package_name -i https://pypi.tuna.tsinghua.edu.cn/simple # 指定使用清华大学镜像源来安装指定的包，需要指定-i参数
```

- 常用的国内镜像有以下几个

  - [清华大学镜像](https://pypi.tuna.tsinghua.edu.cn/simple/)
  - [阿里云镜像](http://mirrors.aliyun.com/pypi/simple/)
  - [豆瓣镜像](https://pypi.doubanio.com/simple)
  - [中国科学技术大学镜像](https://pypi.mirrors.ustc.edu.cn/simple)
  - [华中科技大学镜像](https://pypi.hustunique.com/)

当然了，你会发现上述命令需要指定`-i`参数，并且每次都需要指定国内镜像源的地址，我们也可以永久更改`pip`安装包的安装源，具体过程如下:

- 建立`pip.ini`文件, 方法是新建**文本文档**, 将下述内容拷贝到该文档, 然后将该文档**另存为**`pip.ini`
- 将`pip.ini`文件拷贝到安装的`Python`的**根目录**下, 以加快包的下载速度

```ini
[global]
timeout = 6000 # 指定超时时间
index-url = https://pypi.tuna.tsinghua.edu.cn/simple  # 指定镜像源
[install]
use-mirrors = true # 是否使用镜像
mirrors = http://pypi.tuna.tsinghua.edu.cn # 镜像源地址
trusted-host = pypi.tuna.tsinghua.edu.cn # 可信任的主机
```

### 批量安装软件包

我们一般在看到别人的项目时, 都会包含一个 `requirements.txt`文件, 里面包含了一些 `Python` 项目当中需要用到的第三方库，这个文件使得环境设置和依赖管理变得更加简便

要生成这种txt文件, 需要这么来做

```console
pip freeze > requirements.txt 
```

此命令会将当前环境中安装的所有包及其版本信息输出到`requirements.txt`

而如果我们需要来批量安装第三方库, 在命令行中输入以下这个命令:

```console
pip install -r requirements.txt
```

这条命令会读取`requirements.txt`文件，并逐一安装文件中列出的所有库，确保你的环境与项目所需的依赖一致

## 运行Python程序

### python交互式命令

*启动Python解释器*: 打开终端或命令提示符, 并键入`python`, 然后按Enter键。这将启动`Python`解释器, 你将看到一个提示符 (`>>>`) 表示你可以输入`Python`代码

虽然交互式命令行在**学习、测试和快速尝试代码**时非常有用, 但也有一些缺点: 

1. **不便于长期保存**: 交互式命令行通常不是一个持久性环境, 你输入的代码不会保存。如果你有一个较大的项目或需要多次运行相同的代码, 最好将其保存在脚本文件中
2. **难以维护大型代码**:  对于大型项目而言, 交互式命令行并不是一个理想的环境。编辑和组织大量代码更容易在文本编辑器或集成开发环境（`IDE`）中完成
3. **难以版本控制**:  交互式命令行中的输入不容易被版本控制系统（如`Git`）跟踪。对于团队协作或长期项目, 使用文本文件进行版本控制更为合适
4. **无法实现模块化**:  在交互式命令行中, 很难将代码模块化为函数或类, 这可能使代码更难理解和维护。
5. **缺乏自动完成和语法高亮**:  与一些高级`IDE`相比, 交互式命令行通常缺少自动完成和语法高亮等功能, 这些功能有助于提高代码的编写效率和可读性
6. **不适合图形界面开发**:  交互式命令行并不是专为图形用户界面（GUI）开发而设计的。GUI开发通常需要使用特定的工具和库, 而不仅仅是在命令行中输入代码

> 什么是IDE?
>
> `Integrated Development Environment`（集成开发环境）是一种用于软件开发的应用程序，它集成了多种工具，以便于开发者编写、测试和调试代码,IDE就像是一个特别的工具箱，帮助你写程序。它里边有一个可以写代码的地方（代码编辑器），还有一些帮助你检查错误的工具（调试工具）。你可以用它来组织你的项目，像放照片一样把你的代码和文件整理好

### 交互式命令常用的代码片段

#### 启动HTTP服务器

在当前目录启动服务器，只需要进入终端运行以下代码即可

```console
$ python -m http.server 8000 # 默认在8000端口启动服务器,可以手动修改端口号
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

默认展示的是该目录下的所有文件及文件夹,若当前目录存在`index.html`文件，则展示该文件的内容

#### 测试小段代码的执行时间

可以使用`timeit`模块用于测量小段代码执行时间的工具，适合用于性能测试

```console
$ python -m timeit [-n N] [-r N] [-v] [statement ...]
```

* `-n`: 指定执行语句多少次
* `-r`: 重复计时器的次数
* `-v`:详细打印计时的输出结果

#### 离线查看Python的文档

当你没有互联网连接时,可以查看python的离线文档

```console
$ python -m pydoc [-b] [-p] [-n] [ModuleName]
```

* `-b`: 在任意未使用的端口上启动 `HTTP`服务器，并打开网络浏览器以交互方式浏览文档
* `-n`: 指定主机名
* `-p`:指定端口号
* `ModuleName`: 指定具体模块

#### 分析Python程序的性能

可以使用 `cProfile` 模块可以分析Python程序的性能，找出哪些部分运行得慢，从而优化该部分达到比较满意的性能

```console
$ python -m cProfile [pyfile] # 需要指定分析的Python文件
# 具体用法可以参考以下内容

$ cat demo.py 
print("Hello World")

$ python3 -m cProfile demo.py 
Hello World
         4 function calls in 0.000 seconds

   Ordered by: cumulative time

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.000    0.000    0.000    0.000 {built-in method builtins.exec}
        1    0.000    0.000    0.000    0.000 demo.py:1(<module>)
        1    0.000    0.000    0.000    0.000 {built-in method builtins.print}
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
```

#### 格式化JSON文件

JSON文件在没有经过格式化时阅读起来是非常困难的，我们可以通过Python自带的格式化工具进行格式化

```console
$ python3 -m json.tool demo.json
{
    "version": "1.2.12",
    "description": "Massively spiffy yet delicately unobtrusive compression library. Unencumbered by patents.",
    "homepage": "http://www.zlib.net/",
    "license": "Zlib",
    "url": "https://raw.githubusercontent.com/ScoopInstaller/Binary/master/zlib/zlib-1.2.12-windows-32bit-vc14.2.7z",
    "hash": "0d7245a2e499320cb4803b3889df8a9051d2dfc0c53d2908a3d99b687943c68b",
    "notes": [
        "For CMake (and other build tools) to find this installation of zlib, run:",
        "\"$dir\\register.reg\""
    ],
    "post_install": [
        "$dirpath = \"$dir\".Replace('\\', '\\\\')",
        "'register', 'unregister' | ForEach-Object {",
        "  if (Test-Path \"$bucketsdir\\extras\\scripts\\zlib\\$_.reg\") {",
        "    $content = Get-Content \"$bucketsdir\\extras\\scripts\\zlib\\$_.reg\"",
        "    $content = $content.Replace('$dir', $dirpath)",
        "    $content | Set-Content -Path \"$dir\\$_.reg\"",
        "  }",
        "}"
    ],
    "pre_uninstall": [
        "if ($cmd -eq 'uninstall') {",
        "    $key = Get-ItemProperty -Path 'HKLM:\\SOFTWARE\\GnuWin32\\Zlib' -Name 'InstallPath' -ErrorAction SilentlyContinue",
        "    if ($key -and $key.InstallPath.Contains('apps\\zlib\\current')) {",
        "        if (!(is_admin)) { error \"$app requies admin rights to unregister the installation path\"; break }",
        "        Invoke-ExternalCommand reg -ArgumentList @('import', \"$dir\\unregister.reg\") -RunAs | Out-Null",
        "    }",
        "}"
    ]
}
```

#### 静默启动Python Shell

可以使用 `-q` 选项控制静默启动Python Shell

```console
$ python -q
```

#### 快速识别指定文件的mime类型

MIME 类型（Multipurpose Internet Mail Extensions）是一种用于描述文件类型的标准，用来告诉浏览器、服务器或其他应用程序如何处理和展示文件内容。它最早用于电子邮件，以帮助识别不同附件的类型，现在已经成为网络协议（如 HTTP）的标准，用来描述网页、图片、视频等各种网络资源的内容类型

```console
$ python -m mimetypes https://docs.python.org/3/library/mimetypes.html
```

#### 打开默认的Python编辑器

在你安装 `Python` 解释器的时候，会有一个选项，让你选择是否安装 `idle` ，这是一个极简的 `Python`编辑器，对于有点 `Python` 编码的经验的同学，一般都已经安装了更加专业的代码编辑器，比如 pycharm，vscode 等

```console
$ python -m idlelib
```

#### 快速计算字符串的base64编码

对一个字符串进行base64编码和解码

```console
# base64编码
$ echo "Hello World" | python3 -m base64                                                                    
SGVsbG8gV29ybGQK

# 指定-d参数进行base64解码
$ echo "SGVsbG8gV29ybGQK" | python3 -m base64 -d  
Hello World
```

### 编写Python源代码

可以用文本编辑工具（推荐使用[Visual Studio Code](https://code.visualstudio.com/)等高级文本编辑工具）编写`Python`源代码并用`py`作为后缀名保存该文件, 代码内容如下所示

```python
# hello.py
print("hello, world!")
```

### 运行程序

切换到源代码所在的目录并执行下面的命令, 看看屏幕上是否输出了"hello, world!"

```console
python hello.py
```

### 代码中的注释

注释是编程语言的重要组成部分，主要用于解释源代码的作用，从而提高程序的可读性和可维护性。此外，注释也可以用来暂时去掉不需要运行的代码段，这在调试程序时尤其常用。在预处理或编译过程中，注释会被移除，不会保留在目标代码中，因此不会影响程序的执行结果

1. 单行注释: 以`#`和空格开头的部分(其实也不需要空格，但是为了美观还是加上空格吧)
2. 多行注释:三个引号开头, 三个引号结尾(其实Python没有多行注释的概念，三个引号只是用于多行字符串)

```python
"""
第一个Python程序 - hello, world!
"""
print('hello, world!')
# print("你好, 世界！")
```

### Python开发工具

#### IDLE - 自带的集成开发工具

IDLE是安装`Python`环境时自带的集成开发工具, 但是由于IDLE的用户体验并不是那么好所以很少在实际开发中被采用

#### PyCharm

[PyCharm](https://www.jetbrains.com/pycharm/)是由JetBrains开发的强大Python IDE, 提供许多高级功能, 如智能代码完成、调试、版本控制集成等。有专业版和社区版可供选择。

#### Visual Studio Code (VSCode)

[VSCode](https://code.visualstudio.com/)是一款轻量级但功能丰富的代码编辑器, 由Microsoft开发。通过插件系统, 可以扩展支持`Python`开发, 并提供调试、`Linting`等功能。

推荐安装的与`Python`相关插件有以下几个

* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python):由Microsoft开发，提供Python语言的支持，包括语法高亮、代码补全、调试、测试和虚拟环境管理等功能，是Python开发的基础插件
* [autoDocstring - Python Docstring Generator](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring):自动生成Python函数的文档字符串（docstring），根据函数签名和参数类型快速生成符合PEP-257标准的文档格式
* [Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy):集成的Python调试器，允许你设置断点、逐步执行代码、检查变量和查看调用栈，帮助快速定位代码中的问题
* [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance):提供快速的语言支持，包括类型检查、智能提示和代码重构功能，利用Microsoft的Pyright语言服务器提升Python开发体验
* [Black Formatter](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter):自动格式化Python代码，遵循Black代码风格，使代码更一致、更易读，帮助提高代码质量
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow):通过颜色高亮不同级别的缩进，帮助开发者快速识别代码块的层次结构，减少缩进错误
* [isort](https://marketplace.visualstudio.com/items?itemName=ms-python.isort):自动排序Python导入语句，按照PEP 8风格进行排序和分组，提升代码的整洁性和可维护性
* [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter):支持在VS Code中打开和编辑Jupyter Notebook，提供交互式计算环境，适合数据科学和机器学习项目
* [Jupyter Cell Tags](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-jupyter-cell-tags):允许在Jupyter Notebook中为单元格添加标签，便于组织和运行特定标签的单元格，增强笔记本的管理能力
* [Jupyter Keymap](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-keymap):提供Jupyter Notebook的快捷键映射，帮助用户更方便地使用Jupyter Notebook的常用功能，提高工作效率
* [Jupyter Notebook Renderers](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter-renderers):扩展Jupyter Notebook中的渲染功能，支持更多类型的输出格式，如HTML、Markdown等，使数据可视化更加灵活
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens):实时显示代码中的错误和警告，直接在代码行旁边高亮显示，帮助开发者快速识别和修复问题

#### Jupyter Notebook

`Jupyter`是一个交互式计算环境, 支持多种编程语言, 包括`Python`, Jupyter Notebooks允许在浏览器中创建和共享文档, 结合代码、文本和图表,其文件后缀名为`.ipynb`

## Python 高级用法

### 新一代的Python项目与包管理器

#### uv

[uv](https://github.com/astral-sh/uv)作为一个现代的`Python`包管理器，不仅可以用于安装和管理依赖，还可以帮助管理项目的结构和配置

<div style="text-align: center;"><img alt='202410031818538' src='https://cdn.jsdelivr.net/gh/weno861/image@main/img/202410031818538.png' > </div>

##### 安装uv

使用独立安装程序或者[PyPi](https://pypi.org/project/uv/)来安装uv

```console
# On macOS and Linux use curl
$ curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows use powershell
$ powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# With pip
$ pip install uv
```

##### 项目管理

```console
uv init project_name # 可以指定项目的名称
uv add [dependencies] # 增加项目的依赖
uv remove [dependencies] # 移除项目的依赖
uv lock # 更新项目的锁文件
uv sync # 更新项目的环境依赖
```

> 锁文件是什么？
>
> 项目的锁文件（通常是 `requirements.lock` 或类似文件）用于记录项目中所有依赖的具体版本。它的主要作用包括：
>
> * **确保一致性**：锁文件确保在不同的开发环境或部署环境中安装相同版本的依赖。这意味着无论哪个开发者或服务器在安装依赖，都会得到相同的环境，避免由于版本差异导致的“它在我的机器上可以工作”的问题
> * **解决版本冲突**：通过锁定具体版本，可以有效避免因更新依赖而引入的不兼容问题。即使某个库的维护者发布了新版本，锁文件会确保你使用的是之前确认可以正常工作的版本

##### Python管理

```console
uv python [list] [install] [uninstall]
```

* `list`: 列出当前可用的Python解释器
* `install VERSION`: 需要指定安装的Python版本
* `uninstall VERSION`: 需要指定卸载的Python版本

##### 虚拟环境

uv提供了一种简单的创建Python虚拟环境的命令

```console
uv venv --python VERSION # 默认的虚拟环境名称为.venv，也可以指定Python的版本
```

##### 安装Python包

uv 提供了常用pip、pip-tools 和 virtualenv 命令的直接替代功能，而且uv利用高级功能扩展了它们的界面，如依赖版本覆盖、平台无关的解析、可重现的解析、替代解析策略等，因此可以使用 uv pip 界面，在不改变现有工作流程的情况下迁移到 uv，并体验 10-100 倍的速度提升

```console
uv pip install # 安装python包
uv pip list # 列出已安装的Python包
uv pip uninstall # 卸载已安装的Python包
uv pip freeze # 列出已安装的软件包及其版本
uv pip check # 检查Python包的依赖
uv pip tree # 查看环境的依赖关系树
uv pip compile # 将需求编译到一个锁定文件中
uv pip sync # 将环境与锁文件同步
```

##### 运行脚本文件

`Python`脚本是用于独立执行的文件，例如`python <script>.py`,使用 uv 执行脚本可确保管理脚本依赖关系，而无需手动管理环境

```console
uv run script.py # 指定运行的脚本
```

关于uv的用法还有很多很多，这里就不再一一介绍，可以参考[官方文档](https://docs.astral.sh/uv/)

#### virtualenv

`Virtualenv` 是一个工具，它能够帮我们创建一个独立（隔离）的 Python 环境，支持更多 Python 版本和老版本兼容，创建速度比 `venv` 快

```console
# 安装virtualenv模块
$ python3 -m pip install virtualenv

# 使用virtualenv创建虚拟环境
$ virtualenv -p python3.8 myproject # -p 选项可以指定Python的版本

# 激活虚拟环境
$ source myproject/bin/activate
```

#### poetry

`Poetry` 是一个现代化的 Python 包和依赖管理工具，集成了依赖管理和虚拟环境创建功能，适合管理项目依赖和发布包

具体使用可以参考[https://python-poetry.org/docs/](https://python-poetry.org/docs/)， 这里就不一一介绍了

#### 包管理器选择

**小项目**：使用 `venv` 、 `virtualenv` 或 `conda` 简单快捷

**复杂依赖或团队项目**：`pipenv` 、 `poetry` 或 `uv` 方便版本控制和依赖管理

### 全平台通用换源工具与框架

[chsrc](https://github.com/RubyMetric/chsrc)不仅是一个命令行工具，同时也是一个换源框架，它甚至使你能够在不了解C语言的情况下编写出新的换源方法

#### chsrc的安装

```console
# windows系统安装
# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-windows.exe -o chsrc.exe
# x86
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x86-windows.exe -o chsrc.exe
# Linux系统安装
# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-linux -o chsrc; chmod +x ./chsrc
# aarch64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-aarch64-linux -o chsrc; chmod +x ./chsrc
# riscv64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-riscv64-linux -o chsrc; chmod +x ./chsrc
# armv7
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-armv7-linux -o chsrc; chmod +x ./chsrc
# MacOS系统安装
# arm/aarch64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-aarch64-macos -o chsrc; chmod +x ./chsrc
# x64
curl -L https://gitee.com/RubyMetric/chsrc/releases/download/pre/chsrc-x64-macos -o chsrc; chmod +x ./chsrc
```

#### chrsc的使用

```console
使用: chsrc <command> [options] [target] [mirror]

help                      # 打印此帮助，或 h, -h, --help
issue                     # 查看相关issue

list (或 ls, 或 l)        # 列出可用镜像源，和可换源目标
list mirror/target        # 列出可用镜像源，或可换源目标
list os/lang/ware         # 列出可换源的操作系统/编程语言/软件

measure <target>          # 对该目标所有源测速
cesu    <target>

list <target>             # 查看该目标可用源与支持功能
get  <target>             # 查看该目标当前源的使用情况

set  <target>             # 换源，自动测速后挑选最快源
set  <target>  first      # 换源，使用维护团队测速第一的源
set  <target> <mirror>    # 换源，指定使用某镜像站 (通过list命令查看)
set  <target> https://url # 换源，用户自定义源URL
reset <target>            # 重置，使用上游默认使用的源

选项:
-dry                      # Dry Run，模拟换源过程，命令仅打印并不运行
-local                    # 仅对某项目而非全局换源 (仅部分软件如bundler,pdm支持)
-ipv6                     # 使用IPv6测速
-en(glish)                # 使用英文输出
-no-color                 # 无颜色输出
```

例如需要更改`pip`包管理器的镜像源可以这样

```console
chsrc set python
```

## 练习题

1. 在交互式命令窗口打印出`Python`所有的关键字

```python
import keyword

print(keyword.kwlist)
```

> Python关键字是编程语言中具有特殊含义的保留字，它们用于定义程序的结构和控制流, 关键字一般不能用作标识符（如变量名、函数名等）,如果硬是要使用Python关键字作为标识符,一般需要在其前面或后面加上一个下划线`_`,例如`_import`

```console
>>> import keyword
>>> print(keyword.kwlist)
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'] 
```

2. 使用turtle在屏幕上绘制图形

> `turtle`是Python内置的一个有趣模块，非常适合初学者体验计算机程序设计。它源于 Logo 语言，这种语言由 Wally Feurzig 和 Seymour Papert 于 1966 年发明，旨在通过图形化的方式教授编程概念。使用 `turtle`，用户可以通过简单的命令在屏幕上绘制图形，轻松理解循环、条件和函数等编程基础。这个模块不仅让编程变得直观有趣，还激发了许多人对计算机科学的兴趣

```python
import turtle as tt

# 设置画布大小为1000x800像素
tt.setup(1000, 800)
# 设置画笔的粗细为5
tt.pensize(5)
# 设置画笔颜色为粉色
tt.pencolor("pink")
# 设置填充颜色为粉色，并开始填充
tt.fillcolor("pink")
tt.begin_fill()
# 绘制图形的第一部分
tt.lt(50)               # 左转50度
tt.circle(-100, 180)   # 绘制一个半径为100的半圆，方向向左
tt.rt(10)              # 右转10度
tt.forward(200)        # 向前移动200像素
tt.rt(80)              # 右转80度
tt.forward(200)        # 向前移动200像素
tt.rt(10)              # 右转10度
tt.circle(-100, 180)   # 绘制另一个半径为100的半圆，方向向左
# 结束填充
tt.end_fill()
# 获取当前屏幕并将图形保存为 EPS 文件
ts = tt.getscreen()
ts.getcanvas().postscript(file="drawing.eps")
# 关闭 turtle 窗口
tt.done()
```

<div style="text-align: center;">
    <img alt="202410031926359" src="https://cdn.jsdelivr.net/gh/weno861/image@main/img/202410031926359.png" style="width: 500px">
</div>






