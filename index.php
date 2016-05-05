<html>
<head>
    <title>Armgo - 编程</title>
    <link rel="stylesheet" href="bower/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="bower/sweetalert/dist/sweetalert.css">

    <link rel="stylesheet" href="bower/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="bower/codemirror/addon/fold/foldgutter.css">
    <link rel="stylesheet" href="bower/codemirror/addon/dialog/dialog.css">
    <link rel="stylesheet" href="bower/codemirror/theme/monokai.css">

    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div class="container" style="width: 100%;padding: 0px">
    <div class="">
        <center>
            <h1>Armgo - 编程菜鸟进阶</h1>
        </center>
        <hr>
    </div>
    <div class="clearfix"></div>
    <div class="col-md-8" style="width: 910px;padding: 0 10">
        <? require('game.php'); ?>
    </div>
    <div class="col-md-4">
        <textarea id='codepad' style="overflow-y: auto;"></textarea>
    </div>
</div>

<script src="bower/jquery/dist/jquery.min.js"></script>
<script src="bower/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower/sweetalert/dist/sweetalert.min.js"></script>

<script src="bower/codemirror/lib/codemirror.js"></script>
<script src="bower/codemirror/mode/clike/clike.js"></script>

<script src="lib/jquery-plus.js"></script>

<!-- 加载地图资源 -->
<script type="text/javascript" src="modules/maps.js"></script>
<!-- 加载公共依赖 -->
<script type="text/javascript" src="lib/actorJS.js"></script>
<script type="text/javascript" src="modules/common.js"></script>
<!-- 加载配置文件 -->
<script type="text/javascript" src="conf.js"></script>
<!-- 加载游戏模块 -->
<script type="text/javascript" src="modules/state.js"></script>
<script type="text/javascript" src="modules/mission.js"></script>
<script type="text/javascript" src="modules/cope.js"></script>
<script type="text/javascript" src="modules/arm.js"></script>
<script type="text/javascript" src="modules/toolbar.js"></script>
<script type="text/javascript" src="modules/runs.js"></script>
<script type="text/javascript" src="modules/hello.js"></script>
<script type="text/javascript" src="modules/codepad.js"></script>
<!-- 初始化游戏 -->
<script type="text/javascript" src="armgo.js"></script>
</body>
</html>