//초기 설정값 불러오기
var init = new Object(), lang = null, parent = '', view = 'main', //스크롤 영역 조절을 위한 위치값
    time = 0, toast = 0 //테이블 화면, 토스트 타임값 
var sVal = {    //스크롤값 
    now: 0,     //3번째 내부 및 현위치
    pre: 0,     //2번째 내부 위치
    old: 0      //설정에서의 위치
}
//뒤로 가기 금지 
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1)
}
$().ready(function () {
    //localStorage.clear();
    // 모피모피 이전 버전 사용자 데이터 삭제 처리
    if (localStorage.getItem("Mopi2_HAERU") == null) {
        localStorage.clear();
        localStorage.setItem("Mopi2_HAERU", JSON.stringify(Mopi2))
        init = Mopi2
        lang = init.q.Lang
        initOverlay('init')
    } else {
        init = JSON.parse(localStorage.getItem("Mopi2_HAERU"))
        lang = init.q.Lang   //언어
        initOverlay()
    }
});
//오버레이 초기화
function initOverlay(val) {
    if (val != undefined && val != 'init') {
        init.q.Lang = val;
        lang = val;
        localStorage.setItem("Mopi2_HAERU", JSON.stringify(init))
        callToast('submit', 0, 3000)
    }
    //네비게이션    
    if (val == 'init') {
        localStorage.clear();
        $('.btn_wrap').hide()
        $('#strong').html('<br>언어 / 言語 / 语言 / Language / Sprache<br><br><img src="./images/menu/KR.png" id="KR" onclick="initOverlay(this.id)"/><img src="./images/menu/JP.png" id="JP" onclick="initOverlay(this.id)"/><img src="./images/menu/CN.png" id="CN" onclick="initOverlay(this.id)"/><img src="./images/menu/EN.png" id="EN" onclick="initOverlay(this.id)"/><img src="./images/menu/DE.png" id="DE" onclick="initOverlay(this.id)"/><br><br>')
        $('#strong img').css('padding-right', '.5rem')
        $('#tip').html('Please select <b>your language.<b/>')
    } else {
        if (lastCombat == null) {
            $('[name=time]').text('00:00')
            $('[name=target]').text(l.NAV.main.tt.target[lang])
            $('[name=rps]').text(l.NAV.main.tt.rps[lang])
            $('.btn_wrap').show()
            //공지사항
            for (var i in l.Notice) {
                if (lang == "KR")
                    $('#' + i).html(l.Notice[i][lang])
                else
                    $('#' + i).html(l.Notice[i].EN)
            }
        } else  {            
            $('[name=notice]').fadeOut(0)
            $('.btn_wrap').show()
            update(lastDPS, lastHPS)
        }
        resizeWindow(view)
        hiddenTable()
    }
    if (init.q.arrow)
        $('#wrap').css({ 'background-image': 'url(./images/handle.svg)' })
    ui()
}
//---------------------------------------------------------------------------------------------------------------- 실시간 스크롤 체크
$('.scrollArea').scroll(function () {
    sVal.now = $('.scrollArea').scrollTop();
});

//---------------------------------------------------------------------------------------------------------------- 메뉴 드롭다운 
//드롭다운 스크롤 시 UI로 검은색 그림자 보여주기 
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
//드롭다운 높이 변경 및 UI 요소 온오프
function resizeDropdown() {
    if ($('.dropdown ul')[0].childElementCount > 5) {
        //라디오니깐 
        $('.dropdown ul').scrollTop(0)
        $('.dropdown ul').css('height', '23.8rem');
        $('#gradD').fadeIn(0);
    } else
        $('#gradU,#gradD').fadeOut(0)
}
//툴바 더보기 드롭다운 처리
$('[name=More]').unbind("click").bind("click", function () {
    $('.dropdown').fadeIn(0);
    $('#blackBg').fadeIn(150);
    //드롭다운 생성
    createDOM('dr_nav', null, $(this).parent().parent().attr('name'))
});
//팝업,드롭다운 배경처리 
$('#blackBg').unbind("click").bind("click", function () {
    $('.dropdown, #blackBg').fadeOut(0);
    $('.dropdown ul').css('height', '');
    //init 값 로컬 스토리지에 저장 및 테이블 갱신
    localStorage.setItem('Mopi2_HAERU', JSON.stringify(init))
    if (lastCombat != null && view == "main")
        update(lastDPS, lastHPS)
    resizeWindow(view)
});
//---------------------------------------------------------------------------------------------------------------- 스크롤 영역 조절
//모바일 화면회전 시 스크롤 영역 재계산
$(window).on("orientationchange", function () {
    resizeWindow(view)
});
//오버레이 크기 조절 시 스크롤 영역 재계산
$(window).resize(function () {
    resizeWindow(view)
});
//메인화면 식 변경 필요
function resizeWindow(flag) {
    if (init.q.view24 && lastCombat != null && lastCombat.partys > 9) {
        if (window.innerWidth % 5 != 0) {
            var w = window.innerWidth % 5
            $('.rRow .rCell').css('width', '20%')
            for (var i = 0; i < w; i++)
                $('.rRow .rCell:nth-child(' + parseInt(i + 1) + ')').css('width', '-webkit-calc(20% + 1px)')
        } else
            $('.rRow .rCell').css('width', '20%')
    }
    if (flag == 'settings') {
        $('.scrollArea').css('height', '-webkit-calc(100vh - ' + $('nav[name=settings]')[0].offsetHeight + 'px - ' + $('.previewArea')[0].offsetHeight + 'px - ' + $('.tabArea')[0].offsetHeight + 'px)')
    } else if (flag == 'history') {
        $('#HISTORYBody').css('height', '-webkit-calc(100vh - ' + $('nav[name=history]')[0].offsetHeight + 'px - ' + $('#HISTORYHeader')[0].offsetHeight + 'px)')
    } else {
        $('#update').css('height', '-webkit-calc(100vh - ' + $('nav[name=main]')[0].offsetHeight + 'px - ' + $('#strong')[0].offsetHeight + 'px - ' + $('#tip')[0].offsetHeight + 'px)')
    }
}
//---------------------------------------------------------------------------------------------------------------- 모바일 전체 화면 모드
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
//---------------------------------------------------------------------------------------------------------------- 내비게이션
//nav 버튼 자동 숨기기 감추기
$('nav[name=main] div[name=More]').on({
    mouseover: function () {
        if ($(this).attr('name') == 'More') {
            if (lastCombat != null && lastCombat.isActive)
                $(this).parent().find('div:not([name=History])').fadeIn(150)
            else
                $(this).parent().find('div').fadeIn(150)
        }
    }
});
$('nav[name=main] .btn_wrap').on({
    mouseleave: function () {
        var arr = ['Capture', 'RequestEnd', 'History']
        for (var i in arr) {
            if (init.q['btn_' + arr[i]] == 1)
                $('nav[name=main] div[name=' + arr[i] + ']').fadeIn(150)
            else
                $('nav[name=main] div[name=' + arr[i] + ']').fadeOut(150)
        }
    }
});
//툴팁 처리 
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
//토스트 처리
function callToast(id, start, end) {
    if (init.q.toast) {
        //새로 생성시 초기화
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
//---------------------------------------------------------------------------------------------------------------- 테이블 자동 숨기기
$("html").unbind("click").bind("click", function () {
    if (init.q.autoHide && view != 'settings') {
        hiddenTable()
    } else
        clearTimeout(time)
})
function hiddenTable() {
    //시간 삭제
    clearTimeout(time)
    $('.toast').removeClass('on')
    $('.toast').fadeOut(0);
    if (init.q.autoHide && view != 'settings') {
        //데이터가 있을 때 
        if (lastCombat != null) {
            //전투 중이니?
            if (lastCombat.isActive) {
                //화면 켜기
                if (view == 'history')
                    $('div[name=history]').fadeOut(0)
                else
                    $('div[name=main]').fadeIn(0)
            }
            //전투 중이 아닐 때 
            else {
                //화면 켜기
                if (view == 'history')
                    $('div[name=history]').fadeIn(0)
                else
                    $('div[name=main]').fadeIn(0)
                //타이머 체크 시작 
                time = setTimeout(function () {
                    if (view == 'history')
                        $('div[name=history]').fadeOut(150)
                    else {
                        if ($('#blackBg').css('display') == "block")
                            $('#blackBg').trigger('click')
                        $('div[name=main]').fadeOut(150)
                    }
                    callToast('hiddenTable', 0, 3000)
                }, init.Range.autoHideTime * 60000)          //1분 60000초
            }
        }
        //데이터가 없을 때
        else {
            if (view == 'history')
                $('div[name=history]').fadeIn(0)
            else
                $('div[name=notice]').fadeIn(0)
            //타이머 체크 시작 
            time = setTimeout(function () {
                if (view == 'history')
                    $('div[name=history]').fadeOut(150)
                else {
                    if ($('#blackBg').css('display') == "block")
                        $('#blackBg').trigger('click')
                    $('div[name=notice]').fadeOut(150)
                }
                callToast('hiddenTable', 0, 3000)
            }, init.Range.autoHideTime * 60000)          //1분 60000초
        }
    }
}
//---------------------------------------------------------------------------------------------------------------- Preview 화면 제어
function ctrlPreview(flag) {
    if (flag == true) {
        init.q.preview = 1;
        if ($('.previewArea')[0].innerHTML == "")
            createDOM('preview')
        else
            ui()
    } else {
        init.q.preview24 = 0;
        init.q.preview = 0;
        $('.previewArea').html('')
        resizeWindow(view)
    }
}
function togglePreview() {
    if (init.q.preview == 1)
        ctrlPreview(1)
    else
        ctrlPreview(0)
}
//---------------------------------------------------------------------------------------------------------------- 중복 체크박스 값 처리
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
}
//---------------------------------------------------------------------------------------------------------------- 데이터 출력 순서 얻기
function getOrder(selector, container) {
    var order = [];
    $(selector, container).each(function () {
        order.push(this.id);
    });
    return order;
}
//---------------------------------------------------------------------------------------------------------------- 공유키 생성
function createKeys() {
    var ui = copyObject(init)
    var del = ['Lang', 'fTime', 'fTarget', 'fRPS', 'fHd', 'fBody', 'resolution', 'overlayBg', 'overlayBgImg', 'overlayBgSize', 'overlayBgRepeat', 'backupDate', 'autoHide', 'tooltips', 'toast']

    for (var i in ui) {
        if (i != 'Color' && i != 'Range' && i != 'q' && i != 'Order' && i != 'ColData')
            delete ui[i]
    }
    for (var i in del)
        delete ui.q[del[i]]
    delete ui.Range.autoHideTime
    for (var i in ui.ColData) {
        delete Object.assign(ui.ColData[i], { ['_']: ui.ColData[i]['DPS'] })['DPS'];
        delete Object.assign(ui.ColData[i], { ['__']: ui.ColData[i]['HPS'] })['HPS'];
        delete ui.ColData[i].tt
    }
    for (var j in Object.keys(init.ColData)) {
        var key = Object.keys(init.ColData)[j]
        for (var i in ui.Order.DPS) {
            if (ui.Order.DPS[i] == key)
                ui.Order.DPS[i] = j
        }
        for (var i in ui.Order.HPS) {
            if (ui.Order.HPS[i] == key)
                ui.Order.HPS[i] = j
        }
    }
    var tmp = new Object(), a = 0, b = 0
    for (var i in ui) {
        tmp[a] = {}
        for (var j in ui[i]) {
            tmp[a][b] = ui[i][j]
            b++
        }
        a++
    }
    return tmp
}//---------------------------------------------------------------------------------------------------------------- 공유키 적용
function applyKeys(data) {
    try {
        var obj = JSON.parse(data)
    } catch (e) {
        if (e instanceof SyntaxError) {
            if (data == '')
                callToast('noInput', 500, 3000)
            else
                callToast('notData', 500, 3000)
            return
        }
    }
    var a = 0, b = 0, key = ''  //적용할 데이터 
    var list = ["q", "Color", "Range"]
    for (var i in list) {
        key = Object.keys(init[list[i]])
        a = 0;
        for (var j in obj[i]) {
            init[list[i]][key[a]] = obj[i][j]
            a++
        }
    }
    key = Object.keys(init.ColData)
    for (var i in obj[4]) {
        var a = obj[4][i]
        init.ColData[key[b]].DPS = a['_']
        init.ColData[key[b]].HPS = a['__']
        b++
    }
    for (var i in obj[3]) {
        for (var j in obj[3][i])
            obj[3][i][j] = key[obj[3][i][j]]
    }
    key = Object.keys(obj[3])
    init.Order.DPS = copyObject(obj[3][key[0]])
    init.Order.HPS = copyObject(obj[3][key[1]])
    delete obj
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
//---------------------------------------------------------------------------------------------------------------- 컬러 피커 함수
function jsColorUpdate(jscolor) {
    init.Color[jscolor.valueElement.id] = jscolor.valueElement.value
    toggleRaidMode(init.q.preview24)
    //그래프 처리 
    ui()
}
// 파일 업로드 
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
//---------------------------------------------------------------------------------------------------------------- 동적 생성된 요소 재적용
function liReload() {
    jscolor.installByClassName("jscolor");
    $('li').unbind("click").bind("click", function () {
        var id = $(this).attr('id')
        //체크박스 
        if ($(this).find('input').prop('type') == 'checkbox') {
            if (!$(this).find('.switch').hasClass('hover')) {
                $(this).find('.switch').addClass('hover');
                $(this).find('input').prop('checked', true);
                //init에 값 변경
                if (id.indexOf('DPS-') > -1 || id.indexOf('HPS-') > -1) {
                    init.ColData[id.split('-')[1]][id.split('-')[0]] = 1
                    init.Order[id.split('-')[0]].push(id.split('-')[1])
                } else
                    init.q[id] = 1
            } else {
                $(this).find('.switch').removeClass('hover');
                $(this).find('input').prop('checked', false);
                //init에 값 변경
                if (id.indexOf('DPS-') > -1 || id.indexOf('HPS-') > -1) {
                    init.ColData[id.split('-')[1]][id.split('_')[0]] = 0
                    init.Order[id.split('-')[0]].splice(init.Order[id.split('-')[0]].indexOf(id.split('-')[1]), 1);
                } else
                    init.q[id] = 0
            }
            //드롭다운에서 바로 데이터를 적용해야 하는 체크값들 
            if ((id == 'pets' || id == 'hideName' || id == 'view24') && view != 'settings') {
                if (lastCombat != null)
                    update(lastDPS, lastHPS)
            }
            //중복체크 필터값 텍스트 변경 //직업필터 모서리 
            else if (id.indexOf('DPS_') > -1 || id.indexOf('HPS_') > -1) {
                duCheckMsg(id.slice(0, -2), 'format', id.slice(0, -2))
                //프리뷰값
            } else if (id == 'preview') {
                togglePreview()
            } else if (id == 'view24' && view == 'settings') {
                toggleRaidMode(init.q.view24)
            }
            else {
                if (id == 'ani') {
                    barSize.length = 0;  //초기화 
                    barSize = new Array();
                    view = 'ani'
                }
                toggleRaidMode(init.q.preview24)
            }
            return
        }
        //드롭다운 라디오
        else if ($(this).find('input').prop('type') == 'radio') {
            $(this).parent().find('li .switch').removeClass('hover')
            $(this).find('.switch').addClass('hover');
            //init 값 변경
            init.q[$(this).find(':radio').attr('name')] = $(this).find(':radio').val()
            $('li#' + $(this).find(':radio').attr('name') + ' .gVal').text($(this).text())

            // 언어 변경부 
            if ($(this).find(':radio').attr('name') == 'Lang') {
                lang = init.q.Lang
                createDOM('page', l.Settings)
                $('nav[name=settings]').find('table td').text(l.NAV.settings.tt[lang])
            }
            else if ($(this).find(':radio').attr('name') == 'palette')
                button('tab_graph', 'color')

            toggleRaidMode(init.q.preview24)
            return
        }
        //이동
        else {
            if ($(this).hasClass('radio')) {
                $('.dropdown').fadeIn(0);
                $('#blackBg').fadeIn(150);
                if (id == 'palette')
                    var obj = l.Graph[init.q.palette][id]
                else if ($(this).attr('p').indexOf('_') > -1) {
                    var parent = $(this).attr('p').split('_')[0]
                    var tabName = $(this).attr('p').split('_')[1]
                    //탭 내부의 라디오 버튼 처리 
                    var obj = l[parent]['tab_' + tabName].inner[id]
                } else
                    var obj = l[$(this).attr('p')][id]
                createDOM('dr_radio', obj, id)
            } else
                button($(this).attr('id'))
            return
        }
    });
    //프리뷰 버튼
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
    //CSS
    $('[name=swapBtn], .UBtn, .DBtn, .sendBtn, .removeBtn, .tab_box, button').on({
        mouseover: function () {
            $(this).css({ color: '#' + init.Color.accent })
        },
        mouseleave: function () {
            $(this).css({ color: '' })
        }
    })
    //파일 업로드 
    $('button').unbind("click").bind("click", function () {
        $('input[type=file]').click()
    })
    $('input[name=uploadFile]').change(function () {
        loadPreview(this)
        return
    });
    //모바일 키보드 처리 
    $('.jscolor').unbind("click").bind('click', function () {
        if (init.q.keyboard) {
            $(this).blur()
            ctrlPreview(1)
        } else
            ctrlPreview(0)
    });
    $('.jscolor').unbind("focusout").bind('focusout', function () {
        ctrlPreview(1)
    });
    //탭버튼 처리 
    $('.tab_box').unbind("click").bind("click", function () {
        $('.tabArea').find('.tab_title').removeClass('on')
        $('.tabArea').find('.tab_underBar').removeClass('on_bar')
        $('.tabArea').find('.tab_title').css('color', '#bdbdbd')
        $(this).find('.tab_title').addClass('on')
        $(this).find('.tab_underBar').addClass('on_bar')
        $('.scrollArea').scrollTop(0)
        //탭 페이지 처리 
        button($(this).attr('name'), $(this).attr('p'))
        return
    });
    //줄임말 삭제
    $('.removeBtn').unbind("click").bind("click", function () {
        delete init.Alias[$(this).parents('li').attr('name')]
        $(this).parents('li').remove()
        return
    });
    //줄임말 인풋 두개 등록
    $('.gTitle.sendBtn').unbind("click").bind("click", function () {
        var key = $('#in_abbOld').val()
        var val = $('#in_abbNew').val()
        if (key != '' && val != '' && key != undefined && val != undefined) {
            init.Alias[key] = val
            $('ul.remove').append(createElement('li_remove_list', null, key, val))
            $('#in_abbOld, #in_abbNew').val('')    //등록 후 입력필드 초기화 
            liReload()
            callToast('ok', 500, 3000)
        } else
            callToast('noInput', 500, 3000)
        ui()
        return
    });
    //입력필드 전송버튼 
    $('.ft.sendBtn').unbind("click").bind("click", function () {
        var input = $(this).parent().find('.inputEff')
        var id = $(this).parent().find('.inputEff').attr('id').split('_')[1]
        if (id == 'apply') {
            applyKeys(input.val())
        } else {
            if (input.val() != '') {
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
    //전체 선택
    $("#in_share").unbind("click").bind("click", function () {
        $(this).select()
    });
    //입력필드 엔터로 전송 
    $(".inputEff:not(.jscolor)").unbind("keydown").bind("keydown", function (e) {
        if (e.keyCode == 13) {
            var id = $(this).attr('id').split('_')[1]
            var input = $(this).val()

            if (id == 'abbOld' || id == 'abbNew') {  //줄임말 입력시 
                var key = $('#in_abbOld').val()
                var val = $('#in_abbNew').val()
                if (key != '' && val == '') {
                    $(this).blur()
                    $('#in_abbNew').focus()
                }
                else if (key == '' && val != '') {
                    $(this).blur()
                    $('#in_abbOld').focus()
                }
                else if (key != '' && val != '') {
                    init.Alias[key] = val
                    $('ul.remove').append(createElement('li_remove_list', null, key, val))
                    $('#in_abbOld,#in_abbNew').val('')    //등록 후 입력필드 초기화 
                    liReload()
                    callToast('ok', 500, 3000)
                } else
                    callToast('noInput', 500, 3000)
            }
            else if (id.indexOf('f') > -1) {     //폰트 입력 시 
                if (input != '') {
                    init.q[id] = input;
                    $('[name=' + id + ']').find('.gVal').text(input)
                    ui()
                    $(this).blur()
                    $(this).val('')
                    callToast('submit', 500, 3000)
                } else
                    callToast('noInput', 500, 3000)
            }
            else if (id == 'apply') {         //커스텀 입력시 
                applyKeys(input)
                $(this).blur()
                $(this).val('')
            }
        }
        ui()
        return
    });
    //슬라이더 처리 
    $('input[type=range]').unbind("input").bind("input", function (e) {
        var id = $(this).parents('li').attr('id')
        init.Range[id] = parseInt($(this).val())
        var unit = '%'
        if (id.indexOf('size') > -1) {
            if (id == 'sizeDPSTable' || id == 'sizeHPSTable')
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
    //업버튼 처리 
    $(".UBtn").unbind("click").bind("click", function () {
        var srcDiv = $(this).parents(".listBox");
        var tgtDiv = srcDiv.prev();
        if (tgtDiv[0]) tgtDiv.before(srcDiv);
        init.Order[$(this).parents(".listBox").attr('flag')] = getOrder(".listBox", $(".scrollArea")[0]);
        $('.scrollArea').animate({ scrollTop: sVal.now - 62 }, 150);
        update(previewDPS, previewHPS)
        return
    });
    //다운버튼 처리 
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
//---------------------------------------------------------------------------------------------------------------- 버튼 모음
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
                    lang = init.q.Lang   //언어
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
                    lang = init.q.Lang
                    button('settings')
                    $('.scrollArea').scrollTop(0)
                }, 100)
            }
            break
        //메인으로 돌아가기 
        case 'home':
            button('Back', 'main')
            $('.dropdown, #blackBg').fadeOut(0);
            break
        //전체화면모드
        case 'fullscreen':
            toggleFullScreen()
            break
        //캡처, 전투집계종료
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
            }
            else
                webs.overlayAPI(id)
            break
        //히스토리 진입
        case 'History':
            view = 'history'
            $('[name=main], [name=notice]').fadeOut(0)
            $('[name=history]').fadeIn(0)
            resizeWindow(view)
            $('nav[name=history]').find('table td').text(l.NAV.history.tt[lang])
            $('.ac').css('color', '#' + init.Color.accent)
            break
        //뒤로 가기
        case 'Back':
            //메인을 향해 뒤로 가기
            if (direction == 'main') {
                view = 'main'
                //이전 설정 페이지의 스크롤 위치 초기화 
                sVal.old = 0; sVal.pre = 0
                $('[name=history], [name=settings]').fadeOut(0)
                if (lastCombat != null)
                    $('[name=main]').fadeIn(0)
                else
                    $('nav[name=main],[name=notice]').fadeIn(0)
                //배경 화살표    
                if (init.q.arrow)
                    $('#wrap').css({ 'background-image': 'url(./images/handle.svg)' })
                //init 값 로컬 스토리지에 저장, 프리뷰, 스크롤락 재시작시 0으로 
                ctrlPreview(0)
                localStorage.setItem('Mopi2_HAERU', JSON.stringify(init))
                $('.previewArea, .tabArea, .scrollArea').html('') // 초기화 
                if (lastCombat != null) {
                    update(lastDPS, lastHPS)
                    hiddenTable()
                } else {
                    //데이터가 없다면 설정으로 변경된 정보 다시 초기화
                    initOverlay()
                }
            } break
        //설정 진입
        case 'settings':
            ctrlPreview(0)
            sVal.pre = 0
            view = 'settings'//스크롤 영역 처리     
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
        //페이지 처리 
        case 'Data': case 'Design': case 'Overlay': case 'Tool':
            ctrlPreview(0)
            //첫 진입시에만 스크롤값 저장 
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
        //세부 페이지 생성
        case 'abbset': case 'font': case 'custom':
            ctrlPreview(0)
            sVal.pre = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings]').find('table td').text(l[l.back[id]][id].tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "', 'Back')")
            createDOM('page', l[id], id)
            if (id == 'abbset')
                createDOM('list_remove', init.Alias)
            else if (id == 'custom') {
                $('#in_share').val(JSON.stringify(createKeys()))
            }
            resizeWindow(view)
            break;
        //탭 페이지 생성 
        case 'format': case 'order': case 'color': case 'opacity': case 'size': case 'advanced': case 'cells': case 'shape':
            if (id != 'format')
                ctrlPreview(1)
            sVal.pre = sVal.now
            $('.scrollArea').scrollTop(0)
            $('nav[name=settings]').find('table td').text(l[l.back[id]][id].tt[lang])
            $('nav[name=settings] [name=Back]').attr('onclick', "button('" + l.back[id] + "', 'Back')")
            button(createDOM('tab', l[id]), id)
            resizeWindow(view)
            break
        //탭 버튼 클릭 처리
        case 'tab_DPS': case 'tab_HPS': case 'tab_nav': case 'tab_table': case 'tab_graph': case 'tab_width': case 'tab_align': case 'tab_padding':
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
        //중복 체크 처리 
        case 'DPSfilter': case 'HPSfilter':
            $('.dropdown').fadeIn(0);
            $('#blackBg').fadeIn(150);
            createDOM('dr_checkbox', l.format['tab_' + id.split('f')[0]].inner[id].dr)
            break

    }
}
//---------------------------------------------------------------------------------------------------------------- dom 동적 생성

function createDOM(type, obj, id) {
    var html = ''
    switch (type) {
        case 'preview':
            if (init.q.preview == 1) {
                $('.previewArea').html('<div><nav name="main"><table name="ACT_2line"><tr><td rowspan="2" name="time">00:00</td><td name="target"></td></tr><tr><td name="rps"></td></tr></table><table name="ACT_1line" style="display:none;"><tr><td name="time">00:00</td><td name="target"></td><td name="rps"></td></tr></table><div class="right btn_wrap" style="top:0"><div name="Capture" class="btn flex" style="display: none"><i class="material-icons">camera</i></div><div name="History" class="btn flex" style="display: none" ><i class="material-icons">history</i></div><div name="RequestEnd" class="btn flex" style="display: none" ><i class="material-icons">timer_off</i></div><div name="More" class="btn flex"><input type="checkbox" /><i class="material-icons">more_vert</i></div></div></nav><div name="main_P"></div> <table id="preview24"><tr><td style="color:rgba(189,189,189,.5); font-size:1.2rem">' + l.advanced.tab_table.inner.view24.tt[lang] + '</td><td><div class="switch"><div class="toggle"></div></div><input type="checkbox"/></td></tr></table></div>')
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
                $('.scrollArea').html('') // 초기화 
            else
                $('.tabArea, .scrollArea').html('') // 초기화 
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
            $('.tabArea, .scrollArea').html('') // 초기화 
            for (var i in obj)
                $('.tabArea').append(createElement(obj[i].e, obj[i], i))
            //진입 시 첫 탭 열리도록
            $('.tabArea :first-child').find('.tab_title').addClass('on')
            $('.tabArea :first-child').find('.tab_underBar').addClass('on_bar')
            return $('.tabArea :first-child').attr('name')
        case 'list_remove':
            var ul = $('<ul class="remove group shadow">')
            ul.append('<li class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + l.abbset.in_abbOld.m[lang].split('(')[0] + '</td></tr><tr><td class="gVal ac">= ' + l.abbset.in_abbNew.m[lang] + '</td></tr></table></li>')
            for (var i in obj)
                ul.append(createElement('li_remove_list', null, i, obj[i]))
            $('.scrollArea').append(ul)
            break
        case 'list_order':
            $('.scrollArea').html('') // 초기화 
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
//---------------------------------------------------------------------------------------------------------------- dom 요소 모음 
function createElement(type, obj, id, flag) {
    var on = '', html = ''
    switch (type) {
        case 'dr_checkbox':         //드롭다운 체크박스
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id=' + id + '>' + obj.tt[lang] + '<input type="checkbox"/><div class="switch ' + on + '"><div class="toggle"></div></div></li>'
        case 'dr_radio':            //드롭다운 라디오 
            for (var i in obj.m) {
                if (i == init.q[id]) on = 'hover'
                else on = ''
                html += '<li>' + obj.m[i][lang] + '<input type="radio" name="' + id + '" value="' + i + '"/><div class="switch ' + on + '"><div class="toggle"></div></div></li>'
            } return html
        case 'dr_link':             //드롭다운 이동하기
            return '<li id=' + id + '>' + obj.tt[lang] + '</li>'
        case 'tab_btn':             //탭 버튼
            return '<div name="' + id + '" p="' + obj.p + '" class="tab_box" style="width:' + obj.w + '%"><div class="tab_title">' + obj.tt[lang] + '</div><div class="tab_underBar"></div></div>'
        case 'li_2line':            //리스트 아이콘/타이틀/설명
            return '<li id="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_2line_empty':      //리스트 아이콘/타이틀/설명빈칸
            return '<li id="' + id + '" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac"></td></tr></table></li>'
        case 'li_link':             //리스트 이동 
            return '<li id="' + id + '"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td class="gIcon"><i class="material-icons">arrow_forward</i></td></tr></table></li>'
        case 'li_radio':            //리스트 라디오 호출 
            return '<li id="' + id + '" class="radio" p="' + obj.p + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + obj.m[init.q[id]][lang] + '</td></tr></table></li>'
        case 'li_checkbox':         //리스트 체크박스 
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id=' + id + '><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div></td></tr></table><input type="checkbox"/></li>'
        case 'li_2line_checkbox':   //리스트 아이콘/타이틀/설명/체크박스 (데이터 ColData 전용)
            if (init.ColData[id][flag] != undefined && init.ColData[id][flag] == true) on = 'hover'
            else on = ''
            return '<li id="' + flag + '-' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '</td><td rowspan="2"  style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div><input type="checkbox"/></td></tr><tr><td class="gVal ex">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_2line_checkbox_normal':        //리스트 아이콘/타이틀/설명/체크박스 
            if (init.q[id] != undefined && init.q[id] == true) on = 'hover'
            else on = ''
            return '<li id="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td rowspan="2"  style="padding:0 1.4rem"><div class="switch ' + on + '"><div class="toggle"></div></div></td></tr><tr><td class="gVal ac">' + obj.m[lang] + '</td></tr></table><input type="checkbox"/></li>'
        case 'li_2btn':                 //화살표 위아래 2버튼 
            return '<li style="cursor:default" id="' + id + '" flag="' + flag + '"class="listBox"><table><tr><td class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt + '</td><td class="UBtn"><i class="material-icons">arrow_upward</i></td><td style="padding:0 1.4rem"></td><td class="DBtn"><i class="material-icons">arrow_downward</i></td></tr></table></li>'
        case 'li_box':                  //텍스트 버튼 (설정 전 주의사항)
            return '<li class="li_box"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ex" style="padding-right:1.4rem; text-align:justify">' + obj.m[lang] + '</td></tr></table></li>'
        case 'li_text':                 //텍스트 입력 
            return '<li class="li_text" style="border:0"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td style="width:100%; padding-right:1.4rem"><div class="inputBox"><input class="inputEff" type="text" placeholder="' + obj.m[lang] + '" id="' + id + '"><span class="focus-border"></span></div></td></tr></table></li>'
        case 'li_full_btn':             //100% 가로폭 확인 버튼
            return '<li class="gTitle sendBtn" style="text-align:center; border-top:solid .1rem rgba(255,255,255,.07)">' + obj.tt[lang] + '</li>'
        case 'li_remove_list':          //삭제 가능한 div 리스트
            return '<li class="li_box" name="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + id + '</td><td rowspan="2" class="gIcon removeBtn"><i class="material-icons">remove_circle_outline</i></td></tr><tr><td class="gVal ac">= ' + flag + '</td></tr></table></li>'
        case 'li_pn':                   //2line no click 
            if (id == 'share' || id == 'apply') var _ = obj.m[lang]
            else var _ = init.q[id]
            return '<li class="li_box" name="' + id + '"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">arrow_right</i></td><td class="gTitle">' + obj.tt[lang] + '</td></tr><tr><td class="gVal ac">' + _ + '</td></tr></table></li>'
        case 'li_text_inbtn':           //텍스트 필드 옆에 전송 버튼 있는 것 
            return '<li class="li_text" style="border:0"><table><tr><td rowspan="2" class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td style="width:100%;"><div class="inputBox"><input class="inputEff" type="text" placeholder="' + obj.m[lang] + '" id="' + id + '"><span class="focus-border"></span></div></td><td rowspan="2" class="gIcon ft sendBtn"><i class="material-icons">send</i></td></tr></table></li>'
        case 'li_color':                //인풋 컬러피커 
            var input = $('<input id = "' + id + '" value="' + init.Color[id] + '" style="text-align:center; ime-mode:disabled" maxlength="6" onKeyUp="this.value=this.value.toUpperCase();">')
            input.addClass("shadow inputEff jscolor {onFineChange:'jsColorUpdate(this)', width:240, height:160, position:'bottom', borderColor:'#212121', insetColor:'#161616', backgroundColor:'#212121'}")
            var li = '<li id="' + id + '" class="li_box"><table><tr><td class="gIcon"><i class="material-icons">' + obj.i + '</i></td><td class="gTitle">' + obj.tt[lang] + '</td><td style="padding:0 1.4rem">' + input.clone().wrapAll("<div/>").parent().html() + '</td></tr></table></li>'
            return li
        case 'li_slider':               //인풋 랜지 슬라이더 
            var unit = '%'
            if (id.indexOf('size') > -1) {
                if (id == 'sizeDPSTable' || id == 'sizeHPSTable')
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
//---------------------------------------------------------------------------------------------------------------- UI 재적용
function ui() {
    if (window.innerWidth % 5 != 0 && init.q.view24 && lastCombat != null && lastCombat.partys > 9) {
        var w = window.innerWidth % 5
        for (var i = 0; i < w; i++)
            $('.rRow .rCell:nth-child(' + parseInt(i + 1) + ')').css('width', '-webkit-calc(20% + 1px)')
    }
    var img = ''
    if (init.q.overlayBg)
        img = init.q.overlayBgImg

    //글자 크기, 배경 적용
    $('html').css({
        'font-size': init.q.resolution,
        'background-image': 'url(' + img + ')',
        'background-size': init.q.overlayBgSize,
        'background-repeat': init.q.overlayBgRepeat
    })

    //강조색 적용부분
    $('.ac, .tab_title.on, nav[name=settings] i, input[type="range"]').css('color', '#' + init.Color.accent)
    $('.on_bar, .focus-border, .toggle').css('background', '#' + init.Color.accent)
    $('.switch').css('border-color', '#' + init.Color.accent)

    if (init.q.preview24)
        $('#preview24 td:first-child').css('color', '#' + init.Color.accent)

    //내비게이션 배경 
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

    //내비게이션 배경색/투명도/높이
    $('nav[name=main], nav[name=history]').css({
        background: bg,
        color: oHexColor(init.Color.accent, parseFloat(init.Range.accent / 100)),
        height: parseFloat(init.Range.sizeNav / 10) + 'rem',
        'background-size': parseFloat(init.Range.sizePattern / 10) + 'rem ' + parseFloat(init.Range.sizePattern / 10) + 'rem',
        'background-repeat': 'repeat'
    })
    if (init.Range.navBg != 100)
        $('.btn_wrap').css('background', 'transparent')

    //내비게이션 테두리 설정 
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
    //모서리 설정    
    if (init.Range.sizeRadius != 0) {
        $('nav[name=main], nav[name=history]').css({
            'border-top-left-radius': parseFloat((init.q.rd_navTL * init.Range.sizeRadius) / 10) + 'rem ',
            'border-top-right-radius': parseFloat((init.q.rd_navTR * init.Range.sizeRadius) / 10) + 'rem ',
            'border-bottom-left-radius': parseFloat((init.q.rd_navBL * init.Range.sizeRadius) / 10) + 'rem ',
            'border-bottom-right-radius': parseFloat((init.q.rd_navBR * init.Range.sizeRadius) / 10) + 'rem '
        })
    }
    if (init.Range.sizeRadiusTable != 0) {
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
    }

    if (init.Range.sizeRadiusGraph != 0) {
        $('.bar, .mini div').css({
            'border-top-left-radius': parseFloat((init.q.rd_graphTL * init.Range.sizeRadiusGraph) / 10) + 'rem ',
            'border-top-right-radius': parseFloat((init.q.rd_graphTR * init.Range.sizeRadiusGraph) / 10) + 'rem ',
            'border-bottom-left-radius': parseFloat((init.q.rd_graphBL * init.Range.sizeRadiusGraph) / 10) + 'rem ',
            'border-bottom-right-radius': parseFloat((init.q.rd_graphBR * init.Range.sizeRadiusGraph) / 10) + 'rem '
        })
    }

    //내비게이션 아이콘 
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


    //내비게이션 시간 색/투명도/ 폰트 적용 
    $('[name=time]').css({
        color: oHexColor(init.Color.accent, parseFloat(init.Range.navTime / 100)),
        'font-family': "'" + init.q.fTime + "', 'DS-Digital', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeTime / 10) + 'rem',
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
    //내비게이션 글자 색/투명도/폰트    
    $('[name=target]').css({
        color: oHexColor(init.Color.target, parseFloat(init.Range.target / 100)),
        'font-family': "'" + init.q.fTarget + "', 'Segoe UI', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeTarget / 10) + 'rem'
    })
    $('[name=rps]').css({
        color: oHexColor(init.Color.rps, parseFloat(init.Range.rps / 100)),
        'font-family': "'" + init.q.fRPS + "', 'Roboto Condensed', 'Segoe UI', 'sans-serif'",
        'font-size': parseFloat(init.Range.sizeRPS / 10) + 'rem'
    })
    //2줄일때 
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
    //1줄일 때 
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

    //글자 굵게
    if (init.q.boldYOU) var boldYOU = 'bold'
    else var boldYOU = ''
    if (init.q.boldOther) var boldOther = 'bold'
    else var boldOther = ''

    //타 캐릭터 글자 
    $(':not(#YOU) .tableBody td, :not(#YOU).rCell .rName, :not(#YOU).rCell .rData').css({
        color: '#' + init.Color.tableOther,
        opacity: parseFloat(init.Range.tableOther / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-weight': boldOther,
        'font-size': parseFloat(init.Range.sizeBodyText / 10) + 'rem'
    })
    //내 캐릭터 글자
    $('#YOU .tableBody td, .myPet .tableBody td, #YOU.rCell .rName, #YOU.rCell .rData').css({
        color: '#' + init.Color.tableYOU,
        opacity: parseFloat(init.Range.tableYOU / 100),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
        'font-weight': boldYOU,
        'font-size': parseFloat(init.Range.sizeBodyText / 10) + 'rem'
    })
    $('.rName').css({
        'font-size': parseFloat(init.Range.sizeBodyText / 10) - 0.1 + 'rem'
    })
    //보조 글자 
    $(':not(#YOU) .tableBody td .ex').css({
        color: '#' + init.Color.tableExOther,
        opacity: parseFloat(init.Range.tableOther / 100),
    })
    $('#YOU .tableBody td .ex').css({
        color: '#' + init.Color.tableExYOU,
        opacity: parseFloat(init.Range.tableYOU / 100),
    })
    //레이드 모드 
    $(':not(#YOU).rCell').css({
        'font-weight': boldOther,
        color: '#' + init.Color.tableOther,
        background: oHexColor(init.Color.tableBg, parseFloat(init.Range.view24BgOther / 100)),
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
    })
    $('#YOU.rCell').css({
        'font-weight': boldYOU,
        color: '#' + init.Color.tableYOU,
        background: oHexColor(init.Color.accent, parseFloat(init.Range.view24BgYOU / 100)),
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
        'font-family': "'" + init.q.fBody + "', 'Segoe UI', 'sans-serif'",
    })

    $('.rRow:first-child .rCell').css({
        'border-top': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })
    $('.rRow .rCell:last-child').css({
        'border-right': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })

    $('.rCell .rIdx').css({
        opacity: parseFloat(init.Range.bar / 100),
    })
    //바디 아이콘 크기 
    $('.cell_0 img').css({
        width: parseFloat(init.Range.sizeBodyIcon / 10) + 'rem',
    })
    $('.tableBody td .ex').css({
        'font-size': parseFloat((init.Range.sizeBodyText - 1) / 10) + 'rem'
    })

    //헤더 간격
    $('.tableHeader').css({
        'margin': parseFloat(init.Range.sizeHdGap / 10) + 'rem 0'
    })
    //헤더 배경색, 폰트크기
    $('.tableHeader td').css({
        background: oHexColor(init.Color.tableHd, parseFloat(init.Range.tableHd / 100)),
        color: oHexColor(init.Color.tableHdText, parseFloat(init.Range.tableHdText / 100)),
        'font-family': "'" + init.q.fHd + "', 'Roboto Condensed', 'sans-serif'",
        height: parseFloat(init.Range.sizeHd / 10) + 'rem',
        'font-size': parseFloat(init.Range.sizeHdText / 10) + 'rem',
    })
    //테이블 바디 라인 
    $('.tableWrap').css({
        'border-bottom': parseFloat(init.Range.sizeLine / 10) + 'rem solid ' + oHexColor(init.Color.tableLine, parseFloat(init.Range.tableLine / 100)),
    })
    //테이블 바디 배경
    $('.barBg').css({
        background: oHexColor(init.Color.tableBg, parseFloat(init.Range.tableBg / 100)),
    })

    //그래프 높이, 투명도
    for (var i in l.size.tab_graph.inner) {
        $('.' + i.split('_')[1]).css({
            height: parseFloat(init.Range[i] / 10) + 'rem',
            'margin-top': parseFloat((init.Range.sizeBody - init.Range[i]) / 10) + 'rem',
            opacity: parseFloat(init.Range[i.split('_')[1]] / 100)
        })
    }
    //그래프 배경 높이
    $('.tableWrap').css({
        height: parseFloat(init.Range.sizeBody / 10) + 'rem',
        'margin-top': parseFloat((init.Range.sizeBody - init.Range.sizeBody) / 10) + 'rem',
    })
    //보조그래프 위치
    $('.pet, .ds, .oh').css({
        float: init.q.bar_position
    })

    //셀 너비 
    for (var i = 0; i < 7; i++) {
        $('.cell_' + i).css({
            'width': parseFloat(init.Range['sizeCell' + i] / 10) + 'rem',
            'text-align': init.q['alignCell' + i],
            'padding': '0 ' + parseFloat(init.Range['sizePdCell' + i] / 10) + 'rem',
        })
    }

    //테이블 간격
    $('#DPSHeader, #DPSHeader_P').css({
        'margin-top': parseFloat(init.Range.sizeDPSGap / 10) + 'rem',
    })
    $('#HPSHeader, #HPSHeader_P').css({
        'margin-top': parseFloat(init.Range.sizeHPSGap / 10) + 'rem',
    })

    if (!init.q.preview24 && view == 'settings') {
        //미리보기에서 테이블 인원수 체크
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
    //개별 이름 숨기기
    if (lastCombat != null && lastDPS.isActive == false) {
        $('#DPSBody, #HPSBody').find('.cell_0').css('cursor', 'pointer')
        $('#DPSBody, #HPSBody').find('.cell_0').on({
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
                $(this).parent().find('.cell_1').toggleClass('hidden')
            }
        });
    } else
        $('#DPSBody, #HPSBody').find('.cell_0').css('cursor', 'default')
}
