var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        previewDPS = new Combatant({
            detail: responseObject
        }, 'encdps');
        previewHPS = new Combatant({
            detail: responseObject
        }, 'enchps');
    }
}
xhr.open('GET', 'js/previewLog.json', true);
xhr.send(null);
var webs = null;
var QueryString = function() {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1])
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]))
        }
    }
    return query_string
}();
var host_port = QueryString.HOST_PORT;
while (host_port.endsWith('/')) {
    host_port = host_port.substring(0, host_port.length - 1)
}
if (wsUri.indexOf("//") == 0) {
    wsUri = wsUri.substring(2)
}
if (wsUri.indexOf("ws://") == 0 || wsUri.indexOf("wss://") == 0) {
    if (host_port.indexOf("ws://") == 0 || host_port.indexOf("wss://") == 0) {
        wsUri = wsUri.replace(/ws:\/\/@HOST_PORT@/im, host_port);
        wsUri = wsUri.replace(/wss:\/\/@HOST_PORT@/im, host_port)
    } else {
        wsUri = wsUri.replace(/@HOST_PORT@/im, host_port)
    }
} else {
    if (host_port.indexOf("ws://") == 0 || host_port.indexOf("wss://") == 0) {
        wsUri = wsUri.replace(/@HOST_PORT@/im, host_port)
    } else {
        wsUri = "ws://" + wsUri.replace(/@HOST_PORT@/im, host_port)
    }
}
class ActWebsocketInterface {
    constructor(uri, path = "MiniParse") {
        this.uri = uri;
        this.id = null;
        this.activate = !1;
        var This = this;
        document.addEventListener('onBroadcastMessage', function(evt) {
            This.onBroadcastMessage(evt)
        });
        document.addEventListener('onRecvMessage', function(evt) {
            This.onRecvMessage(evt)
        });
        window.addEventListener('message', function(e) {
            if (e.data.type === 'onBroadcastMessage') {
                This.onBroadcastMessage(e.data)
            }
            if (e.data.type === 'onRecvMessage') {
                This.onRecvMessage(e.data)
            }
        })
    }
    connect() {
        if (typeof this.websocket != "undefined" && this.websocket != null)
            this.close();
        this.activate = !0;
        var This = this;
        this.websocket = new WebSocket(this.uri);
        this.websocket.onopen = function(evt) {
            This.onopen(evt)
        };
        this.websocket.onmessage = function(evt) {
            This.onmessage(evt)
        };
        this.websocket.onclose = function(evt) {
            This.onclose(evt)
        };
        this.websocket.onerror = function(evt) {
            This.onerror(evt)
        }
    }
    close() {
        this.activate = !1;
        if (this.websocket != null && typeof this.websocket != "undefined") {
            this.websocket.close()
        }
    }
    onopen() {
        if (this.id != null && typeof this.id != "undefined") {
            this.set_id(this.id)
        } else {
            if (typeof overlayWindowId != "undefined") {
                this.set_id(overlayWindowId)
            } else {
                var r = new RegExp('[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}');
                var id = r.exec(navigator.userAgent);
                if (id != null && id.length == 1) {
                    this.set_id(id[0])
                }
            }
        }
    }
    onclose() {
        this.websocket = null;
        if (this.activate) {
            var This = this;
            setTimeout(function() {
                This.connect()
            }, 5000)
        }
    }
    onmessage(evt) {
        if (evt.data == ".") {
            this.websocket.send(".")
        } else {
            try {
                var obj = JSON.parse(evt.data);
                var type = obj.type;
                if (type == "broadcast") {
                    var type = obj.msgtype;
                    document.dispatchEvent(new CustomEvent('onBroadcastMessage', {
                        detail: obj
                    }))
                }
                if (type == "send") {
                    var type = obj.msgtype;
                    document.dispatchEvent(new CustomEvent('onRecvMessage', {
                        detail: obj
                    }))
                }
                if (type == "set_id") {}
            } catch (e) {}
        }
    }
    onerror(evt) {
        this.websocket.close();
        console.log(evt)
    }
    getQuerySet() {
        var querySet = {};
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            try {
                var pair = vars[i].split('=');
                querieSet[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
            } catch (e) {}
        }
        return querySet
    }
    broadcast(type, msg) {
        if (typeof overlayWindowId != 'undefined' && this.id != overlayWindowId) {
            this.set_id(overlayWindowId)
        }
        var obj = {};
        obj.type = "broadcast";
        obj.msgtype = type;
        obj.msg = msg;
        this.websocket.send(JSON.stringify(obj))
    }
    send(to, type, msg) {
        if (typeof overlayWindowId != 'undefined' && this.id != overlayWindowId) {
            this.set_id(overlayWindowId)
        }
        var obj = {};
        obj.type = "send";
        obj.to = to;
        obj.msgtype = type;
        obj.msg = msg;
        this.websocket.send(JSON.stringify(obj))
    }
    overlayAPI(type, msg) {
        var obj = {};
        if (typeof overlayWindowId != 'undefined' && this.id != overlayWindowId) {
            this.set_id(overlayWindowId)
        }
        obj.type = "overlayAPI";
        obj.to = overlayWindowId;
        obj.msgtype = type;
        obj.msg = msg;
        this.websocket.send(JSON.stringify(obj))
    }
    set_id(id) {
        var obj = {};
        obj.type = "set_id";
        obj.id = id;
        this.id = overlayWindowId;
        this.websocket.send(JSON.stringify(obj))
    }
    onRecvMessage(e) {}
    onBroadcastMessage(e) {}
};
class WebSocketImpl extends ActWebsocketInterface {
    constructor(uri, path = "MiniParse") {
        super(uri, path)
    }
    onRecvMessage(e) {
        onRecvMessage(e)
    }
    onBroadcastMessage(e) {
        onBroadcastMessage(e)
    }
};
String.prototype.format = function(a) {
    var result = this;
    for (var i in a)
        result = result.replace("{" + i + "}", a[i]);
    return result
};
String.prototype.contains = function(a) {
    if (this.indexOf(a) > -1) return !0;
    else return !1
};
String.prototype.replaceArray = function(a) {
    var r = this;
    for (var i in a)
        while (r.contains(a[i].target))
            r = r.replace(a[i].target, a[i].replacement);
    return r
};
Number.prototype.nanFix = function() {
    return parseFloat(isNaN(this) ? 0 : this)
};
Number.prototype.numFormat = new function() {
    var data = 0;
    try {
        if (data != Infinity && data != 0 && data != NaN) {
            var reg = /(^[+-]?\d+)(\d{3})/;
            var n = (this + "");
            while (reg.test(n)) n = n.replace(reg, "$1,$2");
            return n
        } else return "0"
    } catch (ex) {
        return "0"
    }
};
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        document.removeEventListener("DOMContentLoaded", arguments.callee, !1);
        domReady()
    }, !1);
    window.onbeforeunload = function() {
        webs.close()
    };
    window.addEventListener("unload", function() {
        webs.close()
    }, !1)
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        if (document.readyState === "complete") {
            document.detachEvent("onreadystatechange", arguments.callee);
            domReady()
        }
    })
}
window.addEventListener('message', function(e) {
    if (e.data.type === 'onBroadcastMessage') {
        onBroadcastMessage(e.data)
    }
    if (e.data.type === 'onRecvMessage') {
        onRecvMessage(e.data)
    }
});
function domReady() {
    try {
        webs = new WebSocketImpl(wsUri);
        webs.connect();
        console.log("Connecting...")
    } catch (ex) {
        console.log("[ERROR] : WebSocket has Error [] " + ex)
    }
    try {
        document.addEventListener('beforeLogLineRead', beforeLogLineRead)
    } catch (ex) {}
    try {
        document.addEventListener('onLogLineRead', onLogLineRead)
    } catch (ex) {}
    try {
        document.addEventListener('onOverlayDataUpdate', onOverlayDataUpdate)
    } catch (ex) {
        console.log("Core Error : onOverlayDataUpdate is not defined.")
    }
    try {
        document.addEventListener('onOverlayStateUpdate', onOverlayStateUpdate)
    } catch (ex) {}
    try {
        onDocumentLoad()
    } catch (ex) {}
}
function onRecvMessage(e) {
    if (e.detail.msgtype == "Chat") {
        document.dispatchEvent(new CustomEvent("onChatting", {
            detail: e.detail.msg
        }))
    } else {
        console.log(e.detail.msgtype + ":" + e.detail.msg)
    }
}
function onBroadcastMessage(e) {
    if (e.detail.msgtype == "CombatData") {
        lastCombatRaw = e.detail.msg;
        lastCombat = new Combatant({
            detail: lastCombatRaw
        }, sortKey);
        if (lastCombat.Combatant.YOU != undefined && myName != "" && myName != undefined && myName != null) {
            lastCombat.Combatant.YOU.displayName = myName
        }
        document.dispatchEvent(new CustomEvent('onOverlayDataUpdate', {
            detail: lastCombatRaw
        }))
    } else {
        switch (e.detail.msgtype) {
            case "SendCharName":
                document.dispatchEvent(new CustomEvent("onCharacterNameRecive", {
                    detail: e.detail.msg
                }));
                myName = e.detail.msg.charName;
                break;
            case "AddCombatant":
                break;
            case "RemoveCombatant":
                break;
            case "AbilityUse":
                break;
            case "Chat":
                document.dispatchEvent(new CustomEvent("onChatting", {
                    detail: e.detail.msg
                }));
                break;
            default:
                console.log(e.detail.msgtype + ":" + e.detail.msg);
                break
        }
    }
}
function Person(e, p) {
    this.EncounterDuration = p.Encounter.duration;
    this.parent = p;
    this.Class = "";
    for (var i in e) {
        if (i.indexOf("NAME") > -1) continue;
        if (i == "t" || i == "n") continue;
        var onlyDec = e[i].replace(/[0-9.,%]+/ig, "");
        if (onlyDec != "") {
            if (onlyDec == "---" || onlyDec == "--")
                this[i] = 0;
            else this[i] = e[i]
        } else {
            var tmp = parseFloat(e[i].replace(/[,%]+/ig, "")).nanFix().toFixed(underDot);
            if (e[i].indexOf("%") > 0)
                this[i] = parseFloat(tmp);
            else if (Math.floor(tmp) != tmp || e[i].indexOf(".") > 0)
                this[i] = parseFloat(tmp);
            else
                this[i] = parseInt(tmp).nanFix()
        }
    }
    if (this.DURATION <= 0) {
        this.dps = parseFloat((this.damage / this.parent.DURATION).nanFix().toFixed(underDot));
        this.hps = parseFloat((this.healed / this.parent.DURATION).nanFix().toFixed(underDot));
        this.DPS = Math.floor(this.dps);
        this.HPS = Math.floor(this.hps);
        this["DPS-k"] = Math.floor(this.dps / 1000);
        this["HPS-k"] = Math.floor(this.hps / 1000);
        for (var i in this) {
            if (this[i] == "∞")
                this[i] = 0
        }
    }
    if (this.Job != "")
        this.Class = this.Job.toUpperCase();
    this.petOwner = "";
    this.isPet = !1;
    this.role = "DPS";
    this.rank = 0;
    this.maxdamage = 0;
    this.displayName = this.name;
    this.isLower = !1;
    var vjob = this.Job;
    if (vjob != "") vjob = this.Job.toUpperCase();
    switch (vjob) {
        case "GLD":
        case "GLA":
            this.Class = "PLD";
            this.isLower = !0;
            break;
        case "MRD":
            this.Class = "WAR";
            this.isLower = !0;
            break;
        case "PUG":
        case "PGL":
            this.Class = "MNK";
            this.isLower = !0;
            break;
        case "LNC":
            this.Class = "DRG";
            this.isLower = !0;
            break;
        case "ROG":
            this.Class = "NIN";
            this.isLower = !0;
            break;
        case "ARC":
            this.Class = "BRD";
            this.isLower = !0;
            break;
        case "THM":
            this.Class = "BLM";
            this.isLower = !0;
            break;
        case "ACN":
            this.Class = "SMN";
            this.isLower = !0;
            break;
        case "CNJ":
            this.Class = "WHM";
            this.isLower = !0;
            break;
        case "CRP":
        case "BSM":
        case "ARM":
        case "GSM":
        case "LTW":
        case "WVR":
        case "ALC":
        case "CUL":
            this.role = "Crafter";
            break;
        case "BTN":
        case "MIN":
        case "FSH":
            this.role = "Gathering";
            break;
    }
    if (this.Class != "") {
        switch (this.Class) {
            case "SCH":
            case "WHM":
            case "AST":
                this.role = "Healer";
                break;
            case "PLD":
            case "WAR":
            case "DRK":
            case "GNB":
                this.role = "Tanker";
                break;
        }
    }
    var smnPetsList = ["카벙클 에메랄드", "カーバンクル・エメラルド", "绿宝石兽", "Smaragd-Karfunkel", "Carbuncle émeraude", "Emerald Carbuncle",
        "카벙클 토파즈", "カーバンクル・トパーズ", "黄宝石兽", "Topas-Karfunkel", "Carbuncle topaze", "Topaz Carbuncle",
        "카벙클 루비", "カーバンクル・ルビー", "红宝石兽", "Rubin-Karfunkel", "Carbuncle rubis", "Ruby Carbuncle",
        "가루다 에기", "ガルーダ・エギ", "迦楼罗之灵", "Garuda-Egi",
        "이프리트 에기", "イフリート・エギ", "伊弗利特之灵", "Ifrit-Egi",
        "타이탄 에기", "タイタン・エギ", "泰坦之灵", "Titan-Egi",
        "데미바하무트", "デミ・バハムート", "亚灵神巴哈姆特", "Demi-Bahamut", "デミ・フェニックス",
        "데미피닉스", "Demi-Phönix", "Demi-Phénix", "Demi-Phoenix", "亚灵神不死鸟"
    ];
    var mchPetsList = ["자동포탑 룩", "オートタレット・ルーク", "车式浮空炮塔", "Selbstschuss-Gyrocopter TURM", "Auto-tourelle Tour", "Rook Autoturret",
        "자동포탑 비숍", "オートタレット・ビショップ", "象式浮空炮塔", "Selbstschuss-Gyrocopter LÄUFER", "Auto-tourelle Fou", "Bishop Autoturret",
        "オートマトン・クイーン", "Automaton DAME", "Automate Reine", "Automaton Queen", "后式自走人偶", "자동인형 퀸"
    ];
    var schPetsList = ["요정 에오스", "フェアリー・エオス", "朝日小仙女", "Eos",
        "요정 셀레네", "フェアリー・セレネ", "夕月小仙女", "Selene",
        "セラフィム", "Seraph", "Séraphin", "炽天使", "세라핌"
    ];
    var drkPetsList = ["영웅의 환영", "英雄の影身", "Hochachtung", "Estime", "Esteem", "英雄的掠影"];
    var ninPetsList = ["分身", "Gedoppeltes Ich", "Ombre", "Bunshin", "분신"];
    var astPetsList = ["지상의 별", "アーサリースター", "地星", "Earthly Star", "Étoile terrestre", "Irdischer Stern"];

    var petsName = this.name.split(' (')[0];
    if (this.Class == "") {
        if (smnPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "SMN";
            this.isPet = true;
        } else if (schPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "SCH";
            this.isPet = true;
            this.role = "Healer";
        } else if (mchPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "MCH";
            this.isPet = true;
        } else if (drkPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "DRK";
            this.isPet = true;
            this.role = "Tanker";
        } else if (ninPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "NIN";
            this.isPet = true;
        } else if (astPetsList.indexOf(petsName) > -1) {
            this.Job = "AVA";
            this.Class = "AST";
            this.isPet = true;
            this.role = "Healer";
        } else if (this.name.indexOf("(") == -1) {
            this.Job = "LMB";
            this.Class = "LMB";
        }
    }
    try {
        this.maxhitstr = this.maxhit.replace(/[0-9.,']/g, "").trim().slice(0, -1)
        this.maxhitval = this.MAXHIT
        this.mergedmaxhitstr = this.maxhitstr
        this.mergedmaxhitval = this.maxhitval
    } catch (ex) {
        this.maxhit = "?-0";
        this.maxhitstr = "No Data";
        this.maxhitval = 0;
        this.mergedmaxhitstr = this.maxhitstr
        this.mergedmaxhitval = this.maxhitval
    }
    try {
        this.maxhealstr = this.maxheal.replace(/[0-9.,']/g, "").trim().slice(0, -1)
        this.maxhealval = this.MAXHEAL
        this.mergedmaxhealstr = this.maxhealstr
        this.mergedmaxhealval = this.maxhealval
    } catch (ex) {
        this.maxheal = "?-0";
        this.maxhealstr = "No Data";
        this.maxhealval = 0;
        this.mergedmaxhealstr = this.maxhealstr
        this.mergedmaxhealval = this.maxhealval
    }
    this.effHealed = this.healed - this.overHeal - this.damageShield;
    this.visible = !0;
    this.original = {
        Damage: this.damage,
        Hits: this.hits,
        Misses: this.misses,
        Swings: this.swings,
        Crithits: this.crithits,
        DirectHitCount: this.DirectHitCount,
        CritDirectHitCount: this.CritDirectHitCount,
        Damagetaken: this.damagetaken,
        Heals: this.heals,
        Healed: this.healed,
        EffHealed: this.healed - this.overHeal - this.damageShield,
        Cures: this.cures,
        Critheals: this.critheals,
        Healstaken: this.healstaken,
        DamageShield: this.damageShield,
        OverHeal: this.overHeal,
        AbsorbHeal: this.absorbHeal,
        Last10DPS: this.Last10DPS,
        Last30DPS: this.Last30DPS,
        Last60DPS: this.Last60DPS,
        Last180DPS: this.Last180DPS,
    };
    try {
        var regex = /(?:.*?)\((.*?)\)/im;
        var matches = this.name.match(regex);
        if (regex.test(this.name)) // do not use Array.length 
        {
            if (this.Job == "0" || this.Job == "AVA")
                this.petOwner = matches[1];
        }
    } catch (ex) {

    }
    if (this.petOwner != "" && this.Job == "0") {
        this.Job = "CBO";
        this.Class = "CBO";
        this.role = "CBO";
    }
    if (this.overHeal != undefined) {}

    for (var i in this.original) {
        if (i.indexOf("Last") > -1)
            this["merged" + i] = this[i];
        else if (i == "CritDirectHitCount" || i == "DirectHitCount")
            this["merged" + i] = this[i];
        else this["merged" + i] = this[i.substr(0, 1).toLowerCase() + i.substr(1)]
    }
    this.pets = {}
}
Person.prototype.returnOrigin = function() {
    for (var i in this.original) {
        if (i.indexOf("Last") > -1)
            this["merged" + i] = this[i];
        else if (i == "CritDirectHitCount" || i == "DirectHitCount")
            this["merged" + i] = this[i];
        else this["merged" + i] = this[i.substr(0, 1).toLowerCase() + i.substr(1)]
    }
};
Person.prototype.merge = function(person) {
    this.returnOrigin();
    this.pets[person.name] = person;
    for (var k in this.pets) {
        for (var i in this.original) {
            if (i.indexOf("Last") > -1)
                this["merged" + i] += this.pets[k].original[i];
            else this["merged" + i] += this.pets[k].original[i]
        }
    }
    this.recalculate()
};
Person.prototype.recalculate = function() {
    var dur = this.DURATION;
    if (dur == 0) dur = 1;
    this.dps = pFloat(this.mergedDamage / dur);
    this.encdps = pFloat(this.mergedDamage / this.parent.DURATION);
    this.hps = pFloat(this.mergedHealed / dur);
    this.enchps = pFloat(this.mergedHealed / this.parent.DURATION);
    this["DAMAGE-k"] = Math.floor(this.mergedDamage / 1000);
    this["DAMAGE-m"] = Math.floor(this.mergedDamage / 1000000);
    this.DPS = Math.floor(this.dps);
    this["DPS-k"] = Math.floor(this.dps / 1000);
    this.ENCDPS = Math.floor(this.encdps);
    this.ENCHPS = Math.floor(this.enchps);
    this["ENCDPS-k"] = Math.floor(this.encdps / 1000);
    this["ENCHPS-k"] = Math.floor(this.enchps / 1000);
    this["damagePct"] = pFloat(this.mergedDamage / this.parent.Encounter.damage * 100);
    this["healedPct"] = pFloat(this.mergedHealed / this.parent.Encounter.healed * 100);
    this["overHealPct"] = pFloat(this.mergedOverHeal / this.mergedHealed * 100);
    this["crithitPct"] = pFloat(this.mergedCrithits / this.mergedHits * 100);
    this["DirectHitPct"] = pFloat(this.mergedDirectHitCount / this.mergedHits * 100);
    this["CritDirectHitPct"] = pFloat(this.mergedCritDirectHitCount / this.mergedHits * 100);
    this["crithealPct"] = pFloat(this.mergedCritheals / this.mergedHeals * 100);
    this.tohit = pFloat(this.mergedHits / this.mergedSwings * 100)
};
Person.prototype.get = function(key) {
    if (this.parent.summonerMerge) {
        switch (key) {
            case "damage":
                key = "mergedDamage";
                break;
            case "healed":
                key = "mergedHealed";
                break;
        }
    }
    return this[key]
}
function Combatant(e, sortkey) {
    if (sortkey == undefined) var sortkey = "encdps";
    this.Encounter = {};
    this.Combatant = {};
    this.users = {};

    for (var i in e.detail.Combatant) {
        this.users[i] = !0
    }
    for (var i in e.detail.Encounter) {
        if (i == "t" || i == "n") continue;
        var onlyDec = e.detail.Encounter[i].replace(/[0-9.,%]+/ig, "");
        if (onlyDec != "") {
            if (onlyDec == "---" || onlyDec == "--")
                this.Encounter[i] = 0;
            else this.Encounter[i] = e.detail.Encounter[i]
        } else {
            var tmp = parseFloat(e.detail.Encounter[i].replace(/[,%]+/ig, "")).nanFix().toFixed(underDot);
            if (e.detail.Encounter[i].indexOf("%") > 0)
                this.Encounter[i] = parseFloat(tmp);
            else if (Math.floor(tmp) != tmp || e.detail.Encounter[i].indexOf(".") > 0)
                this.Encounter[i] = parseFloat(tmp);
            else this.Encounter[i] = parseInt(tmp).nanFix()
        }
    }
    for (var i in e.detail.Combatant) {
        this.Combatant[i] = new Person(e.detail.Combatant[i], this)
    }
    for (var i in e.detail.Combatant) {
        this.Combatant[i].parent = this
    }
    var tmp = {};
    for (var i in this.Combatant) {
        if (this.Combatant[i].Class != "") {
            tmp[i] = this.Combatant[i]
        }
    }
    this.Combatant = tmp;
    this.maxdamage = 0;
    this.maxValue = 0;
    this.zone = this.Encounter.CurrentZoneName;
    this.title = this.Encounter.title;
    this.sortvector = !0;
    this.duration = this.Encounter.duration;
    this.DURATION = this.Encounter.DURATION;
    this.summonerMerge = !0;
    this.sortkey = sortkey;
    this.isActive = e.detail.isActive;
    this.combatKey = this.Encounter.title.concat(this.Encounter.damage).concat(this.Encounter.healed);
    this.persons = this.Combatant;
    this.resort()
}
Combatant.prototype.rerank = function(vector) {
    this.sort(vector)
};
Combatant.prototype.indexOf = function(person) {
    var v = -1;
    for (var i in this.Combatant) {
        v++;
        if (i == person)
            return v
    }
    return v
};
Combatant.prototype.sort = function(vector) {
    if (vector != undefined)
        this.sortvector = vector;
    if (this.summonerMerge) {
        switch (this.sortkey) {
            case "damage":
                this.sortkey = "mergedDamage";
                break;
            case "healed":
                this.sortkey = "mergedHealed";
        }
    }

    var tmpOwner = [];
    var tmpUser = [];

    for (var i in this.Combatant) {
        if (this.Combatant[i].petOwner == "") {
            tmpUser.push(this.Combatant[i].name);
        } else {
            tmpOwner.push(this.Combatant[i].petOwner);
        }
    }
    for (var i in tmpUser) {
        for (var j in tmpOwner) {
            if (tmpUser[i] == tmpOwner[j]) {
                delete tmpOwner[j];
            }
        }
    }
    tmpMyName = "";
    for (var i = 0; i < tmpOwner.length; i++) {
        if (tmpOwner[i] != undefined) {
            tmpMyName = tmpOwner[i];
        }
    }
    for (var i in this.Combatant) {
        if (this.Combatant[i].isPet && this.summonerMerge) {
            if (this.Combatant["YOU"] != undefined) {
                if (tmpMyName == this.Combatant[i].petOwner)
                    this.Combatant["YOU"].merge(this.Combatant[i]);
            }
            if (this.Combatant[this.Combatant[i].petOwner] != undefined) {
                this.Combatant[this.Combatant[i].petOwner].merge(this.Combatant[i]);
            }
            this.Combatant[i].visible = !1
        } else {
            this.Combatant[i].visible = !0
        }
    }
    var tmp = [];
    var r = 0;
    for (var i in this.Combatant) {
        tmp.push({
            key: this.Combatant[i][this.sortkey],
            val: this.Combatant[i]
        });
    }
    this.Combatant = {};
    if (this.sortvector)
        tmp.sort(function(a, b) {
            return b.key - a.key
        });
    else tmp.sort(function(a, b) {
        return a.key - b.key
    });
    var tmpMax = 0;
    for (var i in tmp) {
        if (this.summonerMerge == true) {
            if (tmp[i].val.Job != "AVA") {
                if (tmpMax < tmp[i].val[this.sortkey])
                    tmpMax = tmp[i].val[this.sortkey];
            }
        } else {
            if (tmpMax < tmp[i].val[this.sortkey])
                tmpMax = tmp[i].val[this.sortkey];
        }
    }
    this.maxdamage = tmpMax;
    this.maxValue = tmpMax;

    for (var i in tmp) {
        this.Combatant[tmp[i].val.name] = tmp[i].val
    }
    for (var i in this.Combatant) {
        if (!this.Combatant[i].visible) continue;
        this.Combatant[i].rank = r++;
        this.Combatant[i].maxdamage = this.maxdamage
    }
    this.partys = r
    this.persons = this.Combatant
};
Combatant.prototype.AttachPets = function() {
    this.summonerMerge = !0;
    for (var i in this.Combatant) {
        this.Combatant[i].returnOrigin();
        this.Combatant[i].recalculate();
        this.Combatant[i].parent = this

        if (this.Combatant[i].Job == "AVA") {
            if (this.Combatant[i].petOwner == myName || this.Combatant[i].petOwner == tmpMyName)
                var owner = this.Combatant['YOU']
            else
                var owner = this.Combatant[this.Combatant[i].petOwner]

            if (this.Combatant[i].maxhitval > owner.maxhitval) {
                owner.mergedmaxhitval = this.Combatant[i].maxhitval
                owner.mergedmaxhitstr = this.Combatant[i].maxhitstr
            }
            if (this.Combatant[i].maxhealval > owner.maxhealval) {
                owner.mergedmaxhealval = this.Combatant[i].maxhealval
                owner.mergedmaxhealstr = this.Combatant[i].maxhealstr
            }
        }

    }
}
Combatant.prototype.DetachPets = function() {
    this.summonerMerge = !1;
    for (var i in this.Combatant) {
        this.Combatant[i].returnOrigin();
        this.Combatant[i].recalculate();
        this.Combatant[i].parent = this
        this.Combatant[i].mergedmaxhitval = this.Combatant[i].maxhitval
        this.Combatant[i].mergedmaxhitstr = this.Combatant[i].maxhitstr
        this.Combatant[i].mergedmaxhealval = this.Combatant[i].maxhealval
        this.Combatant[i].mergedmaxhealstr = this.Combatant[i].maxhealstr
    }
}
Combatant.prototype.sortkeyChange = function(key) {
    this.resort(key, !0)
};
Combatant.prototype.sortkeyChangeDesc = function(key) {
    this.resort(key, !1)
};
Combatant.prototype.resort = function(key, vector) {
    if (key == undefined)
        this.sortkey = activeSort(this.sortkey);
    else this.sortkey = activeSort(key);
    if (vector == undefined)
        vector = this.sortvector;
    this.sort(vector)
};
function activeSort(key) {
    if (key.indexOf("merged") > -1) {
        if (key.indexOf("Last") > -1) {
            key = key.replace(/merged/ig, "")
        } else {
            key = key.replace(/merged/ig, "");
            key = key.substr(0, 1).toLowerCase() + key.substr(1)
        }
    }
    if (key == "dmgPct")
        key = "damage%";
    if (key.indexOf("Pct") > -1 && key.indexOf("overHealPct") == -1)
        key = key.replace(/Pct/ig, "%");
    if (key == "encdps" || key == "dps")
        key = "damage";
    if (key == "enchps" || key == "hps")
        key = "healed";
    if (key == "maxhit")
        key = "maxhitval";
    if (key == "maxheal")
        key = "maxhealval";
    return key
}
function hexColor(str) {
    var str = str.replace("#", "");
    if (str.length == 6 || str.length == 3) {
        if (str.length == 6)
            return [parseInt(str.substr(0, 2), 16), parseInt(str.substr(2, 2), 16), parseInt(str.substr(4, 2), 16)];
        else return [parseInt(str.substr(0, 1), 16), parseInt(str.substr(1, 1), 16), parseInt(str.substr(2, 1), 16)]
    } else {
        return [0, 0, 0]
    }
}
function oHexColor(str, opacity) {
    var data = hexColor(str);
    return 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + opacity + ')'
}
function pFloat(num) {
    return parseFloat(num.nanFix().toFixed(underDot))
}
var combatLog = [];
var combatants = [];
var curhp = 100;
var delayOK = !0;
var lastCombatRaw = null,
    lastCombat = null;
var previewDPS = null,
    previewHPS = null,
    preview24DPS = null,
    preview24HPS = null;
var maxhp = 100;
var myID = 0;
var myName = "";
var underDot = 2;
var sortKey = "encdps"
