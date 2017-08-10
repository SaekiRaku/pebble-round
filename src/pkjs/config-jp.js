module.exports = [{
        "type": "heading",
        "defaultValue": "設置"
    },
    {
        "type": "text",
        "defaultValue": "このプログラムのソースコードは、Githubホスティング、おPebbleのページで見つけRepoアドレスについて。"
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "カラー設定"
            },
            {
                "type": "color",
                "messageKey": "color",
                "defaultValue": "0x0055AA",
                "layout": "COLOR",
                "label": "モチーフ色"
            }
        ]
    },
    {
        "type": "section",
        "items": [{
                "type": "heading",
                "defaultValue": "更多設置"
            },
            {
                "type": "select",
                "messageKey": "language",
                "label": "言語設定",
                "defaultValue": "english",
                "description": "言語を改正して保存して、そのページに入ってようやく発効することができます",
                "options": [{
                        "label": "English",
                        "value": "english"
                    },
                    {
                        "label": "简体中文",
                        "value": "chinese"
                    },
                    {
                        "label": "日本語",
                        "value": "japanese"
                    }
                ]
            }
        ]
    },
    {
        "type": "submit",
        "defaultValue": "Save Settings"
    }
];