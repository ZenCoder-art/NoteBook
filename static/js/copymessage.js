window.onload = function () {
    document.body.oncopy = function () {
        swal("复制成功 🎉",
            "若要转载或引用请务必保留原文链接，并申明来源。如果你觉得本仓库不错，那就来 GitHub 给个 Star 吧 😊",
            "success");
    };
}