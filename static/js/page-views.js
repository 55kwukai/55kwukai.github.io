(function () {
    var num = document.querySelector(".page-views-num");
    if (!num) return;

    var settled = false;
    var originalFetch = window.fetch;
    window.fetch = function (input, init) {
        var url = typeof input === "string" ? input : (input && input.url) || "";
        var pending = originalFetch.apply(this, arguments);
        if (url.indexOf("events.vercount.one/api/") === -1) return pending;

        return pending.then(function (response) {
            if (!response.ok) {
                fail();
                return response;
            }
            response.clone().json().then(applyCount).catch(fail);
            return response;
        }, function (error) {
            fail();
            return Promise.reject(error);
        });
    };

    function pagePvOf(body) {
        if (!body || body.status !== "success" || !body.data) return null;
        var value = Number(body.data.page_pv);
        return Number.isFinite(value) && value >= 0 ? value : null;
    }

    function applyCount(body) {
        var count = pagePvOf(body);
        if (count == null || settled) {
            fail();
            return;
        }
        settled = true;
        num.textContent = String(count);
    }

    function fail() {
        settled = true;
    }
})();
