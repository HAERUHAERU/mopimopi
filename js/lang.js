l = {
    Notice: {
        strong: {
            KR: '<b style="color:#ffea00">모피모피<br>놀라운 커스터마이징을 경험하세요!</b><br><br>모바일 환경에서는 <b>크롬 또는 사파리</b> 앱을 권장합니다.<br>PC 유저는 <b>오버레이 프로세스 관리자 ❯ 드래그 영역 사용 체크</b> 필수입니다.<br><br><font style="color:cyan">FFXIV_ACT_Plugin.dll 2.0.2.3 버전 이상을 사용하는 유저는<br>ACT → Plugins → FFXIV Settings Tab → <b>Disable Combine Pets with Owner</b> 옵션을 체크합니다.</font><br><br>Please select <b>your language</b> : <a href="#" id="KR" onclick="initOverlay(this.id)">한국어</a> ❘ <a href="#" id="EN" onclick="initOverlay(this.id)">English</a> ❘ <a href="#" id="JP" onclick="initOverlay(this.id)">日本語</a> ❘ <a href="#" id="CN" onclick="initOverlay(this.id)">中國語</a> ❘ <a href="#" id="DE" onclick="initOverlay(this.id)">Deutsch</a> ❘ <a href="#" id="FR" onclick="initOverlay(this.id)">French</a><br>',
            EN: '<b style="color:#ffea00">MopiMopi<br>Experience the Incredible Customizing!</b><br><br><b>Chrome or Safari</b> apps are recommended for mobile environment.<br>PC Users : <b>OverlayProc ❯ MUST Check "AppRegion"</b> to limit the draggable area.<br><br><font style="color:cyan">If you are using FFXIV_ACT_Plugin version 2.0.2.3 or later,<br>ACT → Plugins → FFXIV Settings Tab → <b>Check Disable Combine Pets with Owner</b>.</font><br><br>Please select <b>your language</b> : <a href="#" id="KR" onclick="initOverlay(this.id)">한국어</a> ❘ <a href="#" id="EN" onclick="initOverlay(this.id)">English</a> ❘ <a href="#" id="JP" onclick="initOverlay(this.id)">日本語</a> ❘ <a href="#" id="CN" onclick="initOverlay(this.id)">中國語</a> ❘ <a href="#" id="DE" onclick="initOverlay(this.id)">Deutsch</a> ❘ <a href="#" id="FR" onclick="initOverlay(this.id)">French</a><br>'
        },
        tip: {
            KR: '[OFFICIAL] MopiMopi ver.210401 / 해루@모그리',
            EN: '[OFFICIAL] MopiMopi ver.210401 / HAERU@Moogle (KR)'
        },
        update: {
            KR: '<div name="row"><div class="c">04/01</div><div class="m">[Matthew Smith/Gmail] 축약어를 변경함<Br>(RD → Total DPS, RH → Total HPS, MD → My DPS, MH → My HPS)</div></div><div name="row"><div class="n">01/01</div><div class="m">★★★ 2021년에도 모피모피와 함께! 새해 복 많이 받으세요! ★★★</div></div>',
            EN: '<div name="row"><div class="c">Apr 1</div><div class="m">[Matthew Smith/Gmail] Change Abbreviations<Br>(RD → Total DPS, RH → Total HPS, MD → My DPS, MH → My HPS)</div></div><div name="row"><div class="n">Jan 1</div><div class="m">★★★ 2021 Best wishes for a Happy New Year! ★★★</div></div>'
        }
    },
    msg: {
        comma: {
            m: {
                KR: ", ",
                JP: "、",
                EN: ", ",
                FR: ", ",
                DE: ", ",
                CN: "，",
            }
        },
        overlayBg: {
            m: {
                KR: "다음 확장명을 가진 파일만 허용합니다: png, jpg, jpeg, gif.",
                JP: "次の形式のファイルしか入力できません:png, jpg, jpeg, gif。",
                EN: "Only files with the following extensions are allowed: png, jpg, jpeg, gif.",
                FR: "Seuls les fichiers avec les extensions suivantes sont acceptés : png, jpg, jpeg, gif.",
                DE: "Es sind nur Dateien mit den folgenden Endungen erlaubt: png, jpg, jpeg, gif.",
                CN: "只能使用以下文件格式: png，jpg，jpeg，gif。",
            }
        },
        Capture: {
            m: {
                KR: "캡쳐 파일은 ACT 폴더 하위에 있는 Screenshot 폴더에서 확인할 수 있습니다.",
                JP: "ACTのスクショトはACTフォルダの中のScreenshotフォルダで確認できます。",
                EN: "The capture file can be found in the Screenshot folder of your ACT directory.",
                FR: "Le screenshot peut être trouvé dans le répertoire Screenshot d\'ACT.",
                DE: "Du findest den aufgenommenen Screenshot in deinem ACT-Ordner unter ScreenShot.",
                CN: "截图可以在ACT目录下的Screenshot文件夹中找到。",
            }
        },
        submit: {
            m: {
                KR: "변경 사항을 적용했습니다.",
                JP: "変更事項を適応しました。",
                EN: "The change applied.",
                FR: "La modification a été appliquée.",
                DE: "Einstellungen wurden übernommen.",
                CN: "更改已应用。",
            }
        },
        ok: {
            m: {
                KR: "등록했습니다.",
                JP: "登録しました。",
                EN: "Registered.",
                FR: "Enregistré.",
                DE: "Registriert.",
                CN: "已登录。",
            }
        },
        hiddenTable: {
            m: {
                KR: "대기 모드로 전환합니다.",
                JP: "待機モードに転換します。",
                EN: "The overlay switches to standby mode.",
                FR: "L\'overlay passe en mode veille.",
                DE: "Das Overlay wurde in den Standby versetzt.",
                CN: "切换到待机模式。",
            }
        },
        initConfirm: {
            m: {
                KR: "설정에 대한 모든 변경 사항이 기본값으로 복원되고 개인 데이터가 삭제됩니다. 초기화를 진행하시겠습니까?",
                JP: "設定のよるすべての変更を基本値に戻し、個人データを削除します。初期化を進行しますか？",
                EN: "Any changes to the settings will be restored to their defaults and your personal data will be deleted. Do you want to proceed with the initialization?",
                FR: "Toutes les modificationsd des différents paramètres seront remis à zéro et vos données personnelles seront effacées. Voulez-vous lancer la réinitialisation ?",
                DE: "Alle Einstellungen werden zurückgesetzt. Deine persönlichen Einstellungen gehen unwiderruflich verloren! Möchtest du fortfahren?",
                CN: "所有设置將恢复到默认值，以及个人数据会被删除，请问要继续初始化吗？",
            }
        },
        init: {
            m: {
                KR: "초기화를 완료했습니다.",
                JP: "初期化を完了しました。",
                EN: "The initialization completed successfully.",
                FR: "Initialisation terminée avec succès.",
                DE: "Erfolgreich initialisiert.",
                CN: "初始化完成。",
            }
        },
        backup: {
            m: {
                KR: "백업을 완료했습니다.",
                JP: "バックアップを完了しました。",
                EN: "The backup completed successfully.",
                FR: "Sauvegarde réalisée avec succès.",
                DE: "Backup erfolgreich erstellt.",
                CN: "备份完成。",
            }
        },
        restore: {
            m: {
                KR: "복원을 완료했습니다.",
                JP: "復元を完了しました。",
                EN: "The restore completed successfully.",
                FR: "Restauration terminée avec succès.",
                DE: "Das Backup wurde erfolgreich wiederhergestellt.",
                CN: "还原完成。",
            }
        },
        noData: {
            m: {
                KR: "백업 데이터가 존재하지 않습니다.",
                JP: "バックアップデーターがありません。",
                EN: "The backup data does not exist.",
                FR: "Aucune sauvegarde présente.",
                DE: "Das Backup existiert nicht.",
                CN: "备份数据不存在。",
            }
        },
        noInput: {
            m: {
                KR: "입력값이 없습니다.",
                JP: "入力されたデータがありません。",
                EN: "There is no input value.",
                FR: "Il n\'y a pas de valeur d'entrée",
                DE: "Kein Eingabewert erkannt.",
                CN: "没有输入值。",
            }
        },
        notData: {
            m: {
                KR: "올바른 데이터 형식이 아닙니다.",
                JP: "正しいデータ形式ではありません。",
                EN: "Not a valid data type.",
                FR: "Type de donnée non valide.",
                DE: "Kein gültiger Datentyp.",
                CN: "不是有效的数据类型。",
            }
        }
    },
    NAV: {
        main: {
            tt: {
                target: {
                    KR: '모피모피　',
                    JP: 'MopiMopi　',
                    EN: 'MopiMopi　',
                    FR: 'MopiMopi　',
                    DE: 'MopiMopi　',
                    CN: "MopiMopi　",
                },
                rps: {
                    KR: '전투를 시작하세요.',
                    JP: '戦闘を始めてください。',
                    EN: 'Please start the combat.',
                    FR: 'Démarrez un combat.',
                    DE: 'Warte auf Kampf.',
                    CN: "请开始战斗。",
                }
            },
            dr: {
                pets: {
                    tt: {
                        KR: "소환수 데이터 합산하기",
                        JP: "ペットのデータを合算する",
                        EN: "Combine Pets with Owner",
                        FR: "Combiner les familiers aux propriétaires",
                        DE: "Charakter und Begleiter zusammenfassen",
                        CN: "召唤物与自身数据合并",
                    },
                    e: "dr_checkbox"
                },
                view24: {
                    tt: {
                        KR: "레이드 모드",
                        JP: "レイドモード",
                        EN: "Raid Mode",
                        FR: "Mode Raid",
                        DE: "Raid Modus",
                        CN: "副本模式",
                    },
                    e: "dr_checkbox"
                },
                hideName: {
                    tt: {
                        KR: "이름 숨기기",
                        JP: "名前を隠す",
                        EN: "Hide the Name",
                        FR: "Cacher le nom",
                        DE: "Namen ausblenden",
                        CN: "隐藏名称",
                    },
                    e: "dr_checkbox"
                },
                fullscreen: {
                    tt: d.fullscreen,
                    e: "dr_link"
                },
                settings: {
                    tt: d.settings,
                    e: "dr_link"
                }
            },
            btn: {
                Capture: {
                    m: d.Capture
                },
                History: {
                    m: {
                        KR: "히스토리<font class='ex'>　❙ 비전투시</font>",
                        JP: "ヒストリー<font class='ex'>　❙ 非バトル時</font>",
                        EN: "History<font class='ex'>　❙ When not in combat</font>",
                        FR: "Historique<font class='ex'>　❙ Si hors combat</font>",
                        DE: "Historie<font class='ex'>　❙ Wenn nicht im Kampf</font>",
                        CN: "历史<font class='ex'>　❙ 非战斗时</font>",
                    }
                },
                RequestEnd: {
                    m: {
                        KR: '전투 집계 종료',
                        JP: 'エンカウント終了',
                        EN: 'End Encounter',
                        FR: 'Terminer le combat',
                        DE: 'Stoppe den Kampf',
                        CN: "战斗统计结束",
                    }
                },
                More: {
                    m: d.More
                }
            }
        },
        history: {
            tt: {
                KR: '히스토리',
                JP: 'ヒストリー',
                EN: 'History',
                FR: 'Historique',
                DE: 'Historie',
                CN: "历史",
            },
            btn: {
                Back: {
                    m: d.Back
                },
                Capture: {
                    m: d.Capture
                }
            }
        },
        settings: {
            tt: d.settings,
            dr: {
                preview: {
                    tt: {
                        KR: "미리 보기",
                        JP: "プレビュー",
                        EN: "Preview",
                        FR: "Aperçu",
                        DE: "Vorschau",
                        CN: "预览",
                    },
                    e: "dr_checkbox"
                },
                keyboard: {
                    tt: {
                        KR: "키보드 잠금<font class='ex'>　❙ 모바일</font>",
                        JP: "キーボードロック<font class='ex'>　❙ モバイル</font>",
                        EN: "Keyboard Lock<font class='ex'>　❙ Mobile</font>",
                        FR: "Clavier bloqué<font class='ex'>　❙ Mobile</font>",
                        DE: "Tastatur sperren<font class='ex'>　❙ Handy</font>",
                        CN: "键盘锁<font class='ex'>　❙ 移动端</font>",
                    },
                    e: "dr_checkbox"
                },
                fullscreen: {
                    tt: d.fullscreen,
                    e: "dr_link"
                },
                home: {
                    tt: {
                        KR: "메인 화면으로 돌아가기",
                        JP: "メイン画面に戻る",
                        EN: "Back to Main Page",
                        FR: "Retour à la page principale",
                        DE: "Zurück zur Hauptseite",
                        CN: "返回主页",
                    },
                    e: "dr_link"
                }
            },
            btn: {
                Back: {
                    m: d.Back
                },
                More: {
                    m: d.More
                }
            }
        }
    },
    Settings: {
        Lang: {
            tt: {
                KR: "언어",
                JP: "言語",
                EN: "Language",
                FR: "Langue",
                DE: "Sprache",
                CN: "语言"
            },
            m: {
                KR: {
                    KR: "한국어",
                    JP: "한국어",
                    EN: "한국어",
                    FR: "한국어",
                    DE: "한국어",
                    CN: "한국어",
                },
                EN: {
                    KR: "English",
                    JP: "English",
                    EN: "English",
                    FR: "English",
                    DE: "English",
                    CN: "English",
                },
                JP: {
                    KR: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>",
                    JP: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>",
                    EN: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>",
                    FR: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>",
                    DE: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>",
                    CN: "日本語<font class='ex'>　❙ by Korea [모그리] 오후의홍차, 이카루가</font>"
                },
                CN: {
                    KR: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                    JP: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                    EN: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                    FR: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                    DE: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                    CN: "中國語<font class='ex'>　❙ by China [紫水栈桥] Rapis</font>",
                },
                DE: {
                    KR: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>",
                    JP: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>",
                    EN: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>",
                    FR: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>",
                    DE: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>",
                    CN: "Deutsch<font class='ex'>　❙ by Chaos [Phoenix] Shunittseru Tohka</font>"
                },
                FR: {
                    KR: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                    JP: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                    EN: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                    FR: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                    DE: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                    CN: "French<font class='ex'>　❙ by Light [Shiva] Elarun Moyse</font>",
                }
            },
            i: "language",
            e: "li_radio",
            p: "Settings",
            ul: 1
        },
        Data: {
            tt: d.Data,
            i: "donut_large",
            e: "li_link",
            b: "settings",
            ul: 1
        },
        Design: {
            tt: {
                KR: "디자인",
                JP: "デザイン",
                EN: "Design",
                FR: "Design",
                DE: "Design",
                CN: "设计",
            },
            i: "brush",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Overlay: {
            tt: {
                KR: "오버레이",
                JP: "オーバーレイ",
                EN: "Overlay",
                FR: "Overlay",
                DE: "Overlay",
                CN: "Overlay",
            },
            i: "web_asset",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Tool: {
            tt: {
                KR: "관리 도구",
                JP: "管理ツール",
                EN: "Management Tools",
                FR: "Outils de gestion",
                DE: "Management Tools",
                CN: "管理工具",
            },
            i: "build",
            e: "li_link",
            p: "settings",
            ul: 0
        },
        Version: {
            tt: {
                KR: "버전",
                JP: "バージョン",
                EN: "Version",
                FR: "Version",
                DE: "Version",
                CN: "版本",
            },
            m: {
                KR: 'MopiMopi ver.200128',
                JP: 'MopiMopi ver.200128',
                EN: 'MopiMopi ver.200128',
                FR: 'MopiMopi ver.200128',
                DE: 'MopiMopi ver.200128',
                CN: "MopiMopi ver.200128",
            },
            i: "new_releases",
            e: "li_2line",
            ul: 1
        },
        About: {
            tt: {
                KR: "문의",
                JP: "問い合わせ",
                EN: "Help",
                FR: "Aide",
                DE: "Hilfe",
                CN: "帮助",
            },
            m: {
                KR: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
                JP: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
                EN: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
                FR: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
                DE: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
                CN: 'FF14 KR Moogle 해루 ❯ ffxivHAERU@gmail.com',
            },
            i: "help_outline",
            e: "li_2line",
            ul: 0
        }
    },
    Data: {
        tab_general: {
            tt: d.general,
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                format: {
                    tt: {
                        KR: "구성",
                        JP: "構成",
                        EN: "Formatting",
                        FR: "Formatage",
                        DE: "Formatierung",
                        CN: "格式",
                    },
                    i: "view_column",
                    e: "li_link",
                    ul: 1
                },
                order: {
                    tt: {
                        KR: "순서",
                        JP: "順序",
                        EN: "Order",
                        FR: "Ordre",
                        DE: "Reihenfolge",
                        CN: "顺序",
                    },
                    i: "swap_vert",
                    e: "li_link",
                    ul: 0
                },
                pets: {
                    tt: {
                        KR: "소환수 데이터 합산하기",
                        JP: "ペットのデータを合算する",
                        EN: "Combine Pets with Owner",
                        FR: "Combiner les familiers avec les propriétaires",
                        DE: "Charakter und Begleiter zusammenfassen",
                        CN: "召唤物与自身数据合并",
                    },
                    i: "merge_type",
                    e: "li_checkbox",
                    ul: 1
                }
            }
        },
        tab_number: {
            tt: {
                KR: "숫자",
                JP: "数字",
                EN: "Number",
                FR: "Nombre",
                DE: "Zahlen",
                CN: "数字",
            },
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                dpsType: {
                    tt: {
                        KR: "DPS, HPS 데이터 유형",
                        JP: "DPS、HPSデータタイプ",
                        EN: "Data Type of DPS, HPS",
                        FR: "Type de données DPS/HPS",
                        DE: "Datentyp vom DPS/HPS",
                        CN: "DPS，HPS 数据类型",
                    },
                    m: {
                        0: d.int,
                        1: d.float
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 1
                },
                perType: {
                    tt: {
                        KR: "% 데이터 유형",
                        JP: "%データタイプ",
                        EN: "Data Type of %",
                        FR: "Type de données %",
                        DE: "Datentyp der %",
                        CN: "% 数据类型",
                    },
                    m: {
                        0: d.int,
                        1: d.float,
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                dmgType: {
                    tt: {
                        KR: "Damage, Healed 데이터 유형",
                        JP: "Damage、Healedデータタイプ",
                        EN: "Data Type of Damage, Healed ",
                        FR: "Type de données Dégâts, Boucliers ",
                        DE: "Datentyp der Damage, Healed ",
                        CN: "Damage，Healed 数据类型",
                    },
                    m: {
                        0: d.int,
                        1: d.float
                    },
                    i: "edit",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                ds: {
                    tt: {
                        KR: "소수점 기호",
                        JP: "小数点の記号",
                        EN: "Decimal Symbol",
                        FR: "Symbol décimal",
                        DE: "Dezimaltrennzeichen",
                        CN: "小数点符号",
                    },
                    m: {
                        ".": d["."],
                        ",": d[","],
                        "_": d["_"],
                        "'": d["'"]
                    },
                    i: "format_quote",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                ns: {
                    tt: {
                        KR: "소수점 이하 자릿수",
                        JP: "小数点以下の桁数",
                        EN: "No. of Digits after Decimal",
                        FR: "Nombre de chiffres après la virgule",
                        DE: "Anzahl der Dezimalstellen",
                        CN: "小数点后尾数",
                    },
                    m: {
                        1: d["1"],
                        2: d["2"]
                    },
                    i: "exposure_plus_2",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                gs: {
                    tt: {
                        KR: "자릿수 구분 기호",
                        JP: "桁区切り記号",
                        EN: "Digit Grouping Symbol",
                        FR: "Symbole de séparation de groupe",
                        DE: "Symbol für Zifferngruppierung",
                        CN: "数字分隔符",
                    },
                    m: {
                        0: d.noUse,
                        ".": d["."],
                        ",": d[","],
                        "_": d["_"],
                        "'": d["'"],
                    },
                    i: "format_quote",
                    e: "li_radio",
                    p: "Data_number",
                    ul: 0
                },
                unit: {
                    tt: {
                        KR: "단위",
                        JP: "単位",
                        EN: "Unit",
                        FR: "Unité",
                        DE: "Unit",
                        CN: "单位",
                    },
                    m: {
                        KR: "1k = 1000, 1M = 1000000",
                        JP: "1k = 1000、1M = 1000000",
                        EN: "1k = 1000, 1M = 1000000",
                        FR: "1k = 1000, 1M = 1000000",
                        DE: "1k = 1000, 1M = 1000000",
                        CN: "1k = 1000，1M = 1000000",
                    },
                    i: "sort",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                },
                max_unit: {
                    tt: {
                        KR: "MaxHit, MaxHeal 단위",
                        JP: "MaxHit、MaxHeal単位",
                        EN: "Unit of MaxHit, MaxHeal",
                        FR: "Unités de MaxHit, MaxHeal",
                        DE: "Unit des MaxHit, MaxHeal",
                        CN: "MaxHit，MaxHeal 单位",
                    },
                    m: {
                        KR: "1k = 1000, 1M = 1000000",
                        JP: "1k = 1000、1M = 1000000",
                        EN: "1k = 1000, 1M = 1000000",
                        FR: "1k = 1000, 1M = 1000000",
                        DE: "1k = 1000, 1M = 1000000",
                        CN: "1k = 1000，1M = 1000000",
                    },
                    i: "sort",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                }
            }
        },
        tab_name: {
            tt: {
                KR: "이름",
                JP: "名前",
                EN: "Name",
                FR: "Nom",
                DE: "Namen",
                CN: "名称",
            },
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                cnt: {
                    tt: {
                        KR: "이름 표시 유형",
                        JP: "名前の表示タイプ",
                        EN: "Display Type of Name",
                        FR: "Type d'affichage des noms",
                        DE: "Anzeigetyp des Namens",
                        CN: "名称显示类型",
                    },
                    m: {
                        1: {
                            KR: "풀네임으로 보기",
                            JP: "フルネーム",
                            EN: "Full Name",
                            FR: "Nom complet",
                            DE: "Voller Name",
                            CN: "全名",
                        },
                        2: {
                            KR: "이름 단축하기",
                            JP: "姓のみイニシャル",
                            EN: "Surname Abbreviated",
                            FR: "Initiale prénom",
                            DE: "Nachname abgekürzt",
                            CN: "姓缩写",
                        },
                        3: {
                            KR: "성 단축하기",
                            JP: "名のみイニシャル",
                            EN: "Forename Abbreviated",
                            FR: "Initiale nom",
                            DE: "Vorname abgekürzt",
                            CN: "名缩写",
                        },
                        4: {
                            KR: "이니셜로 보기",
                            JP: "姓名ともにイニシャル",
                            EN: "Initials",
                            FR: "Initiales",
                            DE: "Initialien",
                            CN: "姓名首字母缩写",
                        }
                    },
                    i: "people",
                    e: "li_radio",
                    p: "Data_name",
                    ul: 1
                },
                rank: {
                    tt: {
                        KR: "이름에 순위 표시",
                        JP: "名の順位表示",
                        EN: "Display Rank in Name",
                        FR: "Afficher le rang dans le nom",
                        DE: "Zeige Rank im Namen",
                        CN: "显示名称排名",
                    },
                    i: "format_list_numbered",
                    e: "li_checkbox",
                    ul: 0
                },
                myName: {
                    tt: {
                        KR: "내 이름을 YOU로 표시",
                        JP: "自分のキャラクター名をYOUに表示",
                        EN: "Convert Name to YOU",
                        FR: "Convertir votre nom en YOU",
                        DE: "Konvertiert deinen Namen in “YOU”",
                        CN: "把自己的名字标记为YOU",
                    },
                    m: {
                        KR: "<a href='http://ffxivhaeru.blog.me/221325149295' target='_blank'>설정 전 주의사항</a>",
                        JP: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>設定する前の注意事項</a>",
                        EN: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Read Me First</a>",
                        FR: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Lisez moi en premier</a>",
                        DE: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>Erst alles genau durchlesen, dann Einstellungen vornehmen!</a>",
                        CN: "<a href='https://docs.google.com/presentation/d/1U7-Vgv6UA2_EFdvw3m8BI-5-9T91WeKTflDuR7rEx-U/edit#slide=id.g24320c31e9_0_67' target='_blank'>设置前的注意事项</a>",
                    },
                    i: "person",
                    e: "li_2line_checkbox_normal",
                    ul: 0
                },
                hideName: {
                    tt: {
                        KR: "이름 숨기기",
                        JP: "名前を隠す",
                        EN: "Hide the Name",
                        FR: "Cacher le nom",
                        DE: "Namen ausblenden",
                        CN: "隐藏名称",
                    },
                    i: "visibility_off",
                    e: "li_checkbox",
                    ul: 0
                }
            }
        },
        tab_mhh: {
            tt: d.actionName,
            e: "tab_btn",
            w: 25,
            p: "Data",
            inner: {
                mhh: {
                    tt: {
                        KR: "MaxHit, MaxHeal 표시 유형",
                        JP: "MaxHit、MaxHeal表示タイプ",
                        EN: "Display Type of MaxHit, MaxHeal",
                        FR: "Type d\'affichage de MaxHit, MaxHeal",
                        DE: "Anzeigetyp des MaxHit, MaxHeal",
                        CN: "MaxHit，MaxHeal 显示类型",
                    },
                    m: {
                        1: {
                            KR: "기술명 + 데이터",
                            JP: "技名 + データ",
                            EN: "Action's Name + Data",
                            FR: "Nom + valeur",
                            DE: "Fähigkeitsnamen + Daten",
                            CN: "技能名 + 数据",
                        },
                        2: {
                            KR: "데이터 + 기술명",
                            JP: "データ + 技名",
                            EN: "Data + Action's Name",
                            FR: "Valeur + nom",
                            DE: "Daten + Fähigkeitsnamen",
                            CN: "数据 + 技能名",
                        },
                        3: d.actionName,
                        4: d.Data

                    },
                    i: "content_cut",
                    e: "li_radio",
                    p: "Data_mhh",
                    ul: 1
                },
                mhh_unit: {
                    tt: {
                        KR: "MaxHit, MaxHeal 구분 기호",
                        JP: "MaxHit、MaxHeal区切り記号",
                        EN: "Separator of MaxHit, MaxHeal",
                        FR: "Séparateur de MaxHit, MaxHeal",
                        DE: "Trennzeichen von MaxHit, MaxHeal",
                        CN: "MaxHit，MaxHeal 分隔符",
                    },
                    m: {
                        '-': {
                            KR: "-",
                            JP: "-",
                            EN: "-",
                            FR: "-",
                            DE: "-",
                            CN: "-",
                        },
                        '/': {
                            KR: "/",
                            JP: "/",
                            EN: "/",
                            FR: "/",
                            DE: "/",
                            CN: "/",
                        },
                        '❘': {
                            KR: "❘",
                            JP: "❘",
                            EN: "❘",
                            FR: "❘",
                            DE: "❘",
                            CN: "❘",
                        },
                        '❯': {
                            KR: "❯",
                            JP: "❯",
                            EN: "❯",
                            FR: "❯",
                            DE: "❯",
                            CN: "❯",
                        }
                    },
                    i: "space_bar",
                    e: "li_radio",
                    p: "Data_mhh",
                    ul: 0
                },
                abb: {
                    tt: {
                        KR: "기술명 줄임말로 표시",
                        JP: "技名を略語に表示",
                        EN: "Display Abbreviate Action\'s Name",
                        FR: "Afficher le nom de l\'action abrégée",
                        DE: "Zeige abgekürzte Fähigkeitsnamen",
                        CN: "显示简化技能名",
                    },
                    i: "short_text",
                    e: "li_checkbox",
                    ul: 0
                },
                abbset: {
                    tt: {
                        KR: "기술명 줄임말 설정",
                        JP: "技名の略語の設定",
                        EN: "Action\'s Name Abbreviations Settings",
                        FR: "Paramètres des noms d\'actions abrégés",
                        DE: "Einstellungen der abgekürzten Fähigkeitsnamen",
                        CN: "设置简化技能名",
                    },
                    i: "insert_comment",
                    e: "li_link",
                    ul: 0
                }
            }
        }
    },
    format: {
        tab_DPS: {
            tt: d.dpsTable,
            e: "tab_btn",
            w: 50,
            p: "format",
            inner: {
                DPSfilter: {
                    tt: d.jobFilter,
                    dr: {
                        DPS_T: {
                            tt: d.filter_tank
                        },
                        DPS_H: {
                            tt: d.filter_healer
                        },
                        DPS_D: {
                            tt: d.filter_DPS
                        },
                        DPS_M: {
                            tt: d.filter_CL
                        },
                        DPS_C: {
                            tt: d.filter_cbo
                        }
                    },
                    i: "filter_list",
                    e: "li_2line_empty",
                    p: "format_DPS",
                    ul: 1
                },
                Class: d.Class,
                name: d.name,
                duration: d.duration,
                dps: d.dps,
                EncounterDuration: d.EncounterDuration,
                encdps: d.encdps,
                mergedLast10DPS: d.mergedLast10DPS,
                mergedLast30DPS: d.mergedLast30DPS,
                mergedLast60DPS: d.mergedLast60DPS,
                mergedLast180DPS: d.mergedLast180DPS,
                damagePct: d.damagePct,
                mergedDamage: d.mergedDamage,
                mergedSwings: d.mergedSwings,
                mergedHits: d.mergedHits,
                mergedMisses: d.mergedMisses,
                hitfailed: d.hitfailed,
                tohit: d.tohit,
                mergedDirectHitCount: d.mergedDirectHitCount,
                DirectHitPct: d.DirectHitPct,
                mergedCrithits: d.mergedCrithits,
                crithitPct: d.crithitPct,
                mergedCritDirectHitCount: d.mergedCritDirectHitCount,
                CritDirectHitPct: d.CritDirectHitPct,
                maxhit: d.maxhit,
                enchps: d.enchps,
                healedPct: d.healedPct,
                mergedHealed: d.mergedHealed,
                mergedEffHealed: d.mergedEffHealed,
                mergedDamageShield: d.mergedDamageShield,
                mergedOverHeal: d.mergedOverHeal,
                overHealPct: d.overHealPct,
                mergedHeals: d.mergedHeals,
                mergedCritheals: d.mergedCritheals,
                crithealPct: d.crithealPct,
                maxheal: d.maxheal,
                mergedDamagetaken: d.mergedDamagetaken,
                mergedHealstaken: d.mergedHealstaken,
                mergedAbsorbHeal: d.mergedAbsorbHeal,
                powerheal: d.powerheal,
                ParryPct: d.ParryPct,
                BlockPct: d.BlockPct,
                mergedCures: d.mergedCures,
                deaths: d.deaths
            }
        },
        tab_HPS: {
            tt: d.hpsTable,
            e: "tab_btn",
            w: 50,
            p: "format",
            inner: {
                HPSfilter: {
                    tt: d.jobFilter,
                    dr: {
                        HPS_T: {
                            tt: d.filter_tank
                        },
                        HPS_H: {
                            tt: d.filter_healer
                        },
                        HPS_D: {
                            tt: d.filter_DPS
                        },
                        HPS_M: {
                            tt: d.filter_CL
                        },
                        HPS_C: {
                            tt: d.filter_cbo
                        }
                    },
                    i: "filter_list",
                    e: "li_2line_empty",
                    p: "format_HPS",
                    ul: 1
                },
                Class: d.Class,
                name: d.name,
                duration: d.duration,
                dps: d.dps,
                EncounterDuration: d.EncounterDuration,
                encdps: d.encdps,
                mergedLast10DPS: d.mergedLast10DPS,
                mergedLast30DPS: d.mergedLast30DPS,
                mergedLast60DPS: d.mergedLast60DPS,
                mergedLast180DPS: d.mergedLast180DPS,
                damagePct: d.damagePct,
                mergedDamage: d.mergedDamage,
                mergedSwings: d.mergedSwings,
                mergedHits: d.mergedHits,
                mergedMisses: d.mergedMisses,
                hitfailed: d.hitfailed,
                tohit: d.tohit,
                mergedDirectHitCount: d.mergedDirectHitCount,
                DirectHitPct: d.DirectHitPct,
                mergedCrithits: d.mergedCrithits,
                crithitPct: d.crithitPct,
                mergedCritDirectHitCount: d.mergedCritDirectHitCount,
                CritDirectHitPct: d.CritDirectHitPct,
                maxhit: d.maxhit,
                enchps: d.enchps,
                healedPct: d.healedPct,
                mergedHealed: d.mergedHealed,
                mergedEffHealed: d.mergedEffHealed,
                mergedDamageShield: d.mergedDamageShield,
                mergedOverHeal: d.mergedOverHeal,
                overHealPct: d.overHealPct,
                mergedHeals: d.mergedHeals,
                mergedCritheals: d.mergedCritheals,
                crithealPct: d.crithealPct,
                maxheal: d.maxheal,
                mergedDamagetaken: d.mergedDamagetaken,
                mergedHealstaken: d.mergedHealstaken,
                mergedAbsorbHeal: d.mergedAbsorbHeal,
                powerheal: d.powerheal,
                ParryPct: d.ParryPct,
                BlockPct: d.BlockPct,
                mergedCures: d.mergedCures,
                deaths: d.deaths
            }
        }
    },
    order: {
        tab_DPS: {
            tt: d.dpsTable,
            e: "tab_btn",
            w: 50,
            p: "order",
        },
        tab_HPS: {
            tt: d.hpsTable,
            e: "tab_btn",
            w: 50,
            p: "order",
        }
    },
    abbset: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m1,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        in_abbOld: {
            m: {
                KR: "기술명 (띄어쓰기 주의)",
                JP: "技名",
                EN: "Action\'s name (Make sure you marked spacing!)",
                FR: "Nom de l\'action (Assurez vous d'avoir mis un espace !)",
                DE: "Fähigkeitsnamen (Achte auf Leerzeichen!)",
                CN: "技能名（请确保间距）",
            },
            i: "looks_one",
            e: "li_text",
            ul: 1
        },
        in_abbNew: {
            m: {
                KR: "줄임말",
                JP: "略語",
                EN: "Abbreviation",
                FR: "Abbréviation",
                DE: "Abkürzung",
                CN: "缩写",
            },
            i: "looks_two",
            e: "li_text",
            ul: 0
        },
        submit: {
            tt: {
                KR: "추가",
                JP: "追加",
                EN: "Add to List",
                FR: "Ajouter à la liste",
                DE: "Hinzufügen",
                CN: "添加",
            },
            e: "li_full_btn",
            ul: 0
        }
    },
    Design: {
        font: {
            tt: {
                KR: "글꼴",
                JP: "フォント",
                EN: "Font",
                FR: "Police",
                DE: "Schrift",
                CN: "字体",
            },
            i: "text_format",
            e: "li_link",
            ul: 1
        },
        color: {
            tt: {
                KR: "색",
                JP: "色",
                EN: "Color",
                FR: "Couleur",
                DE: "Farbe",
                CN: "颜色",
            },
            i: "colorize",
            e: "li_link",
            ul: 1
        },
        opacity: {
            tt: {
                KR: "불투명도",
                JP: "不透明度",
                EN: "Opacity",
                FR: "Opacité",
                DE: "Deckkraft",
                CN: "透明度",
            },
            i: "opacity",
            e: "li_link",
            ul: 0
        },
        size: {
            tt: {
                KR: "크기",
                JP: "サイズ",
                EN: "Size",
                FR: "Taille",
                DE: "Größe",
                CN: "大小",
            },
            i: "straighten",
            e: "li_link",
            ul: 0
        },
        cells: {
            tt: {
                KR: "셀",
                JP: "セル",
                EN: "Cell",
                FR: "Cellule",
                DE: "Zellen",
                CN: "单元格",
            },
            i: "tune",
            e: "li_link",
            ul: 0
        },
        shape: {
            tt: {
                KR: "모서리",
                JP: "コーナー",
                EN: "Corner",
                FR: "Coin",
                DE: "Ecken",
                CN: "边角",
            },
            i: "rounded_corner",
            e: "li_link",
            ul: 0
        },
        raid: {
            tt: {
                KR: "레이드 모드",
                JP: "レイドモード",
                EN: "Raid Mode",
                FR: "Mode Raid",
                DE: "Raid Modus",
                CN: "副本模式",
            },
            i: "grid_on",
            e: "li_link",
            ul: 1
        },
        advanced: {
            tt: {
                KR: "고급 설정",
                JP: "高級の設定",
                EN: "Advanced",
                FR: "Avancé",
                DE: "Erweiterte Einstellungen",
                CN: "高级选项",
            },
            i: "pan_tool",
            e: "li_link",
            ul: 1
        }
    },
    font: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m2,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        fTime: {
            tt: {
                KR: "시간<font class='ex'>　❙ 기본값 ❯ DS-Digital</font>",
                JP: "時間<font class='ex'>　❙ 基本値 ❯ DS-Digital</font>",
                EN: "Time<font class='ex'>　❙ Default ❯ DS-Digital</font>",
                FR: "Temps<font class='ex'>　❙ Default ❯ DS-Digital</font>",
                DE: "Zeit<font class='ex'>　❙ Voreinstellung ❯ DS-Digital</font>",
                CN: "时间<font class='ex'>　❙ 默认值 ❯ DS-Digital</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fTime: d.input_font,
        fTarget: {
            tt: {
                KR: "대상<font class='ex'>　❙ 기본값 ❯ Segoe UI</font>",
                JP: "ターゲット<font class='ex'>　❙ 基本値 ❯ Segoe UI</font>",
                EN: "Target<font class='ex'>　❙ Default ❯ Segoe UI</font>",
                FR: "Cible<font class='ex'>　❙ Default ❯ Segoe UI</font>",
                DE: "Ziel<font class='ex'>　❙ Voreinstellung ❯ Segoe UI</font>",
                CN: "目标<font class='ex'>　❙ 默认值 ❯ Segoe UI</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fTarget: d.input_font,
        fRPS: {
            tt: {
                KR: "데이터<font class='ex'>　❙ 기본값 ❯ Roboto Condensed</font>",
                JP: "データ<font class='ex'>　❙ 基本値 ❯ Roboto Condensed</font>",
                EN: "Data<font class='ex'>　❙ Default ❯ Roboto Condensed</font>",
                FR: "Données<font class='ex'>　❙ Default ❯ Roboto Condensed</font>",
                DE: "Daten<font class='ex'>　❙ Voreinstellung ❯ Roboto Condensed</font>",
                CN: "数据<font class='ex'>　❙ 默认值 ❯ Roboto Condensed</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fRPS: d.input_font,
        fHd: {
            tt: {
                KR: "테이블 헤더<font class='ex'>　❙ 기본값 ❯ Roboto Condensed</font>",
                JP: "テーブルのヘッダー<font class='ex'>　❙ 基本値 ❯ Roboto Condensed</font>",
                EN: "Table Header<font class='ex'>　❙ Default ❯ Roboto Condensed</font>",
                FR: "Entête tableau<font class='ex'>　❙ Default ❯ Roboto Condensed</font>",
                DE: "Tabellenkopf<font class='ex'>　❙ Voreinstellung ❯ Roboto Condensed</font>",
                CN: "表头<font class='ex'>　❙ 默认值 ❯ Roboto Condensed</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fHd: d.input_font,
        fBody: {
            tt: {
                KR: "테이블 바디<font class='ex'>　❙ 기본값 ❯ Segoe UI</font>",
                JP: "テーブルのボディ<font class='ex'>　❙ 基本値 ❯ Segoe UI</font>",
                EN: "Table Body<font class='ex'>　❙ Default ❯ Segoe UI</font>",
                FR: "Corps tableau<font class='ex'>　❙ Default ❯ Segoe UI</font>",
                DE: "Tabellenkörper<font class='ex'>　❙ Voreinstellung ❯ Segoe UI</font>",
                CN: "表体<font class='ex'>　❙ 默认值 ❯ Segoe UI</font>",
            },
            e: 'li_pn',
            ul: 1
        },
        in_fBody: d.input_font
    },
    color: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "color",
            inner: {
                navBg: {
                    tt: d.navBg,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                pattern: {
                    tt: d.pattern,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                edge: {
                    tt: d.edge,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                accent: {
                    tt: {
                        KR: "시간, 아이콘<font class='ex'>　❙ 강조색</font>",
                        JP: "時間, アイコン<font class='ex'>　❙ 強調色</font>",
                        EN: "Time, Icon<font class='ex'>　❙ Accent Color</font>",
                        FR: "Temps, Icône<font class='ex'>　❙ Couleur d\'accent</font>",
                        DE: "Zeit, Symbole<font class='ex'>　❙ Farb Akzent</font>",
                        CN: "时间，图标<font class='ex'>　❙ 强调色</font>",
                    },
                    i: "highlight",
                    e: "li_color",
                    ul: 1
                },
                target: {
                    tt: d.target,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                rps: {
                    tt: d.rps,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "color",
            inner: {
                tableHd: {
                    tt: d.header,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                tableHdText: {
                    tt: d.headerText,
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBg: {
                    tt: d.body,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                iconSet: {
                    tt: d.jobIcon,
                    m: {
                        glow: {
                            KR: "글로우",
                            JP: "輝き",
                            EN: "Glow",
                            FR: "Brillant",
                            DE: "Leuchten",
                            CN: "发光",
                        },
                        antique: {
                            KR: "앤틱",
                            JP: "アンティーク",
                            EN: "Antique",
                            FR: "Antique",
                            DE: "Antik",
                            CN: "古董",
                        },
                        frame: {
                            KR: "프레임",
                            JP: "フレーム",
                            EN: "Frame",
                            FR: "Cadre",
                            DE: "Rahmen",
                            CN: "帧",
                        },
                        gear: {
                            KR: "기어",
                            JP: "ギヤ",
                            EN: "Gear",
                            FR: "Equipement",
                            DE: "Zahnrad",
                            CN: "齿轮",
                        },
                        black: {
                            KR: "칠흑색",
                            JP: "ジェットブラック",
                            EN: "Jet Black",
                            FR: "Noir de jais",
                            DE: "Rabenschwarzer",
                            CN: "煤玉黑",
                        },
                        gold: {
                            KR: "반짝이는 금색",
                            JP: "シャインゴールド",
                            EN: "Metallic Gold",
                            FR: "Or métallique",
                            DE: "Metallic goldener",
                            CN: "闪耀金",
                        },
                        silver: {
                            KR: "반짝이는 은색",
                            JP: "シャインシルバー",
                            EN: "Metallic Silver",
                            FR: "Argent métallique",
                            DE: "Metallic silberner",
                            CN: "闪耀银",
                        },
                        red: {
                            KR: "달라가브색",
                            JP: "ダラガブレッド",
                            EN: "Dalamud Red",
                            FR: "Rouge Dalamud",
                            DE: "Dalamudroter Farbe",
                            CN: "卫月红",
                        },
                        orange: {
                            KR: "노을색",
                            JP: "サンセットオレンジ",
                            EN: "Sunset Orange",
                            FR: "Lueur Orange",
                            DE: "Abendroter",
                            CN: "日落橙",
                        },
                        green: {
                            KR: "라임색",
                            JP: "ライムグリーン",
                            EN: "Lime Green",
                            FR: "Vert Citron",
                            DE: "Limettengrüner",
                            CN: "青柠绿",
                        },
                        blue: {
                            KR: "오사드 바다색",
                            JP: "オサードブルー",
                            EN: "Othard Blue",
                            FR: "Bleu Othard",
                            DE: "Othardblauer",
                            CN: "东洲蓝",
                        },
                        purple: {
                            KR: "포도색",
                            JP: "グレープパープル",
                            EN: "Grape Purple",
                            FR: "Violet Raisin",
                            DE: "Weintraubenvioletter",
                            CN: "葡萄紫",
                        }
                    },
                    i: "mood",
                    e: "li_radio",
                    p: "color_table",
                    ul: 0,
                },
                tableYOU: {
                    tt: {
                        KR: "이름, 숫자<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "名前、数字<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Name, Number<font class='ex'>　❙ My Character</font>",
                        FR: "Nom, Nombre<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Namen, Zahlen<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "名称，数字<font class='ex'>　❙ 自己角色</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 1
                },
                tableExYOU: {
                    tt: {
                        KR: "단위, 기술명<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "単位、技名<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Unit, Action's Name<font class='ex'>　❙ My Character</font>",
                        FR: "Unité, Nom d'action<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Unit, Fähigkeitsnamen<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "单位，技能名<font class='ex'>　❙ 自己角色</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBorderYOU: {
                    tt: {
                        KR: "글자 테두리<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "テキストの枠線<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Text Border<font class='ex'>　❙ My Character</font>",
                        FR: "Bordure texte<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Text Border<font class='ex'>　❙ Eigener Charakter</font>",
                        CN: "文字边框<font class='ex'>　❙ 自己角色</font>",
                    },
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                tableOther: {
                    tt: {
                        KR: "이름, 숫자<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "名前、数字<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Name, Number<font class='ex'>　❙ Other Character</font>",
                        FR: "Nom, Nombre<font class='ex'>　❙ Autre personnage</font>",
                        DE: "Namen, Zahlen<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "名称，数字<font class='ex'>　❙ 其他角色</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 1
                },
                tableExOther: {
                    tt: {
                        KR: "단위, 기술명<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "単位、技名<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Unit, Action's Name<font class='ex'>　❙ Other Character</font>",
                        FR: "Unité, Nom d'action<font class='ex'>　❙ Autre personnage</font>",
                        DE: "Unit, Fähigkeitsnamen<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "单位，技能名<font class='ex'>　❙ 其他角色</font>",
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                tableBorderOther: {
                    tt: {
                        KR: "글자 테두리<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "テキストの枠線<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Text Border<font class='ex'>　❙ Other Character</font>",
                        FR: "Bordure texte<font class='ex'>　❙ Autre personnage</font>",
                        DE: "Text Border<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "文字边框<font class='ex'>　❙ 其他角色</font>",
                    },
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                },
                tableLine: {
                    tt: d.line_ho,
                    i: "border_color",
                    e: "li_color",
                    ul: 1
                },
                tableLineVer: {
                    tt: d.line_ve,
                    i: "border_color",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "color"
        }
    },
    Graph: {
        job: {
            palette: d.palette,
            myColorUse: d.myColorUse,
            myColor: d.myColor,
            PLD: {
                tt: {
                    KR: "나이트 & 검투사",
                    JP: "ナイト & 剣術士",
                    EN: "Paladin & Gladiator",
                    FR: "Paladin & Gladiateur",
                    DE: "Paladin & Gladiator",
                    CN: "骑士 & 剑术师",
                },
                i: "<img src='./images/icon/frame/PLD.png'/>",
                e: "li_color",
                ul: 1
            },
            WAR: {
                tt: {
                    KR: "전사 & 도끼술사",
                    JP: "戦士 & 斧術士",
                    EN: "Warrior & Marauder",
                    FR: "Guerrier & Maraudeur",
                    DE: "Krieger & Marodeur",
                    CN: "战士 & 斧术师",
                },
                i: "<img src='./images/icon/frame/WAR.png'/>",
                e: "li_color",
                ul: 0
            },
            DRK: {
                tt: {
                    KR: "암흑기사",
                    JP: "暗黒騎士",
                    EN: "Dark Knight",
                    FR: "Chevalier Noir",
                    DE: "Dunkelritter",
                    CN: "暗黑骑士",
                },
                i: "<img src='./images/icon/frame/DRK.png'/>",
                e: "li_color",
                ul: 0
            },
            GNB: {
                tt: {
                    KR: "건브레이커",
                    JP: "ガンブレイカー",
                    EN: "Gunbreaker",
                    FR: "PistoSabreur",
                    DE: "Revolverklinge",
                    CN: "绝枪战士",
                },
                i: "<img src='./images/icon/frame/GNB.png'/>",
                e: "li_color",
                ul: 0
            },
            WHM: {
                tt: {
                    KR: "백마도사 & 환술사",
                    JP: "白魔道士 & 幻術士",
                    EN: "White Mage & Conjurer",
                    FR: "Mage blanc & Elémentaliste",
                    DE: "Weißmagier & Druide",
                    CN: "白魔法师 & 幻术师",
                },
                i: "<img src='./images/icon/frame/WHM.png'/>",
                e: "li_color",
                ul: 1
            },
            SCH: {
                tt: {
                    KR: "학자",
                    JP: "学者",
                    EN: "Scholar",
                    FR: "Erudit",
                    DE: "Gelehrter",
                    CN: "学者",
                },
                i: "<img src='./images/icon/frame/SCH.png'/>",
                e: "li_color",
                ul: 0
            },
            AST: {
                tt: {
                    KR: "점성술사",
                    JP: "占星術師",
                    EN: "Astrologian",
                    FR: "Astromancien",
                    DE: "Astrologe",
                    CN: "占星术士",
                },
                i: "<img src='./images/icon/frame/AST.png'/>",
                e: "li_color",
                ul: 0
            },
            MNK: {
                tt: {
                    KR: "몽크 & 격투사",
                    JP: "モンク & 格闘士",
                    EN: "Monk & Pugilist",
                    FR: "Moine & Pugiliste",
                    DE: "Mönch & Faustkämpfer",
                    CN: "武僧 & 格斗家",
                },
                i: "<img src='./images/icon/frame/MNK.png'/>",
                e: "li_color",
                ul: 1
            },
            DRG: {
                tt: {
                    KR: "용기사 & 창술사",
                    JP: "竜騎士 & 槍術士",
                    EN: "Dragoon & Lancer",
                    FR: "Dragon & Maître d\'hast",
                    DE: "Dragoon & Pikenier",
                    CN: "龙骑士 & 枪术师"
                },
                i: "<img src='./images/icon/frame/DRG.png'/>",
                e: "li_color",
                ul: 0
            },
            NIN: {
                tt: {
                    KR: "닌자 & 쌍검사",
                    JP: "忍者 & 双剣士",
                    EN: "Ninja & Rogue",
                    FR: "Ninja & Voleur",
                    DE: "Ninja & Schurke",
                    CN: "忍者 & 双剑师",
                },
                i: "<img src='./images/icon/frame/NIN.png'/>",
                e: "li_color",
                ul: 0
            },
            SAM: {
                tt: {
                    KR: "사무라이",
                    JP: "侍",
                    EN: "Samurai",
                    FR: "Samurai",
                    DE: "Samurai",
                    CN: "武士",
                },
                i: "<img src='./images/icon/frame/SAM.png'/>",
                e: "li_color",
                ul: 0
            },
            BRD: {
                tt: {
                    KR: "음유시인 & 궁술사",
                    JP: "吟遊詩人 & 弓術士",
                    EN: "Bard & Archer",
                    FR: "Barde & Archer",
                    DE: "Barde & Waldläufer",
                    CN: "吟游诗人 & 弓箭手"
                },
                i: "<img src='./images/icon/frame/BRD.png'/>",
                e: "li_color",
                ul: 1
            },
            MCH: {
                tt: {
                    KR: "기공사",
                    JP: "機工士",
                    EN: "Machinist",
                    FR: "Machiniste",
                    DE: "Maschinist",
                    CN: "机工士"
                },
                i: "<img src='./images/icon/frame/MCH.png'/>",
                e: "li_color",
                ul: 0
            },
            DNC: {
                tt: {
                    KR: "무도가",
                    JP: "踊り子 ",
                    EN: "Dancer",
                    FR: "Danseur",
                    DE: "Tänzer",
                    CN: "舞者"
                },
                i: "<img src='./images/icon/frame/DNC.png'/>",
                e: "li_color",
                ul: 0
            },
            BLM: {
                tt: {
                    KR: "흑마도사 & 주술사",
                    JP: "黒魔道士 & 呪術士",
                    EN: "Black Mage & Thaumaturge",
                    FR: "Mage noir & Occuliste",
                    DE: "Schwarzmagier & Thaumaturg",
                    CN: "黑魔法师 & 咒术师",
                },
                i: "<img src='./images/icon/frame/BLM.png'/>",
                e: "li_color",
                ul: 1
            },
            SMN: {
                tt: {
                    KR: "소환사 & 비술사",
                    JP: "召喚士 & 巴術士",
                    EN: "Summoner & Arcanist",
                    FR: "Invocateur & Arcaniste",
                    DE: "Beschwörer & Hermetiker",
                    CN: "召唤师 & 秘术师",
                },
                i: "<img src='./images/icon/frame/SMN.png'/>",
                e: "li_color",
                ul: 0
            },
            RDM: {
                tt: {
                    KR: "적마도사",
                    JP: "赤魔道士",
                    EN: "Red Mage",
                    FR: "Mage rouge",
                    DE: "Rotmagier",
                    CN: "赤魔法师",
                },
                i: "<img src='./images/icon/frame/RDM.png'/>",
                e: "li_color",
                ul: 0
            },
            BLU: {
                tt: {
                    KR: "청마도사",
                    JP: "青魔道士",
                    EN: "Blue Mage",
                    FR: "Mage bleu",
                    DE: "Blaumagier",
                    CN: "靑魔法师",
                },
                i: "<img src='./images/icon/frame/BLU.png'/>",
                e: "li_color",
                ul: 0
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB,
            CRP: {
                tt: {
                    KR: "목수",
                    JP: "木工師",
                    EN: "Carpenter",
                    FR: "Menuisier",
                    DE: "Zimmerer",
                    CN: "刻木匠",
                },
                i: "<img src='./images/icon/frame/CRP.png'/>",
                e: "li_color",
                ul: 1
            },
            BSM: {
                tt: {
                    KR: "대장장이",
                    JP: "鍛冶師",
                    EN: "Blacksmith",
                    FR: "Forgeron",
                    DE: "Grobschmied",
                    CN: "锻铁匠",
                },
                i: "<img src='./images/icon/frame/BSM.png'/>",
                e: "li_color",
                ul: 0
            },
            ARM: {
                tt: {
                    KR: "갑주제작사",
                    JP: "甲冑師",
                    EN: "Armorer",
                    FR: "Armurier",
                    DE: "Plattner",
                    CN: "铸甲匠",
                },
                i: "<img src='./images/icon/frame/ARM.png'/>",
                e: "li_color",
                ul: 0
            },
            GSM: {
                tt: {
                    KR: "보석공예가",
                    JP: "彫金師",
                    EN: "Goldsmith",
                    FR: "Orfèvre",
                    DE: "Goldschmied",
                    CN: "雕金匠",
                },
                i: "<img src='./images/icon/frame/GSM.png'/>",
                e: "li_color",
                ul: 0
            },
            LTW: {
                tt: {
                    KR: "가죽공예가",
                    JP: "革細工師",
                    EN: "Leatherworker",
                    FR: "Tanneur",
                    DE: "Gerber",
                    CN: "制革匠",
                },
                i: "<img src='./images/icon/frame/LTW.png'/>",
                e: "li_color",
                ul: 0
            },
            WVR: {
                tt: {
                    KR: "재봉사",
                    JP: "裁縫師",
                    EN: "Weaver",
                    FR: "Couturier",
                    DE: "Weber",
                    CN: "裁衣匠",
                },
                i: "<img src='./images/icon/frame/WVR.png'/>",
                e: "li_color",
                ul: 0
            },
            ALC: {
                tt: {
                    KR: "연금술사",
                    JP: "錬金術師",
                    EN: "Alchemist",
                    FR: "Alchimiste",
                    DE: "Alchemist",
                    CN: "炼金术士",
                },
                i: "<img src='./images/icon/frame/ALC.png'/>",
                e: "li_color",
                ul: 0
            },
            CUL: {
                tt: {
                    KR: "요리사",
                    JP: "調理師",
                    EN: "Culinarian",
                    FR: "Cuisinier",
                    DE: "Gourmet",
                    CN: "烹调师",
                },
                i: "<img src='./images/icon/frame/CUL.png'/>",
                e: "li_color",
                ul: 0
            },
            MIN: {
                tt: {
                    KR: "광부",
                    JP: "採掘師",
                    EN: "Miner",
                    FR: "Mineur",
                    DE: "Minenarbeiter",
                    CN: "采矿工",
                },
                i: "<img src='./images/icon/frame/MIN.png'/>",
                e: "li_color",
                ul: 1
            },
            BTN: {
                tt: {
                    KR: "원예가",
                    JP: "園芸師",
                    EN: "Botanist",
                    FR: "Botaniste",
                    DE: "Gärtner",
                    CN: "园艺工",
                },
                i: "<img src='./images/icon/frame/BTN.png'/>",
                e: "li_color",
                ul: 0
            },
            FSH: {
                tt: {
                    KR: "어부",
                    JP: "漁師",
                    EN: "Fisher",
                    FR: "Pêcheur",
                    DE: "Fischer",
                    CN: "捕鱼人",
                },
                i: "<img src='./images/icon/frame/FSH.png'/>",
                e: "li_color",
                ul: 0
            }
        },
        role: {
            palette: d.palette,
            myColorUse: d.myColorUse,
            myColor: d.myColor,
            Tanker: {
                tt: d.filter_tank,
                i: "<img src='./images/menu/Tanker.png'/>",
                e: "li_color",
                ul: 1,
            },
            Healer: {
                tt: d.filter_healer,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0,
            },
            DPS: {
                tt: d.filter_DPS,
                i: "<img src='./images/menu/DPS.png'/>",
                e: "li_color",
                ul: 0,
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1,
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB,
            Crafter: {
                tt: {
                    KR: "제작자",
                    JP: "クラフター",
                    EN: "Disciples of the Hand",
                    FR: "Disciples de la Main",
                    DE: "Handwerker",
                    CN: "能工巧匠",
                },
                i: "<img src='./images/icon/frame/CRP.png'/>",
                e: "li_color",
                ul: 1,
            },
            Gathering: {
                tt: {
                    KR: "채집가",
                    JP: "ギャザラー",
                    EN: "Disciples of the Land",
                    FR: "Disciple de la Terre",
                    DE: "Sammler",
                    CN: "大地使者",
                },
                i: "<img src='./images/icon/frame/BTN.png'/>",
                e: "li_color",
                ul: 0,
            }
        },
        meYou: {
            palette: d.palette,
            YOU: {
                tt: d.myColor.tt,
                i: "person",
                e: "li_color",
                ul: 1
            },
            Other: {
                tt: {
                    KR: "타 캐릭터",
                    JP: "他のキャラクター",
                    EN: "Other Character",
                    FR: "Autre personnage",
                    DE: "Andere Charaktere",
                    CN: "其他角色",
                },
                i: "people",
                e: "li_color",
                ul: 0
            },
            pet: {
                tt: d.graph_pet,
                i: "<img src='./images/icon/frame/AVA.png'/>",
                e: "li_color",
                ul: 1
            },
            ds: {
                tt: d.graph_shield,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            oh: {
                tt: d.graph_overheal,
                i: "<img src='./images/menu/Healer.png'/>",
                e: "li_color",
                ul: 0
            },
            CBO: d.CBO,
            LMB: d.LMB
        }
    },
    opacity: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "opacity",
            inner: {
                navBg: {
                    tt: d.navBg,
                    min: 1,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                pattern: {
                    tt: d.pattern,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                edge: {
                    tt: d.edge,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                navTime: {
                    tt: d.time,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                navIcon: {
                    tt: d.icon,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                target: {
                    tt: d.target,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                rps: {
                    tt: d.rps,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "opacity",
            inner: {
                tableHd: {
                    tt: d.header,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableHdText: {
                    tt: d.headerText,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableBg: {
                    tt: d.body,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableYOU: {
                    tt: {
                        KR: "아이콘, 글자<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "アイコン、テキスト<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Icon, Text<font class='ex'>　❙ My Character</font>",
                        FR: "Icône, Texte<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Symbole, Text<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "图标，文字<font class='ex'>　❙ 自己角色</font>",
                    },
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableOther: {
                    tt: {
                        KR: "아이콘, 글자<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "アイコン、テキスト<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Icon, Text<font class='ex'>　❙ Other Character</font>",
                        FR: "Icône, Texte<font class='ex'>　❙ Autre personnage</font>",
                        DE: "Symbole, Text<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "图标，文字<font class='ex'>　❙ 其他角色</font>",
                    },
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                tableLine: {
                    tt: d.line_ho,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                tableLineVer: {
                    tt: d.line_ve,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "opacity",
            inner: {
                bar: {
                    tt: d.graph_user,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                pet: {
                    tt: d.graph_pet,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                ds: {
                    tt: d.graph_shield,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                oh: {
                    tt: d.graph_overheal,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                }
            }
        }
    },
    size: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "size",
            inner: {
                sizeNav: {
                    tt: d.navBg,
                    min: 10,
                    max: 100,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizePattern: {
                    tt: d.pattern,
                    min: 2,
                    max: 50,
                    i: "texture",
                    e: "li_slider",
                    ul: 0
                },
                sizeEdge: {
                    tt: d.edge,
                    min: 0,
                    max: 10,
                    i: "border_outer",
                    e: "li_slider",
                    ul: 0
                },
                sizeTime: {
                    tt: d.time,
                    min: 8,
                    max: 100,
                    i: "format_size",
                    e: "li_slider",
                    ul: 1
                },
                sizeIcon: {
                    tt: d.icon,
                    min: 8,
                    max: 100,
                    i: "more_vert",
                    e: "li_slider",
                    ul: 0
                },
                sizeTarget: {
                    tt: d.target,
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeRPS: {
                    tt: d.rps,
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeGap: {
                    tt: {
                        KR: "줄 간격",
                        JP: "行間",
                        EN: "Line Spacing",
                        FR: "Interligne",
                        DE: "Zeilenabstand",
                        CN: "行距",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "size",
            inner: {
                sizeHd: {
                    tt: {
                        KR: "헤더<font class='ex'>　❙ 헤더 >= 헤더 글자</font>",
                        JP: "ヘッダー<font class='ex'>　❙ ヘッダー >= ヘッダーテキスト</font>",
                        EN: "Header<font class='ex'>　❙ Header >= Header Text</font>",
                        FR: "Entête<font class='ex'>　❙ Entête >= Texte entête</font>",
                        DE: "Kopf<font class='ex'>　❙ Header >= Überschrift</font>",
                        CN: "头部<font class='ex'>　❙ 头部 >= 头部文字</font>",
                    },
                    min: 0,
                    max: 50,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizeHdText: {
                    tt: d.headerText,
                    min: 0,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeBody: {
                    tt: d.body,
                    min: 8,
                    max: 50,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 1
                },
                sizeBodyIcon: {
                    tt: d.jobIcon,
                    min: 8,
                    max: 50,
                    i: "mood",
                    e: "li_slider",
                    ul: 0
                },
                sizeBodyText: {
                    tt: {
                        KR: "바디 글자",
                        JP: "ボディのテキスト",
                        EN: "Body Text",
                        FR: "Corps de texte",
                        DE: "Text im Hauptteil",
                        CN: "主体文字",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                sizeLine: {
                    tt: d.line_ho,
                    min: 0,
                    max: 10,
                    i: "border_bottom",
                    e: "li_slider",
                    ul: 1
                },
                sizeLineVer: {
                    tt: d.line_ve,
                    min: 0,
                    max: 10,
                    i: "border_bottom",
                    e: "li_slider",
                    ul: 0
                },
                sizeHdGap: {
                    tt: {
                        KR: "헤더 간격",
                        JP: "ヘッダー行間",
                        EN: "Spacing of Header",
                        FR: "Espacement de l\'entête",
                        DE: "Abstand der Kopfzeile",
                        CN: "头部间距",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 1
                },
                sizeDPSGap: {
                    tt: {
                        KR: "DPS 테이블 간격",
                        JP: "DPSテーブル行間",
                        EN: "Spacing of DPS Table",
                        FR: "Espacement du tableau DPS",
                        DE: "Abstand der DPS Tabelle",
                        CN: "DPS表间距",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                },
                sizeHPSGap: {
                    tt: {
                        KR: "HPS 테이블 간격",
                        JP: "HPSテーブル行間",
                        EN: "Spacing of HPS Table",
                        FR: "Espacement du tableau HPS",
                        DE: "Abstand der HPS Tabelle",
                        CN: "HPS表间距",
                    },
                    min: 0,
                    max: 100,
                    i: "format_line_spacing",
                    e: "li_slider",
                    ul: 0
                },
                sizeDPSTable: {
                    tt: {
                        KR: "DPS 테이블 행 개수<font class='ex'>　❙ 스크롤 영역 조절</font>",
                        JP: "DPSテーブル行数<font class='ex'>　❙ スクロール領域調整</font>",
                        EN: "Number of Rows in DPS Table<font class='ex'>　❙ Adjust Scroll Area</font>",
                        FR: "Nombre de colonnes dans le tableau DPS<font class='ex'>　❙ Ajuster zone de défilement</font>",
                        DE: "Anzahl der Zeilen in der DPS Tabelle<font class='ex'>　❙ Adjust Scroll Area</font>",
                        CN: "DPS表行数<font class='ex'>　❙ 调整滚动区域</font>",
                    },
                    min: 1,
                    max: 25,
                    i: "group",
                    e: "li_slider",
                    ul: 1
                },
                sizeHPSTable: {
                    tt: {
                        KR: "HPS 테이블 행 개수<font class='ex'>　❙ 스크롤 영역 조절</font>",
                        JP: "HPSテーブル行数<font class='ex'>　❙ スクロール領域調整</font>",
                        EN: "Number of Rows in HPS Table<font class='ex'>　❙ Adjust Scroll Area</font>",
                        FR: "Nombre de colonnes dans le tableau HPS<font class='ex'>　❙ Ajuster zone de défilement</font>",
                        DE: "Anzahl der Zeilen in der HPS Tabelle<font class='ex'>　❙ Adjust Scroll Area</font>",
                        CN: "HPS表行数<font class='ex'>　❙ 调整滚动区域</font>",
                    },
                    min: 1,
                    max: 25,
                    i: "group",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "size",
            inner: {
                sizeGraph_bar: {
                    tt: d.graph_user,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 1
                },
                sizeGraph_pet: {
                    tt: d.graph_pet,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 1
                },
                sizeGraph_ds: {
                    tt: d.graph_shield,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 0
                },
                sizeGraph_oh: {
                    tt: d.graph_overheal,
                    min: 1,
                    max: 100,
                    i: "equalizer",
                    e: "li_slider",
                    ul: 0
                }
            }
        }
    },
    cells: {
        tab_title: {
            tt: d.headerText,
            e: "tab_btn",
            w: 25,
            p: "cells",
            inner: {
                caution: {
                    tt: d.caution_tt,
                    m: d.caution_m1,
                    i: "priority_high",
                    e: "li_box",
                    ul: 1
                },
            }
        },
        tab_width: {
            tt: {
                KR: "너비",
                JP: "幅",
                EN: "Width",
                FR: "Largeur",
                DE: "Breite",
                CN: "宽",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        },
        tab_padding: {
            tt: {
                KR: "여백",
                JP: "マージン",
                EN: "Margin",
                FR: "Marge",
                DE: "Rand",
                CN: "边距",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        },
        tab_align: {
            tt: {
                KR: "정렬",
                JP: "整列",
                EN: "Align",
                FR: "Aligné",
                DE: "Ausrichten",
                CN: "对齐",
            },
            e: "tab_btn",
            w: 25,
            p: "cells"
        }
    },
    shape: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "shape",
            inner: {
                sizeRadius: d.radius,
                rd_navTL: d.TL,
                rd_navTR: d.TR,
                rd_navBL: d.BL,
                rd_navBR: d.BR
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "shape",
            inner: {
                applyScope: {
                    tt: {
                        KR: "범위",
                        JP: "カバレッジ",
                        EN: "Coverage",
                        FR: "Couverture",
                        DE: "Abdeckung",
                        CN: "覆盖",
                    },
                    m: {
                        1: d.header,
                        2: d.body,
                        3: d.table
                    },
                    i: "flip",
                    e: "li_radio",
                    p: "shape_table",
                    ul: 1
                },
                sizeRadiusTable: d.radius,
                rd_tableTL: d.TL,
                rd_tableTR: d.TR,
                rd_tableBL: d.BL,
                rd_tableBR: d.BR
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "shape",
            inner: {
                sizeRadiusGraph: d.radius,
                rd_graphTL: d.TL,
                rd_graphTR: d.TR,
                rd_graphBL: d.BL,
                rd_graphBR: d.BR
            }
        }
    },
    advanced: {
        tab_nav: {
            tt: d.nav,
            e: "tab_btn",
            w: 33.3,
            p: "advanced",
            inner: {
                pattern: {
                    tt: {
                        KR: "배경 패턴",
                        JP: "壁紙パターン",
                        EN: "Background Pattern",
                        FR: "Modèle d\'arrière plan",
                        DE: "Hintergrundmuster",
                        CN: "背景图案",
                    },
                    m: {
                        "noUse": d.noUse,
                        "cross": {
                            KR: "격자 무늬",
                            JP: "格子縞",
                            EN: "Cross Stripes",
                            FR: "Hachures en croix",
                            DE: "Kreuzstreifen",
                            CN: "方格纹",
                        },
                        "hStripe": {
                            KR: "가로 줄무늬",
                            JP: "横ストライプ",
                            EN: "Horizontal Stripes",
                            FR: "Hachures horizontales",
                            DE: "Horizontale Streifen",
                            CN: "横条纹",
                        },
                        "vStripe": {
                            KR: "세로 줄무늬",
                            JP: "縦ストライプ",
                            EN: "Vertical Stripes",
                            FR: "Hachures verticales",
                            DE: "Vertikale Streifen",
                            CN: "竖条纹",
                        },
                        "leftDig": {
                            KR: "사선 무늬 (좌상단 ❯ 우하단)",
                            JP: "斜線ストライプ (左上 ❯ 右下)",
                            EN: "Diagonal Stripes (Top-Left ❯ Bottom-Right)",
                            FR: "Hachures diagonales (Haut-Gauche ❯ Bas-Droite)",
                            DE: "Diagonale Streifen (Oben-Links ❯ Unten-Rechts)",
                            CN: "斜条纹（左上 ❯ 右下）",
                        },
                        "rightDig": {
                            KR: "사선 무늬 (우상단 ❯ 좌하단)",
                            JP: "斜線ストライプ (右上 ❯ 左下)",
                            EN: "Diagonal Stripes (Top-Right ❯ Bottom-Left)",
                            FR: "Hachures diagonales (Haut-Droite ❯ Bas-Gauche)",
                            DE: "Diagonale Streifen (Oben-Rechts ❯ Unten-Links)",
                            CN: "斜条纹（右上 ❯ 左下）",
                        }
                    },
                    e: "li_radio",
                    i: "texture",
                    p: "advanced_nav",
                    ul: 1
                },
                edgeType: {
                    tt: {
                        KR: "테두리 유형",
                        JP: "枠線タイプ",
                        EN: "Type of Border",
                        FR: "Type de bordure",
                        DE: "Randtyp",
                        CN: "边框类型",
                    },
                    m: {
                        "solid": {
                            KR: "실선",
                            JP: "実線",
                            EN: "Solid Line",
                            FR: "Ligne continue",
                            DE: "Durchgehende Linie",
                            CN: "实线",
                        },
                        "dashed": {
                            KR: "긴 점선",
                            JP: "長点線",
                            EN: "Dashed Line",
                            FR: "Ligne tiret",
                            DE: "Gestrichelte Linie",
                            CN: "虚线",
                        },
                        "dotted": {
                            KR: "짧은 점선",
                            JP: "短点線",
                            EN: "Dotted Line",
                            FR: "Ligne pointillée",
                            DE: "Gepunktete Linie",
                            CN: "点线",
                        },
                        "double": {
                            KR: "겹선",
                            JP: "二重線",
                            EN: "Double Line",
                            FR: "Double ligne",
                            DE: "Doppelte Linie",
                            CN: "双线",
                        },
                        "ridge": {
                            KR: "입체선",
                            JP: "立体線",
                            EN: "Ridge Line",
                            FR: "Zigzag",
                            DE: "Durchgezogene Linie",
                            CN: "立体线",
                        }
                    },
                    e: "li_radio",
                    i: "line_style",
                    p: "advanced_nav",
                    ul: 0
                },
                btn_Capture: {
                    tt: {
                        KR: "캡쳐 버튼 고정",
                        JP: "キャプチャーボタン固定",
                        EN: "Fixed of Capture Button",
                        FR: "Bouton Capture fixe",
                        DE: "Zeige den Screenshot-Button immer",
                        CN: "固定截图按钮",
                    },
                    e: "li_checkbox",
                    i: "camera",
                    ul: 1
                },
                btn_History: {
                    tt: {
                        KR: "히스토리 버튼 고정",
                        JP: "ヒストリーボタン固定",
                        EN: "Fixed of History Button",
                        FR: "Bouton Historique fixe",
                        DE: "Zeige den Historie-Button immer",
                        CN: "固定历史按钮",
                    },
                    e: "li_checkbox",
                    i: "history",
                    ul: 0
                },
                btn_RequestEnd: {
                    tt: {
                        KR: "전투 집계 종료 버튼 고정",
                        JP: "エンカウント終了ボタン固定",
                        EN: "Fixed of End-Encounter Button",
                        FR: "Bouton de fin de combat fixe",
                        DE: "Zeige den Stopp Button immer",
                        CN: "固定战斗统计结束按钮",
                    },
                    e: "li_checkbox",
                    i: "timer_off",
                    ul: 0
                },
                act: {
                    tt: {
                        KR: "전투 데이터 표시 유형",
                        JP: "バトルデータ表示タイプ",
                        EN: "Display Type of Combatant Data",
                        FR: "Affichage Données Type de combatant",
                        DE: "Anzeige der allgemeinen Kampfdaten",
                        CN: "战斗数据类型显示",
                    },
                    m: {
                        1: {
                            KR: "1줄",
                            JP: "1行",
                            EN: "1 Line",
                            FR: "Sur une ligne",
                            DE: "alles auf einer Linie",
                            CN: "1行",
                        },
                        2: {
                            KR: "2줄",
                            JP: "2行",
                            EN: "2 Lines",
                            FR: "2 lignes",
                            DE: "2 Linien",
                            CN: "2行",
                        }
                    },
                    e: "li_radio",
                    i: "network_check",
                    p: "advanced_nav",
                    ul: 1
                },
                act_rd: {
                    tt: {
                        KR: "Total DPS",
                        JP: "Total DPS",
                        EN: "Total DPS",
                        FR: "Total DPS",
                        DE: "Total DPS",
                        CN: "Total DPS",
                    },
                    e: "li_checkbox",
                    i: "looks_one",
                    ul: 1
                },
                act_rh: {
                    tt: {
                        KR: "Total HPS",
                        JP: "Total HPS",
                        EN: "Total HPS",
                        FR: "Total HPS",
                        DE: "Total HPS",
                        CN: "Total HPS",
                    },
                    e: "li_checkbox",
                    i: "looks_two",
                    ul: 0
                },
                act_md: {
                    tt: {
                        KR: "My DPS",
                        JP: "My DPS",
                        EN: "My DPS",
                        FR: "My DPS",
                        DE: "My DPS",
                        CN: "My DPS",
                    },
                    e: "li_checkbox",
                    i: "looks_3",
                    ul: 0
                },
                act_mh: {
                    tt: {
                        KR: "My HPS",
                        JP: "My HPS",
                        EN: "My HPS",
                        FR: "My HPS",
                        HE: "My HPS",
                        CN: "My HPS",
                    },
                    e: "li_checkbox",
                    i: "looks_4",
                    ul: 0
                },
                act_rank: {
                    tt: {
                        KR: "Rank<font class='ex'>　❙ DPS 순위 / HPS 순위 / 총 인원수</font>",
                        JP: "Rank<font class='ex'>　❙ DPS順位 / HPS順位 / 総人数</font>",
                        EN: "Rank<font class='ex'>　❙ DPS Ranking / HPS Ranking / The total number of combatants</font>",
                        FR: "Rang<font class='ex'>　❙ Rang DPS / Rang HPS / Nombre total de combatant</font>",
                        DE: "Rank<font class='ex'>　❙ DPS Rang / HPS Rang / Anzahl der Teilnehmer</font>",
                        CN: "Rank<font class='ex'>　❙ DPS 顺序 / HPS 顺序 / 总人数</font>",
                    },
                    e: "li_checkbox",
                    i: "looks_5",
                    ul: 0
                },
                act_max: {
                    tt: {
                        KR: "MaxHit, MaxHeal<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "MaxHit、MaxHeal<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "MaxHit, MaxHeal<font class='ex'>　❙ My Character</font>",
                        FR: "MaxHit, MaxHeal<font class='ex'>　❙ Mon personnage</font>",
                        DE: "MaxHit, MaxHeal<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "MaxHit，MaxHeal<font class='ex'>　❙ 自己角色</font>",
                    },
                    e: "li_checkbox",
                    i: "looks_6",
                    ul: 0
                },
                time_italic: {
                    tt: {
                        KR: "글자 기울임<font class='ex'>　❙ 시간</font>",
                        JP: "イタリック体<font class='ex'>　❙ 時間</font>",
                        EN: "Italic<font class='ex'>　❙ Time</font>",
                        FR: "Italique<font class='ex'>　❙ Temps</font>",
                        DE: "Kursiv<font class='ex'>　❙ Zeit</font>",
                        CN: "斜体<font class='ex'>　❙ 时间</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 1
                },
                target_italic: {
                    tt: {
                        KR: "글자 기울임<font class='ex'>　❙ 대상</font>",
                        JP: "イタリック体<font class='ex'>　❙ ターゲット</font>",
                        EN: "Italic<font class='ex'>　❙ Target</font>",
                        FR: "Italique<font class='ex'>　❙ Cible</font>",
                        DE: "Kursiv<font class='ex'>　❙ Ziel</font>",
                        CN: "斜体<font class='ex'>　❙ 目标</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                },
                rps_italic: {
                    tt: {
                        KR: "글자 기울임<font class='ex'>　❙ 데이터</font>",
                        JP: "イタリック体<font class='ex'>　❙ データ</font>",
                        EN: "Italic<font class='ex'>　❙ Data</font>",
                        FR: "Italique<font class='ex'>　❙ Données</font>",
                        DE: "Kursiv<font class='ex'>　❙ Daten</font>",
                        CN: "斜体<font class='ex'>　❙ 数据</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                }
            }
        },
        tab_table: {
            tt: d.table,
            e: "tab_btn",
            w: 33.4,
            p: "advanced",
            inner: {
                tableOrder: {
                    tt: {
                        KR: "테이블 순서<font class='ex'>　❙ 크기 ❯ 테이블 간격</font>",
                        JP: "テーブル順序<font class='ex'>　❙ サイズ ❯ テーブル行間</font>",
                        EN: "Order of Table<font class='ex'>　❙ Size ❯ Spacing of Table</font>",
                        FR: "Tri du tableau<font class='ex'>　❙ Taille ❯ Espacement du Tableau</font>",
                        DE: "Reihenfolge der Tabellen<font class='ex'>　❙ Size ❯ Spacing of Table</font>",
                        CN: "表顺序<font class='ex'>　❙ 大小 ❯ 表间距</font>",
                    },
                    m: {
                        1: {
                            KR: "DPS 테이블 ❯ HPS 테이블",
                            JP: "DPSテーブル ❯ HPSテーブル",
                            EN: "DPS Table ❯ HPS Table",
                            FR: "Tableau DPS ❯ Tableau HPS",
                            DE: "DPS Tabellen ❯ HPS Tabellen",
                            CN: "DPS 表 ❯ HPS 表",
                        },
                        2: {
                            KR: "HPS 테이블 ❯ DPS 테이블",
                            JP: "HPSテーブル ❯ DPSテーブル",
                            EN: "HPS Table ❯ DPS Table",
                            FR: "Tableau HPS ❯ Tableau DPS",
                            DE: "HPS Tabellen ❯ DPS Tabellen",
                            CN: "HPS 表 ❯ DPS 表",
                        }
                    },
                    e: "li_radio",
                    i: "swap_vert",
                    p: "advanced_table",
                    ul: 1
                },
                viewDPS: {
                    tt: d.dpsTable,
                    e: "li_checkbox",
                    i: "grid_on",
                    ul: 1
                },
                viewHPS: {
                    tt: d.hpsTable,
                    e: "li_checkbox",
                    i: "grid_on",
                    ul: 0
                },
                boldYOU: {
                    tt: {
                        KR: "글자 굵게<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "太字<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Bold lettering<font class='ex'>　❙ My Character</font>",
                        FR: "Gras<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Fette Buchstaben<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "粗体<font class='ex'>　❙ 自己角色</font>",
                    },
                    e: "li_checkbox",
                    i: "format_bold",
                    ul: 1
                },
                boldOther: {
                    tt: {
                        KR: "글자 굵게<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "太字<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Bold lettering<font class='ex'>　❙ Other Character</font>",
                        FR: "Gras<font class='ex'>　❙ Autre personnage personnage</font>",
                        DE: "Fette Buchstaben<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "粗体<font class='ex'>　❙ 其他角色</font>",
                    },
                    e: "li_checkbox",
                    i: "format_bold",
                    ul: 0
                },
                header_italic: {
                    tt: {
                        KR: "글자 기울임<font class='ex'>　❙ 헤더</font>",
                        JP: "イタリック体<font class='ex'>　❙ ヘッダー</font>",
                        EN: "Italic<font class='ex'>　❙ Header</font>",
                        FR: "Italique<font class='ex'>　❙ Entête</font>",
                        DE: "Kursiv<font class='ex'>　❙ Kopf</font>",
                        CN: "斜体<font class='ex'>　❙ 头部</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 1
                },
                body_italic: {
                    tt: {
                        KR: "글자 기울임<font class='ex'>　❙ 바디</font>",
                        JP: "イタリック体<font class='ex'>　❙ ボディ</font>",
                        EN: "Italic<font class='ex'>　❙ Body</font>",
                        FR: "Italique<font class='ex'>　❙ Corps</font>",
                        DE: "Kursiv<font class='ex'>　❙ Körper</font>",
                        CN: "斜体<font class='ex'>　❙ 主体</font>",
                    },
                    e: "li_checkbox",
                    i: "format_italic",
                    ul: 0
                },
                borderTextType: {
                    tt: {
                        KR: "글자 테두리 유형",
                        JP: "テキストの枠線タイプ",
                        EN: "Type of Text Border",
                        FR: "Type de bordure de texte",
                        DE: "Typ des Textrahmes",
                        CN: "文字边框类型",
                    },
                    m: {
                        shadow: {
                            KR: "그림자",
                            JP: "影",
                            EN: "Shadow",
                            FR: "Ombré",
                            DE: "Schatten",
                            CN: "阴影",
                        },
                        outline: {
                            KR: "외곽선",
                            JP: "アウトライン",
                            EN: "Outline",
                            FR: "Extérieur",
                            DE: "Umriss",
                            CN: "轮廓",
                        }
                    },
                    e: "li_radio",
                    i: "swap_vert",
                    p: "advanced_table",
                    ul: 1
                },
            }
        },
        tab_graph: {
            tt: d.graph,
            e: "tab_btn",
            w: 33.3,
            p: "advanced",
            inner: {
                bar_pet: {
                    tt: d.graph_pet,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 1
                },
                bar_ds: {
                    tt: d.graph_shield,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 0
                },
                bar_oh: {
                    tt: d.graph_overheal,
                    e: "li_checkbox",
                    i: "insert_chart_outlined",
                    ul: 0
                },
                ani: {
                    tt: {
                        KR: "애니메이션 효과",
                        JP: "アニメーション効果",
                        EN: "Animated Transition Effect",
                        FR: "Transitions animées",
                        DE: "Weicher, Animierter Übergang",
                        CN: "动画效果",
                    },
                    e: "li_checkbox",
                    i: "waves",
                    ul: 1
                },
                gradient: {
                    tt: {
                        KR: "그라데이션 효과",
                        JP: "グラデーション効果",
                        EN: "Gradient Effect",
                        FR: "Effet gradient",
                        DE: "Gradient Effekt",
                        CN: "渐变效果",
                    },
                    e: "li_checkbox",
                    i: "gradient",
                    ul: 1
                },
                direction: {
                    tt: {
                        KR: "그라데이션 방향",
                        JP: "グラデーション向き",
                        EN: "Gradient Direction",
                        FR: "Direction du gradient",
                        DE: "Gradient Richtung",
                        CN: "渐变方向",
                    },
                    m: {
                        top: {
                            KR: "위쪽으로",
                            JP: "上の方へ",
                            EN: "to Top",
                            FR: "vers le haut",
                            DE: "nach Oben",
                            CN: "向上",
                        },
                        bottom: {
                            KR: "아래쪽으로",
                            JP: "下の方へ",
                            EN: "to Bottom",
                            FR: "vers le bas",
                            DE: "nach Unten",
                            CN: "向下",
                        },
                        left: {
                            KR: "왼쪽으로",
                            JP: "左の方へ",
                            EN: "to Left",
                            FR: "vers la gauche",
                            DE: "nach Links",
                            CN: "向左",
                        },
                        right: {
                            KR: "오른쪽으로",
                            JP: "右の方へ",
                            EN: "to Right",
                            FR: "vers la droite",
                            DE: "nach Rechts",
                            CN: "向右",
                        }
                    },
                    e: "li_radio",
                    i: "gradient",
                    p: "advanced_graph",
                    ul: 0
                },
                bar_position_DPS: {
                    tt: {
                        KR: "DPS 그래프 정렬",
                        JP: "DPSグラフ整列",
                        EN: "DPS Graph Align",
                        FR: "Alignement graphique DPS",
                        DE: "DPS Graph ausrichtung",
                        CN: "DPS 图形对齐",
                    },
                    m: {
                        left: d.direction.left,
                        right: d.direction.right
                    },
                    e: "li_radio",
                    i: "format_align_center",
                    p: "advanced_graph",
                    ul: 1
                },
                bar_position: {
                    tt: {
                        KR: "HPS 그래프 정렬",
                        JP: "HPSグラフ整列",
                        EN: "HPS Graph Align",
                        FR: "Alignement graphique HPS",
                        DE: "HPS Graph ausrichtung",
                        CN: "HPS 图形对齐",
                    },
                    m: {
                        left: d.direction.left,
                        right: d.direction.right
                    },
                    e: "li_radio",
                    i: "format_align_center",
                    p: "advanced_graph",
                    ul: 0
                }
            }
        },
    },
    raid: {
        tab_general: {
            tt: d.general,
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24_Number: {
                    tt: {
                        KR: "레이드 모드",
                        JP: "レイドモード",
                        EN: "Raid Mode",
                        FR: "Mode Raid",
                        DE: "Raid Modus",
                        CN: "副本模式",
                    },
                    msg: {
                        KR: "파티원이 ★명 이상일 때 테이블을 간단히 표시",
                        JP: "★人以上のパーティーでテーブルを簡略化する",
                        EN: "Display the table simply when there are ★ or more combatants.",
                        FR: "Affiche le tableau simplifié quand il y a ★ ou plus combatants",
                        DE: "Automatische Anpassung der Graphen, falls die Anzahl der Kämpfer > ★ beträgt.",
                        CN: "当队伍有★人或更多时简化表格",
                    },
                    m: {
                        1: {
                            KR: "1",
                            JP: "1",
                            EN: "1",
                            FR: "1",
                            DE: "1",
                            CN: "1",
                        },
                        6: {
                            KR: "6",
                            JP: "6",
                            EN: "6",
                            FR: "6",
                            DE: "6",
                            CN: "6",
                        },
                        10: {
                            KR: "10",
                            JP: "10",
                            EN: "10",
                            FR: "10",
                            DE: "10",
                            CN: "10",
                        }
                    },
                    e: "li_radio_change",
                    i: "grid_on",
                    p: "raid_general",
                    ul: 1
                },
            }
        },
        tab_color: {
            tt: {
                KR: "색",
                JP: "色",
                EN: "Color",
                FR: "Couleur",
                DE: "Farbe",
                CN: "颜色",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24BgYOU: {
                    tt: d.bodyYOU,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                view24TableYOU: {
                    tt: {
                        KR: "글자<font class='ex'>　❙ 내 캐릭터</font>",
                        JP: "テキスト<font class='ex'>　❙ 自分のキャラクター</font>",
                        EN: "Text<font class='ex'>　❙ My Character</font>",
                        FR: "Texte<font class='ex'>　❙ Mon personnage</font>",
                        DE: "Text<font class='ex'>　❙ Eigenen Charakter</font>",
                        CN: "文字<font class='ex'>　❙ 自己角色</font>"
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                },
                view24BgOther: {
                    tt: d.bodyOther,
                    i: "format_color_fill",
                    e: "li_color",
                    ul: 1
                },
                view24TableOther: {
                    tt: {
                        KR: "글자<font class='ex'>　❙ 타 캐릭터</font>",
                        JP: "テキスト<font class='ex'>　❙ 他のキャラクター</font>",
                        EN: "Text<font class='ex'>　❙ Other Character</font>",
                        FR: "Texte<font class='ex'>　❙ Autre personnage</font>",
                        DE: "Text<font class='ex'>　❙ Andere Charaktere</font>",
                        CN: "文字<font class='ex'>　❙ 其他角色</font>"
                    },
                    i: "format_color_text",
                    e: "li_color",
                    ul: 0
                }
            }
        },
        tab_opacity: {
            tt: {
                KR: "불투명도",
                JP: "不透明度",
                EN: "Opacity",
                FR: "Opacité",
                DE: "Deckkraft",
                CN: "透明度",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                view24BgYOU: {
                    tt: d.bodyYOU,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                view24TableYOU: {
                    tt: d.itYOU,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
                view24BgOther: {
                    tt: d.bodyOther,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 1
                },
                view24TableOther: {
                    tt: d.itOther,
                    min: 0,
                    max: 100,
                    i: "opacity",
                    e: "li_slider",
                    ul: 0
                },
            }
        },
        tab_size: {
            tt: {
                KR: "크기",
                JP: "サイズ",
                EN: "Size",
                FR: "Taille",
                DE: "Größe",
                CN: "大小",
            },
            e: "tab_btn",
            w: 25,
            p: "raid",
            inner: {
                size24TableSlice: {
                    tt: {
                        KR: "행 분할",
                        JP: "行の分割",
                        EN: "Split Row",
                        FR: "Couper Colonne",
                        DE: "Zeile Teilen",
                        CN: "行拆分",
                    },
                    min: 1,
                    max: 25,
                    i: "view_comfy",
                    e: "li_slider",
                    ul: 1
                },
                size24TableHeight: {
                    tt: {
                        KR: "행 높이",
                        JP: "行の高さ",
                        EN: "Row Height",
                        FR: "Hauteur de colonne",
                        DE: "Zeilenhöhe",
                        CN: "行高",
                    },
                    min: 35,
                    max: 100,
                    i: "swap_vert",
                    e: "li_slider",
                    ul: 0
                },
                size24TableIdxWd: {
                    tt: {
                        KR: "인덱스",
                        JP: "索引",
                        EN: "Index",
                        FR: "Index",
                        DE: "Index",
                        CN: "索引",
                    },
                    min: 0,
                    max: 50,
                    i: "swap_horiz",
                    e: "li_slider",
                    ul: 1
                },
                size24BodyIcon: {
                    tt: d.icon,
                    min: 8,
                    max: 50,
                    i: "mood",
                    e: "li_slider",
                    ul: 0
                },
                size24BodyNameText: {
                    tt: {
                        KR: "글자<font class='ex'>　❙ 캐릭터 이름</font>",
                        JP: "テキスト<font class='ex'>　❙ キャラ名</font>",
                        EN: "Text<font class='ex'>　❙ The combatant\'s name.</font>",
                        FR: "Texte<font class='ex'>　❙ Nom du combatant.</font>",
                        DE: "Text<font class='ex'>　❙ Kämpfername.</font>",
                        CN: "文字<font class='ex'>　❙ 角色名称</font>",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                },
                size24BodyDataText: {
                    tt: {
                        KR: "글자<font class='ex'>　❙ 데이터</font>",
                        JP: "テキスト<font class='ex'>　❙ データ</font>",
                        EN: "Text<font class='ex'>　❙ Data</font>",
                        FR: "Texte<font class='ex'>　❙ Données</font>",
                        DE: "Text<font class='ex'>　❙ Daten</font>",
                        CN: "文字<font class='ex'>　❙ 数据</font>",
                    },
                    min: 8,
                    max: 50,
                    i: "format_size",
                    e: "li_slider",
                    ul: 0
                }
            }
        },
    },
    Overlay: {
        resolution: {
            tt: {
                KR: "해상도",
                JP: "解像度",
                EN: "Resolution",
                FR: "Résolution",
                DE: "Auflösung",
                CN: "分辨率",
            },
            m: {
                '55.5%': {
                    KR: "55.5%",
                    JP: "55.5%",
                    EN: "55.5%",
                    FR: "55.5%",
                    DE: "55.5%",
                    CN: "55.5%",
                },
                '62.5%': {
                    KR: "62.5%",
                    JP: "62.5%",
                    EN: "62.5%",
                    FR: "62.5%",
                    DE: "62.5%",
                    CN: "62.5%",
                },
                '75%': {
                    KR: "75%",
                    JP: "75%",
                    EN: "75%",
                    FR: "75%",
                    DE: "75%",
                    CN: "75%",
                },
                '100%': {
                    KR: "100%",
                    JP: "100%",
                    EN: "100%",
                    FR: "100%",
                    DE: "100%",
                    CN: "100%",
                },
                '125%': {
                    KR: "125%",
                    JP: "125%",
                    EN: "125%",
                    FR: "125%",
                    DE: "125%",
                    CN: "125%",
                },
                '150%': {
                    KR: "150%",
                    JP: "150%",
                    EN: "150%",
                    FR: "150%",
                    DE: "150%",
                    CN: "150%",
                },
                '175%': {
                    KR: "175%",
                    JP: "175%",
                    EN: "175%",
                    FR: "175%",
                    DE: "175%",
                    CN: "175%",
                },
                '200%': {
                    KR: "200%",
                    JP: "200%",
                    EN: "200%",
                    FR: "200%",
                    DE: "200%",
                    CN: "200%",
                }
            },
            i: "zoom_out_map",
            e: "li_radio",
            p: "Overlay",
            ul: 1
        },
        autoHide: {
            tt: {
                KR: "대기 모드",
                JP: "待機モード",
                EN: "Standby Mode",
                FR: "Mode veille",
                DE: "Standby",
                CN: "待机模式",
            },
            m: {
                KR: "전투 종료 후 대기 시간이 경과하면 테이블을 숨김",
                JP: "バトル終了後、待機時間が経過したらデータテーブルを非可視化する",
                EN: "Hide the table after standby time of inactivity when not in combat.",
                FR: "Cacher les tableaux après une période d\'inactivité hors combat",
                DE: "Versteckt die Tabelle, wenn kein Kampf für Standby-Zeit stattfindet.",
                CN: "战斗结束后经过待机时间自动隐藏表格",
            },
            i: "blur_on",
            e: "li_2line_checkbox_normal",
            ul: 1
        },
        autoHideTime: {
            tt: {
                KR: "대기 시간",
                JP: "待機の時間",
                EN: "Standby Time",
                FR: "Temps de mise en veille",
                DE: "Standby-Zeit",
                CN: "待机时间",
            },
            min: 1,
            max: 30,
            i: "access_alarm",
            e: "li_slider",
            ul: 0
        },
        overlayBg: {
            tt: {
                KR: "배경 이미지",
                JP: "背景イメージ",
                EN: "Background Image",
                FR: "Image d\'arrière plan",
                DE: "Hintergrundbild",
                CN: "背景图片",
            },
            i: "image",
            e: "li_checkbox",
            ul: 1
        },
        inputBg: {
            tt: {
                KR: "찾아보기...",
                JP: "参照",
                EN: "Browse...",
                FR: "Parcourir ...",
                DE: "Durchsuchen...",
                CN: "浏览",
            },
            e: "li_file",
            ul: 0
        },
        overlayBgSize: {
            tt: {
                KR: "배경 이미지 크기",
                JP: "壁紙イメージサイズ",
                EN: "Size of Background Image",
                FR: "Taille de l\'image de fond",
                DE: "Größe des Hintergrundbildes",
                CN: "背景图像大小",
            },
            m: {
                auto: {
                    KR: "원본 크기",
                    JP: "原本の大きさ",
                    EN: "Original",
                    FR: "Original",
                    DE: "Original",
                    CN: "原始大小",
                },
                contain: {
                    KR: "폭 맞춤",
                    JP: "列幅の自動調整",
                    EN: "Contain",
                    FR: "Ajusté",
                    DE: "Skaliert",
                    CN: "宽度自适应",
                },
                cover: {
                    KR: "채우기",
                    JP: "塗りつぶし",
                    EN: "Cover",
                    FR: "Remplissage",
                    DE: "Ausfüllend",
                    CN: "填充",
                }
            },
            e: "li_radio",
            i: "photo_size_select_large",
            p: "Overlay",
            ul: 1
        },
        overlayBgRepeat: {
            tt: {
                KR: "배경 이미지 반복",
                JP: "壁紙イメージ繰り返し",
                EN: "Repeat of Background Image",
                FR: "Répéter l\'image de fond",
                DE: "Hintergrundbild wiederholen",
                CN: "重置背景图片",
            },
            m: {
                'no-repeat': d.noUse,
                'repeat-x': {
                    KR: "가로축",
                    JP: "横軸",
                    EN: "Horizontal Axis",
                    FR: "Axe horizontal",
                    DE: "Horizontale Achse",
                    CN: "横轴",
                },
                'repeat-y': {
                    KR: "세로축",
                    JP: "縦軸",
                    EN: "Vertically Axis",
                    FR: "Axe vertical",
                    DE: "Vertikale Achse",
                    CN: "纵轴",
                },
                'repeat': {
                    KR: "바둑판식 배열",
                    JP: "並べて表示",
                    EN: "Tile",
                    FR: "Titre",
                    DE: "Kachel",
                    CN: "平铺",
                }
            },
            e: "li_radio",
            i: "burst_mode",
            p: "Overlay",
            ul: 0
        },
        arrow: {
            tt: {
                KR: "크기 조절 화살표",
                JP: "サイズ変更の矢印",
                EN: "Resizing Arrow",
                FR: "Flèche de redimensionnement",
                DE: "Pfeil zur Größenveränderung des Fensters",
                CN: "缩放大小箭头",
            },
            i: "signal_cellular_4_bar",
            e: "li_checkbox",
            ul: 1
        },
        tooltips: {
            tt: {
                KR: "툴팁",
                JP: "ツールチップ",
                EN: "Tooltip",
                FR: "Bulle d\'aide",
                DE: "Kurzhinweise",
                CN: "提示框",
            },
            i: "textsms",
            e: "li_checkbox",
            ul: 0
        },
        toast: {
            tt: {
                KR: "토스트 메시지",
                JP: "トーストメッセージ",
                EN: "Toast Message",
                FR: "Message popup",
                DE: "Pop-Up-Benachrichtigungen",
                CN: "弹出式消息",
            },
            i: "textsms",
            e: "li_checkbox",
            ul: 0
        }
    },
    Tool: {
        init: {
            tt: {
                KR: "초기화",
                JP: "初期化",
                EN: "Reset",
                FR: "Reset",
                DE: "Zurücksetzen",
                CN: "初始化",
            },
            m: {
                KR: '초기 설정으로 복원',
                JP: '設定を初期化する',
                EN: 'Restore to their initial settings.',
                FR: 'Restaurer les paramètres initiaux',
                DE: 'Wiederherstellen der ursprünglichen Einstellungen.',
                CN: "恢复到初始设置",
            },
            i: "delete_sweep",
            e: "li_2line",
            ul: 1
        },
        refresh: {
            tt: {
                KR: "새로고침",
                JP: "リーロド",
                EN: "Refresh",
                FR: "Rafraîchir",
                DE: "Auffrischen",
                CN: "刷新",
            },
            m: {
                KR: '오버레이의 동작이 원활하지 않을 때 권장',
                JP: 'オーバレイが動作しない時おすすめ',
                EN: 'Recommendation when the overlay not working well.',
                FR: 'Recommandation lorsque l\'overlay ne fonctionne pas correctement.',
                DE: 'Nutze diese Option, falls das Overlay nicht richtig funktioniert.',
                CN: "当Overlay不正常时建议使用",
            },
            i: "refresh",
            e: "li_2line",
            ul: 0
        },
        backup: {
            tt: {
                KR: "백업",
                JP: "バックアップ",
                EN: "Backup",
                FR: "Sauvegarder",
                DE: "Sicherung",
                CN: "备份",
            },
            i: "cloud_upload",
            e: "li_2line_empty",
            ul: 1
        },
        restore: {
            tt: {
                KR: "복원",
                JP: "復元",
                EN: "Restore",
                FR: "Restaurer",
                DE: "Wiederherstellen",
                CN: "还原",
            },
            m: {
                KR: '설정을 이전에 백업한 데이터로 되돌림',
                JP: '前にバックアップしている設定に戻す',
                EN: 'Restore settings to previously backed up data.',
                FR: 'Restaure les paramètres préalablement sauvegardés.',
                DE: 'Restore settings to previously backed up data.',
                CN: "还原到以前的备份设置",
            },
            i: "cloud_download",
            e: "li_2line",
            ul: 0
        },
        custom: {
            tt: {
                KR: "커스텀 UI 데이터",
                JP: "カスタムUIデータ",
                EN: "Custom UI Data",
                FR: "Données personnalisé de l\'interface",
                DE: "Benutzerdefinierte UI-Daten",
                CN: "自定义UI数据",
            },
            i: "folder_shared",
            e: "li_link",
            ul: 1
        }
    },
    custom: {
        caution: {
            tt: d.caution_tt,
            m: d.caution_m1,
            i: "priority_high",
            e: "li_box",
            ul: 1
        },
        share: {
            tt: {
                KR: "공유",
                JP: "公有",
                EN: "Share",
                FR: "Partager",
                DE: "Teilen",
                CN: "分享",
            },
            m: {
                KR: '아래 코드를 복사(Ctrl+C)합니다. 일부 설정은 포함하지 않습니다.',
                JP: '次のコードをコピー（Ctrl+C）します。一部の設定は含まれていません。',
                EN: 'Copy under the code (Ctrl+C). Some settings are not included.',
                FR: 'Copier le code (Ctrl+C). Certains paramètres ne sont pas inclus.',
                DE: 'Kopiere den unteren Code (Strg+C). Manche Daten sind nicht enthalten.',
                CN: "复制（Ctrl+C）以下代码。某些设置不包含在内。",
            },
            i: "arrow_right",
            e: "li_pn",
            ul: 1
        },
        in_share: {
            m: {
                KR: '',
                JP: '',
                EN: '',
                FR: '',
                DE: '',
                CN: '',
            },
            i: "share",
            e: "li_text",
            ul: 0
        },
        apply: {
            tt: {
                KR: "적용",
                JP: "適用",
                EN: "Apply",
                FR: "Appliquer",
                DE: "Anwenden",
                CN: "应用",
            },
            m: {
                KR: '코드를 아래에 붙여 넣고(Ctrl+V), 엔터 키 또는 버튼을 누릅니다.',
                JP: 'コードをペーストし（Ctrl+V）、エンターキーまたはボタンを押します。',
                EN: 'Paste under the code to apply (Ctrl+V), and then Press the Enter key.',
                FR: 'Coller le code (Ctrl+V) et valider avec Entrée.',
                DE: 'Füge den kopierten Code unten ein (Strg+V) und drücke die Eingabetaste.',
                CN: "请把代码粘贴（Ctrl+V）到下方，按回车或者应用确认。",
            },
            i: "arrow_right",
            e: "li_pn",
            ul: 1
        },
        in_apply: {
            m: {
                KR: '{키:값 … 키:값}',
                JP: '{キー:値 … キー:値}',
                EN: '{Key:Value … Key:Value}',
                FR: '{Clé:Valeur … Clé:Valeur}',
                DE: '{Schlüssel:Werte … Schlüssel:Werte}',
                CN: "{键:值 … 键:值}",
            },
            i: "code",
            e: "li_text_inbtn",
            ul: 0
        }
    },
    back: {
        Data: "Settings",
        Design: "Settings",
        Overlay: "Settings",
        Tool: "Settings",
        abbset: "Data",
        format: "Data",
        order: "Data",
        font: "Design",
        color: "Design",
        opacity: "Design",
        size: "Design",
        shape: "Design",
        cells: "Design",
        advanced: "Design",
        raid: "Design",
        custom: "Tool"
    }
}
