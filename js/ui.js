var init = new Object(),
    lang = null,
    parent = '',
    view = 'main',
    time = 0,
    toast = 0
var sVal = {
    now: 0,
    pre: 0,
    old: 0
}
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1)
}
$().ready(function () {
    if (localStorage.getItem("Mopi2_HAERU") == null) {
        localStorage.clear();
        localStorage.setItem("Mopi2_HAERU", JSON.stringify(Mopi2))
    }
    init = JSON.parse(localStorage.getItem("Mopi2_HAERU"))
    addOption()
    lang = init.q.Lang
    initOverlay()
});
function addOption() {
    var qVal = ['bar_position_DPS', 'mhh_unit', 'dmgType', 'view24_Number', 'time_italic', 'target_italic', 'rps_italic', 'header_italic', 'body_italic', 'iconSet', 'borderTextType', 'max_unit', 'act_md', 'act_mh']
    var RangeVal = ['tableLineVer', 'sizeLineVer', 'view24TableYOU', 'view24TableOther', 'view24BgYOU', 'view24BgOther', 'size24BodyNameText', 'size24BodyDataText', 'size24BodyIcon', 'size24TableSlice', 'size24TableHeight', 'size24TableIdxWd']
    var colorVal = ['VPR', 'PCT', 'RPR', 'SGE', 'DNC', 'GNB', 'BLU', 'tableLineVer', 'tableBorderYOU', 'tableBorderOther', 'view24TableYOU', 'view24TableOther', 'view24BgYOU', 'view24BgOther']
    putValue(qVal, 'q')
    putValue(RangeVal, 'Range')
    putValue(colorVal, 'Color')
    if (!init.ColData.Class.hasOwnProperty("width")) {
        init.ColData = Mopi2.ColData;
        init.Order = Mopi2.Order;
    }
    SubOption()
}
function putValue(arr, c) {
    for (var i in arr) {
        if (init[c][arr[i]] == undefined)
            init[c][arr[i]] = Mopi2[c][arr[i]]
    }
}
function SubOption() {
    for (var i in init.q) {
        if (i.indexOf("Cell") > -1) {
            delete init.q[i];
        }
    }
    for (var i in init.Range) {
        if (i.indexOf("Cell") > -1) {
            delete init.Range[i];
        }
    }
    localStorage.setItem("Mopi2_HAERU", JSON.stringify(init))
}
function initOverlay(val) {
    if (val != undefined) {
        init.q.Lang = val;
        lang = val;
        localStorage.setItem("Mopi2_HAERU", JSON.stringify(init))
        callToast('submit', 0, 3000)
    }
    if (lastCombat == null) {
        $('[name=time]').text('00:00')
        $('[name=target]').text(l.NAV.main.tt.target[lang])
        $('[name=rps]').text(l.NAV.main.tt.rps[lang])
        $('.btn_wrap').show()
        for (var i in l.Notice) {
            if (lang == "KR")
                $('#' + i).html(l.Notice[i][lang])
            else
                $('#' + i).html(l.Notice[i].EN)
        }
    } else {
        $('[name=notice]').fadeOut(0)
        $('.btn_wrap').show()
        update(lastDPS, lastHPS)
    }
    resizeWindow(view)
    hiddenTable()
    if (init.q.arrow)
        $('#wrap').css({ 'background-image': 'url(./images/handle.svg)' })
    ui()
}
$('.scrollArea').scroll(function () {
    sVal.now = $('.scrollArea').scrollTop();
});
$('.dropdown ul').scroll(function () {
    if ($(this)[0].childElementCount > 5) {
        if ($(this).scrollTop() == 0) {
            $('#gradU').fadeOut(0)
            $('#gradD').fadeIn(0)
        } else {
            if ($(this)[0].scrollHeight <= Math.ceil($(this).height()) + Math.ceil($(this).scrollTop())) {
                $('#gradD').fadeOut(0)
                $('#gradU').fadeIn(0)
            } else {
                $('#gradU').fadeIn(0)
                $('#gradD').fadeIn(0)
            }
        }
    }
});
function resizeDropdown() {
    if ($('.dropdown ul')[0].childElementCount > 5) {
        $('.dropdown ul').scrollTop(0)
        $('.dropdown ul').css('height', '23.8rem');
        $('#gradD').fadeIn(0);
    } else
        $('#gradU,#gradD').fadeOut(0)
}
$('[name=More]').unbind("click").bind("click", function () {
    $('.dropdown').fadeIn(0);
    $('#blackBg').fadeIn(150);
    createDOM('dr_nav', null, $(this).parent().parent().attr('name'))
    resizeWindow(view)
});
$('#blackBg').unbind("click").bind("click", function () {
    $('.dropdown, #blackBg').fadeOut(0);
    $('.dropdown ul').css('height', '');
    localStorage.setItem('Mopi2_HAERU', JSON.stringify(init))
    //오버레이가 계속 업데이트되서 히스토리 진입 시 최신 데이터로 덮어씀을 방지
    //if (lastCombat != null && view == "main")
    //    update(lastDPS, lastHPS)
});
$(window).on("orientationchange", function () {
    resizeWindow(view)
});
$(window).resize(function () {
    resizeWindow(view)
});
function resizeWindow(flag) {
    if (init.q.view24 && lastCombat != null && lastCombat.partys >= init.q.view24_Number) {
        if (window.innerWidth % init.Range.size24TableSlice != 0) {
            var w = window.innerWidth % init.Range.size24TableSlice
            $('.rRow .rCell').css('width', parseFloat(100 / init.Range.size24TableSlice) + '%')
            for (var i = 0; i < w; i++)
                $('.rRow .rCell:nth-child(' + parseInt(i + 1) + ')').css('width', '-webkit-calc(' + parseFloat(100 / init.Range.size24TableSlice) + '%' + ' + 1px)')
        } else
            $('.rRow .rCell').css('width', parseFloat(100 / init.Range.size24TableSlice) + '%')
    }
    if (flag == 'settings') {
        $('.scrollArea').css('height', '-webkit-calc(100vh - ' + $('nav[name=settings]')[0].offsetHeight + 'px - ' + $('.previewArea')[0].offsetHeight + 'px - ' + $('.tabArea')[0].offsetHeight + 'px)')
    } else if (flag == 'history') {
        $('#HISTORYBody').css('height', '-webkit-calc(100vh - ' + $('nav[name=history]')[0].offsetHeight + 'px - ' + $('#HISTORYHeader')[0].offsetHeight + 'px)')
    } else {
        $('#update').css('height', '-webkit-calc(100vh - ' + $('nav[name=main]')[0].offsetHeight + 'px - ' + $('#strong')[0].offsetHeight + 'px - ' + $('#tip')[0].offsetHeight + 'px)')
    }
}
function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
        }
    }
}
$('nav[name=main] div[name=More]').on({
    mouseover: function () {
        if ($(this).attr('name') == 'More') {
            if (lastCombat != null && String(lastCombat.isActive) == "true")
                $(this).parent().find('div:not([name=History])').fadeIn(150)
            else
                $(this).parent().find('div').fadeIn(150)
        }
    }
});
$('nav[name=main] .btn_wrap').on({
    mouseleave: function () {
        $(this).find('div i').removeClass('flash animated');
        var arr = ['Capture', 'RequestEnd', 'History']
        for (var i in arr) {
            if (init.q['btn_' + arr[i]] == 1)
                $('nav[name=main] div[name=' + arr[i] + ']').fadeIn(150)
            else
                $('nav[name=main] div[name=' + arr[i] + ']').fadeOut(150)
        }
    }
});
$('.btn_wrap div').on({
    mouseover: function () {
        if (init.q.tooltips) {
            $('#tooltip').html(l.NAV[view].btn[$(this).attr('name')].m[lang])
            $('#tooltip').show().css('display', 'block')
        }
    },
    mouseleave: function () {
        $('#tooltip').hide()
    }
});
function callToast(id, start, end) {
    if (init.q.toast) {

        $('.toast').removeClass('on');
        clearTimeout(toast)
        toast = setTimeout(function () {
            $('.toast').fadeIn(0);
            $('.toast').html(l.msg[id].m[lang])
            $('.toast').addClass('on');
        }, start)
        toast = setTimeout(function () {
            $('.toast').removeClass('on');
            $('.toast').fadeOut(150);
        }, end)
    }
    $('.toast').unbind("click").bind("click", function () {
        $('.toast').removeClass('on');
        $('.toast').fadeOut(150);
    });
}
$("html").unbind("click").bind("click", function () {
    if (init.q.autoHide && view != 'settings') {
        hiddenTable()
    } else
        clearTimeout(time)
})
function hiddenTable() {
    clearTimeout(time)
    $('.toast').removeClass('on')
    $('.toast').fadeOut(0);
    if (init.q.autoHide && view != 'settings') {
        if (lastCombat != null) {
            if (String(lastCombat.isActive) == "true") {
                if (view == 'history')
                    $('div[name=history]').fadeOut(0)
                else
                    $('div[name=main]').fadeIn(0)
            }
            else {
                if (view == 'history')
                    $('div[name=history]').fadeIn(0)
                else
                    $('div[name=main]').fadeIn(0)
                time = setTimeout(function () {
                    if (view == 'history')
                        $('div[name=history]').fadeOut(150)
                    else {
                        if ($('#blackBg').css('display') == "block")
                            $('#blackBg').trigger('click')
                        $('div[name=main]').fadeOut(150)
                    }
                    callToast('hiddenTable', 0, 3000)
                }, init.Range.autoHideTime * 60000)
            }
        }
        else {
            if (view == 'history')
                $('div[name=history]').fadeIn(0)
            else
                $('div[name=notice]').fadeIn(0)

            time = setTimeout(function () {
                if (view == 'history')
                    $('div[name=history]').fadeOut(150)
                else {
                    if ($('#blackBg').css('display') == "block")
                        $('#blackBg').trigger('click')
                    $('div[name=notice]').fadeOut(150)
                }
                callToast('hiddenTable', 0, 3000)
            }, init.Range.autoHideTime * 60000)
        }
    }
}
function ctrlPreview(flag) {
    if (flag == true) {
        init.q.preview = 1;
        if ($('.previewArea')[0].innerHTML == "")
            createDOM('preview')
        else
            ui()

        if (init.q.view24_Number == 1)
            toggleRaidMode(1)
    } else {
        init.q.preview24 = 0;
        init.q.preview = 0;
        $('.previewArea').html('')
        resizeWindow(view)
    }
}
function toggleRaidMode(val) {
    if (val) {
        $('#preview24 .switch').addClass('hover')
        $('#preview24 td:first-child').css('color', '#' + init.Color.accent)
        init.q.preview24 = 1
        view = 'preview24'
    } else {
        $('#preview24 .switch').removeClass('hover')
        $('#preview24 td:first-child').css('color', 'rgba(189,189,189,.5)')
        init.q.preview24 = 0
    }
    if (init.q.preview) {
        update(previewDPS, previewHPS)
        view = 'settings'
    } else
        ui()
}
function togglePreview() {
    if (init.q.preview == 1)
        ctrlPreview(1)
    else
        ctrlPreview(0)
}
function duCheckMsg(flag, tab1, tab2) {
    var tmp = ''
    var obj = l[tab1]['tab_' + tab2].inner[flag + 'filter']
    if (init.q[flag + '_T'] == 1)
        tmp += obj.dr[flag + '_T'].tt[lang] + l.msg.comma.m[lang]
    if (init.q[flag + '_H'] == 1)
        tmp += obj.dr[flag + '_H'].tt[lang] + l.msg.comma.m[lang]
    if (init.q[flag + '_D'] == 1)
        tmp += obj.dr[flag + '_D'].tt[lang] + l.msg.comma.m[lang]
    if (init.q[flag + '_M'] == 1)
        tmp += obj.dr[flag + '_M'].tt[lang] + l.msg.comma.m[lang]
    if (init.q[flag + '_C'] == 1)
        tmp += obj.dr[flag + '_C'].tt[lang] + l.msg.comma.m[lang]
    if (lang == 'JP')
        tmp = tmp.slice(0, -1)
    else
        tmp = tmp.slice(0, -2)

    $('li#' + flag + 'filter .gVal').text(tmp)
    if (init.q.preview) {
        update(previewDPS, previewHPS)
        resizeWindow(view)
    }
}
function getOrder(selector, container) {
    var order = [];
    $(selector, container).each(function () {
        order.push(this.id);
    });
    return order;
}
function createKeys() {
    var ui = copyObject(init)
    var del = ['Lang', 'fTime', 'fTarget', 'fRPS', 'fHd', 'fBody', 'resolution', 'overlayBg', 'overlayBgImg', 'overlayBgSize', 'overlayBgRepeat', 'backupDate', 'autoHide', 'tooltips', 'toast', 'keyboard', 'preview', 'preview24', 'swap', 'hideName', 'pets', 'view24', 'view24_Number']
    for (var i in ui) {
        if (i != 'Color' && i != 'Range' && i != 'q')
            delete ui[i]
    }
    for (var i in del)
        delete ui.q[del[i]]
    delete ui.Range.autoHideTime
    var tmp = new Object()
    for (var i in ui) {
        tmp[i] = {}
        for (var j in ui[i]) {
            tmp[i][j] = ui[i][j]
        }
    }
    return tmp
}
function applyKeys(data) {
    try {
        var obj = JSON.parse(data)
        if (obj[0] != null) {
            callToast('notData', 500, 3000)
            return
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            if (data == '')
                callToast('noInput', 500, 3000)
            else
                callToast('notData', 500, 3000)
            return
        }
    }
    for (var i in obj) {
        if (i == 'q' || i == 'Color' || i == 'Range') {
            for (var j in obj[i]) {
                init[i][j] = obj[i][j]
            }
        }
    }
    delete obj
    SubOption()
    callToast('submit', 500, 3000)
}
function copyObject(obj) {
    if (obj === null || typeof obj !== 'object')
        return obj;
    const copiedObj = obj.constructor();
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = copyObject(obj[key]);
        }
    }
    return copiedObj;
}
function jsColorUpdate(jscolor) {
    nowColorPicker = jscolor;
    init.Color[jscolor.valueElement.id] = jscolor.valueElement.value
    toggleRaidMode(init.q.preview24)
    ui()
}
function loadPreview(el_img) {
    var path = el_img.value
    var ext = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    if (!/(jpg|png|gif|jpeg)$/i.test(ext) && ext != '' && ext != undefined && ext != null) {
        callToast('overlayBg', 500, 3000)
        return
    } else
        loadPreviewFile(el_img.files[0]);
}
function loadPreviewFile(file) {
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            init.q.overlayBgImg = e.target.result
            $('html').css({ background: 'url(' + e.target.result + ')' })
            if (!init.q.overlayBg) {
                init.q.overlayBg = 1
                $('li#overlayBg').find('.switch').addClass('hover');
                $('li#overlayBg').find('input').prop('checked', true);
            }
            callToast('ok', 500, 3000)
        }
        reader.readAsDataURL(file);
    }
}
function liReload() {
    jscolor.installByClassName("jscolor");
    $('li').unbind("click").bind("click", function () {
        var id = $(this).attr('id')
        if ($(event.target)[0].tagName == 'A') { } else if ($(this).find('input').prop('type') == 'checkbox') {
            if (!$(this).find('.switch').hasClass('hover')) {
                $(this).find('.switch').addClass('hover');
                $(this).find('input').prop('checked', true);
                if (id.indexOf('DPS-') > -1 || id.indexOf('HPS-') > -1) {
                    init.ColData[id.split('-')[1]][id.split('-')[0]] = 1
                    init.Order[id.split('-')[0]].push(id.split('-')[1])
                } else
                    init.q[id] = 1
            } else {
                $(this).find('.switch').removeClass('hover');
                $(this).find('input').prop('checked', false);

                if (id.indexOf('DPS-') > -1 || id.indexOf('HPS-') > -1) {
                    init.ColData[id.split('-')[1]][id.split('-')[0]] = 0
                    init.Order[id.split('-')[0]].splice(init.Order[id.split('-')[0]].indexOf(id.split('-')[1]), 1);
                } else
                    init.q[id] = 0
            }
            if ((id == 'pets' || id == 'hideName' || id == 'view24') && view != 'settings') {
                if (lastCombat != null)
                    update(lastDPS, lastHPS)
            }
            else if (id.indexOf('DPS_') > -1 || id.indexOf('HPS_') > -1) {
                duCheckMsg(id.slice(0, -2), 'format', id.slice(0, -2))
            } else if (id == 'preview') {
                togglePreview()
            } else {
                if (id == 'ani') {
                    barSize.length = 0;
                    barSize = new Array();
                    view = 'ani'
                }
                toggleRaidMode(init.q.preview24)
            }
            return
        }
        else if ($(this).find('input').prop('type') == 'radio') {
            $(this).parent().find('li .switch').removeClass('hover')
            $(this).find('.switch').addClass('hover');
            var preIconSet = init.q.iconSet
            if ($(this).find(':radio').attr('name').indexOf("align") > -1) {
                var name = $(this).find(':radio').attr('name').split("_");
                init.ColData[name[1]][name[0]] = $(this).find(':radio').val();
            } else
                init.q[$(this).find(':radio').attr('name')] = $(this).find(':radio').val()
            if ($(this).find(':radio').attr('name') == 'view24_Number') {
                $('li#' + $(this).find(':radio').attr('name') + ' .gVal').text(l.raid.tab_general.inner.view24_Number.msg[lang].replace('★', $(this).text()))
                if (init.q.view24_Number == 1)
                    toggleRaidMode(1)
                else
                    toggleRaidMode(0)
            } else
                $('li#' + $(this).find(':radio').attr('name') + ' .gVal').text($(this).text())
            if ($(this).find(':radio').attr('name') == 'Lang') {
                lang = init.q.Lang
                createDOM('page', l.Settings)
                $('nav[name=settings]').find('table td').text(l.NAV.settings.tt[lang])
                $('#preview24 td:first-child').text(l.raid.tab_general.inner.view24_Number.tt[lang])
            } else if ($(this).find(':radio').attr('name') == 'palette')
                button('tab_graph', 'color')
            if ($(this).find(':radio').attr('name') != 'iconSet')
                toggleRaidMode(init.q.preview24)
            else {
                $('.Class img, .rIcon img').each(function () {
                    var src = $(this).attr('src')
                    var newSrc = src.replace(preIconSet, init.q.iconSet)
                    $(this).attr('src', newSrc)
                })
            }
            return
        }
        else {
            if ($(this).hasClass('radio')) {
                $('.dropdown').fadeIn(0);
                $('#blackBg').fadeIn(150);
                if (id.indexOf('alignHeader') > -1 || id.indexOf('alignBody') > -1) {
                    createCellPageDropDown(id.split('_')[1], id.split('_')[0])
                } else {
                    if (id == 'palette')
                        var obj = l.Graph[init.q.palette][id]
                    else if ($(this).attr('p').indexOf('_') > -1) {
                        var parent = $(this).attr('p').split('_')[0]
                        var tabName = $(this).attr('p').split('_')[1]

                        var obj = l[parent]['tab_' + tabName].inner[id]
                    } else
                        var obj = l[$(this).attr('p')][id]
                    createDOM('dr_radio', obj, id)
                }
            } else
                button($(this).attr('id'))
            return
        }
    });
    $('#preview24').unbind('click').bind('click', function () {
        if (!$(this).find('.switch').hasClass('hover')) {
            $(this).find('.switch').addClass('hover')
            $(this).find('td:first-child').css('color', '#' + init.Color.accent)
            init.q.preview24 = 1
            view = 'preview24'
        } else {
            $(this).find('.switch').removeClass('hover')
            $(this).find('td:first-child').css('color', 'rgba(189,189,189,.5)')
            init.q.preview24 = 0
        }
        update(previewDPS, previewHPS)
        view = 'settings'
        resizeWindow(view)
        return
    });
    $('[name=swapBtn], .UBtn, .DBtn, .sendBtn, .removeBtn, .tab_box, button').on({
        mouseover: function () {
            $(this).css({ color: '#' + init.Color.accent })
        },
        mouseleave: function () {
            $(this).css({ color: '' })
        }
    })
    $('button').unbind("click").bind("click", function () {
        $('input[type=file]').click()
    })
    $('input[name=uploadFile]').change(function () {
        loadPreview(this)
        return
    });
    $('.jscolor').unbind("click").bind('click', function () {
        if (init.q.keyboard) {
            //$(this).blur()
            ctrlPreview(1)
        } else
            ctrlPreview(0)
    });
    $('.jscolor').unbind("focusout").bind('focusout', function () {
        ctrlPreview(1)
    });
    $('.tab_box').unbind("click").bind("click", function () {
        $('.tabArea').find('.tab_title').removeClass('on')
        $('.tabArea').find('.tab_underBar').removeClass('on_bar')
        $('.tabArea').find('.tab_title').css('color', '#bdbdbd')
        $(this).find('.tab_title').addClass('on')
        $(this).find('.tab_underBar').addClass('on_bar')
        $('.scrollArea').scrollTop(0)
        button($(this).attr('name'), $(this).attr('p'))
        return
    });
    $('.removeBtn').unbind("click").bind("click", function () {
        delete init.Alias[$(this).parents('li').attr('name')]
        $(this).parents('li').remove()
        return
    });
    $('.gTitle.sendBtn').unbind("click").bind("click", function () {
        var key = $('#in_abbOld').val()
        var val = $('#in_abbNew').val()
        if (key != '' && val != '' && key != undefined && val != undefined) {
            init.Alias[key] = val
            $('ul.remove').append(createElement('li_remove_list', null, key, val))
            $('#in_abbOld, #in_abbNew').val('')
            liReload()
            callToast('ok', 500, 3000)
        } else
            callToast('noInput', 500, 3000)
        ui()
        return
    });
    $("#in_share").unbind("click").bind("click", function () {
        $(this).select()
    });
    $('.ft.sendBtn').unbind("click").bind("click", function () {
        var input = $(this).parent().find('.inputEff')
        var id = $(this).parent().find('.inputEff').attr('id').split('_')[1]
        var category = $(this).parent().find('.inputEff').attr('id').split('_')[0]
        if (id == 'apply') {
            applyKeys(input.val())
        } else {
            if (input.val() != '') {
                if (category.indexOf('headerText') > -1) {
                    init.ColData[id].tt = input.val();
                    update(previewDPS, previewHPS)
                } else
                    init.q[id] = input.val();
                $('[name=' + id + ']').find('.gVal').text(input.val())
                ui()
                callToast('submit', 500, 3000)
            } else
                callToast('noInput', 500, 3000)
        }
        input.blur()
        input.val('')
        ui()
        return
    });
    $(".inputEff:not(.jscolor)").unbind("keydown").bind("keydown", function (e) {
        if (e.keyCode == 13) {
            var id = $(this).attr('id').split('_')[1]
            var category = $(this).attr('id').split('_')[0]
            var input = $(this).val()
            if (id == 'abbOld' || id == 'abbNew') {
                var key = $('#in_abbOld').val()
                var val = $('#in_abbNew').val()
                if (key != '' && val == '') {
                    $(this).blur()
                    $('#in_abbNew').focus()
                } else if (key == '' && val != '') {
                    $(this).blur()
                    $('#in_abbOld').focus()
                } else if (key != '' && val != '') {
                    init.Alias[key] = val
                    $('ul.remove').append(createElement('li_remove_list', null, key, val))
                    $('#in_abbOld,#in_abbNew').val('')
                    liReload()
                    callToast('ok', 500, 3000)
                } else
                    callToast('noInput', 500, 3000)
            } else if (id.indexOf('f') > -1 || category.indexOf('headerText') > -1) {
                if (input != '') {
                    if (category.indexOf('headerText') > -1) {
                        init.ColData[id].tt = input;
                        update(previewDPS, previewHPS)
                    } else
                        init.q[id] = input;
                    $('[name=' + id + ']').find('.gVal').text(input)
                    $(this).blur()
                    $(this).val('')
                    callToast('submit', 500, 3000)
                } else
                    callToast('noInput', 500, 3000)
            } else if (id == 'apply') {
                applyKeys(input)
                $(this).blur()
                $(this).val('')
            }
        }
        ui()
        return
    });
    $('input[type=range]').unbind("input").bind("input", function (e) {
        var id = $(this).parents('li').attr('id')
        if (id.indexOf('sizeWidth') > -1)
            init.ColData[id.replace('sizeWidth', '')].width = parseInt($(this).val())
        else if (id.indexOf('sizePadding') > -1)
            init.ColData[id.replace('sizePadding', '')].padding = parseInt($(this).val())
        else
            init.Range[id] = parseInt($(this).val())
        var unit = '%'
        if (id.indexOf('size') > -1) {
            if (id == 'sizeDPSTable' || id == 'sizeHPSTable' || id == 'size24TableSlice')
                unit = ''
            else
                unit = 'px'
        } else if (id == 'autoHideTime')
            unit = 'min'
        $(this).parents('li').find('.gVal').html($(this).val() + unit)
        resizeWindow(view)
        ui()
        e.preventDefault()
        return
    });
    $(".UBtn").unbind("click").bind("click", function () {
        var srcDiv = $(this).parents(".listBox");
        var tgtDiv = srcDiv.prev();
        if (tgtDiv[0]) tgtDiv.before(srcDiv);
        init.Order[$(this).parents(".listBox").attr('flag')] = getOrder(".listBox", $(".scrollArea")[0]);
        $('.scrollArea').animate({ scrollTop: sVal.now - 62 }, 150);
        update(previewDPS, previewHPS)
        return
    });
    $(".DBtn").unbind("click").bind("click", function () {
        var srcDiv = $(this).parents(".listBox");
        var tgtDiv = srcDiv.next();
        if (tgtDiv[0]) tgtDiv.after(srcDiv);
        init.Order[$(this).parents(".listBox").attr('flag')] = getOrder(".listBox", $(".scrollArea")[0]);
        $('.scrollArea').animate({ scrollTop: sVal.now + 62 }, 150);
        update(previewDPS, previewHPS)
        return
    });
}
function button(id, direction) {
    switch (id) {
        case 'init':
            var tmpLang = init.q.Lang
            if (confirm(l.msg.initConfirm.m[lang]) == !0) {
                callToast('init', 0, 3000)
                setTimeout(function () {
                    localStorage.clear()
                    Mopi2.q.Lang = tmpLang
                    localStorage.setItem("Mopi2_HAERU", JSON.stringify(Mopi2))
                    init = JSON.parse(localStorage.getItem("Mopi2_HAERU"))
                    lang = init.q.Lang
                    button('settings')
                    $('.scrollArea').scrollTop(0)
                }, 100)
            }
            break
        case 'refresh':
            location.reload(true);
            break
        case 'backup':
            init.q.backupDate = new Date()
            localStorage.setItem(id, JSON.stringify(init))
            localStorage.setItem("Mopi2_HAERU", JSON.stringify(init))
            $('#' + id + ' .gVal').html(init.q.backupDate)
            callToast(id, 500, 3000)
            break
        case 'restore':
            if (!localStorage.getItem("backup")) {
                callToast('noData', 0, 3000)
            } else {
                callToast('restore', 500, 3000)
                setTimeout(function () {
                    init = JSON.parse(localStorage.getItem("backup"))
                    addOption()
                    lang = init.q.Lang
                    button('settings')
                    $('.scrollArea').scrollTop(0)
                }, 100)
            }
            break
        case 'home':
            button('Back', 'main')
            $('.dropdown, #blackBg').fadeOut(0);
            break
        case 'fullscreen':
            toggleFullScreen()
            break
        case 'Capture':
        case 'RequestEnd':
            $('[name=' + id + '] i').removeClass('flash animated').addClass('flash animated').one('animationend', function () {
                $('[name=' + id + '] i').removeClass('flash animated');
            });
            if (id == 'Capture') {
                setTimeout(function () {
                    $('.btn_wrap div:not(:last-child)').fadeOut(0)
                    $('#tooltip').hide()
                }, 1000)
                setTimeout(function () {
                    $('#whiteBg').fadeIn(150)
                }, 1000)
                setTimeout(function () {
                    $('#whiteBg').fadeOut(0)
                }, 1150)
                setTimeout(function () {
                    webs.overlayAPI(id)
                }, 1300)
                callToast(id, 1500, 8000);
            } else {
                try {
                    webs.overlayAPI(id);
                    window.OverlayPluginApi.endEncounter();
                }
                catch (e) {
                    console.log("[Please Ignore] Button processing : " + e.meassage);
                }
            }
            break
        case 'History':
            view = 'history'
            $('[name=main], [name=notice]').fadeOut(0)
            $('[name=history]').fadeIn(0)
            resizeWindow(view)
            $('nav[name=history]').find('table td').text(l.NAV.history.tt[lang])
            $('.ac').css('color', '#' + init.Color.accent)
            break
        case 'Back':
            if (direction == 'main') {
                view = 'main'
                sVal.old = 0;
                sVal.pre = 0
                $('[name=history], [name=settings]').fadeOut(0)
                if (lastCombat != null)
                    $('[name=main]').fadeIn(0)
                else
                    $('nav[name=main],[name=notice]').fadeIn(0)

                if (init.q.arrow)
                    $('#wrap').css({ 'background-image': 'url(./images/handle.svg)' })

                ctrlPreview(0)
                localStorage.setItem('Mopi2_HAERU', JSON.stringify(init))
                $('.previewArea, .tabArea, .scrollArea').html('')
                if (lastCombat != null) {
                    //오버레이가 계속 갱신되므로 해당부분 제거
                    //update(lastDPS, lastHPS)
                    hiddenTable()
                } else {
                    initOverlay()
                }
            }
            break
        case 'settings':
        case 'Settings':
            ctrlPreview(0)
            sVal.pre = 0
            view = 'settings'
            $('#wrap').css({ 'background-image': '' })
            $('nav[name=settings]').find('table td').text(l.NAV.settings.tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('Back', 'main')")
            $('[name=main], [name=notice]').fadeOut(0)
            $('[name=settings]').fadeIn(0)
            $('.dropdown, #blackBg').fadeOut(0);
            createDOM('page', l.Settings)
            $('.scrollArea').scrollTop(sVal.old)
            resizeWindow(view)
            break
        case 'Design':
        case 'Overlay':
        case 'Tool':
            if (id == 'Data')
                ctrlPreview(1)
            else
                ctrlPreview(0)
            if (direction != 'Back')
                sVal.old = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings]').find('table td').text(l.Settings[id].tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "')")
            createDOM('page', l[id])
            $('.scrollArea').scrollTop(sVal.pre)
            if (id == 'Tool')
                $('#backup .gVal').html(init.q.backupDate)
            resizeWindow(view)
            break
        case 'font':
        case 'custom':
            if (id == 'font')
                ctrlPreview(1)
            else
                ctrlPreview(0)
            sVal.pre = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings]').find('table td').text(l[l.back[id]][id].tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "', 'Back')")
            createDOM('page', l[id], id)
            if (id == 'custom') {
                $('#in_share').val(JSON.stringify(createKeys()))
            }
            resizeWindow(view)
            break;
        case 'Data':
        case 'color':
        case 'opacity':
        case 'size':
        case 'advanced':
        case 'cells':
        case 'shape':
        case 'raid':
            ctrlPreview(1)
            if (id == 'raid')
                toggleRaidMode(1)
            sVal.pre = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings]').find('table td').text(l[l.back[id]][id].tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "', 'Back')")
            button(createDOM('tab', l[id]), id)
            resizeWindow(view)
            break
        case 'format':
        case 'order':
        case 'abbset':
            sVal.pre = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "', 'Back')")
            if (id == 'abbset') {
                ctrlPreview(0)
                $('nav[name=settings]').find('table td').text(l[l.back[id]]['tab_mhh']['inner'][id].tt[lang])
                createDOM('page', l[id], id)
                createDOM('list_remove', init.Alias)
            } else {
                ctrlPreview(1)
                $('nav[name=settings]').find('table td').text(l[l.back[id]]['tab_general']['inner'][id].tt[lang])
                button(createDOM('tab', l[id]), id)
            }
            resizeWindow(view)
            break
        case 'tab_DPS':
        case 'tab_HPS':
        case 'tab_nav':
        case 'tab_table':
        case 'tab_graph':
        case 'tab_general':
        case 'tab_color':
        case 'tab_opacity':
        case 'tab_size':
        case 'tab_number':
        case 'tab_name':
        case 'tab_mhh':
            if (id == "tab_graph" && direction == "color")
                createDOM('page', l.Graph[init.q.palette], id)
            else if ((id == "tab_DPS" || id == "tab_HPS") && direction == "order")
                createDOM('list_order', null, id.split('_')[1])
            else {
                createDOM('page', l[direction][id].inner, id)
                if ((id == "tab_DPS" || id == "tab_HPS") && direction == "format")
                    duCheckMsg(id.split('_')[1], direction, id.split('_')[1])
            }
            break
        case 'tab_width':
        case 'tab_align':
        case 'tab_padding':
        case 'tab_title':
            createCellPageDOM(id);
            break
        case 'DPSfilter':
        case 'HPSfilter':
            $('.dropdown').fadeIn(0);
            $('#blackBg').fadeIn(150);
            createDOM('dr_checkbox', l.format['tab_' + id.split('f')[0]].inner[id].dr)
            break
    }
}
function createCellPageDOM(tab) {
    $('.scrollArea').html('')
    var ul = ''
    var flag = false;
    ul = $('<ul class="group shadow">')
    for (var i in init.ColData) {
        var obj = init.ColData[i];
        if (obj.DPS == 1 || obj.HPS == 1) {
            if (tab == "tab_width" && i != 'name') {
                ul.append('<li id="sizeWidth' + i + '" class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '<font class="ex">　❙ ' + d[i].tt + '</font></td><td rowspan="2" style="padding:0 1.4rem"><input class="shadow" type="range" min="0" max="200" value="' + obj.width + '"></td></tr><tr><td class="gVal ac">' + obj.width + 'px</td></tr></table></li>');
            } else if (tab == "tab_padding") {
                ul.append('<li id="sizePadding' + i + '" class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '<font class="ex">　❙ ' + d[i].tt + '</font></td><td rowspan="2" style="padding:0 1.4rem"><input class="shadow" type="range" min="0" max="10" value="' + obj.padding + '"></td></tr><tr><td class="gVal ac">' + obj.padding + 'px</td></tr></table></li>');
            } else if (tab == "tab_align") {
                if (flag == true) {
                    $('.scrollArea').append(ul)
                    ul = $('<ul class="group shadow">')
                }
                ul.append('<li id="alignHeader_' + i + '" class="radio" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '<font class="ex">　❙ ' + d[i].tt + ' ❯ ' + d.header[lang] + '</font></td></tr><tr><td class="gVal ac ">' + d.direction[obj.alignHeader][lang] + '</td></tr></table></li>');
                ul.append('<li id="alignBody_' + i + '" class="radio" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '<font class="ex">　❙ ' + d[i].tt + ' ❯ ' + d.body[lang] + '</font></td></tr><tr><td class="gVal ac ">' + d.direction[obj.alignBody][lang] + '</td></tr></table></li>');
            } else if (tab == "tab_title") {
                if (flag == false) {
                    ul.append('<li class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">priority_high</i></td><td class="gTitle">' + d.caution_tt[lang] + '</td></tr><tr><td class="gVal ex" style="padding-right:1.4rem; text-align:justify">' + d.caution_m1[lang] + '</td></tr></table></li>');
                }
                $('.scrollArea').append(ul)
                ul = $('<ul class="group shadow">')
                ul.append('<li class="li_box" name="' + i + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + d[i].tt + '</td></tr><tr><td class="gVal ac">' + obj.tt + '</td></tr></table></li>')
                ul.append('<li class="li_text" style="border:0"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">text_fields</i></td><td style="width:100%;"><div class="inputBox"><input class="inputEff" type="text" placeholder="' + d.headerText[lang] + '" id="headerText_' + i + '"><span class="focus-border"></span></div></td><td rowspan="2" class="gIcon ft sendBtn"><i class="material-icons">send</i></td></tr></table></li>')
            }
            flag = true;
        }
    }
    $('.scrollArea').append(ul)
    liReload()
    ui()
}
function createCellPageDropDown(id, category) {
    var html = ''
    for (var i in d.direction) {
        if (init.ColData[id][category] == i)
            on = 'hover'
        else
            on = ''
        html += '<li>' + d.direction[i][lang] + '<input type="radio" name="' + category + '_' + id + '" value="' + i + '"/><div class="switch ' + on + '"><div class="toggle"></div></div></li>'
    }
    $('.dropdown ul').html(html)
    resizeDropdown()
    liReload()
    ui()
}
function createDOM(type, obj, id) {
    var html = ''
    switch (type) {
        case 'preview':
            if (init.q.preview == 1) {
                $('.previewArea').html('<div><nav name="main"><table name="ACT_2line"><tr><td rowspan="2" name="time">00:00</td><td name="target"></td></tr><tr><td name="rps"></td></tr></table><table name="ACT_1line" style="display:none;"><tr><td name="time">00:00</td><td name="target"></td><td name="rps"></td></tr></table><div class="right btn_wrap" style="top:0"><div name="Capture" class="btn flex" style="display: none"><i class="material-icons">camera</i></div><div name="History" class="btn flex" style="display: none" ><i class="material-icons">history</i></div><div name="RequestEnd" class="btn flex" style="display: none" ><i class="material-icons">timer_off</i></div><div name="More" class="btn flex"><input type="checkbox" /><i class="material-icons">more_vert</i></div></div></nav><div name="main_P"></div> <table id="preview24"><tr><td style="color:rgba(189,189,189,.5); font-size:1.2rem">' + l.raid.tab_general.inner.view24_Number.tt[lang] + '</td><td><div class="switch"><div class="toggle"></div></div><input type="checkbox"/></td></tr></table></div>')
                update(previewDPS, previewHPS)
            }
            break
        case 'dr_nav':
            for (var i in l.NAV[id].dr) {
                var a = l.NAV[id].dr[i]
                html += createElement(a.e, a, i)
            }
            $('.dropdown ul').html(html)
            resizeDropdown()
            break
        case 'dr_radio':
            $('.dropdown ul').html(createElement('dr_radio', obj, id))
            resizeDropdown()
            break
        case 'dr_checkbox':
            for (var i in obj)
                html += createElement(type, obj[i], i)
            $('.dropdown ul').html(html)
            resizeDropdown()
            break
        case 'page':
            if (id != undefined && id.indexOf('tab_') > -1)
                $('.scrollArea').html('')
            else
                $('.tabArea, .scrollArea').html('')
            var ul = ''
            for (var i in obj) {
                if (obj[i].ul == 1) {
                    $('.scrollArea').append(ul)
                    ul = $('<ul class="group shadow">')
                }
                if (id == "tab_DPS" || id == "tab_HPS")
                    ul.append(createElement(obj[i].e, obj[i], i, id.split('_')[1]))
                else
                    ul.append(createElement(obj[i].e, obj[i], i))
            }
            $('.scrollArea').append(ul)
            break
        case 'tab':
            $('.tabArea, .scrollArea').html('')
            for (var i in obj)
                $('.tabArea').append(createElement(obj[i].e, obj[i], i))

            $('.tabArea :first-child').find('.tab_title').addClass('on')
            $('.tabArea :first-child').find('.tab_underBar').addClass('on_bar')
            return $('.tabArea :first-child').attr('name')
        case 'list_remove':
            var ul = $('<ul class="remove group shadow">')
            ul.append('<li class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + l.abbset.in_abbOld.m[lang].split('(')[0] + '</td></tr><tr><td class="gVal ac">' + l.abbset.in_abbNew.m[lang] + '</td></tr></table></li>')
            for (var i in obj)
                ul.append(createElement('li_remove_list', null, i, obj[i]))
            $('.scrollArea').append(ul)
            break
        case 'list_order':
            $('.scrollArea').html('')
            var ul = $('<ul class="group shadow">')
            for (var i in init.Order[id]) {
                var a = init.Order[id][i]
                if (init.ColData[a][id] == 1)
                    ul.append(createElement('li_2btn', init.ColData[a], a, id))
            }
            $('.scrollArea').append(ul)
            break
    }
    liReload()
    ui()
}
function createElement(type, obj, id, flag) {
    var on = '',
        html = ''
    switch (type) {
        case 'dr_checkbox':
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id=' + id + '>' + obj.tt[lang] + '<input type="checkbox"/><div class="switch ' + on + '"><div class="toggle"></div></div></li>'
        case 'dr_radio':
            for (var i in obj.m) {
                if (i == init.q[id]) on = 'hover'
                else on = ''
                html += '<li>' + obj.m[i][lang] + '<input type="radio" name="' + id + '" value="' + i + '"/><div class="switch ' + on + '"><div class="toggle"></div></div></li>'
            }
            return html
        case 'dr_link':
            return '<li id=' + id + '>' + obj.tt[lang] + '</li>'
        case 'tab_btn':
            return '<div name="' + id + '" p="' + obj.p + '" class="tab_box" style="width:' + obj.w + '%"><div class="tab_title">' + obj.tt[lang] + '</div><div class="tab_underBar"></div></div>'
        case 'li_2line':
            return '<li id="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_2line_empty':
            return '<li id="' + id + '" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac"></td></tr></table></li>'
        case 'li_link':
            return '<li id="' + id + '"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td class="gIcon"><i class="material-icons">arrow_forward</i></td></tr></table></li>'
        case 'li_radio':
            return '<li id="' + id + '" class="radio" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + obj.m[init.q[id]][lang] + '</td></tr></table></li>'
        case 'li_radio_change':
            return '<li id="' + id + '" class="radio" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + obj.msg[lang].replace('★', obj.m[init.q[id]][lang]) + '</td></tr></table></li>'
        case 'li_checkbox':
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id=' + id + '><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div></td></tr></table><input type="checkbox"/></li>'
        case 'li_2line_checkbox':
            if (init.ColData[id][flag] != undefined && init.ColData[id][flag] == true) on = 'hover'
            else on = ''
            return '<li id="' + flag + '-' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '</td><td rowspan="2"  style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div><input type="checkbox"/></td></tr><tr><td class="gVal ex">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_2line_checkbox_normal':
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td rowspan="2"  style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div></td></tr><tr><td class="gVal ac">' + obj.m[lang] + '</td></tr></table><input type="checkbox"/></li>'
        case 'li_2btn':
            return '<li style="cursor:default" id="' + id + '" flag="' + flag + '"class="listBox"><table><tr><td class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '</td><td class="UBtn"><i class="material-icons">arrow_upward</i></td><td style="padding:0 1.4rem"></td><td class="DBtn"><i class="material-icons">arrow_downward</i></td></tr></table></li>'
        case 'li_box':
            return '<li class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ex" style="padding-right:1.4rem; text-align:justify">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_text':
            return '<li class="li_text" style="border:0"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td style="width:100%; padding-right:1.4rem"><div class="inputBox"><input class="inputEff" type="text" placeholder="' + obj.m[lang] + '" id="' + id + '"><span class="focus-border"></span></div></td></tr></table></li>'
        case 'li_full_btn':
            return '<li class="gTitle sendBtn" style="text-align:center; border-top:solid .1rem rgba(255,255,255,.07)">' + obj.tt[lang] + '</li>'
        case 'li_remove_list':
            return '<li class="li_box" name="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + id + '</td><td rowspan="2" class="gIcon removeBtn"><i class="material-icons">remove_circle_outline</i></td></tr><tr><td class="gVal ac">' + flag + '</td></tr></table></li>'
        case 'li_pn':
            if (id == 'share' || id == 'apply') var _ = obj.m[lang]
            else var _ = init.q[id]
            return '<li class="li_box" name="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + _ + '</td></tr></table></li>'
        case 'li_text_inbtn':
            return '<li class="li_text" style="border:0"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td style="width:100%;"><div class="inputBox"><input class="inputEff" type="text" placeholder="' + obj.m[lang] + '" id="' + id + '"><span class="focus-border"></span></div></td><td rowspan="2" class="gIcon ft sendBtn"><i class="material-icons">send</i></td></tr></table></li>'
        case 'li_color':
            var input = $('<input id = "' + id + '" value="' + init.Color[id] + '" style="text-align:center;" maxlength="6">')
            input.addClass("shadow inputEff jscolor {onFineChange:'jsColorUpdate(this)', width:240, height:160, position:'bottom', borderColor:'#212121', insetColor:'#161616', backgroundColor:'#212121'}")
            var li = '<li id="' + id + '" class="li_box"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td style="padding:0 1.4rem">' + input.clone().wrapAll("<div/>").parent().html() + '</td></tr></table></li>'
            return li
        case 'li_slider':
            var unit = '%'
            if (id.indexOf('size') > -1) {
                if (id == 'sizeDPSTable' || id == 'sizeHPSTable' || id == 'size24TableSlice')
                    unit = ''
                else
                    unit = 'px'
            } else if (id == 'autoHideTime')
                unit = 'min'
            return '<li id="' + id + '" class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td rowspan="2" style="padding:0 1.4rem"><input class="shadow" type="range" min="' + obj.min + '" max="' + obj.max + '" value="' + init.Range[id] + '"></td></tr><tr><td class="gVal ac">' + init.Range[id] + unit + '</td></tr></table></li>'
        case 'li_file':
            return '<li style="padding:0; text-align:center; border:0"><input type="file" name="uploadFile" accept="image/*" /><button>' + obj.tt[lang] + '</button></li>'
    }
}
function ui() {
    if (window.innerWidth % 5 != 0 && init.q.view24 && lastCombat != null && lastCombat.partys >= init.q.view24_Number) {
        var w = window.innerWidth % 5
        for (var i = 0; i < w; i++)
            $('.rRow .rCell:nth-child(' + parseInt(i + 1) + ')').css('width', '-webkit-calc(20% + 1px)')
    }
    var img = ''
    if (init.q.overlayBg)
        img = init.q.overlayBgImg
    $('html').css({
        'font-size': init.q.resolution,
        'background-image': 'url(' + img + ')',
        'background-size': init.q.overlayBgSize,
        'background-repeat': init.q.overlayBgRepeat
    })
    $('.ac, .tab_title.on, nav[name=settings] i, input[type="range"]').css('color', '#' + init.Color.accent)
    $('.on_bar, .focus-border, .toggle').css('background', '#' + init.Color.accent)
    $('.switch').css('border-color', '#' + init.Color.accent)
    if (init.q.preview24)
        $('#preview24 td:first-child').css('color', '#' + init.Color.accent)
    var bg = ''
    if (init.q.pattern == "cross")
        bg = '-webkit-linear-gradient(' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',transparent .1rem),-webkit-linear-gradient(0,' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' .1rem)'
    else if (init.q.pattern == "hStripe")
        bg = '-webkit-linear-gradient(' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',transparent .1rem),-webkit-linear-gradient(0,' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' 0)'
    else if (init.q.pattern == "vStripe")
        bg = '-webkit-linear-gradient(' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',transparent 0),-webkit-linear-gradient(0,' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ',' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' .1rem)'
    else if (init.q.pattern == "leftDig")
        bg = 'repeating-linear-gradient(45deg, ' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ' 0, ' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ' 5%, ' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' 0, ' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' 50%) 0'
    else if (init.q.pattern == "rightDig")
        bg = 'repeating-linear-gradient(135deg, ' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ' 0, ' + oHexColor(init.Color.pattern, parseFloat(init.Range.pattern / 100)) + ' 5%, ' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' 0, ' + oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100)) + ' 50%) 0'
    else
        bg = oHexColor(init.Color.navBg, parseFloat(init.Range.navBg / 100))
    $('nav[name=main], nav[name=history]').css({
        background: bg,
        color: oHexColor(init.Color.accent, parseFloat(init.Range.accent / 100)),
        height: parseFloat(init.Range.sizeNav / 10) + 'rem',
        'background-size': parseFloat(init.Range.sizePattern / 10) + 'rem ' + parseFloat(init.Range.sizePattern / 10) + 'rem',
        'background-repeat': 'repeat'
    })
    if (init.Range.navBg != 100)
        $('.btn_wrap').css('background', 'transparent')
    if (init.Range.edge != 0) {
        $('nav[name=main], nav[name=history]').css({
            border: parseFloat(init.Range.sizeEdge / 10) + 'rem ' + init.q.edgeType + ' ' + oHexColor(init.Color.edge, parseFloat(init.Range.edge / 100))
        })
        $('nav[name=main] .btn_wrap, nav[name=history] .btn_wrap').css({
            right: parseFloat(init.Range.sizeEdge / 10) + 'rem',
            top: parseFloat(init.Range.sizeEdge / 10) + 'rem'
        })
        $('.previewArea nav[name=main] .btn_wrap').css({
            right: 0,
            top: 0
        })
    }
    $('nav[name=main] div[name=More]').css({
        'border-top-right-radius': parseFloat((init.q.rd_navTR * init.Range.sizeRadius) / 10) + 'rem ',
        'border-bottom-right-radius': parseFloat((init.q.rd_navBR * init.Range.sizeRadius) / 10) + 'rem '
    })
    $('nav[name=main], nav[name=history]').css({
        'border-top-left-radius': parseFloat((init.q.rd_navTL * init.Range.sizeRadius) / 10) + 'rem ',
        'border-top-right-radius': parseFloat((init.q.rd_navTR * init.Range.sizeRadius) / 10) + 'rem ',
        'border-bottom-left-radius': parseFloat((init.q.rd_navBL * init.Range.sizeRadius) / 10) + 'rem ',
        'border-bottom-right-radius': parseFloat((init.q.rd_navBR * init.Range.sizeRadius) / 10) + 'rem '
    })
    if (init.q.applyScope == 1) {
        $('.tableHeader td:first-child').css({
            'border-top-left-radius': parseFloat((init.q.rd_tableTL * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-left-radius': parseFloat((init.q.rd_tableBL * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
        $('.tableHeader td:last-child').css({
            'border-top-right-radius': parseFloat((init.q.rd_tableTR * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-right-radius': parseFloat((init.q.rd_tableBR * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
    } else if (init.q.applyScope == 2) {
        $('.barBg').css({
            'border-top-left-radius': parseFloat((init.q.rd_tableTL * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-left-radius': parseFloat((init.q.rd_tableBL * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
        $('.barBg').css({
            'border-top-right-radius': parseFloat((init.q.rd_tableTR * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-right-radius': parseFloat((init.q.rd_tableBR * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
    } else {
        $('.tableHeader td:first-child, .barBg').css({
            'border-top-left-radius': parseFloat((init.q.rd_tableTL * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-left-radius': parseFloat((init.q.rd_tableBL * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
        $('.tableHeader td:last-child, .barBg').css({
            'border-top-right-radius': parseFloat((init.q.rd_tableTR * init.Range.sizeRadiusTable) / 10) + 'rem ',
            'border-bottom-right-radius': parseFloat((init.q.rd_tableBR * init.Range.sizeRadiusTable) / 10) + 'rem '
        })
    }
    $('.bar, .mini div').css({
        'border-top-left-radius': parseFloat((init.q.rd_graphTL * init.Range.sizeRadiusGraph) / 10) + 'rem ',
        'border-top-right-radius': parseFloat((init.q.rd_graphTR * init.Range.sizeRadiusGraph) / 10) + 'rem ',
        'border-bottom-left-radius': parseFloat((init.q.rd_graphBL * init.Range.sizeRadiusGraph) / 10) + 'rem ',
        'border-bottom-right-radius': parseFloat((init.q.rd_graphBR * init.Range.sizeRadiusGraph) / 10) + 'rem '
    })
    $('nav[name=main] i, nav[name=history] i').css({
        color: oHexColor(init.Color.accent, parseFloat(init.Range.navIcon / 100)),
        'font-size': parseFloat(init.Range.sizeIcon / 10) + 'rem'
    })
    var icon = ['Capture', 'RequestEnd', 'History']
    for (var i in icon) {
        if (init.q['btn_' + icon[i]])
            $('nav[name=main] div[name=' + icon[i] + ']').fadeIn(0)
        else
            $('nav[name=main] div[name=' + icon[i] + ']').fadeOut(0)
    }
    var style = 'normal'
    if (init.q.time_italic)
        style = 'italic'
    else
        style = 'normal'
    $('[name=time]').css({
        color: oHexColor(init.Color.accent, parseFloat(init.Range.navTime / 100)),
        'font-family': "'" + init.q.fTime + "', 'DS-Digital', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeTime / 10) + 'rem',
        'font-style': style
    })
    if (init.Range.navTime == 0)
        $('[name=time]').css({
            'padding-left': 0,
            'font-size': 0
        })
    else
        $('[name=time]').css({
            'padding-left': '1rem',
            'font-size': parseFloat(init.Range.time / 10) + 'rem'
        })
    if (init.q.target_italic)
        style = 'italic'
    else
        style = 'normal'
    $('[name=target]').css({
        color: oHexColor(init.Color.target, parseFloat(init.Range.target / 100)),
        'font-family': "'" + init.q.fTarget + "', 'Segoe UI', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeTarget / 10) + 'rem',
        'font-style': style
    })
    if (init.q.rps_italic)
        style = 'italic'
    else
        style = 'normal'
    $('[name=rps]').css({
        color: oHexColor(init.Color.rps, parseFloat(init.Range.rps / 100)),
        'font-family': "'" + init.q.fRPS + "', 'Roboto Condensed', 'Segoe UI', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeRPS / 10) + 'rem',
        'font-style': style
    })
    if (init.q.act == 2) {
        $('[name=ACT_2line]').fadeIn(0)
        $('[name=ACT_1line]').fadeOut(0)
        $('[name=ACT_2line] [name=target]').css({
            'padding-bottom': parseFloat(init.Range.sizeGap / 10) + 'rem',
            'vertical-align': 'bottom'
        })
        $('[name=ACT_2line] [name=rps]').css({
            'padding-top': parseFloat(init.Range.sizeGap / 10) + 'rem',
            'vertical-align': 'top'
        })
    }
    else {
        $('[name=ACT_2line]').fadeOut(0)
        $('[name=ACT_1line]').fadeIn(0)
        $('[name=ACT_1line] [name=target]').css({
            'padding-bottom': 0,
            'vertical-align': 'middle'
        })
        $('[name=ACT_1line] [name=rps]').css({
            'padding-top': 0,
            'vertical-align': 'middle'
        })
    }
    if (init.Range.target == 0)
        $('[name=target]').css({
            'padding-left': 0,
            'font-size': 0
        })
    else
        $('[name=target]').css({
            'padding-left': '1rem',
            'font-size': parseFloat(init.Range.sizeTarget / 10) + 'rem'
        })
    if (init.q.boldYOU)
        var boldYOU = 'bold'
    else
        var boldYOU = ''
    if (init.q.boldOther)
        var boldOther = 'bold'
    else
        var boldOther = ''
    if (init.q.borderTextType == 'outline')
        var btt = '-.1rem 0 #' + init.Color.tableBorderOther + ', 0 .1rem #' + init.Color.tableBorderOther + ', .1rem 0 #' + init.Color.tableBorderOther + ', 0 -.1rem #' + init.Color.tableBorderOther
    else
        var btt = '0 0 .3rem #' + init.Color.tableBorderOther
    $(':not(#YOU) .tableBody td').css({
        color: '#' + init.Color.tableOther,
        opacity: parseFloat(init.Range.tableOther / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-weight': boldOther,
        'font-size': parseFloat(init.Range.sizeBodyText / 10) + 'rem',
        'text-shadow': btt
    })
    $(':not(#YOU) .tableBody td .ex').css({
        color: '#' + init.Color.tableExOther,
        opacity: parseFloat(init.Range.tableOther / 100),
        'text-shadow': btt
    })
    if (init.q.borderTextType == 'outline')
        var btt = '-.1rem 0 #' + init.Color.tableBorderYOU + ', 0 .1rem #' + init.Color.tableBorderYOU + ', .1rem 0 #' + init.Color.tableBorderYOU + ', 0 -.1rem #' + init.Color.tableBorderYOU
    else
        var btt = '0 0 .3rem #' + init.Color.tableBorderYOU
    $('#YOU .tableBody td, .myPet .tableBody td').css({
        color: '#' + init.Color.tableYOU,
        opacity: parseFloat(init.Range.tableYOU / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-weight': boldYOU,
        'font-size': parseFloat(init.Range.sizeBodyText / 10) + 'rem',
        'text-shadow': btt
    })
    $('#YOU .tableBody td .ex').css({
        color: '#' + init.Color.tableExYOU,
        opacity: parseFloat(init.Range.tableYOU / 100),
        'text-shadow': btt
    })
    $('.rName').css({
        'font-size': parseFloat(init.Range.sizeBodyText / 10) - 0.1 + 'rem'
    })
    if (init.q.body_italic)
        style = 'italic'
    else
        style = 'normal'
    $(':not(#YOU).rCell').css({
        background: oHexColor(init.Color.view24BgOther, parseFloat(init.Range.view24BgOther / 100)),
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
        height: parseFloat(init.Range.size24TableHeight / 10) + 'rem',
    })
    $('#YOU.rCell').css({
        background: oHexColor(init.Color.view24BgYOU, parseFloat(init.Range.view24BgYOU / 100)),
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
        height: parseFloat(init.Range.size24TableHeight / 10) + 'rem',
    })
    $(':not(#YOU).rCell td').css({
        'font-weight': boldOther,
        color: '#' + init.Color.view24TableOther,
        opacity: parseFloat(init.Range.view24TableOther / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-style': style,
        'font-size': parseFloat(init.Range.size24BodyText / 10) + 'rem',
        'text-shadow': btt
    })
    $('#YOU.rCell td').css({
        'font-weight': boldYOU,
        color: '#' + init.Color.view24TableYOU,
        opacity: parseFloat(init.Range.view24TableYOU / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-style': style,
        'text-shadow': btt
    })
    $('.rName').css({
        'font-size': parseFloat(init.Range.size24BodyNameText / 10) + 'rem',
    })
    $('.rData').css({
        'font-size': parseFloat(init.Range.size24BodyDataText / 10) + 'rem',
    })
    $('.rRow:first-child .rCell').css({
        'border-top': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })
    $('.rRow .rCell:last-child').css({
        'border-right': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })
    $('.rCell .rIdx').css({
        width: parseFloat(init.Range.size24TableIdxWd / 10) + 'rem',
        opacity: parseFloat(init.Range.bar / 100),
    })
    $('.rIcon, .rIcon img').css({
        width: parseFloat(init.Range.size24BodyIcon / 10) + 'rem',
    })
    $('.Class img').css({
        width: parseFloat(init.Range.sizeBodyIcon / 10) + 'rem',
    })
    $('.tableBody td .ex').css({
        'font-size': parseFloat((init.Range.sizeBodyText - 1) / 10) + 'rem'
    })
    $('.tableHeader').css({
        'margin': parseFloat(init.Range.sizeHdGap / 10) + 'rem 0'
    })
    $('.tableHeader td').css({
        background: oHexColor(init.Color.tableHd, parseFloat(init.Range.tableHd / 100)),
        color: oHexColor(init.Color.tableHdText, parseFloat(init.Range.tableHdText / 100)),
        'font-family': "'" + init.q.fHd + "', 'Roboto Condensed', 'sans-serif'",
        height: parseFloat(init.Range.sizeHd / 10) + 'rem',
        'font-size': parseFloat(init.Range.sizeHdText / 10) + 'rem'
    })
    $('.tableWrap').css({
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })
    $('.barBg').css({
        background: oHexColor(init.Color.tableBg, parseFloat(init.Range.tableBg / 100)),
    })
    $('.tableBody td:not(:last-child)').css({
        'border-right': parseFloat(init.Range.sizeLineVer / 10) + 'rem solid ' + oHexColor(init.Color.tableLineVer, parseFloat(init.Range.tableLineVer / 100))
    })
    $('.tableHeader td:not(:last-child)').css({
        'border-right': parseFloat(init.Range.sizeLineVer / 10) + 'rem solid ' + oHexColor(init.Color.tableHd, parseFloat(init.Range.tableHd / 100))
    })
    for (var i in l.size.tab_graph.inner) {
        $('.' + i.split('_')[1]).css({
            height: parseFloat(init.Range[i] / 10) + 'rem',
            'margin-top': parseFloat((init.Range.sizeBody - init.Range[i]) / 10) + 'rem',
            opacity: parseFloat(init.Range[i.split('_')[1]] / 100)
        })
    }
    $('.tableWrap').css({
        height: parseFloat(init.Range.sizeBody / 10) + 'rem',
        'margin-top': parseFloat((init.Range.sizeBody - init.Range.sizeBody) / 10) + 'rem',
    })
    $('#HPSBody, #HPSBody_P').find('.pet, .ds, .oh').css({
        float: init.q.bar_position
    })
    $('#DPSBody, #DPSBody_P').find('.pet').css({
        float: init.q.bar_position_DPS
    })
    $('#DPSHeader, #DPSHeader_P').css({
        'margin-top': parseFloat(init.Range.sizeDPSGap / 10) + 'rem',
    })
    $('#HPSHeader, #HPSHeader_P').css({
        'margin-top': parseFloat(init.Range.sizeHPSGap / 10) + 'rem',
    })
    if (!init.q.preview24 && init.q.view24_Number != 1 && view == 'settings') {
        var tmp = parseInt(init.Range.sizeBody) + parseInt(init.Range.sizeLine)
        if ($('#DPSBody_P').length != 0) {
            $('#DPSBody_P').css({
                height: parseFloat(tmp * $('#DPSoldBody_P')[0].childElementCount / 10) + 'rem'
            })
            $('#HPSBody_P').css({
                height: parseFloat(tmp * $('#HPSoldBody_P')[0].childElementCount / 10) + 'rem'
            })
            if ($('#DPSoldBody_P')[0].childElementCount >= init.Range.sizeDPSTable) {
                $('#DPSBody_P').css({
                    height: parseFloat(tmp * init.Range.sizeDPSTable / 10) + 'rem'
                })
            }
            if ($('#HPSoldBody_P')[0].childElementCount >= init.Range.sizeHPSTable) {
                $('#HPSBody_P').css({
                    height: parseFloat(tmp * init.Range.sizeHPSTable / 10) + 'rem'
                })
            }
        }
    }
    for (var i in init.Order) {
        for (var j in init.Order[i]) {
            var n = init.Order[i][j];
            $('.' + n + '.cell').css({
                'width': parseFloat(init.ColData[n]["width"] / 10) + 'rem',
                'padding': '0 ' + parseFloat(init.ColData[n]["padding"] / 10) + 'rem',
            });
            $('.tableBody .' + n + '.cell').css({
                'text-align': init.ColData[n]["alignBody"],
                'font-style': style
            });
            if (init.q.header_italic)
                style_header = 'italic'
            else
                style_header = 'normal'
            $('.tableHeader .' + n + '.cell').css({
                'text-align': init.ColData[n]["alignHeader"],
                'font-style': style_header
            });
        }
    }
    $('.name.cell').css("width", "100%");
    if (lastCombat != null && String(lastCombat.isActive) == "false") {
        $('.Class, .rIcon').css('cursor', 'pointer')
        $('.Class, .rIcon').on({
            mouseover: function () {
                if (init.q.tooltips) {
                    $('#tooltip').html('Name<font class="ex">　❙ On / Off</font>')
                    $('#tooltip').show().css('display', 'block')
                }
            },
            mouseleave: function () {
                $('#tooltip').hide()
            },
            click: function () {
                if ($(this)[0].className == 'rIcon')
                    $(this).parent().find('.rName').toggleClass('hidden')
                else
                    $(this).parent().find('.name').toggleClass('hidden')
            }
        });
    } else
        $('.Class, .rIcon').css('cursor', 'default')
    $('.rRow .rCell').css('width', parseFloat(100 / init.Range.size24TableSlice) + '%')
    resizeWindow(view)
}
