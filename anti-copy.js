<script>
(() => {
    // جلوگیری از راست‌کلیک
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
    });

    // جلوگیری از انتخاب متن
    document.addEventListener("selectstart", e => {
        e.preventDefault();
    });

    // جلوگیری از کپی
    document.addEventListener("copy", e => {
        e.preventDefault();
    });

    // جلوگیری از میانبرهای رایج DevTools و View Source
    document.addEventListener("keydown", e => {
        const key = e.key.toLowerCase();

        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
            (e.ctrlKey && key === "u") ||
            (e.ctrlKey && key === "s")
        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
})();
</script>
